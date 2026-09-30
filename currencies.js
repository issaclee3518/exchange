const CURRENCIES = [
  { code: "EUR", nameKo: "유로", nameEn: "Euro", unit: "유로", decimals: 2, flag: "🇪🇺", aliases: ["유로", "eur", "euro", "유럽"] },
  { code: "XOF", nameKo: "서아프리카 CFA 프랑", nameEn: "West African CFA Franc", unit: "프랑", decimals: 0, aliases: ["xof", "서아프리카", "cfa", "세파", "프랑"] },
  { code: "XAF", nameKo: "중앙아프리카 CFA 프랑", nameEn: "Central African CFA Franc", unit: "프랑", decimals: 0, aliases: ["xaf", "중앙아프리카", "cfa", "프랑"] },
  { code: "XCD", nameKo: "동카리브 달러", nameEn: "East Caribbean Dollar", unit: "달러", decimals: 2, aliases: ["xcd", "동카리브", "달러"] },
  { code: "AUD", nameKo: "호주 달러", nameEn: "Australian Dollar", unit: "달러", decimals: 2, aliases: ["aud", "호주달러", "호주 달러", "달러"] },
  { code: "USD", nameKo: "미국 달러", nameEn: "US Dollar", unit: "달러", decimals: 2, aliases: ["usd", "달러", "dollar", "미국달러", "미국 달러"] },
  { code: "CHF", nameKo: "스위스 프랑", nameEn: "Swiss Franc", unit: "프랑", decimals: 2, aliases: ["chf", "프랑", "franc", "스위스프랑"] },
  { code: "XPF", nameKo: "CFP 프랑", nameEn: "CFP Franc", unit: "프랑", decimals: 0, aliases: ["xpf", "cfp", "태평양", "프랑"] },
  { code: "DKK", nameKo: "덴마크 크로네", nameEn: "Danish Krone", unit: "크로네", decimals: 2, aliases: ["dkk", "크로네", "krone", "덴마크크로네"] },
  { code: "NOK", nameKo: "노르웨이 크로네", nameEn: "Norwegian Krone", unit: "크로네", decimals: 2, aliases: ["nok", "노르웨이 크로네", "크로네", "krone"] },
  { code: "NZD", nameKo: "뉴질랜드 달러", nameEn: "New Zealand Dollar", unit: "달러", decimals: 2, aliases: ["nzd", "뉴질랜드달러", "뉴질랜드 달러", "달러"] },
  { code: "XCG", nameKo: "카리브 길더", nameEn: "Caribbean Guilder", unit: "길더", decimals: 2, aliases: ["xcg", "길더", "guilder", "카리브길더"] },
  { code: "BND", nameKo: "브루나이 달러", nameEn: "Brunei Dollar", unit: "달러", decimals: 2, aliases: ["bnd", "브루나이달러", "달러"] },
  { code: "KRW", nameKo: "원", nameEn: "South Korean Won", unit: "원", decimals: 0, aliases: ["krw", "원", "won", "원화"] },
];

const CURRENCY_BY_CODE = Object.fromEntries(CURRENCIES.map((currency) => [currency.code, currency]));

function addPlace(id, iso, name, nameEn, flag, code, aliases, note) {
  const currency = CURRENCY_BY_CODE[code];
  COUNTRIES.push({
    id,
    iso,
    name,
    nameEn,
    flag,
    code,
    currencyEn: currency.nameEn,
    currencyKo: currency.nameKo,
    unit: currency.unit,
    decimals: currency.decimals,
    aliases,
    note: note || "",
    prices: [],
  });
}

