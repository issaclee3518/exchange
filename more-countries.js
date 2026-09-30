function ensureCurrency(code, nameKo, nameEn, unit, decimals) {
  if (CURRENCY_BY_CODE[code]) return;
  const currency = {
    code, nameKo, nameEn, unit, decimals, flag: "",
    aliases: [nameKo, nameEn, code.toLowerCase()],
  };
  CURRENCIES.push(currency);
  CURRENCY_BY_CODE[code] = currency;
}

const EXTRA_RATES = {
  DZD: 133.696802,
  AOA: 928.115167,
  BWP: 14.000441,
  BIF: 2998.174098,
  CVE: 97.199995,
  KMF: 433.675808,
  CDF: 2311.187801,
  DJF: 177.721,
  EGP: 52.092039,
  ERN: 15,
  SZL: 16.409201,
  ETB: 162.454208,
  GMD: 74.535686,
  GHS: 11.701151,
  GNF: 8794.827476,
  KES: 129.679115,
  LSL: 16.409201,
  LRD: 171.69751,
  LYD: 6.39375,
  MGA: 4400.055159,
  MWK: 1747.530471,
  MRU: 40.211804,
  MUR: 47.588946,
  MAD: 9.664656,
  MZN: 63.781477,
  NAD: 16.409201,
  NGN: 1327.241555,
  RWF: 1476.64522,
  STN: 21.597061,
  SCR: 14.199378,
  SLE: 24.613943,
  SOS: 571.917592,
  ZAR: 16.40694,
  SSP: 6077.453114,
  SDG: 449.414057,
  TZS: 2615.169812,
  TND: 2.971269,
  UGX: 3830.605782,
  ZMW: 19.561228,
  ZWG: 26.8512,
  BSD: 1,
  BBD: 2,
  BZD: 2,
  BOB: 12.110635,
  BRL: 5.21777,
  CLP: 967.360424,
  COP: 3366.901593,
  CRC: 454.87114,
  CUP: 24,
  DOP: 58.490172,
  GTQ: 7.626619,
  GYD: 209.174335,
  HTG: 130.810336,
  HNL: 26.826914,
  JMD: 158.290638,
  NIO: 36.709006,
  PYG: 5890.563654,
  PEN: 3.435604,
  SRD: 37.713477,
  TTD: 6.755745,
  UYU: 40.053164,
  VES: 859.0629,
  AFN: 64.658756,
  AMD: 363.321505,
  AZN: 1.698551,
  BHD: 0.376,
  BDT: 122.977549,
  BTN: 96.057754,
  GEL: 2.603065,
  IRR: 1581176.625196,
  IQD: 1309.348067,
  ILS: 3.067636,
  JOD: 0.709,
  KZT: 439.517277,
  KWD: 0.308442,
  KGS: 87.472179,
  LBP: 89500,
  MVR: 15.43508,
  MNT: 3559.953413,
  MMK: 2099.825833,
  NPR: 153.692407,
  OMR: 0.384497,
  PKR: 276.877066,
  QAR: 3.64,
  SAR: 3.75,
  LKR: 330.631897,
  SYP: 121.554311,
  TJS: 9.236685,
  TMT: 3.499958,
  UZS: 11812.998695,
  YER: 236.299922,
  ALL: 81.025002,
  BYN: 3.013231,
  BAM: 1.724089,
  ISK: 120.537594,
  MDL: 17.684951,
  MKD: 53.729511,
  PLN: 3.852615,
  RON: 4.649672,
  RUB: 84.057795,
  RSD: 103.586307,
  SEK: 9.993286,
  UAH: 44.865111,
  FJD: 2.242734,
  PGK: 4.490317,
  WST: 2.733447,
  SBD: 8.007015,
  TOP: 2.3861,
  VUV: 118.652003,
  ARS: 1523.9697,
};

