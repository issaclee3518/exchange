const QUICK_AMOUNTS = [10, 100, 1000];

const FALLBACK_PER_USD = {
  USD: 1,
  JPY: 157.132738,
  EUR: 0.880919,
  GBP: 0.755076,
  THB: 33.519611,
  VND: 25944.857734,
  TWD: 31.82141,
  CNY: 6.694172,
  HKD: 7.836254,
  SGD: 1.276043,
  MYR: 4.077133,
  PHP: 62.615625,
  IDR: 17946.208323,
  AUD: 1.430311,
  CAD: 1.418133,
  CHF: 0.833557,
  NZD: 1.769959,
  MOP: 8.071699,
  TRY: 48.918725,
  AED: 3.671174,
  INR: 96.033554,
  LAK: 22260.643548,
  KHR: 4041.732128,
  MXN: 17.968871,
  CZK: 21.481741,
  KRW: 1353.18,
  XOF: 578.234411,
  XAF: 578.234411,
  XCD: 2.7,
  XPF: 105.192671,
  DKK: 6.588628,
  NOK: 9.595544,
  XCG: 1.79,
  BND: 1.27816,
};
if (typeof EXTRA_RATES !== "undefined") Object.assign(FALLBACK_PER_USD, EXTRA_RATES);

const state = {
  query: "",
  homeQuery: "",
  suggestIndex: null,
  countryId: null,
  currencyCode: null,
  foreign: null,
  editing: "foreign",
  homeCountryId: null,
  homeCurrency: null,
  homeFromUrl: false,
  homeChosenByUser: false,
  perUsd: { ...FALLBACK_PER_USD },
  updatedDate: null,
  lang: "en",
  live: false,
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function countryById(id) {
  return COUNTRIES.find((country) => country.id === id) || null;
}

function currencyByCode(code) {
  if (!code) return null;
  return CURRENCY_BY_CODE[String(code).toUpperCase()] || null;
}

function asEntity(currency) {
  return {
    id: `cur:${currency.code}`,
    name: currency.nameKo,
    nameEn: currency.nameEn,
    flag: currency.flag || "",
    code: currency.code,
    currencyKo: currency.nameKo,
    currencyEn: currency.nameEn,
    unit: currency.unit,
    decimals: currency.decimals,
    isCurrency: true,
    note: "",
    prices: [],
  };
}

function sourceEntity() {
  if (state.countryId) return countryById(state.countryId);
  const currency = currencyByCode(state.currencyCode);
  return currency ? asEntity(currency) : null;
}

function homeEntity() {
  if (state.homeCountryId) return countryById(state.homeCountryId);
  const currency = currencyByCode(state.homeCurrency);
  return currency ? asEntity(currency) : null;
}

function usersOf(code) {
  return COUNTRIES.filter((country) => country.code === code);
}

function parseNum(raw) {
  const text = String(raw).replace(/,/g, "").trim();
  if (!text || text === ".") return null;
  const value = Number(text);
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}

function formatGrouped(value, digits) {
  return value.toLocaleString("ko-KR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

function formatRate(value) {
  const digits = value >= 1 ? 2 : value >= 0.1 ? 3 : value >= 0.01 ? 4 : 6;
  return value.toLocaleString("ko-KR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function formatAmount(value, decimals) {
  if (!Number.isFinite(value)) return "";
  if (decimals === 0 && Math.abs(value) >= 100) return Math.round(value).toLocaleString("ko-KR");
  if (Math.abs(value) >= 100) return Math.round(value).toLocaleString("ko-KR");
  if (Math.abs(value) >= 10) return formatGrouped(value, 1);
  return formatGrouped(value, Math.max(decimals || 0, 2));
}

function formatLocal(value, entity) {
  const digits = entity.decimals === 0 ? (Math.abs(value) >= 100 ? 0 : 2) : 2;
  return formatGrouped(value, digits);
}

function crossRate(fromCode, toCode) {
  const from = state.perUsd[fromCode];
  const to = state.perUsd[toCode];
  if (!from || !to) return null;
  const raw = to / from;
  const digits = raw >= 1 ? 2 : raw >= 0.1 ? 3 : raw >= 0.01 ? 4 : 6;
  return Number(raw.toFixed(digits));
}

function sameAmount(a, b) {
  return a != null && Math.abs(a - b) < 0.001;
}

function queryUsesEnglish(query) {
  const text = String(query || "");
  return /[a-z]/i.test(text) && !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(text);
}

function englishCurrencyName(code) {
  const currency = currencyByCode(code);
  return currency?.nameEn || code;
}

function exactCountryQuery(query) {
  return COUNTRIES.some((country) => (
    [country.name, country.nameEn, placeName(country)].some((part) => String(part).toLowerCase() === query)
  ));
}

function currencyHit(currency, query) {
  const parts = [currency.code, currency.nameKo, currency.nameEn, currency.unit, currencyName(currency.code), ...(currency.aliases || [])]
    .map((part) => String(part).toLowerCase());
  if (parts.some((part) => part === query)) return true;
  if (exactCountryQuery(query)) return false;
  return parts.some((part) => part.includes(query));
}

function countryHit(country, query) {
  const parts = [
    country.name,
    country.nameEn,
    country.id,
    country.code,
    placeName(country),
    currencyName(country.code),
    ...(country.aliases || []),
  ].map((part) => String(part).toLowerCase());
  return parts.some((part) => part === query || part.includes(query));
}

function searchHits(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { currencies: [], countries: [] };
  const currencies = CURRENCIES.filter((currency) => currencyHit(currency, q));
  const codes = new Set(currencies.map((currency) => currency.code));
  const seen = new Set();
  const named = [];
  const related = [];
  COUNTRIES.forEach((country) => {
    if (seen.has(country.id)) return;
    if (countryHit(country, q)) {
      seen.add(country.id);
      named.push(country);
    }
  });
  COUNTRIES.forEach((country) => {
    if (seen.has(country.id)) return;
    if (codes.has(country.code)) {
      seen.add(country.id);
      related.push(country);
    }
  });
  const englishQuery = queryUsesEnglish(q);
  const sortName = (a, b) => {
    const left = englishQuery ? (a.nameEn || a.name) : placeName(a);
    const right = englishQuery ? (b.nameEn || b.name) : placeName(b);
    return left.localeCompare(right, englishQuery ? "en" : intlLocale());
  };
  named.sort(sortName);
  related.sort(sortName);
  const countries = currencies.length > 1 ? [...named, ...related].slice(0, 12) : [...named, ...related].slice(0, 40);
  return { currencies, countries };
}

function homeQueryString() {
  const url = new URL("https://example.invalid/");
  if (state.homeCountryId) url.searchParams.set("home", state.homeCountryId);
  else if (state.homeCurrency) url.searchParams.set("homeCurrency", state.homeCurrency);
  return url.search;
}

function goToHref(href, replace) {
  if (replace) location.replace(href);
  else location.assign(href);
}

function readUrl() {
  const params = new URLSearchParams(location.search);
  const pageCountry = typeof featuredIdFromPath === "function" ? featuredIdFromPath() : null;
  const country = pageCountry || params.get("country");
  const currency = pageCountry ? null : params.get("currency");
  if (country && countryById(country)) {
    state.countryId = country;
    state.currencyCode = null;
  } else if (currency && currencyByCode(currency)) {
    state.countryId = null;
    state.currencyCode = currency.toUpperCase();
  }
  const home = params.get("home");
  const homeCurrency = params.get("homeCurrency");
  if (home && countryById(home)) {
    state.homeCountryId = home;
    state.homeCurrency = null;
    state.homeFromUrl = true;
  } else if (homeCurrency && currencyByCode(homeCurrency)) {
    state.homeCountryId = null;
    state.homeCurrency = homeCurrency.toUpperCase();
    state.homeFromUrl = true;
  }
}

function writeUrl(replace) {
  const pageCountry = typeof featuredIdFromPath === "function" ? featuredIdFromPath() : null;
  if (pageCountry) {
    if (state.countryId && state.countryId !== pageCountry && typeof featuredPageFor === "function" && featuredPageFor(state.countryId)) {
      goToHref(featuredPageFor(state.countryId) + homeQueryString(), replace);
      return;
    }
    if (state.countryId && state.countryId !== pageCountry) {
      const url = new URL("index.html", location.href);
      url.searchParams.set("country", state.countryId);
      if (state.homeCountryId) url.searchParams.set("home", state.homeCountryId);
      else if (state.homeCurrency) url.searchParams.set("homeCurrency", state.homeCurrency);
      goToHref(url.pathname + url.search, replace);
      return;
    }
    if (!state.countryId && state.currencyCode) {
      const url = new URL("index.html", location.href);
      url.searchParams.set("currency", state.currencyCode);
      if (state.homeCountryId) url.searchParams.set("home", state.homeCountryId);
      else if (state.homeCurrency) url.searchParams.set("homeCurrency", state.homeCurrency);
      goToHref(url.pathname + url.search, replace);
      return;
    }
    if (!state.countryId && !state.currencyCode) {
      goToHref("index.html" + homeQueryString(), replace);
      return;
    }
    const url = new URL(location.href);
    url.searchParams.delete("country");
    url.searchParams.delete("currency");
    if (state.homeCountryId) {
      url.searchParams.set("home", state.homeCountryId);
      url.searchParams.delete("homeCurrency");
    } else if (state.homeCurrency) {
      url.searchParams.delete("home");
      url.searchParams.set("homeCurrency", state.homeCurrency);
    } else {
      url.searchParams.delete("home");
      url.searchParams.delete("homeCurrency");
    }
    const next = `${url.pathname}${url.search}`;
    if (replace) history.replaceState({ id: pageCountry }, "", next);
    else history.pushState({ id: pageCountry }, "", next);
    return;
  }

  if (state.countryId && typeof featuredPageFor === "function" && featuredPageFor(state.countryId)) {
    goToHref(featuredPageFor(state.countryId) + homeQueryString(), replace);
    return;
  }

  const url = new URL(location.href);
  if (state.countryId) {
    url.searchParams.set("country", state.countryId);
    url.searchParams.delete("currency");
  } else if (state.currencyCode) {
    url.searchParams.delete("country");
    url.searchParams.set("currency", state.currencyCode);
  } else {
    url.searchParams.delete("country");
    url.searchParams.delete("currency");
  }
  if (state.homeCountryId) {
    url.searchParams.set("home", state.homeCountryId);
    url.searchParams.delete("homeCurrency");
  } else if (state.homeCurrency) {
    url.searchParams.delete("home");
    url.searchParams.set("homeCurrency", state.homeCurrency);
  } else {
    url.searchParams.delete("home");
    url.searchParams.delete("homeCurrency");
  }
  const next = `${url.pathname}${url.search}`;
  const id = state.countryId || state.currencyCode || "";
  if (replace) history.replaceState({ id }, "", next);
  else history.pushState({ id }, "", next);
}

function setTitle() {
  const source = sourceEntity();
  const home = homeEntity();
  document.title = source
    ? t("resultTitle", {
      source: placeName(source),
      currency: currencyName(source.code),
      unit: home ? unitName(home) : t("myMoney"),
    })
    : t("pageTitle");
}

function shell() {
  return `
    <div class="flow">
      <section class="pane pane-from">
        <p class="pane-kicker" id="from-label">${esc(t("fromLabel"))}</p>
        <div class="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle>
            <path d="M16.5 16.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
          <input id="search" type="search" inputmode="search" autocomplete="off" placeholder="${esc(t("searchPh"))}" aria-label="${esc(t("searchLabel"))}">
          <div id="suggest" class="suggest" hidden></div>
        </div>
        <div id="picked"></div>
      </section>
      <div class="arrow" id="arrow" aria-hidden="true">
        <span class="go-right">→</span>
        <span class="go-left">←</span>
      </div>
      <section class="pane pane-won" id="won-pane">
        <div class="home-box">
          <p class="pane-kicker" id="home-label">${esc(t("homeLabel"))}</p>
          <input id="home-search" type="search" inputmode="search" autocomplete="off" placeholder="${esc(t("homePh"))}" aria-label="${esc(t("homeSearchLabel"))}">
          <div id="home-suggest" class="suggest" hidden></div>
        </div>
        <div id="won-body"></div>
      </section>
    </div>
    <div id="extra"></div>
  `;
}

function markHTML(entity) {
  if (entity.flag) return `<span class="flag" aria-hidden="true">${entity.flag}</span>`;
  return `<span class="flag code-flag" aria-hidden="true">${esc(entity.code)}</span>`;
}

function pickedHTML(source, home) {
  const foreign = state.foreign == null ? 100 : state.foreign;
  const rate = home ? crossRate(source.code, home.code) : null;
  return `
    <div class="identity">
      ${markHTML(source)}
      <div>
        <h2>${esc(placeName(source))}</h2>
        <p class="curr">${esc(currencyName(source.code))} · ${source.code}</p>
      </div>
    </div>
    <div class="field">
      <label for="foreign-input">${esc(t("moneyOf", { name: placeName(source) }))}</label>
      <div class="field-row">
        <input id="foreign-input" inputmode="decimal" autocomplete="off" aria-label="${esc(source.name)} 돈" value="${foreign == null ? "" : formatLocal(foreign, source)}">
        <em>${source.code}</em>
      </div>
    </div>
    <div class="amounts">
      ${QUICK_AMOUNTS.map((amount) => `
        <button class="amount${sameAmount(foreign, amount) ? " is-on" : ""}" type="button" data-amount="${amount}">
          <b>${esc(withUnit(formatLocal(amount, source), source))}</b>
          <span>${rate ? esc(withUnit(formatAmount(amount * rate, home.decimals), home)) : "—"}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function wonHTML(source, home) {
  const rate = crossRate(source.code, home.code);
  const foreign = state.foreign == null ? 100 : state.foreign;
  const converted = rate != null && foreign != null ? foreign * rate : null;
  const rateText = rate == null ? "—" : formatRate(rate);
  return `
    <div class="field home-field">
      <label for="home-input">${esc(t("moneyOf", { name: placeName(home) }))}</label>
      <div class="field-row">
        <input id="home-input" inputmode="decimal" autocomplete="off" aria-label="${esc(t("moneyOf", { name: placeName(home) }))}" value="${converted == null ? "" : formatAmount(converted, home.decimals)}">
        <em class="unit-word">${esc(unitName(home))}</em>
      </div>
    </div>
    <p class="won-sub" id="won-sub">${foreign == null ? "" : esc(withUnit(formatLocal(foreign, source), source))}</p>
    <p class="rate-line" id="rate-line">1 ${source.code} = <strong>${rateText} ${home.code}</strong></p>
    <p class="rate-ko">1 ${esc(unitName(source))} = ${rateText} ${esc(unitName(home))}</p>
  `;
}

function emptyWonHTML(home) {
  const money = home ? t("moneyOf", { name: placeName(home) }) : t("myMoney");
  return `<p class="won-empty">${t("emptyLeft", { money: esc(money) })}</p>`;
}

const PRICE_KIND = {
  "편의점 음료": "drink",
  "음료": "drink",
  "생수": "drink",
  "커피": "drink",
  "편의점 커피": "drink",
  "편의점 물": "drink",
  "마트 생수": "drink",
  "버블티": "drink",
  "우유차": "drink",
  "에스프레소": "drink",
  "카페 콘 레체": "drink",
  "차이": "drink",
  "차": "drink",
  "떼 타릭": "drink",
  "맥주": "drink",
  "생맥주": "drink",
  "맥주 500ml": "drink",
  "라멘": "meal",
  "규동": "meal",
  "햄버거": "meal",
  "점심 1인": "meal",
  "쌀국수": "meal",
  "반미": "meal",
  "길거리 식사": "meal",
  "우육면": "meal",
  "만두": "meal",
  "식사 1인": "meal",
  "호커 식사": "meal",
  "딤섬 점심": "meal",
  "나시 르막": "meal",
  "나시 고렝": "meal",
  "점심 세트": "meal",
  "피자": "meal",
  "파스타": "meal",
  "하루 메뉴": "meal",
  "도너": "meal",
  "피시 앤 칩스": "meal",
  "펍 식사": "meal",
  "케밥": "meal",
  "탈리": "meal",
  "타코 3개": "meal",
  "핫도그": "meal",
  "지하철 1회": "transit",
  "지하철 단거리": "transit",
  "BTS 1회": "transit",
  "MRT 1회": "transit",
  "버스 1회": "transit",
  "메트로 1회": "transit",
  "시내 버스": "transit",
  "대중교통 단거리": "transit",
  "트램 1회": "transit",
  "기차 단거리": "transit",
  "지프니 단거리": "transit",
};

function categoryLevels(country) {
  const perUsd = state.perUsd[country.code];
  if (!perUsd || !country.prices?.length) return null;
  const buckets = {};
  country.prices.forEach((price) => {
    const kind = PRICE_KIND[price.name];
    if (!kind) return;
    const usd = price.amount / perUsd;
    if (!Number.isFinite(usd) || usd <= 0) return;
    if (!buckets[kind]) buckets[kind] = [];
    buckets[kind].push(usd);
  });
  const levels = {};
  Object.entries(buckets).forEach(([kind, values]) => {
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    levels[kind] = values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  });
  return Object.keys(levels).length ? levels : null;
}

function priceComparison(source, home) {
  if (!source || !home || source.isCurrency || home.isCurrency) return null;
  if (source.id === home.id) return { same: true };
  const sourceLevels = categoryLevels(source);
  const homeLevels = categoryLevels(home);
  if (!sourceLevels || !homeLevels) return null;
  const ratios = Object.keys(sourceLevels)
    .filter((kind) => homeLevels[kind])
    .map((kind) => sourceLevels[kind] / homeLevels[kind])
    .filter((ratio) => Number.isFinite(ratio) && ratio > 0);
  if (ratios.length < 2) return null;
  const combined = Math.exp(ratios.reduce((sum, ratio) => sum + Math.log(ratio), 0) / ratios.length);
  return { ratio: combined };
}

function costHTML(source, home) {
  const comparison = priceComparison(source, home);
  if (!comparison) return "";
  if (comparison.same) {
    return `<p class="cost similar">${esc(t("costSame"))}</p><p class="fine">${esc(t("costNote"))}</p>`;
  }
  const names = { name: placeName(source), home: placeName(home) };
  const bands = [
    { max: 0.8, tone: "cheap", key: "costCheaper" },
    { max: 0.92, tone: "bit-cheap", key: "costBitCheaper" },
    { max: 1.08, tone: "similar", key: "costSimilar" },
    { max: 1.25, tone: "bit-pricey", key: "costBitPricier" },
  ];
  const band = bands.find((item) => comparison.ratio <= item.max) || { tone: "pricey", key: "costPricier" };
  const tone = band.tone;
  const sentence = t(band.key, names);
  return `<p class="cost ${tone}">${esc(sentence)}</p><p class="fine">${esc(t("costNote"))}</p>`;
}

function guideParagraphs(guide, korean) {
  if (!guide) return [];
  const raw = korean ? guide.ko : guide.en;
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof raw === "string" && raw.trim()) return [raw];
  return [];
}

function hasStaticGuide() {
  return Boolean(document.querySelector("[data-static-guide]"));
}

function guideHTML(source, home) {
  if (!source || source.isCurrency) return "";
  if (hasStaticGuide()) {
    const rate = home ? crossRate(source.code, home.code) : null;
    if (rate == null || !home) return "";
    return `<p class="rate-now">${esc(withUnit("1", source))} ≈ ${esc(withUnit(formatRate(rate), home))}</p>`;
  }
  const guide = typeof GUIDES !== "undefined" ? GUIDES[source.id] : null;
  const paragraphs = guideParagraphs(guide, state.lang === "ko");
  const rate = home ? crossRate(source.code, home.code) : null;
  const rateLine = rate != null && home
    ? `${esc(withUnit("1", source))} ≈ ${esc(withUnit(formatRate(rate), home))}`
    : "";
  if (!paragraphs.length && !rateLine) return "";
  return `
    <h3>${esc(t("guideTitle", { name: placeName(source) }))}</h3>
    ${paragraphs.map((line) => `<p>${esc(line)}</p>`).join("")}
    ${rateLine ? `<p class="rate-now">${rateLine}</p>` : ""}
  `;
}

function extraHTML(source, home) {
  const users = usersOf(source.code).filter((country) => !source.isCurrency || country.id !== source.id);
  const others = users.filter((country) => country.id !== source.id);
  const rate = home ? crossRate(source.code, home.code) : null;
  const prices = source.prices || [];
  const listed = others.slice(0, 8).map((country) => placeName(country)).join(", ");
  const extraCount = others.length > 8 ? ` +${others.length - 8}` : "";
  const sharedLine = !source.isCurrency && others.length
    ? `<p class="note">${esc(t("alsoUsed", { currency: currencyName(source.code), list: `${listed}${extraCount}` }))}</p>`
    : "";
  const currencyUsers = source.isCurrency ? `
    <p>${esc(t("usedIn", { name: currencyName(source.code) }))}</p>
    <div class="user-list">
      ${users.map((country) => `<button type="button" data-side="from" data-kind="country" data-id="${country.id}">${country.flag} ${esc(placeName(country))}</button>`).join("")}
    </div>
  ` : "";
  const priceBlock = prices.length && home ? `
    <h3>${esc(t("travelTitle", { name: placeName(source) }))}</h3>
    <ul class="prices">
      ${prices.map((price) => `
        <li>
          <span class="name">${esc(priceLabel(price.name))}</span>
          <span class="local">${esc(t("about"))} ${esc(withUnit(formatLocal(price.amount, source), source))}</span>
          <span class="won">${rate ? `${esc(t("about"))} ${esc(withUnit(formatAmount(price.amount * rate, home.decimals), home))}` : "—"}</span>
        </li>
      `).join("")}
    </ul>
    <p class="fine">${esc(t("priceNote"))}</p>
  ` : "";
  const guide = typeof GUIDES !== "undefined" ? GUIDES[source.id] : null;
  const hasGuide = hasStaticGuide() || guideParagraphs(guide, state.lang === "ko").length > 0;
  const moneyLine = source.isCurrency
    ? `<p>${esc(t("currencyItself", { name: currencyName(source.code), code: source.code }))}</p>`
    : hasGuide
      ? ""
      : `<p>${esc(t("officialMoney", { name: placeName(source), currency: currencyName(source.code), code: source.code }))}</p>`;
  if (!currencyUsers && !sharedLine && !priceBlock && source.isCurrency) return "";
  return `
    <section class="story">
      ${guideHTML(source, home)}
      ${hasGuide ? "" : `<h3>${esc(t("currencyQuestion", { name: placeName(source) }))}</h3>`}
      ${moneyLine}
      ${state.lang === "ko" && source.note ? `<p class="note">${esc(source.note)}</p>` : ""}
      ${sharedLine}
      ${currencyUsers}
      ${costHTML(source, home)}
      ${priceBlock}
    </section>
  `;
}

function suggestButton(side, kind, id, title, meta, flagHTML) {
  const attr = kind === "country"
    ? `data-side="${side}" data-kind="country" data-id="${id}"`
    : `data-side="${side}" data-kind="currency" data-code="${id}"`;
  return `
    <button type="button" ${attr}>
      ${flagHTML}
      <span><b>${esc(title)}</b><small>${esc(meta)}</small></span>
    </button>
  `;
}

function renderSuggest(side) {
  const isHome = side === "home";
  const box = document.getElementById(isHome ? "home-suggest" : "suggest");
  const input = document.getElementById(isHome ? "home-search" : "search");
  const query = (isHome ? state.homeQuery : state.query).trim();
  if (!query) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  const { currencies, countries } = searchHits(query);
  box.hidden = false;
  if (!currencies.length && !countries.length) {
    box.innerHTML = `<p class="suggest-empty">${esc(t("noMatch", { query }))}</p>`;
    return;
  }
  const home = homeEntity();
  const source = sourceEntity();
  const englishQuery = queryUsesEnglish(query);
  const currencyHTML = currencies.map((currency) => {
    const title = englishQuery ? englishCurrencyName(currency.code) : currencyName(currency.code);
    const otherName = englishQuery ? currencyName(currency.code) : englishCurrencyName(currency.code);
    let meta = otherName.toLowerCase() === title.toLowerCase()
      ? currency.code
      : `${otherName} · ${currency.code}`;
    if (!isHome && home) {
      const rate = crossRate(currency.code, home.code);
      meta = rate == null
        ? meta
        : `${withUnit("100", asEntity(currency))} = ${withUnit(formatAmount(100 * rate, home.decimals), home)}`;
    } else if (isHome && source) {
      const rate = crossRate(source.code, currency.code);
      meta = rate == null
        ? meta
        : `1 ${unitName(source)} = ${withUnit(formatRate(rate), asEntity(currency))}`;
    } else {
      const count = usersOf(currency.code).length;
      if (count > 1) meta = `${meta} · ${t("countriesCount", { count })}`;
    }
    const flag = currency.flag
      ? `<span class="flag" aria-hidden="true">${currency.flag}</span>`
      : `<span class="flag code-flag" aria-hidden="true">${esc(currency.code)}</span>`;
    return suggestButton(side, "currency", currency.code, title, meta, flag);
  }).join("");
  const countryHTML = countries.map((country) => {
    const title = englishQuery ? (country.nameEn || country.name) : placeName(country);
    const otherName = englishQuery ? placeName(country) : (country.nameEn || "");
    const money = englishQuery ? englishCurrencyName(country.code) : currencyName(country.code);
    const meta = [otherName, money, country.code].filter((part, index, list) => (
      part && part.toLowerCase() !== title.toLowerCase() && list.findIndex((item) => item.toLowerCase() === part.toLowerCase()) === index
    )).join(" · ");
    return suggestButton(
      side,
      "country",
      country.id,
      title,
      meta,
      `<span class="flag" aria-hidden="true">${country.flag}</span>`,
    );
  }).join("");
  box.innerHTML = currencyHTML + countryHTML;
}

function viewKey() {
  const source = sourceEntity();
  const home = homeEntity();
  return `${state.lang}|${source ? source.id : ""}|${home ? home.id : ""}`;
}

function invalidateMarkup() {
  ["picked", "won-body", "extra"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) delete el.dataset.key;
  });
}

function syncView() {
  const source = sourceEntity();
  const home = homeEntity();
  const picked = document.getElementById("picked");
  const wonBody = document.getElementById("won-body");
  const extra = document.getElementById("extra");
  const key = viewKey();
  const fromPane = document.querySelector(".pane-from");
  const wonPane = document.getElementById("won-pane");

  if (!source) {
    picked.innerHTML = "";
    delete picked.dataset.key;
    wonBody.innerHTML = emptyWonHTML(home);
    delete wonBody.dataset.key;
    extra.innerHTML = "";
    delete extra.dataset.key;
    fromPane.classList.remove("is-editing");
    wonPane.classList.remove("is-editing");
    setTitle();
    paintToday();
    paintArrow();
    return;
  }

  if (!home) {
    if (picked.dataset.key !== key) {
      picked.dataset.key = key;
      picked.innerHTML = pickedHTML(source, null);
    }
    wonBody.innerHTML = `<p class="won-empty">${t("emptyNeedHome")}</p>`;
    delete wonBody.dataset.key;
    extra.innerHTML = extraHTML(source, null);
    setTitle();
    paintToday();
    paintArrow();
    return;
  }

  if (picked.dataset.key !== key) {
    picked.dataset.key = key;
    picked.innerHTML = pickedHTML(source, home);
  }
  if (wonBody.dataset.key !== key) {
    wonBody.dataset.key = key;
    wonBody.innerHTML = wonHTML(source, home);
  }
  if (extra.dataset.key !== key) {
    extra.dataset.key = key;
    extra.innerHTML = extraHTML(source, home);
  }
  setTitle();
  paintPair(null);
  paintToday();
}

function applyChrome() {
  document.documentElement.lang = intlLocale();
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  const write = (id, value, html) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
  };
  write("from-label", t("fromLabel"));
  write("home-label", t("homeLabel"));
  const search = document.getElementById("search");
  const homeSearch = document.getElementById("home-search");
  if (search) {
    search.placeholder = t("searchPh");
    search.setAttribute("aria-label", t("searchLabel"));
    const source = sourceEntity();
    if (source && document.activeElement !== search) search.value = placeName(source);
  }
  if (homeSearch) {
    homeSearch.placeholder = t("homePh");
    homeSearch.setAttribute("aria-label", t("homeSearchLabel"));
    const home = homeEntity();
    if (home && document.activeElement !== homeSearch && !state.homeQuery) homeSearch.value = placeName(home);
  }
  invalidateMarkup();
  setTitle();
}

function paintToday() {
  const today = document.getElementById("today");
  if (!today) return;
  today.textContent = state.live && state.updatedDate
    ? t("asOf", {
      date: state.updatedDate.toLocaleDateString(intlLocale(), { year: "numeric", month: "long", day: "numeric" }),
    })
    : t("fallbackRate");
}

function sizeHomeInput(input) {
  if (!input) return;
  input.style.width = `${Math.max(String(input.value || "").length, 1)}ch`;
}

function paintPair(sourceId) {
  const source = sourceEntity();
  const home = homeEntity();
  const rate = source && home ? crossRate(source.code, home.code) : null;
  const foreignInput = document.getElementById("foreign-input");
  const homeInput = document.getElementById("home-input");
  const sub = document.getElementById("won-sub");
  if (!source || !home || rate == null || !foreignInput || !homeInput) return;

  if (state.editing === "foreign") {
    if (sourceId !== "home-input") {
      homeInput.value = state.foreign == null ? "" : formatAmount(state.foreign * rate, home.decimals);
    }
  } else if (sourceId !== "foreign-input") {
    foreignInput.value = state.foreign == null ? "" : formatLocal(state.foreign, source);
  }

  if (sub) sub.textContent = state.foreign == null ? "" : withUnit(formatLocal(state.foreign, source), source);
  document.querySelectorAll("[data-amount]").forEach((button) => {
    const amount = Number(button.dataset.amount);
    button.classList.toggle("is-on", sameAmount(state.foreign, amount));
    const label = button.querySelector("span");
    if (label) label.textContent = withUnit(formatAmount(amount * rate, home.decimals), home);
  });
  document.querySelector(".pane-from").classList.toggle("is-editing", state.editing === "foreign");
  document.getElementById("won-pane").classList.toggle("is-editing", state.editing === "home");
  paintArrow();
  sizeHomeInput(homeInput);
}

function paintArrow() {
  const arrow = document.getElementById("arrow");
  if (!arrow) return;
  const active = sourceEntity() ? state.editing : "";
  arrow.classList.toggle("is-from", active === "foreign");
  arrow.classList.toggle("is-home", active === "home");
}

function fillSearch(entity, input) {
  if (input && entity) input.value = entity.name;
}

function openSource(kind, id, push) {
  const prev = sourceEntity()?.id;
  if (kind === "country") {
    const country = countryById(id);
    if (!country) return;
    state.countryId = country.id;
    state.currencyCode = null;
  } else {
    const currency = currencyByCode(id);
    if (!currency) return;
    state.countryId = null;
    state.currencyCode = currency.code;
  }
  state.query = "";
  state.foreign = 100;
  state.editing = "foreign";
  document.getElementById("search").value = placeName(sourceEntity());
  renderSuggest("from");
  if (sourceEntity().id !== prev) invalidateMarkup();
  writeUrl(push === false);
  syncView();
}

function openHome(kind, id, push) {
  if (kind === "country") {
    const country = countryById(id);
    if (!country) return;
    state.homeCountryId = country.id;
    state.homeCurrency = null;
  } else {
    const currency = currencyByCode(id);
    if (!currency) return;
    state.homeCountryId = null;
    state.homeCurrency = currency.code;
  }
  state.homeChosenByUser = true;
  state.homeQuery = "";
  document.getElementById("home-search").value = placeName(homeEntity());
  renderSuggest("home");
  invalidateMarkup();
  writeUrl(push === false);
  syncView();
}

function clearSource(replace) {
  state.countryId = null;
  state.currencyCode = null;
  state.foreign = null;
  state.query = "";
  state.editing = "foreign";
  renderSuggest("from");
  invalidateMarkup();
  writeUrl(replace);
  syncView();
}

function guessHomeId() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  const byLang = {
    ko: "korea", ja: "japan", th: "thailand", vi: "vietnam", fr: "france",
    de: "germany", es: "spain", it: "italy", zh: "china",
  };
  for (const language of languages) {
    const [lang, region] = String(language).toLowerCase().split("-");
    if (region) {
      const found = COUNTRIES.find((country) => country.iso === region.toUpperCase());
      if (found) return found.id;
    }
    if (byLang[lang]) return byLang[lang];
  }
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const byZone = {
    "Asia/Seoul": "korea",
    "Asia/Tokyo": "japan",
    "Asia/Bangkok": "thailand",
    "Asia/Ho_Chi_Minh": "vietnam",
    "Asia/Taipei": "taiwan",
    "Asia/Shanghai": "china",
    "Asia/Singapore": "singapore",
    "Europe/Paris": "france",
    "Europe/Berlin": "germany",
    "Europe/Rome": "italy",
    "Europe/Madrid": "spain",
    "Europe/London": "uk",
    "America/New_York": "usa",
    "America/Los_Angeles": "usa",
    "America/Chicago": "usa",
  };
  return byZone[timeZone] || null;
}