[
  ["korea", "KR", "한국", "South Korea", "🇰🇷", "KRW", ["한국", "korea", "south korea", "kr", "대한민국"], ""],
  ["austria", "AT", "오스트리아", "Austria", "🇦🇹", "EUR", ["오스트리아", "austria"], "유로존 나라입니다."],
  ["belgium", "BE", "벨기에", "Belgium", "🇧🇪", "EUR", ["벨기에", "belgium"], "유로존 나라입니다."],
  ["bulgaria", "BG", "불가리아", "Bulgaria", "🇧🇬", "EUR", ["불가리아", "bulgaria"], "2026년 1월 1일부터 유로를 씁니다."],
  ["croatia", "HR", "크로아티아", "Croatia", "🇭🇷", "EUR", ["크로아티아", "croatia"], "유로존 나라입니다."],
  ["cyprus", "CY", "키프로스", "Cyprus", "🇨🇾", "EUR", ["키프로스", "cyprus"], "유로존 나라입니다."],
  ["estonia", "EE", "에스토니아", "Estonia", "🇪🇪", "EUR", ["에스토니아", "estonia"], "유로존 나라입니다."],
  ["finland", "FI", "핀란드", "Finland", "🇫🇮", "EUR", ["핀란드", "finland"], "유로존 나라입니다."],
  ["greece", "GR", "그리스", "Greece", "🇬🇷", "EUR", ["그리스", "greece"], "유로존 나라입니다."],
  ["ireland", "IE", "아일랜드", "Ireland", "🇮🇪", "EUR", ["아일랜드", "ireland"], "유로존 나라입니다."],
  ["latvia", "LV", "라트비아", "Latvia", "🇱🇻", "EUR", ["라트비아", "latvia"], "유로존 나라입니다."],
  ["lithuania", "LT", "리투아니아", "Lithuania", "🇱🇹", "EUR", ["리투아니아", "lithuania"], "유로존 나라입니다."],
  ["luxembourg", "LU", "룩셈부르크", "Luxembourg", "🇱🇺", "EUR", ["룩셈부르크", "luxembourg"], "유로존 나라입니다."],
  ["malta", "MT", "몰타", "Malta", "🇲🇹", "EUR", ["몰타", "malta"], "유로존 나라입니다."],
  ["netherlands", "NL", "네덜란드", "Netherlands", "🇳🇱", "EUR", ["네덜란드", "netherlands", "holland", "홀란드"], "유로존 나라입니다."],
  ["portugal", "PT", "포르투갈", "Portugal", "🇵🇹", "EUR", ["포르투갈", "portugal"], "유로존 나라입니다."],
  ["slovakia", "SK", "슬로바키아", "Slovakia", "🇸🇰", "EUR", ["슬로바키아", "slovakia"], "유로존 나라입니다."],
  ["slovenia", "SI", "슬로베니아", "Slovenia", "🇸🇮", "EUR", ["슬로베니아", "slovenia"], "유로존 나라입니다."],
  ["andorra", "AD", "안도라", "Andorra", "🇦🇩", "EUR", ["안도라", "andorra"], "EU와 협정으로 유로를 공식 화폐로 씁니다."],
  ["monaco", "MC", "모나코", "Monaco", "🇲🇨", "EUR", ["모나코", "monaco"], "EU와 협정으로 유로를 공식 화폐로 씁니다."],
  ["sanmarino", "SM", "산마리노", "San Marino", "🇸🇲", "EUR", ["산마리노", "san marino"], "EU와 협정으로 유로를 공식 화폐로 씁니다."],
  ["vatican", "VA", "바티칸", "Vatican City", "🇻🇦", "EUR", ["바티칸", "vatican"], "EU와 협정으로 유로를 공식 화폐로 씁니다."],
  ["kosovo", "XK", "코소보", "Kosovo", "🇽🇰", "EUR", ["코소보", "kosovo"], "유로존 회원은 아니지만 유로를 공식 화폐로 씁니다."],
  ["montenegro", "ME", "몬테네그로", "Montenegro", "🇲🇪", "EUR", ["몬테네그로", "montenegro"], "유로존 회원은 아니지만 유로를 공식 화폐로 씁니다."],
  ["benin", "BJ", "베냉", "Benin", "🇧🇯", "XOF", ["베냉", "benin"], "서아프리카 CFA 프랑을 씁니다."],
  ["burkinafaso", "BF", "부르키나파소", "Burkina Faso", "🇧🇫", "XOF", ["부르키나파소", "burkina faso"], "서아프리카 CFA 프랑을 씁니다."],
  ["ivorycoast", "CI", "코트디부아르", "Côte d'Ivoire", "🇨🇮", "XOF", ["코트디부아르", "cote d'ivoire", "ivory coast"], "서아프리카 CFA 프랑을 씁니다."],
  ["guineabissau", "GW", "기니비사우", "Guinea-Bissau", "🇬🇼", "XOF", ["기니비사우", "guinea-bissau", "guinea bissau"], "서아프리카 CFA 프랑을 씁니다."],
  ["mali", "ML", "말리", "Mali", "🇲🇱", "XOF", ["말리", "mali"], "서아프리카 CFA 프랑을 씁니다."],
  ["niger", "NE", "니제르", "Niger", "🇳🇪", "XOF", ["니제르", "niger"], "서아프리카 CFA 프랑을 씁니다."],
  ["senegal", "SN", "세네갈", "Senegal", "🇸🇳", "XOF", ["세네갈", "senegal"], "서아프리카 CFA 프랑을 씁니다."],
  ["togo", "TG", "토고", "Togo", "🇹🇬", "XOF", ["토고", "togo"], "서아프리카 CFA 프랑을 씁니다."],
  ["cameroon", "CM", "카메룬", "Cameroon", "🇨🇲", "XAF", ["카메룬", "cameroon"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["centralafricanrepublic", "CF", "중앙아프리카공화국", "Central African Republic", "🇨🇫", "XAF", ["중앙아프리카공화국", "중앙아프리카", "central african republic"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["chad", "TD", "차드", "Chad", "🇹🇩", "XAF", ["차드", "chad"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["congo", "CG", "콩고", "Republic of the Congo", "🇨🇬", "XAF", ["콩고", "congo", "콩고공화국"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["equatorialguinea", "GQ", "적도기니", "Equatorial Guinea", "🇬🇶", "XAF", ["적도기니", "equatorial guinea"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["gabon", "GA", "가봉", "Gabon", "🇬🇦", "XAF", ["가봉", "gabon"], "중앙아프리카 CFA 프랑을 씁니다."],
  ["anguilla", "AI", "앵귈라", "Anguilla", "🇦🇮", "XCD", ["앵귈라", "anguilla"], "동카리브 달러를 씁니다."],
  ["antigua", "AG", "앤티가 바부다", "Antigua and Barbuda", "🇦🇬", "XCD", ["앤티가", "앤티가 바부다", "antigua"], "동카리브 달러를 씁니다."],
  ["dominica", "DM", "도미니카", "Dominica", "🇩🇲", "XCD", ["도미니카", "dominica"], "동카리브 달러를 씁니다. 도미니카 공화국과는 다른 나라입니다."],
  ["grenada", "GD", "그레나다", "Grenada", "🇬🇩", "XCD", ["그레나다", "grenada"], "동카리브 달러를 씁니다."],
  ["montserrat", "MS", "몬트세랫", "Montserrat", "🇲🇸", "XCD", ["몬트세랫", "montserrat"], "동카리브 달러를 씁니다."],
  ["stkitts", "KN", "세인트키츠 네비스", "Saint Kitts and Nevis", "🇰🇳", "XCD", ["세인트키츠", "세인트키츠 네비스", "saint kitts"], "동카리브 달러를 씁니다."],
  ["stlucia", "LC", "세인트루시아", "Saint Lucia", "🇱🇨", "XCD", ["세인트루시아", "saint lucia"], "동카리브 달러를 씁니다."],
  ["stvincent", "VC", "세인트빈센트 그레나딘", "Saint Vincent and the Grenadines", "🇻🇨", "XCD", ["세인트빈센트", "saint vincent"], "동카리브 달러를 씁니다."],
  ["nauru", "NR", "나우루", "Nauru", "🇳🇷", "AUD", ["나우루", "nauru"], "호주 달러를 공식 화폐로 씁니다."],
  ["kiribati", "KI", "키리바시", "Kiribati", "🇰🇮", "AUD", ["키리바시", "kiribati"], "호주 달러를 공식 화폐로 씁니다."],
  ["tuvalu", "TV", "투발루", "Tuvalu", "🇹🇻", "AUD", ["투발루", "tuvalu"], "호주 달러를 공식 화폐로 씁니다."],
  ["ecuador", "EC", "에콰도르", "Ecuador", "🇪🇨", "USD", ["에콰도르", "ecuador"], "미국 달러를 공식 화폐로 씁니다."],
  ["elsalvador", "SV", "엘살바도르", "El Salvador", "🇸🇻", "USD", ["엘살바도르", "el salvador"], "미국 달러가 공식 화폐이고, 비트코인도 법정 화폐입니다."],
  ["panama", "PA", "파나마", "Panama", "🇵🇦", "USD", ["파나마", "panama"], "미국 달러가 통용되고, 발보아는 달러와 1:1입니다."],
  ["timorleste", "TL", "동티모르", "Timor-Leste", "🇹🇱", "USD", ["동티모르", "timor-leste", "timor leste", "east timor"], "미국 달러를 공식 화폐로 씁니다."],
  ["marshall", "MH", "마셜 제도", "Marshall Islands", "🇲🇭", "USD", ["마셜", "마셜 제도", "marshall islands"], "미국 달러를 공식 화폐로 씁니다."],
  ["micronesia", "FM", "미크로네시아", "Micronesia", "🇫🇲", "USD", ["미크로네시아", "micronesia"], "미국 달러를 공식 화폐로 씁니다."],
  ["palau", "PW", "팔라우", "Palau", "🇵🇼", "USD", ["팔라우", "palau"], "미국 달러를 공식 화폐로 씁니다."],
  ["liechtenstein", "LI", "리히텐슈타인", "Liechtenstein", "🇱🇮", "CHF", ["리히텐슈타인", "liechtenstein"], "스위스 프랑을 공식 화폐로 씁니다."],
  ["frenchpolynesia", "PF", "프랑스령 폴리네시아", "French Polynesia", "🇵🇫", "XPF", ["폴리네시아", "프랑스령 폴리네시아", "french polynesia", "타히티"], "CFP 프랑을 씁니다."],
  ["newcaledonia", "NC", "누벨칼레도니", "New Caledonia", "🇳🇨", "XPF", ["누벨칼레도니", "뉴칼레도니아", "new caledonia"], "CFP 프랑을 씁니다."],
  ["wallisfutuna", "WF", "왈리스 푸투나", "Wallis and Futuna", "🇼🇫", "XPF", ["왈리스", "푸투나", "wallis"], "CFP 프랑을 씁니다."],
  ["denmark", "DK", "덴마크", "Denmark", "🇩🇰", "DKK", ["덴마크", "denmark"], "덴마크 크로네를 씁니다."],
  ["norway", "NO", "노르웨이", "Norway", "🇳🇴", "NOK", ["노르웨이", "norway", "norge", "오슬로", "oslo"], "노르웨이 크로네를 씁니다. 유로존이 아닙니다."],
  ["greenland", "GL", "그린란드", "Greenland", "🇬🇱", "DKK", ["그린란드", "greenland"], "덴마크 크로네를 씁니다."],
  ["faroe", "FO", "페로 제도", "Faroe Islands", "🇫🇴", "DKK", ["페로", "페로 제도", "faroe"], "페로 크로네는 덴마크 크로네와 같은 가치입니다."],
  ["cookislands", "CK", "쿡 제도", "Cook Islands", "🇨🇰", "NZD", ["쿡 제도", "cook islands"], "뉴질랜드 달러가 법정 통화입니다."],
  ["niue", "NU", "니우에", "Niue", "🇳🇺", "NZD", ["니우에", "niue"], "뉴질랜드 달러를 씁니다."],
  ["tokelau", "TK", "토켈라우", "Tokelau", "🇹🇰", "NZD", ["토켈라우", "tokelau"], "뉴질랜드 달러를 씁니다."],
  ["curacao", "CW", "퀴라소", "Curaçao", "🇨🇼", "XCG", ["퀴라소", "curacao", "curaçao"], "2025년 3월부터 카리브 길더를 씁니다."],
  ["sintmaarten", "SX", "신트마르턴", "Sint Maarten", "🇸🇽", "XCG", ["신트마르턴", "sint maarten"], "2025년 3월부터 카리브 길더를 씁니다."],
  ["brunei", "BN", "브루나이", "Brunei", "🇧🇳", "BND", ["브루나이", "brunei"], "브루나이 달러는 싱가포르 달러와 1:1로 서로 쓸 수 있습니다."],
].forEach((row) => addPlace(...row));

const ISO_BY_ID = {
  japan: "JP", usa: "US", vietnam: "VN", thailand: "TH", taiwan: "TW", china: "CN",
  philippines: "PH", singapore: "SG", hongkong: "HK", macau: "MO", malaysia: "MY",
  indonesia: "ID", australia: "AU", guam: "GU", france: "FR", italy: "IT", spain: "ES",
  germany: "DE", uk: "GB", switzerland: "CH", canada: "CA", newzealand: "NZ", turkey: "TR",
  uae: "AE", laos: "LA", cambodia: "KH", india: "IN", mexico: "MX", czech: "CZ",
};

COUNTRIES.forEach((country) => {
  if (!country.iso && ISO_BY_ID[country.id]) country.iso = ISO_BY_ID[country.id];
  if (!CURRENCY_BY_CODE[country.code]) {
    CURRENCIES.push({
      code: country.code,
      nameKo: country.currencyKo,
      nameEn: country.currencyEn,
      unit: country.unit,
      decimals: country.decimals,
      flag: "",
      aliases: [country.currencyKo, country.code.toLowerCase(), country.currencyEn],
    });
    CURRENCY_BY_CODE[country.code] = CURRENCIES[CURRENCIES.length - 1];
  }
});

const singapore = COUNTRIES.find((country) => country.id === "singapore");
if (singapore && !singapore.note) {
  singapore.note = "브루나이 달러와 1:1로 서로 쓸 수 있습니다.";
}

const norway = COUNTRIES.find((country) => country.id === "norway");
if (norway) {
  norway.prices = [
    { name: "커피", amount: 55 },
    { name: "생수", amount: 30 },
    { name: "점심 1인", amount: 190 },
    { name: "지하철 1회", amount: 44 },
    { name: "핫도그", amount: 50 },
  ];
}

const korea = COUNTRIES.find((country) => country.id === "korea");
if (korea) {
  korea.prices = [
    { name: "편의점 음료", amount: 2000 },
    { name: "커피", amount: 4500 },
    { name: "점심 1인", amount: 10000 },
    { name: "지하철 1회", amount: 1550 },
    { name: "생수", amount: 1200 },
  ];
}