ensureCurrency("DZD", "알제리 디나르", "Algerian Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "DZ" || country.id === "algeria")) addPlace("algeria", "DZ", "알제리", "Algeria", "🇩🇿", "DZD", ["알제리", "Algeria"], "");
ensureCurrency("AOA", "앙골라 콴자", "Angolan Kwanza", "콴자", 2);
if (!COUNTRIES.some((country) => country.iso === "AO" || country.id === "angola")) addPlace("angola", "AO", "앙골라", "Angola", "🇦🇴", "AOA", ["앙골라", "Angola"], "");
ensureCurrency("BWP", "보츠와나 풀라", "Botswana Pula", "풀라", 2);
if (!COUNTRIES.some((country) => country.iso === "BW" || country.id === "botswana")) addPlace("botswana", "BW", "보츠와나", "Botswana", "🇧🇼", "BWP", ["보츠와나", "Botswana"], "");
ensureCurrency("BIF", "부룬디 프랑", "Burundi Franc", "프랑", 0);
if (!COUNTRIES.some((country) => country.iso === "BI" || country.id === "burundi")) addPlace("burundi", "BI", "부룬디", "Burundi", "🇧🇮", "BIF", ["부룬디", "Burundi"], "");
ensureCurrency("CVE", "카보베르데 에스쿠도", "Cape Verdean Escudo", "에스쿠도", 2);
if (!COUNTRIES.some((country) => country.iso === "CV" || country.id === "caboverde")) addPlace("caboverde", "CV", "카보베르데", "Cabo Verde", "🇨🇻", "CVE", ["카보베르데", "Cabo Verde", "cape verde"], "");
ensureCurrency("KMF", "코모로 프랑", "Comorian Franc", "프랑", 0);
if (!COUNTRIES.some((country) => country.iso === "KM" || country.id === "comoros")) addPlace("comoros", "KM", "코모로", "Comoros", "🇰🇲", "KMF", ["코모로", "Comoros"], "");
ensureCurrency("CDF", "콩고 프랑", "Congolese Franc", "프랑", 2);
if (!COUNTRIES.some((country) => country.iso === "CD" || country.id === "drcongo")) addPlace("drcongo", "CD", "콩고민주공화국", "DR Congo", "🇨🇩", "CDF", ["콩고민주공화국", "DR Congo", "dr congo", "drc", "democratic republic of the congo"], "콩고공화국과는 다른 나라입니다.");
ensureCurrency("DJF", "지부티 프랑", "Djibouti Franc", "프랑", 0);
if (!COUNTRIES.some((country) => country.iso === "DJ" || country.id === "djibouti")) addPlace("djibouti", "DJ", "지부티", "Djibouti", "🇩🇯", "DJF", ["지부티", "Djibouti"], "");
ensureCurrency("EGP", "이집트 파운드", "Egyptian Pound", "파운드", 2);
if (!COUNTRIES.some((country) => country.iso === "EG" || country.id === "egypt")) addPlace("egypt", "EG", "이집트", "Egypt", "🇪🇬", "EGP", ["이집트", "Egypt"], "");
ensureCurrency("ERN", "에리트레아 낙파", "Eritrean Nakfa", "낙파", 2);
if (!COUNTRIES.some((country) => country.iso === "ER" || country.id === "eritrea")) addPlace("eritrea", "ER", "에리트레아", "Eritrea", "🇪🇷", "ERN", ["에리트레아", "Eritrea"], "");
ensureCurrency("SZL", "에스와티니 릴랑게니", "Swazi Lilangeni", "릴랑게니", 2);
if (!COUNTRIES.some((country) => country.iso === "SZ" || country.id === "eswatini")) addPlace("eswatini", "SZ", "에스와티니", "Eswatini", "🇸🇿", "SZL", ["에스와티니", "Eswatini", "스와질란드", "swaziland"], "남아프리카 랜드도 함께 통용됩니다.");
ensureCurrency("ETB", "에티오피아 비르", "Ethiopian Birr", "비르", 2);
if (!COUNTRIES.some((country) => country.iso === "ET" || country.id === "ethiopia")) addPlace("ethiopia", "ET", "에티오피아", "Ethiopia", "🇪🇹", "ETB", ["에티오피아", "Ethiopia"], "");
ensureCurrency("GMD", "감비아 달라시", "Gambian Dalasi", "달라시", 2);
if (!COUNTRIES.some((country) => country.iso === "GM" || country.id === "gambia")) addPlace("gambia", "GM", "감비아", "Gambia", "🇬🇲", "GMD", ["감비아", "Gambia"], "");
ensureCurrency("GHS", "가나 세디", "Ghanaian Cedi", "세디", 2);
if (!COUNTRIES.some((country) => country.iso === "GH" || country.id === "ghana")) addPlace("ghana", "GH", "가나", "Ghana", "🇬🇭", "GHS", ["가나", "Ghana"], "");
ensureCurrency("GNF", "기니 프랑", "Guinean Franc", "프랑", 0);
if (!COUNTRIES.some((country) => country.iso === "GN" || country.id === "guinea")) addPlace("guinea", "GN", "기니", "Guinea", "🇬🇳", "GNF", ["기니", "Guinea"], "기니비사우와는 다른 나라입니다.");
ensureCurrency("KES", "케냐 실링", "Kenyan Shilling", "실링", 2);
if (!COUNTRIES.some((country) => country.iso === "KE" || country.id === "kenya")) addPlace("kenya", "KE", "케냐", "Kenya", "🇰🇪", "KES", ["케냐", "Kenya"], "");
ensureCurrency("LSL", "레소토 로티", "Lesotho Loti", "로티", 2);
if (!COUNTRIES.some((country) => country.iso === "LS" || country.id === "lesotho")) addPlace("lesotho", "LS", "레소토", "Lesotho", "🇱🇸", "LSL", ["레소토", "Lesotho"], "남아프리카 랜드도 함께 통용됩니다.");
ensureCurrency("LRD", "라이베리아 달러", "Liberian Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "LR" || country.id === "liberia")) addPlace("liberia", "LR", "라이베리아", "Liberia", "🇱🇷", "LRD", ["라이베리아", "Liberia"], "");
ensureCurrency("LYD", "리비아 디나르", "Libyan Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "LY" || country.id === "libya")) addPlace("libya", "LY", "리비아", "Libya", "🇱🇾", "LYD", ["리비아", "Libya"], "");
ensureCurrency("MGA", "마다가스카르 아리아리", "Malagasy Ariary", "아리아리", 2);
if (!COUNTRIES.some((country) => country.iso === "MG" || country.id === "madagascar")) addPlace("madagascar", "MG", "마다가스카르", "Madagascar", "🇲🇬", "MGA", ["마다가스카르", "Madagascar"], "");
ensureCurrency("MWK", "말라위 콰차", "Malawian Kwacha", "콰차", 2);
if (!COUNTRIES.some((country) => country.iso === "MW" || country.id === "malawi")) addPlace("malawi", "MW", "말라위", "Malawi", "🇲🇼", "MWK", ["말라위", "Malawi"], "");
ensureCurrency("MRU", "모리타니 우기야", "Mauritanian Ouguiya", "우기야", 2);
if (!COUNTRIES.some((country) => country.iso === "MR" || country.id === "mauritania")) addPlace("mauritania", "MR", "모리타니", "Mauritania", "🇲🇷", "MRU", ["모리타니", "Mauritania"], "");
ensureCurrency("MUR", "모리셔스 루피", "Mauritian Rupee", "루피", 2);
if (!COUNTRIES.some((country) => country.iso === "MU" || country.id === "mauritius")) addPlace("mauritius", "MU", "모리셔스", "Mauritius", "🇲🇺", "MUR", ["모리셔스", "Mauritius"], "");
ensureCurrency("MAD", "모로코 디르함", "Moroccan Dirham", "디르함", 2);
if (!COUNTRIES.some((country) => country.iso === "MA" || country.id === "morocco")) addPlace("morocco", "MA", "모로코", "Morocco", "🇲🇦", "MAD", ["모로코", "Morocco"], "");
ensureCurrency("MZN", "모잠비크 메티칼", "Mozambican Metical", "메티칼", 2);
if (!COUNTRIES.some((country) => country.iso === "MZ" || country.id === "mozambique")) addPlace("mozambique", "MZ", "모잠비크", "Mozambique", "🇲🇿", "MZN", ["모잠비크", "Mozambique"], "");
ensureCurrency("NAD", "나미비아 달러", "Namibian Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "NA" || country.id === "namibia")) addPlace("namibia", "NA", "나미비아", "Namibia", "🇳🇦", "NAD", ["나미비아", "Namibia"], "남아프리카 랜드도 함께 통용됩니다.");
ensureCurrency("NGN", "나이지리아 나이라", "Nigerian Naira", "나이라", 2);
if (!COUNTRIES.some((country) => country.iso === "NG" || country.id === "nigeria")) addPlace("nigeria", "NG", "나이지리아", "Nigeria", "🇳🇬", "NGN", ["나이지리아", "Nigeria"], "");
ensureCurrency("RWF", "르완다 프랑", "Rwandan Franc", "프랑", 0);
if (!COUNTRIES.some((country) => country.iso === "RW" || country.id === "rwanda")) addPlace("rwanda", "RW", "르완다", "Rwanda", "🇷🇼", "RWF", ["르완다", "Rwanda"], "");
ensureCurrency("STN", "상투메 도브라", "Sao Tome Dobra", "도브라", 2);
if (!COUNTRIES.some((country) => country.iso === "ST" || country.id === "saotome")) addPlace("saotome", "ST", "상투메 프린시페", "Sao Tome and Principe", "🇸🇹", "STN", ["상투메 프린시페", "Sao Tome and Principe", "상투메", "sao tome"], "");
ensureCurrency("SCR", "세이셸 루피", "Seychellois Rupee", "루피", 2);
if (!COUNTRIES.some((country) => country.iso === "SC" || country.id === "seychelles")) addPlace("seychelles", "SC", "세이셸", "Seychelles", "🇸🇨", "SCR", ["세이셸", "Seychelles"], "");
ensureCurrency("SLE", "시에라리온 리온", "Sierra Leonean Leone", "리온", 2);
if (!COUNTRIES.some((country) => country.iso === "SL" || country.id === "sierraleone")) addPlace("sierraleone", "SL", "시에라리온", "Sierra Leone", "🇸🇱", "SLE", ["시에라리온", "Sierra Leone"], "");
ensureCurrency("SOS", "소말리아 실링", "Somali Shilling", "실링", 2);
if (!COUNTRIES.some((country) => country.iso === "SO" || country.id === "somalia")) addPlace("somalia", "SO", "소말리아", "Somalia", "🇸🇴", "SOS", ["소말리아", "Somalia"], "");
ensureCurrency("ZAR", "남아프리카 랜드", "South African Rand", "랜드", 2);
if (!COUNTRIES.some((country) => country.iso === "ZA" || country.id === "southafrica")) addPlace("southafrica", "ZA", "남아프리카공화국", "South Africa", "🇿🇦", "ZAR", ["남아프리카공화국", "South Africa", "남아프리카", "남아공", "south africa"], "");
ensureCurrency("SSP", "남수단 파운드", "South Sudanese Pound", "파운드", 2);
if (!COUNTRIES.some((country) => country.iso === "SS" || country.id === "southsudan")) addPlace("southsudan", "SS", "남수단", "South Sudan", "🇸🇸", "SSP", ["남수단", "South Sudan"], "");
ensureCurrency("SDG", "수단 파운드", "Sudanese Pound", "파운드", 2);
if (!COUNTRIES.some((country) => country.iso === "SD" || country.id === "sudan")) addPlace("sudan", "SD", "수단", "Sudan", "🇸🇩", "SDG", ["수단", "Sudan"], "남수단과는 다른 나라입니다.");
ensureCurrency("TZS", "탄자니아 실링", "Tanzanian Shilling", "실링", 2);
if (!COUNTRIES.some((country) => country.iso === "TZ" || country.id === "tanzania")) addPlace("tanzania", "TZ", "탄자니아", "Tanzania", "🇹🇿", "TZS", ["탄자니아", "Tanzania"], "");
ensureCurrency("TND", "튀니지 디나르", "Tunisian Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "TN" || country.id === "tunisia")) addPlace("tunisia", "TN", "튀니지", "Tunisia", "🇹🇳", "TND", ["튀니지", "Tunisia"], "");
ensureCurrency("UGX", "우간다 실링", "Ugandan Shilling", "실링", 0);
if (!COUNTRIES.some((country) => country.iso === "UG" || country.id === "uganda")) addPlace("uganda", "UG", "우간다", "Uganda", "🇺🇬", "UGX", ["우간다", "Uganda"], "");
ensureCurrency("ZMW", "잠비아 콰차", "Zambian Kwacha", "콰차", 2);
if (!COUNTRIES.some((country) => country.iso === "ZM" || country.id === "zambia")) addPlace("zambia", "ZM", "잠비아", "Zambia", "🇿🇲", "ZMW", ["잠비아", "Zambia"], "");
ensureCurrency("ZWG", "짐바브웨 골드", "Zimbabwe Gold", "골드", 2);
if (!COUNTRIES.some((country) => country.iso === "ZW" || country.id === "zimbabwe")) addPlace("zimbabwe", "ZW", "짐바브웨", "Zimbabwe", "🇿🇼", "ZWG", ["짐바브웨", "Zimbabwe"], "공식 화폐는 짐바브웨 골드(ZiG)입니다.");
ensureCurrency("ARS", "아르헨티나 페소", "Argentine Peso", "페소", 2);
if (!COUNTRIES.some((country) => country.iso === "AR" || country.id === "argentina")) addPlace("argentina", "AR", "아르헨티나", "Argentina", "🇦🇷", "ARS", ["아르헨티나", "Argentina"], "");
ensureCurrency("BSD", "바하마 달러", "Bahamian Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "BS" || country.id === "bahamas")) addPlace("bahamas", "BS", "바하마", "Bahamas", "🇧🇸", "BSD", ["바하마", "Bahamas"], "");
ensureCurrency("BBD", "바베이도스 달러", "Barbadian Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "BB" || country.id === "barbados")) addPlace("barbados", "BB", "바베이도스", "Barbados", "🇧🇧", "BBD", ["바베이도스", "Barbados"], "");
ensureCurrency("BZD", "벨리즈 달러", "Belize Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "BZ" || country.id === "belize")) addPlace("belize", "BZ", "벨리즈", "Belize", "🇧🇿", "BZD", ["벨리즈", "Belize"], "");
ensureCurrency("BOB", "볼리비아노", "Bolivian Boliviano", "볼리비아노", 2);
if (!COUNTRIES.some((country) => country.iso === "BO" || country.id === "bolivia")) addPlace("bolivia", "BO", "볼리비아", "Bolivia", "🇧🇴", "BOB", ["볼리비아", "Bolivia"], "");
ensureCurrency("BRL", "브라질 헤알", "Brazilian Real", "헤알", 2);
if (!COUNTRIES.some((country) => country.iso === "BR" || country.id === "brazil")) addPlace("brazil", "BR", "브라질", "Brazil", "🇧🇷", "BRL", ["브라질", "Brazil"], "");
ensureCurrency("CLP", "칠레 페소", "Chilean Peso", "페소", 0);
if (!COUNTRIES.some((country) => country.iso === "CL" || country.id === "chile")) addPlace("chile", "CL", "칠레", "Chile", "🇨🇱", "CLP", ["칠레", "Chile"], "");
ensureCurrency("COP", "콜롬비아 페소", "Colombian Peso", "페소", 2);
if (!COUNTRIES.some((country) => country.iso === "CO" || country.id === "colombia")) addPlace("colombia", "CO", "콜롬비아", "Colombia", "🇨🇴", "COP", ["콜롬비아", "Colombia"], "");
ensureCurrency("CRC", "코스타리카 콜론", "Costa Rican Colon", "콜론", 2);
if (!COUNTRIES.some((country) => country.iso === "CR" || country.id === "costarica")) addPlace("costarica", "CR", "코스타리카", "Costa Rica", "🇨🇷", "CRC", ["코스타리카", "Costa Rica"], "");
ensureCurrency("CUP", "쿠바 페소", "Cuban Peso", "페소", 2);
if (!COUNTRIES.some((country) => country.iso === "CU" || country.id === "cuba")) addPlace("cuba", "CU", "쿠바", "Cuba", "🇨🇺", "CUP", ["쿠바", "Cuba"], "");
ensureCurrency("DOP", "도미니카 페소", "Dominican Peso", "페소", 2);
if (!COUNTRIES.some((country) => country.iso === "DO" || country.id === "dominican")) addPlace("dominican", "DO", "도미니카공화국", "Dominican Republic", "🇩🇴", "DOP", ["도미니카공화국", "Dominican Republic", "도미니카 공화국", "dominican republic"], "도미니카국과는 다른 나라입니다.");
ensureCurrency("GTQ", "과테말라 케트살", "Guatemalan Quetzal", "케트살", 2);
if (!COUNTRIES.some((country) => country.iso === "GT" || country.id === "guatemala")) addPlace("guatemala", "GT", "과테말라", "Guatemala", "🇬🇹", "GTQ", ["과테말라", "Guatemala"], "");
ensureCurrency("GYD", "가이아나 달러", "Guyanese Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "GY" || country.id === "guyana")) addPlace("guyana", "GY", "가이아나", "Guyana", "🇬🇾", "GYD", ["가이아나", "Guyana"], "");
ensureCurrency("HTG", "아이티 구르드", "Haitian Gourde", "구르드", 2);
if (!COUNTRIES.some((country) => country.iso === "HT" || country.id === "haiti")) addPlace("haiti", "HT", "아이티", "Haiti", "🇭🇹", "HTG", ["아이티", "Haiti"], "");
ensureCurrency("HNL", "온두라스 렘피라", "Honduran Lempira", "렘피라", 2);
if (!COUNTRIES.some((country) => country.iso === "HN" || country.id === "honduras")) addPlace("honduras", "HN", "온두라스", "Honduras", "🇭🇳", "HNL", ["온두라스", "Honduras"], "");
ensureCurrency("JMD", "자메이카 달러", "Jamaican Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "JM" || country.id === "jamaica")) addPlace("jamaica", "JM", "자메이카", "Jamaica", "🇯🇲", "JMD", ["자메이카", "Jamaica"], "");
ensureCurrency("NIO", "니카라과 코르도바", "Nicaraguan Cordoba", "코르도바", 2);
if (!COUNTRIES.some((country) => country.iso === "NI" || country.id === "nicaragua")) addPlace("nicaragua", "NI", "니카라과", "Nicaragua", "🇳🇮", "NIO", ["니카라과", "Nicaragua"], "");
ensureCurrency("PYG", "파라과이 과라니", "Paraguayan Guarani", "과라니", 0);
if (!COUNTRIES.some((country) => country.iso === "PY" || country.id === "paraguay")) addPlace("paraguay", "PY", "파라과이", "Paraguay", "🇵🇾", "PYG", ["파라과이", "Paraguay"], "");
ensureCurrency("PEN", "페루 솔", "Peruvian Sol", "솔", 2);
if (!COUNTRIES.some((country) => country.iso === "PE" || country.id === "peru")) addPlace("peru", "PE", "페루", "Peru", "🇵🇪", "PEN", ["페루", "Peru"], "");
ensureCurrency("SRD", "수리남 달러", "Surinamese Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "SR" || country.id === "suriname")) addPlace("suriname", "SR", "수리남", "Suriname", "🇸🇷", "SRD", ["수리남", "Suriname"], "");
ensureCurrency("TTD", "트리니다드 토바고 달러", "Trinidad and Tobago Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "TT" || country.id === "trinidad")) addPlace("trinidad", "TT", "트리니다드 토바고", "Trinidad and Tobago", "🇹🇹", "TTD", ["트리니다드 토바고", "Trinidad and Tobago", "트리니다드", "trinidad"], "");
ensureCurrency("UYU", "우루과이 페소", "Uruguayan Peso", "페소", 2);
if (!COUNTRIES.some((country) => country.iso === "UY" || country.id === "uruguay")) addPlace("uruguay", "UY", "우루과이", "Uruguay", "🇺🇾", "UYU", ["우루과이", "Uruguay"], "");
ensureCurrency("VES", "베네수엘라 볼리바르", "Venezuelan Bolivar", "볼리바르", 2);
if (!COUNTRIES.some((country) => country.iso === "VE" || country.id === "venezuela")) addPlace("venezuela", "VE", "베네수엘라", "Venezuela", "🇻🇪", "VES", ["베네수엘라", "Venezuela"], "");
ensureCurrency("AFN", "아프가니스탄 아프가니", "Afghan Afghani", "아프가니", 2);
if (!COUNTRIES.some((country) => country.iso === "AF" || country.id === "afghanistan")) addPlace("afghanistan", "AF", "아프가니스탄", "Afghanistan", "🇦🇫", "AFN", ["아프가니스탄", "Afghanistan"], "");
ensureCurrency("AMD", "아르메니아 드람", "Armenian Dram", "드람", 2);
if (!COUNTRIES.some((country) => country.iso === "AM" || country.id === "armenia")) addPlace("armenia", "AM", "아르메니아", "Armenia", "🇦🇲", "AMD", ["아르메니아", "Armenia"], "");
ensureCurrency("AZN", "아제르바이잔 마나트", "Azerbaijani Manat", "마나트", 2);
if (!COUNTRIES.some((country) => country.iso === "AZ" || country.id === "azerbaijan")) addPlace("azerbaijan", "AZ", "아제르바이잔", "Azerbaijan", "🇦🇿", "AZN", ["아제르바이잔", "Azerbaijan"], "");
ensureCurrency("BHD", "바레인 디나르", "Bahraini Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "BH" || country.id === "bahrain")) addPlace("bahrain", "BH", "바레인", "Bahrain", "🇧🇭", "BHD", ["바레인", "Bahrain"], "");
ensureCurrency("BDT", "방글라데시 타카", "Bangladeshi Taka", "타카", 2);
if (!COUNTRIES.some((country) => country.iso === "BD" || country.id === "bangladesh")) addPlace("bangladesh", "BD", "방글라데시", "Bangladesh", "🇧🇩", "BDT", ["방글라데시", "Bangladesh"], "");
ensureCurrency("BTN", "부탄 눌트럼", "Bhutanese Ngultrum", "눌트럼", 2);
if (!COUNTRIES.some((country) => country.iso === "BT" || country.id === "bhutan")) addPlace("bhutan", "BT", "부탄", "Bhutan", "🇧🇹", "BTN", ["부탄", "Bhutan"], "인도 루피도 함께 통용됩니다.");
ensureCurrency("GEL", "조지아 라리", "Georgian Lari", "라리", 2);
if (!COUNTRIES.some((country) => country.iso === "GE" || country.id === "georgia")) addPlace("georgia", "GE", "조지아", "Georgia", "🇬🇪", "GEL", ["조지아", "Georgia", "그루지야"], "");
ensureCurrency("IRR", "이란 리알", "Iranian Rial", "리알", 2);
if (!COUNTRIES.some((country) => country.iso === "IR" || country.id === "iran")) addPlace("iran", "IR", "이란", "Iran", "🇮🇷", "IRR", ["이란", "Iran"], "");
ensureCurrency("IQD", "이라크 디나르", "Iraqi Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "IQ" || country.id === "iraq")) addPlace("iraq", "IQ", "이라크", "Iraq", "🇮🇶", "IQD", ["이라크", "Iraq"], "");
ensureCurrency("ILS", "이스라엘 셰켈", "Israeli Shekel", "셰켈", 2);
if (!COUNTRIES.some((country) => country.iso === "IL" || country.id === "israel")) addPlace("israel", "IL", "이스라엘", "Israel", "🇮🇱", "ILS", ["이스라엘", "Israel"], "");
ensureCurrency("JOD", "요르단 디나르", "Jordanian Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "JO" || country.id === "jordan")) addPlace("jordan", "JO", "요르단", "Jordan", "🇯🇴", "JOD", ["요르단", "Jordan"], "");
ensureCurrency("KZT", "카자흐스탄 텡게", "Kazakhstani Tenge", "텡게", 2);
if (!COUNTRIES.some((country) => country.iso === "KZ" || country.id === "kazakhstan")) addPlace("kazakhstan", "KZ", "카자흐스탄", "Kazakhstan", "🇰🇿", "KZT", ["카자흐스탄", "Kazakhstan"], "");
ensureCurrency("KWD", "쿠웨이트 디나르", "Kuwaiti Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "KW" || country.id === "kuwait")) addPlace("kuwait", "KW", "쿠웨이트", "Kuwait", "🇰🇼", "KWD", ["쿠웨이트", "Kuwait"], "");
ensureCurrency("KGS", "키르기스스탄 솜", "Kyrgyzstani Som", "솜", 2);
if (!COUNTRIES.some((country) => country.iso === "KG" || country.id === "kyrgyzstan")) addPlace("kyrgyzstan", "KG", "키르기스스탄", "Kyrgyzstan", "🇰🇬", "KGS", ["키르기스스탄", "Kyrgyzstan"], "");
ensureCurrency("LBP", "레바논 파운드", "Lebanese Pound", "파운드", 2);
if (!COUNTRIES.some((country) => country.iso === "LB" || country.id === "lebanon")) addPlace("lebanon", "LB", "레바논", "Lebanon", "🇱🇧", "LBP", ["레바논", "Lebanon"], "");
ensureCurrency("MVR", "몰디브 루피야", "Maldivian Rufiyaa", "루피야", 2);
if (!COUNTRIES.some((country) => country.iso === "MV" || country.id === "maldives")) addPlace("maldives", "MV", "몰디브", "Maldives", "🇲🇻", "MVR", ["몰디브", "Maldives"], "");
ensureCurrency("MNT", "몽골 투그릭", "Mongolian Tugrik", "투그릭", 2);
if (!COUNTRIES.some((country) => country.iso === "MN" || country.id === "mongolia")) addPlace("mongolia", "MN", "몽골", "Mongolia", "🇲🇳", "MNT", ["몽골", "Mongolia"], "");
ensureCurrency("MMK", "미얀마 차트", "Myanmar Kyat", "차트", 2);
if (!COUNTRIES.some((country) => country.iso === "MM" || country.id === "myanmar")) addPlace("myanmar", "MM", "미얀마", "Myanmar", "🇲🇲", "MMK", ["미얀마", "Myanmar", "버마", "burma"], "");
ensureCurrency("NPR", "네팔 루피", "Nepalese Rupee", "루피", 2);
if (!COUNTRIES.some((country) => country.iso === "NP" || country.id === "nepal")) addPlace("nepal", "NP", "네팔", "Nepal", "🇳🇵", "NPR", ["네팔", "Nepal"], "");
ensureCurrency("KPW", "북한 원", "North Korean Won", "원", 2);
if (!COUNTRIES.some((country) => country.iso === "KP" || country.id === "northkorea")) addPlace("northkorea", "KP", "북한", "North Korea", "🇰🇵", "KPW", ["북한", "North Korea", "조선", "north korea", "dprk"], "공개된 시장 환율이 없어 원화 계산은 제공하지 않습니다.");
ensureCurrency("OMR", "오만 리알", "Omani Rial", "리알", 2);
if (!COUNTRIES.some((country) => country.iso === "OM" || country.id === "oman")) addPlace("oman", "OM", "오만", "Oman", "🇴🇲", "OMR", ["오만", "Oman"], "");
ensureCurrency("PKR", "파키스탄 루피", "Pakistani Rupee", "루피", 2);
if (!COUNTRIES.some((country) => country.iso === "PK" || country.id === "pakistan")) addPlace("pakistan", "PK", "파키스탄", "Pakistan", "🇵🇰", "PKR", ["파키스탄", "Pakistan"], "");
ensureCurrency("ILS", "이스라엘 셰켈", "Israeli Shekel", "셰켈", 2);
if (!COUNTRIES.some((country) => country.iso === "PS" || country.id === "palestine")) addPlace("palestine", "PS", "팔레스타인", "Palestine", "🇵🇸", "ILS", ["팔레스타인", "Palestine"], "주로 이스라엘 셰켈이 쓰이고, 일부 지역에서는 요르단 디나르도 씁니다.");
ensureCurrency("QAR", "카타르 리얄", "Qatari Riyal", "리얄", 2);
if (!COUNTRIES.some((country) => country.iso === "QA" || country.id === "qatar")) addPlace("qatar", "QA", "카타르", "Qatar", "🇶🇦", "QAR", ["카타르", "Qatar"], "");
ensureCurrency("SAR", "사우디 리얄", "Saudi Riyal", "리얄", 2);
if (!COUNTRIES.some((country) => country.iso === "SA" || country.id === "saudi")) addPlace("saudi", "SA", "사우디아라비아", "Saudi Arabia", "🇸🇦", "SAR", ["사우디아라비아", "Saudi Arabia", "사우디", "saudi"], "");
ensureCurrency("LKR", "스리랑카 루피", "Sri Lankan Rupee", "루피", 2);
if (!COUNTRIES.some((country) => country.iso === "LK" || country.id === "srilanka")) addPlace("srilanka", "LK", "스리랑카", "Sri Lanka", "🇱🇰", "LKR", ["스리랑카", "Sri Lanka"], "");
ensureCurrency("SYP", "시리아 파운드", "Syrian Pound", "파운드", 2);
if (!COUNTRIES.some((country) => country.iso === "SY" || country.id === "syria")) addPlace("syria", "SY", "시리아", "Syria", "🇸🇾", "SYP", ["시리아", "Syria"], "");
ensureCurrency("TJS", "타지키스탄 소모니", "Tajikistani Somoni", "소모니", 2);
if (!COUNTRIES.some((country) => country.iso === "TJ" || country.id === "tajikistan")) addPlace("tajikistan", "TJ", "타지키스탄", "Tajikistan", "🇹🇯", "TJS", ["타지키스탄", "Tajikistan"], "");
ensureCurrency("TMT", "투르크메니스탄 마나트", "Turkmenistani Manat", "마나트", 2);
if (!COUNTRIES.some((country) => country.iso === "TM" || country.id === "turkmenistan")) addPlace("turkmenistan", "TM", "투르크메니스탄", "Turkmenistan", "🇹🇲", "TMT", ["투르크메니스탄", "Turkmenistan"], "");
ensureCurrency("UZS", "우즈베키스탄 숨", "Uzbekistani Som", "숨", 2);
if (!COUNTRIES.some((country) => country.iso === "UZ" || country.id === "uzbekistan")) addPlace("uzbekistan", "UZ", "우즈베키스탄", "Uzbekistan", "🇺🇿", "UZS", ["우즈베키스탄", "Uzbekistan"], "");
ensureCurrency("YER", "예멘 리알", "Yemeni Rial", "리알", 2);
if (!COUNTRIES.some((country) => country.iso === "YE" || country.id === "yemen")) addPlace("yemen", "YE", "예멘", "Yemen", "🇾🇪", "YER", ["예멘", "Yemen"], "");
ensureCurrency("ALL", "알바니아 레크", "Albanian Lek", "레크", 2);
if (!COUNTRIES.some((country) => country.iso === "AL" || country.id === "albania")) addPlace("albania", "AL", "알바니아", "Albania", "🇦🇱", "ALL", ["알바니아", "Albania"], "");
ensureCurrency("BYN", "벨라루스 루블", "Belarusian Ruble", "루블", 2);
if (!COUNTRIES.some((country) => country.iso === "BY" || country.id === "belarus")) addPlace("belarus", "BY", "벨라루스", "Belarus", "🇧🇾", "BYN", ["벨라루스", "Belarus"], "");
ensureCurrency("BAM", "태환 마르카", "Bosnia Convertible Mark", "마르카", 2);
if (!COUNTRIES.some((country) => country.iso === "BA" || country.id === "bosnia")) addPlace("bosnia", "BA", "보스니아 헤르체고비나", "Bosnia and Herzegovina", "🇧🇦", "BAM", ["보스니아 헤르체고비나", "Bosnia and Herzegovina", "보스니아", "bosnia"], "");
ensureCurrency("ISK", "아이슬란드 크로나", "Icelandic Krona", "크로나", 0);
if (!COUNTRIES.some((country) => country.iso === "IS" || country.id === "iceland")) addPlace("iceland", "IS", "아이슬란드", "Iceland", "🇮🇸", "ISK", ["아이슬란드", "Iceland"], "");
ensureCurrency("MDL", "몰도바 레우", "Moldovan Leu", "레우", 2);
if (!COUNTRIES.some((country) => country.iso === "MD" || country.id === "moldova")) addPlace("moldova", "MD", "몰도바", "Moldova", "🇲🇩", "MDL", ["몰도바", "Moldova"], "");
ensureCurrency("MKD", "북마케도니아 데나르", "Macedonian Denar", "데나르", 2);
if (!COUNTRIES.some((country) => country.iso === "MK" || country.id === "northmacedonia")) addPlace("northmacedonia", "MK", "북마케도니아", "North Macedonia", "🇲🇰", "MKD", ["북마케도니아", "North Macedonia", "마케도니아", "macedonia"], "");
ensureCurrency("PLN", "폴란드 즈워티", "Polish Zloty", "즈워티", 2);
if (!COUNTRIES.some((country) => country.iso === "PL" || country.id === "poland")) addPlace("poland", "PL", "폴란드", "Poland", "🇵🇱", "PLN", ["폴란드", "Poland"], "");
ensureCurrency("RON", "루마니아 레우", "Romanian Leu", "레우", 2);
if (!COUNTRIES.some((country) => country.iso === "RO" || country.id === "romania")) addPlace("romania", "RO", "루마니아", "Romania", "🇷🇴", "RON", ["루마니아", "Romania"], "");
ensureCurrency("RUB", "러시아 루블", "Russian Ruble", "루블", 2);
if (!COUNTRIES.some((country) => country.iso === "RU" || country.id === "russia")) addPlace("russia", "RU", "러시아", "Russia", "🇷🇺", "RUB", ["러시아", "Russia"], "");
ensureCurrency("RSD", "세르비아 디나르", "Serbian Dinar", "디나르", 2);
if (!COUNTRIES.some((country) => country.iso === "RS" || country.id === "serbia")) addPlace("serbia", "RS", "세르비아", "Serbia", "🇷🇸", "RSD", ["세르비아", "Serbia"], "");
ensureCurrency("SEK", "스웨덴 크로나", "Swedish Krona", "크로나", 2);
if (!COUNTRIES.some((country) => country.iso === "SE" || country.id === "sweden")) addPlace("sweden", "SE", "스웨덴", "Sweden", "🇸🇪", "SEK", ["스웨덴", "Sweden", "sweden", "sverige"], "");
ensureCurrency("UAH", "우크라이나 흐리우냐", "Ukrainian Hryvnia", "흐리우냐", 2);
if (!COUNTRIES.some((country) => country.iso === "UA" || country.id === "ukraine")) addPlace("ukraine", "UA", "우크라이나", "Ukraine", "🇺🇦", "UAH", ["우크라이나", "Ukraine"], "");
ensureCurrency("FJD", "피지 달러", "Fijian Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "FJ" || country.id === "fiji")) addPlace("fiji", "FJ", "피지", "Fiji", "🇫🇯", "FJD", ["피지", "Fiji"], "");
ensureCurrency("PGK", "파푸아뉴기니 키나", "Papua New Guinean Kina", "키나", 2);
if (!COUNTRIES.some((country) => country.iso === "PG" || country.id === "papua")) addPlace("papua", "PG", "파푸아뉴기니", "Papua New Guinea", "🇵🇬", "PGK", ["파푸아뉴기니", "Papua New Guinea", "파푸아", "papua"], "");
ensureCurrency("WST", "사모아 탈라", "Samoan Tala", "탈라", 2);
if (!COUNTRIES.some((country) => country.iso === "WS" || country.id === "samoa")) addPlace("samoa", "WS", "사모아", "Samoa", "🇼🇸", "WST", ["사모아", "Samoa"], "");
ensureCurrency("SBD", "솔로몬 제도 달러", "Solomon Islands Dollar", "달러", 2);
if (!COUNTRIES.some((country) => country.iso === "SB" || country.id === "solomon")) addPlace("solomon", "SB", "솔로몬 제도", "Solomon Islands", "🇸🇧", "SBD", ["솔로몬 제도", "Solomon Islands", "솔로몬", "solomon"], "");
ensureCurrency("TOP", "통가 팡가", "Tongan Paanga", "팡가", 2);
if (!COUNTRIES.some((country) => country.iso === "TO" || country.id === "tonga")) addPlace("tonga", "TO", "통가", "Tonga", "🇹🇴", "TOP", ["통가", "Tonga"], "");
ensureCurrency("VUV", "바누아투 바투", "Vanuatu Vatu", "바투", 0);
if (!COUNTRIES.some((country) => country.iso === "VU" || country.id === "vanuatu")) addPlace("vanuatu", "VU", "바누아투", "Vanuatu", "🇻🇺", "VUV", ["바누아투", "Vanuatu"], "");

const DAY_USD = {
  algeria: [1.3, 0.4, 5.0, 0.45],
  angola: [1.3, 0.4, 5.0, 0.45],
  botswana: [1.3, 0.4, 5.0, 0.45],
  burundi: [1.0, 0.3, 3.5, 0.35],
  caboverde: [2.2, 0.8, 9.0, 1.0],
  comoros: [2.2, 0.8, 9.0, 1.0],
  drcongo: [2.2, 0.8, 9.0, 1.0],
  djibouti: [2.2, 0.8, 9.0, 1.0],
  egypt: [1.3, 0.4, 5.0, 0.45],
  eritrea: [2.2, 0.8, 9.0, 1.0],
  eswatini: [1.3, 0.4, 5.0, 0.45],
  ethiopia: [1.0, 0.3, 3.5, 0.35],
  gambia: [1.3, 0.4, 5.0, 0.45],
  ghana: [1.3, 0.4, 5.0, 0.45],
  guinea: [2.2, 0.8, 9.0, 1.0],
  kenya: [1.3, 0.4, 5.0, 0.45],
  lesotho: [1.3, 0.4, 5.0, 0.45],
  liberia: [1.3, 0.4, 5.0, 0.45],
  libya: [2.2, 0.8, 9.0, 1.0],
  madagascar: [1.0, 0.3, 3.5, 0.35],
  malawi: [1.0, 0.3, 3.5, 0.35],
  mauritania: [2.2, 0.8, 9.0, 1.0],
  mauritius: [3.5, 1.2, 14.0, 2.0],
  morocco: [1.3, 0.4, 5.0, 0.45],
  mozambique: [1.0, 0.3, 3.5, 0.35],
  namibia: [1.3, 0.4, 5.0, 0.45],
  nigeria: [1.0, 0.3, 3.5, 0.35],
  rwanda: [1.0, 0.3, 3.5, 0.35],
  saotome: [2.2, 0.8, 9.0, 1.0],
  seychelles: [3.5, 1.2, 14.0, 2.0],
  sierraleone: [2.2, 0.8, 9.0, 1.0],
  somalia: [1.0, 0.3, 3.5, 0.35],
  southafrica: [3.5, 1.2, 14.0, 2.0],
  southsudan: [1.0, 0.3, 3.5, 0.35],
  sudan: [1.0, 0.3, 3.5, 0.35],
  tanzania: [1.0, 0.3, 3.5, 0.35],
  tunisia: [1.3, 0.4, 5.0, 0.45],
  uganda: [1.0, 0.3, 3.5, 0.35],
  zambia: [1.0, 0.3, 3.5, 0.35],
  zimbabwe: [1.0, 0.3, 3.5, 0.35],
  argentina: [2.2, 0.8, 9.0, 1.0],
  bahamas: [3.5, 1.2, 14.0, 2.0],
  barbados: [3.5, 1.2, 14.0, 2.0],
  belize: [3.5, 1.2, 14.0, 2.0],
  bolivia: [1.3, 0.4, 5.0, 0.45],
  brazil: [2.2, 0.8, 9.0, 1.0],
  chile: [2.2, 0.8, 9.0, 1.0],
  colombia: [2.2, 0.8, 9.0, 1.0],
  costarica: [2.2, 0.8, 9.0, 1.0],
  cuba: [2.2, 0.8, 9.0, 1.0],
  dominican: [2.2, 0.8, 9.0, 1.0],
  guatemala: [1.3, 0.4, 5.0, 0.45],
  guyana: [1.3, 0.4, 5.0, 0.45],
  haiti: [1.3, 0.4, 5.0, 0.45],
  honduras: [1.3, 0.4, 5.0, 0.45],
  jamaica: [2.2, 0.8, 9.0, 1.0],
  nicaragua: [1.3, 0.4, 5.0, 0.45],
  paraguay: [1.3, 0.4, 5.0, 0.45],
  peru: [2.2, 0.8, 9.0, 1.0],
  suriname: [2.2, 0.8, 9.0, 1.0],
  trinidad: [2.2, 0.8, 9.0, 1.0],
  uruguay: [2.2, 0.8, 9.0, 1.0],
  venezuela: [2.2, 0.8, 9.0, 1.0],
  afghanistan: [1.0, 0.3, 3.5, 0.35],
  armenia: [2.2, 0.8, 9.0, 1.0],
  azerbaijan: [2.2, 0.8, 9.0, 1.0],
  bahrain: [3.5, 1.2, 14.0, 2.0],
  bangladesh: [1.0, 0.3, 3.5, 0.35],
  bhutan: [2.2, 0.8, 9.0, 1.0],
  georgia: [2.2, 0.8, 9.0, 1.0],
  iran: [2.2, 0.8, 9.0, 1.0],
  iraq: [2.2, 0.8, 9.0, 1.0],
  israel: [4.5, 1.8, 22.0, 3.5],
  jordan: [2.2, 0.8, 9.0, 1.0],
  kazakhstan: [2.2, 0.8, 9.0, 1.0],
  kuwait: [3.5, 1.2, 14.0, 2.0],
  kyrgyzstan: [1.0, 0.3, 3.5, 0.35],
  lebanon: [2.2, 0.8, 9.0, 1.0],
  maldives: [2.2, 0.8, 9.0, 1.0],
  mongolia: [2.2, 0.8, 9.0, 1.0],
  myanmar: [1.0, 0.3, 3.5, 0.35],
  nepal: [1.0, 0.3, 3.5, 0.35],
  oman: [3.5, 1.2, 14.0, 2.0],
  pakistan: [1.0, 0.3, 3.5, 0.35],
  palestine: [2.2, 0.8, 9.0, 1.0],
  qatar: [3.5, 1.2, 14.0, 2.0],
  saudi: [3.5, 1.2, 14.0, 2.0],
  srilanka: [2.2, 0.8, 9.0, 1.0],
  syria: [2.2, 0.8, 9.0, 1.0],
  tajikistan: [1.0, 0.3, 3.5, 0.35],
  turkmenistan: [2.2, 0.8, 9.0, 1.0],
  uzbekistan: [2.2, 0.8, 9.0, 1.0],
  yemen: [1.0, 0.3, 3.5, 0.35],
  albania: [3.5, 1.2, 14.0, 2.0],
  belarus: [2.2, 0.8, 9.0, 1.0],
  bosnia: [3.5, 1.2, 14.0, 2.0],
  iceland: [4.5, 1.8, 22.0, 3.5],
  moldova: [3.5, 1.2, 14.0, 2.0],
  northmacedonia: [3.5, 1.2, 14.0, 2.0],
  poland: [3.5, 1.2, 14.0, 2.0],
  romania: [3.5, 1.2, 14.0, 2.0],
  russia: [3.5, 1.2, 14.0, 2.0],
  serbia: [3.5, 1.2, 14.0, 2.0],
  sweden: [4.5, 1.8, 22.0, 3.5],
  ukraine: [3.5, 1.2, 14.0, 2.0],
  fiji: [4.5, 1.8, 22.0, 3.5],
  papua: [2.2, 0.8, 9.0, 1.0],
  samoa: [2.2, 0.8, 9.0, 1.0],
  solomon: [2.2, 0.8, 9.0, 1.0],
  tonga: [2.2, 0.8, 9.0, 1.0],
  vanuatu: [2.2, 0.8, 9.0, 1.0],
};

Object.entries(DAY_USD).forEach(([id, costs]) => {
  const country = COUNTRIES.find((item) => item.id === id);
  const perUsd = EXTRA_RATES[country && country.code];
  if (!country || !perUsd || (country.prices && country.prices.length)) return;
  const local = (usd) => {
    const raw = usd * perUsd;
    if (country.decimals === 0 || raw >= 100) return Math.max(1, Math.round(raw));
    if (raw >= 10) return Math.round(raw * 10) / 10;
    return Math.round(raw * 100) / 100;
  };
  const [coffee, water, meal, transit] = costs;
  const transitName = ["egypt", "brazil", "chile", "argentina", "russia", "ukraine", "sweden", "poland", "iran"].includes(id) ? "지하철 1회" : "버스 1회";
  country.prices = [
    { name: "커피", amount: local(coffee) },
    { name: "생수", amount: local(water) },
    { name: "점심 1인", amount: local(meal) },
    { name: transitName, amount: local(transit) },
  ];
  if (!country.note) {
    country.note = `${country.name}에서는 일상적으로 ${country.currencyKo}를 씁니다. 아래 금액은 여행자가 흔히 만나는 음료, 식사, 교통의 대략적인 가격입니다.`;
  }
});

const MORE_RATES = {
  EUR: 0.880919,
  XOF: 578.234411,
  XAF: 578.234411,
  USD: 1,
  DKK: 6.588628,
  AUD: 1.430311,
  NZD: 1.769959,
  XCD: 2.7,
  CHF: 0.833557,
  XPF: 105.192671,
  XCG: 1.79,
  BND: 1.27816,
};

const MORE_USD = {
  low: [1.0, 0.3, 3.5, 0.4],
  lower: [1.4, 0.4, 5.5, 0.5],
  mid: [2.4, 0.9, 11, 1.4],
  upper: [3.2, 1.2, 15, 2.4],
  high: [4.2, 1.6, 20, 3.2],
};

function moreBand(country) {
  if (["XOF", "XAF"].includes(country.code)) return "low";
  if (["DKK", "CHF", "AUD", "NZD"].includes(country.code)) return "high";
  if (country.code === "EUR") return "upper";
  if (country.code === "BND") return "upper";
  if (["panama", "ecuador"].includes(country.id)) return "mid";
  if (["elsalvador", "timorleste"].includes(country.id)) return "lower";
  return "mid";
}

COUNTRIES.forEach((country) => {
  if (country.id === "northkorea" || (country.prices && country.prices.length)) return;
  const perUsd = MORE_RATES[country.code];
  if (!perUsd) return;
  const [coffee, water, meal, transit] = MORE_USD[moreBand(country)];
  const local = (usd) => {
    const raw = usd * perUsd;
    if (country.decimals === 0 || raw >= 100) return Math.max(1, Math.round(raw));
    if (raw >= 10) return Math.round(raw * 10) / 10;
    return Math.round(raw * 100) / 100;
  };
  const transitName = ["austria", "belgium", "netherlands", "portugal", "greece", "finland", "denmark"].includes(country.id) ? "지하철 1회" : "버스 1회";
  country.prices = [
    { name: "커피", amount: local(coffee) },
    { name: "생수", amount: local(water) },
    { name: "점심 1인", amount: local(meal) },
    { name: transitName, amount: local(transit) },
  ];
  if (!country.note) {
    country.note = `${country.name}에서는 일상적으로 ${country.currencyKo}를 씁니다. 아래 금액은 여행자가 흔히 만나는 음료, 식사, 교통의 대략적인 가격입니다.`;
  } else if (!country.note.includes("가격")) {
    country.note += " 아래 금액은 여행자가 흔히 만나는 음료, 식사, 교통의 대략적인 가격입니다.";
  }
});