function applyGuess(id, replace) {
  if (!countryById(id) || state.homeChosenByUser || state.homeFromUrl) return;
  state.homeCountryId = id;
  state.homeCurrency = null;
  const input = document.getElementById("home-search");
  state.lang = languageForVisitor(countryById(id));
  applyChrome();
  if (input && document.activeElement !== input) input.value = placeName(countryById(id));
  invalidateMarkup();
  writeUrl(replace);
  syncView();
}

async function detectHome() {
  if (state.homeFromUrl || state.homeChosenByUser || state.homeCountryId) return;
  try {
    const response = await fetch("https://get.geojs.io/v1/ip/country.json");
    if (!response.ok) return;
    const data = await response.json();
    const found = COUNTRIES.find((country) => country.iso === data.country);
    if (found) applyGuess(found.id, true);
  } catch (error) {
    paintToday();
  }
}

function onSearchInput(event) {
  state.query = event.target.value;
  state.suggestIndex = null;
  if (!state.query.trim()) clearSource(true);
  else renderSuggest("from");
}

function onHomeInput(event) {
  state.homeQuery = event.target.value;
  renderSuggest("home");
}

function exactTypedCountry(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const hits = COUNTRIES.filter((country) => (
    [country.name, country.nameEn, placeName(country), ...(country.aliases || [])]
      .some((part) => String(part).toLowerCase() === q)
  ));
  if (hits.length === 1) return hits[0];
  const named = hits.filter((country) => (
    [country.name, country.nameEn, placeName(country)].some((part) => String(part).toLowerCase() === q)
  ));
  return named.length === 1 ? named[0] : null;
}

