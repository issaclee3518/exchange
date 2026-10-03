const GUIDES = {
  japan: {
    capitalKo: "도쿄", capitalEn: "Tokyo",
    ko: [
      "도쿄·오사카 일대에서는 엔화 지폐로 계산하는 일이 많고, 편의점 음료나 라멘 가격을 보며 물가 감을 잡습니다.",
      "전철·버스는 Suica·ICOCA 같은 교통카드로 찍는 구간이 넓고, 작은 식당은 현금만 받는 곳도 아직 있습니다.",
      "팁 문화는 거의 없습니다. 영수증 금액이 곧 내는 금액인 경우가 대부분입니다.",
    ],
    en: [
      "Around Tokyo and Osaka, yen notes still set the everyday scale—convenience drinks and ramen are the usual price checks.",
      "Trains and buses often take Suica or ICOCA; some small eateries still take cash only.",
      "Tipping is rare. The receipt total is usually what you pay.",
    ],
  },
  usa: {
    capitalKo: "워싱턴", capitalEn: "Washington",
    ko: [
      "도시마다 물가가 다르지만, 커피·햄버거·지하철 요금이 달러 감각의 기준이 되는 경우가 많습니다.",
      "식당·바·택시에서는 음식값과 별도로 팁을 기대하는 문화가 강하고, 카드 단말기에 팁 칸이 따로 뜨기도 합니다.",
      "1달러 동전보다 지폐·카드가 익숙하고, 잔돈 계산을 카드로 넘기는 가게가 많습니다.",
    ],
    en: [
      "Prices vary by city, but coffee, burgers, and subway fares are common dollar benchmarks.",
      "Restaurants, bars, and taxis often expect a tip on top of the bill, and card terminals may show a tip line.",
      "Notes and cards are more familiar than dollar coins, and many tills skip cash change altogether.",
    ],
  },
  vietnam: {
    capitalKo: "하노이", capitalEn: "Hanoi",
    ko: [
      "동(VND)은 자리 수가 커서 5만·10만 동 지폐가 흔하고, 액면만 보면 비싸 보여도 원화로는 작은 금액인 경우가 많습니다.",
      "쌀국수·카페·그랩 요금이 여행 중 돈 감각의 기준이 되기 쉽고, 잔돈은 작은 지폐로 받는 일이 많습니다.",
      "관광지에서는 카드가 되지만, 골목 식당은 현금이 더 편한 곳이 많습니다. 팁은 의무가 아닙니다.",
    ],
    en: [
      "The dong uses large face values—50,000 and 100,000 notes are common—so a bill can look pricey before you convert it.",
      "Pho, cafe coffee, and Grab rides often set the spending scale; change usually comes in smaller notes.",
      "Tourist spots may take cards, but alley restaurants often prefer cash. Tipping is not required.",
    ],
  },
  thailand: {
    capitalKo: "방콕", capitalEn: "Bangkok",
    ko: [
      "바트는 동전과 지폐를 같이 쓰고, 길거리 음식·BTS·마사지 가격으로 하루 예산을 가늠하는 사람이 많습니다.",
      "시장과 포장마차는 현금이 편하고, 쇼핑몰·호텔은 카드가 잘 됩니다.",
      "서비스 차지(봉사료)가 영수증에 이미 들어간 곳이 있어, 미국식 팁을 또 더할지는 가게마다 다릅니다.",
    ],
    en: [
      "Baht coins and notes circulate together; street food, BTS fares, and massage hours are common budget anchors.",
      "Markets and stalls prefer cash; malls and hotels take cards easily.",
      "Some bills already include a service charge, so an extra US-style tip is not always expected.",
    ],
  },
  taiwan: {
    capitalKo: "타이베이", capitalEn: "Taipei",
    ko: [
      "신타이비로 편의점·야시장·MRT를 계산하는 흐름이 일상입니다.",
      "EasyCard로 교통·편의점을 같이 쓸 수 있는 구간이 넓고, 현금 잔돈도 잘 돌아갑니다.",
      "팁을 따로 올리는 문화는 약합니다. 영수증 금액으로 끝나는 경우가 많습니다.",
    ],
    en: [
      "The New Taiwan dollar covers convenience stores, night markets, and the MRT in daily life.",
      "EasyCard often works for transit and convenience shops, and cash change still circulates smoothly.",
      "Extra tipping is uncommon; the receipt total usually closes the payment.",
    ],
  },
  china: {
    capitalKo: "베이징", capitalEn: "Beijing",
    ko: [
      "위안화 현찰보다 WeChat·Alipay 같은 모바일 결제가 도시에서 훨씬 흔합니다.",
      "외국 카드만으로는 막히는 가게가 있어, 현금 소액이나 현지 결제 수단을 준비하는 편이 안전합니다.",
      "팁 문화는 일반적이지 않고, 가격표·앱 결제 금액이 곧 지불액인 경우가 많습니다.",
    ],
    en: [
      "In cities, WeChat Pay and Alipay are far more common than yuan cash.",
      "Foreign cards alone can fail at some tills, so carrying a little cash or a local payment option helps.",
      "Tipping is not the norm; the listed or app amount is usually what you pay.",
    ],
  },
  philippines: {
    capitalKo: "마닐라", capitalEn: "Manila",
    ko: [
      "페소로 지프니·식사·편의점을 계산하고, 잔돈 동전이 없으면 거스름이 애매해질 수 있습니다.",
      "쇼핑몰은 카드가 되지만, 지프니와 작은 식당은 현금이 기본에 가깝습니다.",
      "서비스업에서는 작은 팁을 남기는 경우도 있지만, 모든 계산에 의무는 아닙니다.",
    ],
    en: [
      "Jeepneys, meals, and convenience stores are priced in pesos, and coin change can matter at the till.",
      "Malls take cards; jeepneys and small eateries are mostly cash.",
      "Small tips appear in some service settings, but they are not automatic on every bill.",
    ],
  },
  singapore: {
    capitalKo: "싱가포르", capitalEn: "Singapore",
    ko: [
      "싱가포르 달러는 호커·MRT·카드 결제가 잘 맞물리고, 현금 없이도 하루를 보내기 쉬운 편입니다.",
      "일부 가게는 브루나이 달러를 1대 1로 받기도 합니다.",
      "서비스 차지가 붙는 식당이 있어, 추가로 팁을 더하는지는 영수증을 먼저 보는 편이 좋습니다.",
    ],
    en: [
      "Singapore dollars fit hawker centres, the MRT, and card payments—cashless days are easy.",
      "Some shops also take Brunei dollars at one for one.",
      "Service charges appear on many restaurant bills, so check before adding another tip.",
    ],
  },
  hongkong: {
    capitalKo: "홍콩", capitalEn: "Hong Kong",
    ko: [
      "홍콩 달러는 옥토퍼스 카드로 MTR·편의점·일부 패스트푸드까지 이어지는 결제가 익숙합니다.",
      "현금·카드도 통하지만, 짧은 이동은 옥토퍼스가 더 빠른 경우가 많습니다.",
      "팁은 영수증 서비스 차지와 겹치는지 확인하는 편이 낫고, 미국식 비율을 그대로 쓰진 않습니다.",
    ],
    en: [
      "Hong Kong dollars often move through an Octopus card for MTR, convenience stores, and some fast food.",
      "Cash and cards work too, but short trips are often faster with Octopus.",
      "Check whether a service charge is already on the bill before adding a US-style tip.",
    ],
  },
  macau: {
    capitalKo: "마카오", capitalEn: "Macau",
    ko: [
      "공식 화폐는 파타카지만, 관광 식당·상점에서는 홍콩 달러를 같이 받는 곳이 많습니다.",
      "거스름을 파타카와 홍콩 달러가 섞여 주는 경우도 있어, 받은 돈을 한 번 더 보는 편이 좋습니다.",
      "카지노·리조트 구역은 카드가 잘 되고, 골목 가게는 현금이 더 편할 수 있습니다.",
    ],
    en: [
      "The pataca is official, but many tourist restaurants and shops also take Hong Kong dollars.",
      "Change can mix pataca and HKD, so it is worth reading the notes you receive.",
      "Casino and resort areas take cards easily; alley shops may prefer cash.",
    ],
  },
  malaysia: {
    capitalKo: "쿠알라룸푸르", capitalEn: "Kuala Lumpur",
    ko: [
      "링깃으로 나시 르막·테 타릭·Grab 요금을 말하는 사람이 많습니다.",
      "도시에서는 카드·이월렛이 늘었지만, 야시장과 작은 식당은 현금이 아직 중요합니다.",
      "이슬람 문화권 식당도 많아 주류 팁 관습이 미국과 다르고, 서비스 차지를 먼저 확인하면 됩니다.",
    ],
    en: [
      "Nasi lemak, teh tarik, and Grab fares are common ringgit benchmarks.",
      "Cards and e-wallets are growing in cities, but night markets and small eateries still lean on cash.",
      "Many eateries follow different alcohol and tip habits than the US—check for a service charge first.",
    ],
  },
  indonesia: {
    capitalKo: "자카르타", capitalEn: "Jakarta",
    ko: [
      "루피아는 자리 수가 커서 ‘만’ 단위로 가격을 말하는 일이 많고, 앞자리만 보면 음식·택시 감이 잡힙니다.",
      "발리·자카르타 관광지는 카드가 되지만, 워룽(작은 식당)은 현금이 기본인 곳이 많습니다.",
      "팁은 의무가 아니고, 스쿠터·그랩 요금은 앱에 표시된 금액으로 끝나는 경우가 많습니다.",
    ],
    en: [
      "The rupiah has so many digits that people talk in tens of thousands; the leading numbers set meal and taxi scale.",
      "Tourist Bali and Jakarta take cards, but warungs are often cash-first.",
      "Tipping is not required, and Grab or scooter fares usually end at the app amount.",
    ],
  },
  australia: {
    capitalKo: "캔버라", capitalEn: "Canberra",
    ko: [
      "호주 달러는 카드·스마트폰 결제가 기본에 가깝고, 커피 한 잔이 물가 감각의 기준이 되는 경우가 많습니다.",
      "현금만 고집하는 가게는 줄었고, 대중교통도 카드·앱 요금이 흔합니다.",
      "식당 팁은 미국만큼 강하지 않습니다. 서비스가 뛰어날 때만 소액을 남기는 식이 많습니다.",
    ],
    en: [
      "Card and phone pay are close to the default; a coffee often sets the price feel.",
      "Cash-only shops are rarer, and transit often charges by card or app.",
      "Restaurant tipping is milder than in the US—small extras appear mainly for strong service.",
    ],
  },
  guam: {
    capitalKo: "하갓냐", capitalEn: "Hagatna",
    ko: [
      "미국 달러를 쓰므로 본토와 같은 화폐로 식당·렌터카·쇼핑을 계산합니다.",
      "관광·군 관련 상권이 커 카드가 잘 되고, 달러 잔돈 감각은 미국 여행과 비슷합니다.",
      "팁 문화도 미국식에 가깝게 느껴지는 식당이 있어, 영수증에 팁 칸이 있는지 확인하는 편이 좋습니다.",
    ],
    en: [
      "The US dollar is used, so meals, car rentals, and shopping share the mainland currency.",
      "Tourism and military trade make cards widely accepted, and dollar change feels familiar to US travelers.",
      "Some restaurants lean toward US-style tipping—check whether the receipt leaves a tip line.",
    ],
  },
  france: {
    capitalKo: "파리", capitalEn: "Paris",
    ko: [
      "유로로 메트로·카페·하루 메뉴를 계산하고, 카드 단말기는 거의 모든 가게에 있습니다.",
      "서비스 비용이 가격에 포함된 경우가 많아, 미국처럼 15~20%를 또 더하진 않는 편이 일반적입니다.",
      "잔돈은 내도 되지만, 둥글게 남기는 정도인 곳이 많습니다.",
    ],
    en: [
      "Metro rides, cafes, and lunch menus are priced in euro, and card terminals are almost everywhere.",
      "Service is often built into the price, so another 15–20% US-style tip is not the default.",
      "Leaving small change is fine; large percentage tips are less common.",
    ],
  },
  italy: {
    capitalKo: "로마", capitalEn: "Rome",
    ko: [
      "같은 유로라도 에스프레소·젤라또·트라토리아 점심으로 물가 감각이 잡히는 편입니다.",
      "관광지 식당은 커버 차지(coperto)가 따로 찍히는 곳이 있어, 팁과 혼동하지 않는 편이 좋습니다.",
      "카드는 잘 되지만 작은 바는 현금이 더 빠른 경우가 있습니다.",
    ],
    en: [
      "Even in euro, espresso, gelato, and trattoria lunches set a different price habit than neighboring France.",
      "Tourist restaurants may add coperto (cover)—that is not the same as a discretionary tip.",
      "Cards work widely; tiny bars can still be faster with cash.",
    ],
  },
  spain: {
    capitalKo: "마드리드", capitalEn: "Madrid",
    ko: [
      "유로로 하루 메뉴(메뉴 델 디아)와 메트로 요금을 보는 사람이 많습니다.",
      "카페 테라스와 바에서는 잔돈을 남기기도 하지만, 미국식 고비율 팁은 덜 흔합니다.",
      "대도시는 카드가 잘 되고, 작은 마을 바는 현금을 선호할 수 있습니다.",
    ],
    en: [
      "The menú del día and metro fares are common euro checkpoints.",
      "Terrace cafes and bars may see small change left behind, but high US-style tip rates are less common.",
      "Big cities take cards well; village bars may prefer cash.",
    ],
  },
  germany: {
    capitalKo: "베를린", capitalEn: "Berlin",
    ko: [
      "유로로 도너·맥주·지역 교통표를 계산하는 감각이 흔합니다.",
      "카드가 늘었지만 ‘현금만’ 표기가 있는 가게도 아직 있습니다.",
      "팁은 반올림하거나 5~10% 안쪽을 남기는 식이 많고, 미국처럼 영수증에 큰 비율을 쓰는 문화는 아닙니다.",
    ],
    en: [
      "Doner, beer, and local transit tickets are everyday euro references.",
      "Cards are more common now, but some shops still post cash-only signs.",
      "Tips are often rounding up or a modest 5–10%, not a large US-style percentage line.",
    ],
  },
  uk: {
    capitalKo: "런던", capitalEn: "London",
    ko: [
      "파운드로 펍 식사·커피·교통을 계산하고, 런던은 접촉식 카드·모바일로 요금이 찍히는 구간이 넓습니다.",
      "현금보다 카드가 기본에 가깝고, 버스는 현금이 안 되는 노선이 많습니다.",
      "서비스 차지가 붙은 식당이 있어, 추가로 팁을 더할지는 영수증을 먼저 봅니다.",
    ],
    en: [
      "Pub meals, coffee, and transit set the pound scale; London often charges by contactless card or phone.",
      "Cards are close to the default, and many buses refuse cash.",
      "Service charges appear on some restaurant bills—read the receipt before adding more.",
    ],
  },
  switzerland: {
    capitalKo: "베른", capitalEn: "Bern",
    ko: [
      "유로존이 아니라 스위스 프랑을 쓰며, 커피·기차·간단한 식사가 이웃 나라보다 비싸게 느껴지기 쉽습니다.",
      "카드·TWINT 결제가 흔하고, 고산·작은 마을에서도 카드가 되는 곳이 늘었습니다.",
      "팁은 반올림 수준인 경우가 많고, 이미 높은 가격에 큰 비율을 또 더하진 않는 편이 일반적입니다.",
    ],
    en: [
      "Outside the euro area, the franc makes coffee, trains, and simple meals feel expensive next to neighbors.",
      "Cards and TWINT are common, including in more alpine towns than before.",
      "Tips are often just rounding up; large extra percentages on already high bills are less typical.",
    ],
  },
  canada: {
    capitalKo: "오타와", capitalEn: "Ottawa",
    ko: [
      "캐나다 달러는 미국 달러와 액면·환율이 다르므로, ‘달러’라고 해서 미국 가격과 같게 보면 헷갈립니다.",
      "도시 커피·지하철·카드 결제가 일상적이고, 일부 주에서는 세금이 가격표에 안 보여 계산 때 더해집니다.",
      "팁 문화는 미국에 가깝게 강한 편이라, 식당·바에서는 비율을 염두에 두는 사람이 많습니다.",
    ],
    en: [
      "Canadian dollars are not US dollars—same word, different value—so mainland US mental prices mislead.",
      "City coffee, subway, and cards are everyday; in some provinces tax is added at the till, not on the tag.",
      "Tipping culture is closer to the US, so restaurants and bars often expect a percentage.",
    ],
  },
  newzealand: {
    capitalKo: "웰링턴", capitalEn: "Wellington",
    ko: [
      "뉴질랜드 달러는 본국 카페·슈퍼 가격이 기준이 되고, 쿡 제도·니우에 등에서도 통합니다.",
      "카드 결제가 매우 흔하고, 현금만 쓰는 여행은 오히려 불편할 수 있습니다.",
      "팁은 필수가 아닌 편이라, 좋은 서비스에만 소액을 남기는 식이 많습니다.",
    ],
    en: [
      "Home cafe and supermarket prices set the New Zealand dollar feel; the same currency also circulates in places like the Cook Islands and Niue.",
      "Card payment is very common—traveling cash-only can feel awkward.",
      "Tipping is not required; small extras appear mainly for strong service.",
    ],
  },
  turkey: {
    capitalKo: "앙카라", capitalEn: "Ankara",
    ko: [
      "리라 표시 가격이 비교적 빨리 바뀌는 편이어서, 케밥·차·교통 요금은 그날 간판·앱을 보는 편이 안전합니다.",
      "대도시는 카드가 되지만, 시장과 작은 식당은 현금(작은 지폐)이 더 편합니다.",
      "관광지에서는 팁을 기대하는 경우도 있으나, 고정 비율보다는 잔돈을 남기는 식이 많습니다.",
    ],
    en: [
      "Lira tags can move quickly, so kebab, tea, and transit are safer read from that day's sign or app.",
      "Big cities take cards; markets and small eateries prefer cash in smaller notes.",
      "Tourist spots may expect a tip, more often as leftover change than a fixed high percentage.",
    ],
  },
  uae: {
    capitalKo: "아부다비", capitalEn: "Abu Dhabi",
    ko: [
      "디르함으로 메트로·식사·택시를 계산하고, 미국 달러 현찰을 액면 그대로 받지 않는 가게가 많습니다.",
      "쇼핑몰·호텔은 카드가 기본에 가깝고, 잔돈은 디르함으로 받는 편이 깔끔합니다.",
      "고급 식당은 서비스 차지가 있을 수 있고, 택시 앱은 표시 요금으로 끝나는 경우가 많습니다.",
    ],
    en: [
      "Metro, meals, and taxis are in dirham; many tills will not take US cash at face value.",
      "Malls and hotels are card-first, and change is cleaner in dirham.",
      "Upscale restaurants may add service; taxi apps often end at the quoted fare.",
    ],
  },
  laos: {
    capitalKo: "비엔티안", capitalEn: "Vientiane",
    ko: [
      "공식 화폐는 킵이지만, 관광지·국경 근처에서는 태국 바트나 달러가 섞여 쓰이기도 합니다.",
      "가격을 말할 때 화폐 단위를 한 번 더 확인하는 편이 안전합니다.",
      "작은 가게는 현금이 중심이고, 팁보다는 정확한 거스름이 더 중요하게 느껴지는 경우가 많습니다.",
    ],
    en: [
      "The kip is official, but tourist belts and border towns sometimes mix in Thai baht or dollars.",
      "It is worth confirming which currency a quoted price uses.",
      "Small shops are cash-heavy; correct change usually matters more than tipping.",
    ],
  },
  cambodia: {
    capitalKo: "프놈펜", capitalEn: "Phnom Penh",
    ko: [
      "공식 화폐는 리엘이지만, 관광 식당·숙소·마사지 요금은 미국 달러로 적힌 곳이 많습니다.",
      "잔돈을 리엘로 주는 경우가 많아, 달러와 리엘을 같이 들고 다니는 여행자가 많습니다.",
      "소액은 리엘, 큰 금액은 달러로 내는 식의 습관이 있고, 팁은 소액을 남기는 정도가 흔합니다.",
    ],
    en: [
      "The riel is official, but tourist meals, stays, and massage prices are often written in US dollars.",
      "Change frequently comes in riel, so many travelers carry both.",
      "Small spends lean riel and larger ones dollar; tips are usually small leftovers, not large percentages.",
    ],
  },
  india: {
    capitalKo: "뉴델리", capitalEn: "New Delhi",
    ko: [
      "루피로 차·길거리 음식·오토릭샤를 계산하고, 큰 지폐만 있으면 잔돈이 안 나오는 일이 있습니다.",
      "도시 UPI·카드가 늘었지만, 노점과 짧은 이동은 여전히 현금이 빠릅니다.",
      "팁은 호텔·식당에서 소액을 남기는 경우가 있고, 미리 흥정한 릭샤 요금에는 보통 덧붙이지 않습니다.",
    ],
    en: [
      "Tea, street food, and auto-rickshaws are priced in rupees; large notes alone can stall change.",
      "UPI and cards are growing in cities, but stalls and short rides are still faster in cash.",
      "Small tips appear in hotels and restaurants; pre-agreed rickshaw fares usually stay as quoted.",
    ],
  },
  mexico: {
    capitalKo: "멕시코시티", capitalEn: "Mexico City",
    ko: [
      "페소로 타코·지하철·시장 물건을 계산하는 감각이 여행의 기준이 됩니다.",
      "관광지는 카드가 되지만, 타queria와 작은 가게는 현금(잔돈)이 더 편합니다.",
      "미국 달러로 제시하는 곳도 있으나 환율이 불리할 수 있어, 페소로 내는 편이 나은 경우가 많습니다.",
    ],
    en: [
      "Tacos, the metro, and market goods set the peso scale for most trips.",
      "Tourist belts take cards; taquerías and small shops prefer cash with change.",
      "Some places quote US dollars at a weak rate—paying in pesos is often better.",
    ],
  },
  czech: {
    capitalKo: "프라하", capitalEn: "Prague",
    ko: [
      "유로존이 아니라 코루나를 쓰며, 맥주·트램·카페 가격으로 물가 감을 잡습니다.",
      "프라하 관광 중심은 카드가 잘 되지만, 작은 펍은 현금을 선호할 수 있습니다.",
      "유로 현찰을 받아 주는 곳이 있어도 환율이 나쁠 수 있어, 코루나로 계산하는 편이 안전합니다.",
    ],
    en: [
      "Outside the euro area, beer, trams, and cafes set the koruna feel.",
      "Central Prague takes cards well; smaller pubs may prefer cash.",
      "Some tills accept euro notes at a poor rate—paying in koruna is safer.",
    ],
  },
  korea: {
    capitalKo: "서울", capitalEn: "Seoul",
    ko: [
      "원으로 편의점·카페·지하철을 계산하고, 교통카드·체크·신용 카드가 현금보다 흔합니다.",
      "현금만 받는 곳은 줄었고, 잔돈 없는 결제가 기본에 가깝습니다.",
      "팁을 올리는 문화는 거의 없습니다. 표시 가격이 곧 지불액인 경우가 대부분입니다.",
    ],
    en: [
      "Convenience stores, cafes, and the subway are priced in won; transit and bank cards beat cash in daily use.",
      "Cash-only spots are rarer, and change-free payment is close to the default.",
      "Tipping is uncommon—the listed price is usually what you pay.",
    ],
  },
  austria: {
    capitalKo: "빈", capitalEn: "Vienna",
    ko: [
      "유로로 카페·슈니첼·도시 교통을 계산하는 감각이 흔합니다.",
      "카드가 잘 되고, 현금도 여전히 통합니다.",
      "팁은 반올림하거나 작은 비율을 남기는 식이 많고, 미국식 고비율은 덜 일반적입니다.",
    ],
    en: [
      "Cafes, schnitzel, and city transit are common euro references.",
      "Cards work well, and cash still circulates.",
      "Tips are often rounding up or a modest share—not large US-style percentages.",
    ],
  },
  belgium: {
    capitalKo: "브뤼셀", capitalEn: "Brussels",
    ko: [
      "유로로 와플·맥주·트램 요금을 보는 여행자가 많습니다.",
      "카드 단말기가 흔하고, 작은 프릿 가게는 현금이 더 빠를 수 있습니다.",
      "서비스가 가격에 포함된 경우가 많아, 잔돈을 남기는 정도가 일반적입니다.",
    ],
    en: [
      "Waffles, beer, and tram fares are common euro checkpoints.",
      "Card terminals are widespread; tiny frites stands can be faster with cash.",
      "Service is often included, so leaving small change is the usual gesture.",
    ],
  },
  bulgaria: {
    capitalKo: "소피아", capitalEn: "Sofia",
    ko: [
      "2026년부터 레프 대신 유로를 공식 화폐로 쓰므로, 오래된 레프 가격표·글을 보면 단위를 한 번 더 확인하는 편이 좋습니다.",
      "도시 카드 결제가 늘었고, 시장은 현금이 편할 수 있습니다.",
      "팁은 반올림 수준인 곳이 많습니다.",
    ],
    en: [
      "The euro replaced the lev in 2026, so older lev price tags or posts are worth double-checking.",
      "City cards are more common; markets can still prefer cash.",
      "Tips are often just rounding up.",
    ],
  },
  croatia: {
    capitalKo: "자그레브", capitalEn: "Zagreb",
    ko: [
      "쿠나를 접고 유로로 카페·트램·해안 식당을 계산합니다.",
      "관광 시즌 아드리아 해안은 카드가 잘 되지만, 섬의 작은 가게는 현금을 챙기는 편이 안전합니다.",
      "팁은 소액·반올림이 흔합니다.",
    ],
    en: [
      "With the kuna gone, cafes, trams, and coastal meals are in euro.",
      "Adriatic tourist seasons take cards well; small island shops are safer with some cash.",
      "Tips are usually small or rounded up.",
    ],
  },
  cyprus: {
    capitalKo: "니코시아", capitalEn: "Nicosia",
    ko: [
      "유로존에서 커피·버스·해변 식당을 유로로 냅니다.",
      "관광지는 카드가 잘 되고, 작은 타베르나는 현금이 편할 수 있습니다.",
      "서비스 차지가 있는지 영수증을 보면, 추가 팁 여부를 정하기 쉽습니다.",
    ],
    en: [
      "Coffee, buses, and beach tavernas are charged in euro.",
      "Tourist areas take cards; small tavernas may prefer cash.",
      "A quick receipt check for service charge makes extra tipping clearer.",
    ],
  },
  estonia: {
    capitalKo: "탈린", capitalEn: "Tallinn",
    ko: [
      "유로를 쓰고 카드·모바일 결제가 매우 흔한 편이라, 현금 없이도 도심을 다니기 쉽습니다.",
      "카페·대중교통 요금으로 물가 감을 잡는 경우가 많습니다.",
      "팁 문화는 약하고, 반올림 정도인 곳이 많습니다.",
    ],
    en: [
      "Euro cards and phone pay are so common that cashless city days are easy.",
      "Cafe and transit prices often set the spend scale.",
      "Tipping culture is light—often just rounding up.",
    ],
  },
  finland: {
    capitalKo: "헬싱키", capitalEn: "Helsinki",
    ko: [
      "유로로 커피·교통을 내고, 현금을 거의 안 받는 가게도 있습니다.",
      "카드·모바일이 기본에 가깝고, 잔돈 준비는 거의 필요 없습니다.",
      "팁을 기대하는 문화는 약합니다.",
    ],
    en: [
      "Coffee and transit are in euro, and some shops barely keep cash.",
      "Cards and phones are close to the default—little need to prep coins.",
      "Tipping expectations are mild.",
    ],
  },
  greece: {
    capitalKo: "아테네", capitalEn: "Athens",
    ko: [
      "유로로 커피·수블라키·메트로를 계산하는 감각이 흔합니다.",
      "관광 중심은 카드가 되지만, 섬·작은 타베르나는 현금이 더 편한 곳이 있습니다.",
      "팁은 테이블에 소액을 남기는 식이 많고, 미국식 고비율은 덜 일반적입니다.",
    ],
    en: [
      "Coffee, souvlaki, and the metro are common euro references.",
      "Tourist centers take cards; islands and small tavernas can prefer cash.",
      "Tips are often small amounts left on the table, not large US-style rates.",
    ],
  },
  ireland: {
    capitalKo: "더블린", capitalEn: "Dublin",
    ko: [
      "유로로 펍·버스·커피를 계산하고, 카드 결제가 잘 됩니다.",
      "서비스 차지가 있는 식당이 있어 영수증을 먼저 확인하는 편이 좋습니다.",
      "팁은 서비스업에서 소액·소비율로 남기는 경우가 있습니다.",
    ],
    en: [
      "Pubs, buses, and coffee are priced in euro, and cards work well.",
      "Some restaurants add service—check the receipt first.",
      "Tips appear in service settings as small amounts or modest rates.",
    ],
  },
  latvia: {
    capitalKo: "리가", capitalEn: "Riga",
    ko: [
      "유로로 카페·트램·시장 간식을 계산합니다.",
      "도심 카드가 잘 되고, 야외 시장은 현금이 편할 수 있습니다.",
      "팁은 반올림 수준인 곳이 많습니다.",
    ],
    en: [
      "Cafes, trams, and market snacks are priced in euro.",
      "City cards work well; outdoor markets may prefer cash.",
      "Tips are often just rounding up.",
    ],
  },
  lithuania: {
    capitalKo: "빌뉴스", capitalEn: "Vilnius",
    ko: [
      "유로를 쓰고 도시에서는 카드가 잘 됩니다.",
      "카페·버스 요금으로 하루 예산을 가늠하기 쉽습니다.",
      "현금은 비상용으로만 챙겨도 도심은 충분한 경우가 많습니다.",
    ],
    en: [
      "The euro is used, and cards work well in the city.",
      "Cafe and bus fares make a daily budget easy to sketch.",
      "Cash as a backup is often enough in the center.",
    ],
  },
  luxembourg: {
    capitalKo: "룩셈부르크", capitalEn: "Luxembourg",
    ko: [
      "유로를 쓰며, 국내 버스·트램이 무료인 정책이 있어 교통비 감각이 이웃 나라와 다릅니다.",
      "무료 여부·예외 구간은 그 자리 안내를 확인하는 편이 좋습니다.",
      "카드 결제가 잘 되고, 팁은 가벼운 편입니다.",
    ],
    en: [
      "The euro is used, and national bus and tram policy can make transit feel unlike neighboring countries.",
      "It is worth checking on the spot for free rides or exceptions.",
      "Cards work well, and tipping stays light.",
    ],
  },
  malta: {
    capitalKo: "발레타", capitalEn: "Valletta",
    ko: [
      "유로로 버스·카페·항구 식당을 계산합니다.",
      "관광지는 카드가 잘 되지만, 작은 마을 가게는 현금을 원활 수 있습니다.",
      "팁은 소액을 남기는 정도가 흔합니다.",
    ],
    en: [
      "Buses, cafes, and harbor restaurants are priced in euro.",
      "Tourist areas take cards; village shops may want cash.",
      "Tips are usually small leftovers.",
    ],
  },
  netherlands: {
    capitalKo: "암스테르담", capitalEn: "Amsterdam",
    ko: [
      "유로로 트램·카페·자전거 대여를 계산하고 카드 단말기가 매우 흔합니다.",
      "현금만 받는 곳은 드물고, 핀(직불) 결제가 익숙합니다.",
      "팁은 반올림하거나 작은 비율을 남기는 식이 일반적입니다.",
    ],
    en: [
      "Trams, cafes, and bike rentals are in euro, and card terminals are very common.",
      "Cash-only spots are rare; debit-style payments feel normal.",
      "Tips are usually rounding up or a small share.",
    ],
  },
  portugal: {
    capitalKo: "리스본", capitalEn: "Lisbon",
    ko: [
      "유로로 커피·패드레이·메트로를 계산하는 감각이 흔합니다.",
      "관광 중심은 카드가 잘 되고, 작은 파스티스 가게는 현금이 빠를 수 있습니다.",
      "팁은 테이블에 소액을 남기는 편이 많고, 고비율은 덜 흔합니다.",
    ],
    en: [
      "Coffee, pastel de nata, and the metro are common euro references.",
      "Tourist centers take cards; tiny pastry shops can be faster with cash.",
      "Tips are often small amounts on the table, not high percentages.",
    ],
  },
  slovakia: {
    capitalKo: "브라티슬라바", capitalEn: "Bratislava",
    ko: [
      "유로로 도시 교통·점심·맥주를 계산합니다.",
      "카드가 잘 되는 편이고, 시장은 현금을 챙기면 편합니다.",
      "팁은 반올림 수준인 곳이 많습니다.",
    ],
    en: [
      "City transit, lunch, and beer are priced in euro.",
      "Cards work well; markets are easier with some cash.",
      "Tips are often just rounding up.",
    ],
  },
  slovenia: {
    capitalKo: "류블랴나", capitalEn: "Ljubljana",
    ko: [
      "유로를 쓰고, 작은 카페도 카드가 되는 곳이 많습니다.",
      "도심 보행 구간에서는 커피·젤라또 가격으로 예산을 가늠하기 쉽습니다.",
      "팁 문화는 가벼운 편입니다.",
    ],
    en: [
      "The euro is used, and even small cafes often take cards.",
      "In the walkable center, coffee and gelato prices sketch a daily budget.",
      "Tipping culture stays light.",
    ],
  },
  andorra: {
    capitalKo: "안도라라베야", capitalEn: "Andorra la Vella",
    ko: [
      "자체 화폐 없이 유로를 공식처럼 쓰며, 면세·스키 관광 상권이 가격 감각에 영향을 줍니다.",
      "카드가 잘 되고, 이웃 스페인·프랑스와 같은 화폐로 비교하기 쉽습니다.",
      "팁은 소액·반올림이 일반적입니다.",
    ],
    en: [
      "With no currency of its own, the euro is used in practice; duty-free and ski retail shape price feel.",
      "Cards work well, and prices compare directly with neighboring Spain and France in the same money.",
      "Tips are usually small or rounded up.",
    ],
  },
  monaco: {
    capitalKo: "모나코", capitalEn: "Monaco",
    ko: [
      "유로로 계산하므로 이웃 프랑스와 같은 화폐로 카페·식당 가격을 나란히 볼 수 있습니다.",
      "물가 자체는 높게 느껴지는 구역이 많고, 카드 결제가 기본에 가깝습니다.",
      "고급 식당은 서비스 정책을 영수증으로 확인하는 편이 좋습니다.",
    ],
    en: [
      "Euro pricing lets cafe and restaurant totals sit beside neighboring France in the same currency.",
      "Many areas feel expensive, and card payment is close to the default.",
      "Upscale restaurants are worth a receipt check for service policy.",
    ],
  },
  sanmarino: {
    capitalKo: "산마리노", capitalEn: "San Marino",
    ko: [
      "기념품 가게까지 유로로 계산하며, 이탈리아와 같은 화폐로 가격을 비교하면 됩니다.",
      "관광 상점이 많아 카드가 잘 되는 편입니다.",
      "작은 금액은 현금이 빠를 수 있습니다.",
    ],
    en: [
      "Even souvenir shops charge in euro, so prices compare directly with Italy.",
      "Tourist retail takes cards widely.",
      "Small amounts can still be faster in cash.",
    ],
  },
  vatican: {
    capitalKo: "바티칸", capitalEn: "Vatican City",
    ko: [
      "입장권·기념품이 유로로 표시되고, 카드 결제가 가능한 창구가 많습니다.",
      "실제 체류·식사는 인접 로마에서 하는 경우가 많아, 로마의 유로 물가 감각과 이어집니다.",
      "성당·박물관 창구에서는 팁보다 정해진 요금이 중심입니다.",
    ],
    en: [
      "Tickets and souvenirs are marked in euro, and many desks take cards.",
      "Meals and stays usually happen next door in Rome, so Rome's euro price feel carries over.",
      "At basilica and museum desks, fixed fees matter more than tipping.",
    ],
  },
  kosovo: {
    capitalKo: "프리슈티나", capitalEn: "Pristina",
    ko: [
      "유로존 회원은 아니지만 일상 화폐로 유로를 씁니다.",
      "카페·시내 이동 요금으로 예산을 가늠하기 쉽고, 카드와 현금이 섞여 쓰입니다.",
      "작은 가게는 현금이 더 편할 수 있습니다.",
    ],
    en: [
      "It is not in the euro area, but the euro is everyday money.",
      "Cafe and city-travel prices sketch a budget; cards and cash both appear.",
      "Small shops may prefer cash.",
    ],
  },
  montenegro: {
    capitalKo: "포드고리차", capitalEn: "Podgorica",
    ko: [
      "자체 화폐 없이 유로로 카페·버스·해안 식당을 계산합니다.",
      "여름 해안 관광지는 카드가 잘 되지만, 산간·작은 마을은 현금을 챙기는 편이 안전합니다.",
      "팁은 소액이 흔합니다.",
    ],
    en: [
      "With no currency of its own, cafes, buses, and coastal meals are in euro.",
      "Summer coast towns take cards well; inland villages are safer with cash.",
      "Tips are usually small.",
    ],
  },
  norway: {
    capitalKo: "오슬로", capitalEn: "Oslo",
    ko: [
      "유로존이 아니고 크로네를 쓰며, 현금을 거부하고 카드만 받는 가게가 많습니다.",
      "커피·대중교통·한 끼 식사가 비싸게 느껴지기 쉽고, VIPPS·카드가 일상입니다.",
      "팁 문화는 약하고, 서비스가 이미 가격에 반영된 느낌이 강합니다.",
    ],
    en: [
      "Outside the euro area, the krone rules, and many shops take cards only.",
      "Coffee, transit, and meals feel expensive; Vipps and cards are everyday.",
      "Tipping culture is mild—service often feels built into the price.",
    ],
  },
  sweden: {
    capitalKo: "스톡홀름", capitalEn: "Stockholm",
    ko: [
      "크로나로 지하철·카페를 내고, 현금을 거부하는 계산대가 많습니다.",
      "Swish·카드가 기본에 가깝고, 현금만으로 다니기는 불편할 수 있습니다.",
      "팁은 필수가 아닌 편입니다.",
    ],
    en: [
      "The subway and cafes are charged in kronor, and many tills refuse cash.",
      "Swish and cards are close to the default—cash-only travel can be awkward.",
      "Tipping is not required.",
    ],
  },
  denmark: {
    capitalKo: "코펜하겐", capitalEn: "Copenhagen",
    ko: [
      "크로네를 쓰고, 카드 결제가 현금보다 훨씬 흔합니다.",
      "커피·자전거·한 끼 가격으로 물가 감을 잡는 여행자가 많습니다.",
      "팁은 반올림 정도인 곳이 많고, 미국식 고비율은 드뭅니다.",
    ],
    en: [
      "The krone is used, and cards are much more common than cash.",
      "Coffee, bikes, and meal prices often set the trip budget feel.",
      "Tips are often rounding up; high US-style rates are rare.",
    ],
  },
  iceland: {
    capitalKo: "레이캬비크", capitalEn: "Reykjavik",
    ko: [
      "크로나로 거의 모든 것을 카드 결제하고, 식사·온천·렌터카 물가가 높게 느껴지기 쉽습니다.",
      "현금은 거의 필요 없는 편이고, 카드 한도가 더 중요한 경우가 많습니다.",
      "팁을 강하게 기대하는 문화는 아닙니다.",
    ],
    en: [
      "Almost everything is paid by card in krónur, and meals, pools, and car hire feel expensive.",
      "Cash is rarely needed; card limits matter more.",
      "Strong tipping expectations are uncommon.",
    ],
  },
};