function suggestButtons() {
  return [...document.querySelectorAll("#suggest button")];
}

function setSuggestIndex(index) {
  const buttons = suggestButtons();
  if (!buttons.length || index == null) {
    state.suggestIndex = null;
    buttons.forEach((button) => button.classList.remove("is-active"));
    return;
  }
  const next = Math.max(0, Math.min(index, buttons.length - 1));
  state.suggestIndex = next;
  buttons.forEach((button, i) => {
    const active = i === next;
    button.classList.toggle("is-active", active);
    if (active) button.scrollIntoView({ block: "nearest" });
  });
}

function pickFirst(side) {
  const query = side === "home" ? state.homeQuery : state.query;
  const { currencies, countries } = searchHits(query);
  if (currencies[0]) return { kind: "currency", id: currencies[0].code };
  if (countries[0]) return { kind: "country", id: countries[0].id };
  return null;
}

function onSearchKeydown(event) {
  if (event.key === "Escape") {
    const source = sourceEntity();
    state.query = "";
    state.suggestIndex = null;
    event.target.value = source ? placeName(source) : "";
    renderSuggest("from");
    return;
  }
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    const buttons = suggestButtons();
    if (!buttons.length) return;
    event.preventDefault();
    if (state.suggestIndex == null) {
      setSuggestIndex(event.key === "ArrowDown" ? 0 : buttons.length - 1);
      return;
    }
    const next = state.suggestIndex + (event.key === "ArrowDown" ? 1 : -1);
    setSuggestIndex(next < 0 || next >= buttons.length ? null : next);
    return;
  }
  if (event.key !== "Enter") return;
  event.preventDefault();
  if (state.suggestIndex != null) {
    const button = suggestButtons()[state.suggestIndex];
    if (!button) return;
    const kind = button.dataset.kind;
    const id = kind === "country" ? button.dataset.id : button.dataset.code;
    state.suggestIndex = null;
    openSource(kind, id, true);
    return;
  }
  const typed = exactTypedCountry(state.query);
  if (!typed) return;
  openSource("country", typed.id, true);
}

function onHomeKeydown(event) {
  if (event.key === "Escape" || (event.key === "Enter" && !pickFirst("home"))) {
    const home = homeEntity();
    state.homeQuery = "";
    event.target.value = home ? placeName(home) : "";
    renderSuggest("home");
    return;
  }
  if (event.key !== "Enter") return;
  const first = pickFirst("home");
  event.preventDefault();
  openHome(first.kind, first.id, true);
}

function onAppClick(event) {
  const pick = event.target.closest("[data-kind]");
  if (pick) {
    const side = pick.dataset.side;
    const kind = pick.dataset.kind;
    const id = kind === "country" ? pick.dataset.id : pick.dataset.code;
    if (side === "home") openHome(kind, id, true);
    else openSource(kind, id, true);
    return;
  }
  const preset = event.target.closest("[data-amount]");
  if (!preset || !sourceEntity()) return;
  state.foreign = Number(preset.dataset.amount);
  state.editing = "foreign";
  const foreignInput = document.getElementById("foreign-input");
  if (foreignInput) foreignInput.value = formatLocal(state.foreign, sourceEntity());
  paintPair("preset");
}

function onAppInput(event) {
  const source = sourceEntity();
  const home = homeEntity();
  const rate = source && home ? crossRate(source.code, home.code) : null;
  if (!source || !home || rate == null) return;
  if (event.target.id === "foreign-input") {
    state.editing = "foreign";
    state.foreign = parseNum(event.target.value);
    paintPair("foreign-input");
  }
  if (event.target.id === "home-input") {
    state.editing = "home";
    const amount = parseNum(event.target.value);
    state.foreign = amount == null ? null : amount / rate;
    paintPair("home-input");
  }
}

function onAppBlur(event) {
  const source = sourceEntity();
  const home = homeEntity();
  const rate = source && home ? crossRate(source.code, home.code) : null;
  if (!source) return;
  if (event.target.id === "foreign-input") {
    event.target.value = state.foreign == null ? "" : formatLocal(state.foreign, source);
  }
  if (event.target.id === "home-input" && home && rate != null) {
    event.target.value = state.foreign == null ? "" : formatAmount(state.foreign * rate, home.decimals);
  }
}

async function loadRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error("rate request failed");
    const data = await response.json();
    if (data.result !== "success" || !data.rates) throw new Error("bad payload");
    const next = { ...FALLBACK_PER_USD, USD: 1 };
    const codes = new Set(["KRW", "USD", ...COUNTRIES.map((country) => country.code)]);
    codes.forEach((code) => {
      if (data.rates[code]) next[code] = data.rates[code];
    });
    state.perUsd = next;
    const updated = new Date(data.time_last_update_utc);
    if (!Number.isNaN(updated.getTime())) {
      state.updatedDate = updated;
    }
    state.live = true;
    const active = document.activeElement;
    const typingAmount = active && (active.id === "foreign-input" || active.id === "home-input");
    if (!typingAmount) invalidateMarkup();
    syncView();
  } catch (error) {
    state.live = false;
    paintToday();
  }
}

function boot() {
  readUrl();
  const source = sourceEntity();
  state.foreign = source ? 100 : null;
  if (!state.homeFromUrl) {
    const guessed = guessHomeId();
    if (guessed) {
      state.homeCountryId = guessed;
      state.homeCurrency = null;
    }
  }
  state.lang = languageForVisitor(homeEntity());
  document.documentElement.lang = intlLocale();
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.getElementById("app").innerHTML = shell();
  const search = document.getElementById("search");
  const homeSearch = document.getElementById("home-search");
  if (source) search.value = placeName(source);
  if (homeEntity()) homeSearch.value = placeName(homeEntity());

  search.addEventListener("input", onSearchInput);
  search.addEventListener("keydown", onSearchKeydown);
  homeSearch.addEventListener("input", onHomeInput);
  homeSearch.addEventListener("keydown", onHomeKeydown);
  homeSearch.addEventListener("focusout", () => {
    setTimeout(() => {
      if (document.activeElement?.closest?.("#home-suggest")) return;
      const home = homeEntity();
      state.homeQuery = "";
      if (home && document.activeElement !== homeSearch) homeSearch.value = placeName(home);
      renderSuggest("home");
    }, 0);
  });

  const app = document.getElementById("app");
  app.addEventListener("mousedown", (event) => {
    if (event.target.closest("#suggest button, #home-suggest button")) event.preventDefault();
  });
  app.addEventListener("click", onAppClick);
  app.addEventListener("input", onAppInput);
  app.addEventListener("focusout", onAppBlur);

  let selectOnMouseUp = false;
  app.addEventListener("focusin", (event) => {
    const id = event.target.id;
    if (id !== "foreign-input" && id !== "home-input" && id !== "home-search") return;
    selectOnMouseUp = true;
    event.target.select();
  });
  app.addEventListener("mouseup", (event) => {
    if (!selectOnMouseUp) return;
    const id = event.target.id;
    if (id === "foreign-input" || id === "home-input" || id === "home-search") event.preventDefault();
    selectOnMouseUp = false;
  });

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", (event) => {
      if (typeof featuredIdFromPath === "function" && featuredIdFromPath()) {
        if (brand.tagName === "A") return;
        event.preventDefault();
        goToHref("index.html" + homeQueryString(), false);
        return;
      }
      search.value = "";
      if (state.countryId || state.currencyCode || state.query) clearSource(false);
    });
  }

  window.addEventListener("popstate", () => {
    state.countryId = null;
    state.currencyCode = null;
    state.homeCountryId = null;
    state.homeCurrency = null;
    state.homeFromUrl = false;
    readUrl();
    const picked = sourceEntity();
    state.foreign = picked ? 100 : null;
    state.query = "";
    state.homeQuery = "";
    state.editing = "foreign";
    search.value = picked ? placeName(picked) : "";
    homeSearch.value = homeEntity() ? placeName(homeEntity()) : "";
    invalidateMarkup();
    renderSuggest("from");
    renderSuggest("home");
    syncView();
  });

  if (state.countryId || state.currencyCode || state.homeCountryId || state.homeCurrency) writeUrl(true);
  syncView();
  loadRates();
  detectHome();
}

boot();
