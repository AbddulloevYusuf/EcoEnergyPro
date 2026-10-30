// @ts-nocheck
// ===== 1. Тексты интерфейса / Матнҳо / Interface texts =====
var UI = {
  tg: {
    title: "Табиат ва Энергия",
    subtitle: "Табиатро ҳифз кунем ва барқро сарфа намоем.",
    navEco: "Экология",
    navEnergy: "Энергетика",
    ecoTitle: "Экология: табиатро чӣ тавр ҳифз кунем",
    ecoIntro: "Гиёҳу дарахтон ҳаворо тоза мекунанд, хокро нигоҳ медоранд ва ба одамон шифо мебахшанд. Бо ҳифзи онҳо мо ояндаи худро ҳифз мекунем.",
    herbsTitle: "Гиёҳу буттаҳои шифобахш",
    treesTitle: "Дарахтони муфид",
    tipsTitle: "Чӣ кор кунем?",
    energyTitle: "Энергетика: имрӯз барқро сарфа кунед",
    energyIntro: "Амалҳоеро, ки имрӯз иҷро кардед, аломат гузоред. Сайт тахмин мекунад, ки дар як моҳ чӣ қадар барқ сарфа мешавад.",
    done: "амал иҷро шуд (аз 5)",
    saveKwh: "кВт·соат сарфа дар як моҳ",
    saveCo2: "кг CO₂ камтар дар як моҳ",
    note: "Ҳисобҳо тахминӣ ва содда анд. Масалан: чароғи 60 Вт, 3 соат дар як рӯз = 5,4 кВт·соат дар як моҳ. Коэффисиенти CO₂: 0,45 кг барои 1 кВт·соат.",
    kwh: "кВт·соат"
  },
  ru: {
    title: "Природа и Энергия",
    subtitle: "Беречь природу и экономить электричество.",
    navEco: "Экология",
    navEnergy: "Энергетика",
    ecoTitle: "Экология: как защищать природу",
    ecoIntro: "Травы и деревья очищают воздух, удерживают почву и лечат людей. Защищая их, мы защищаем своё будущее.",
    herbsTitle: "Полезные травы и кустарники",
    treesTitle: "Полезные деревья",
    tipsTitle: "Что делать?",
    energyTitle: "Энергетика: экономьте электричество сегодня",
    energyIntro: "Отметьте действия, которые вы выполнили сегодня. Сайт прикинет, сколько электричества это сэкономит за месяц.",
    done: "действий выполнено (из 5)",
    saveKwh: "кВт·ч экономии в месяц",
    saveCo2: "кг CO₂ меньше в месяц",
    note: "Расчёты приблизительные и простые. Например: лампа 60 Вт, 3 часа в день = 5,4 кВт·ч в месяц. Коэффициент CO₂: 0,45 кг на 1 кВт·ч.",
    kwh: "кВт·ч"
  },
  en: {
    title: "Nature and Energy",
    subtitle: "Protect nature and save electricity.",
    navEco: "Ecology",
    navEnergy: "Energy",
    ecoTitle: "Ecology: how to protect nature",
    ecoIntro: "Plants and trees clean the air, hold the soil and heal people. By protecting them we protect our own future.",
    herbsTitle: "Useful herbs and shrubs",
    treesTitle: "Useful trees",
    tipsTitle: "What can we do?",
    energyTitle: "Energy: save electricity today",
    energyIntro: "Tick the actions you did today. The site estimates how much electricity this saves in a month.",
    done: "actions done (out of 5)",
    saveKwh: "kWh saved per month",
    saveCo2: "kg less CO₂ per month",
    note: "The numbers are simple estimates. Example: a 60 W lamp for 3 hours a day = 5.4 kWh a month. CO₂ factor: 0.45 kg per 1 kWh.",
    kwh: "kWh"
  }
};

// ===== 2. Растения: фото кладите в папку images/ =====
var HERBS = [
  { img: "mint.jpg", emoji: "🌿", latin: "Mentha piperita",
    name: { tg: "Пудина", ru: "Мята перечная", en: "Peppermint" },
    text: { tg: "Чойи пудина ҳозимаро беҳтар мекунад ва асабро ором мекунад.",
            ru: "Мятный чай улучшает пищеварение и успокаивает.",
            en: "Mint tea helps digestion and calms the nerves." } },
  { img: "chamomile.jpg", emoji: "🌼", latin: "Matricaria chamomilla",
    name: { tg: "Бобуна", ru: "Ромашка аптечная", en: "Chamomile" },
    text: { tg: "Чойи бобуна илтиҳобро паст мекунад ва барои гулӯ фоидаовар аст.",
            ru: "Отвар ромашки снимает воспаление и полезен при боли в горле.",
            en: "Chamomile tea soothes inflammation and a sore throat." } },
  { img: "rosehip.jpg", emoji: "🌹", latin: "Rosa canina",
    name: { tg: "Настарон", ru: "Шиповник", en: "Rosehip" },
    text: { tg: "Меваи настарон аз витамини C бой аст ва иммунитетро мустаҳкам мекунад.",
            ru: "Плоды шиповника богаты витамином C и укрепляют иммунитет.",
            en: "Rosehips are rich in vitamin C and support immunity." } },
  { img: "seabuckthorn.jpg", emoji: "🟠", latin: "Hippophae rhamnoides",
    name: { tg: "Чаканда", ru: "Облепиха", en: "Sea buckthorn" },
    text: { tg: "Меваи чаканда аз витаминҳо бой аст, буттаҳояш нишебиро аз ҷорӣ шудани хок нигоҳ медоранд.",
            ru: "Ягоды облепихи богаты витаминами, а кусты удерживают склоны от эрозии.",
            en: "Sea buckthorn berries are rich in vitamins and the shrubs hold slopes against erosion." } }
];

var TREES = [
  { img: "plane.jpg", emoji: "🌳", latin: "Platanus orientalis",
    name: { tg: "Чинор", ru: "Чинар", en: "Oriental plane" },
    text: { tg: "Чинор сояи васеъ медиҳад, ҳаворо тоза мекунад ва гармии тобистонро кам мекунад.",
            ru: "Чинар даёт широкую тень, очищает воздух и смягчает летнюю жару.",
            en: "The oriental plane gives wide shade, cleans the air and cools hot summers." } },
  { img: "walnut.jpg", emoji: "🌰", latin: "Juglans regia",
    name: { tg: "Чормағз", ru: "Грецкий орех", en: "Walnut" },
    text: { tg: "Чормағз меваи серғизо ва сояи зич медиҳад.",
            ru: "Грецкий орех даёт питательные плоды и плотную тень.",
            en: "Walnut trees give nutritious nuts and dense shade." } },
  { img: "mulberry.jpg", emoji: "🫐", latin: "Morus alba",
    name: { tg: "Тут", ru: "Тутовник (шелковица)", en: "White mulberry" },
    text: { tg: "Тут меваи ширин медиҳад, баргаш ғизои кирми абрешим аст.",
            ru: "Тутовник даёт сладкие ягоды, а листья служат кормом для шелкопряда.",
            en: "Mulberry gives sweet berries and its leaves feed silkworms." } },
  { img: "juniper.jpg", emoji: "🌲", latin: "Juniperus",
    name: { tg: "Арча", ru: "Арча (можжевельник)", en: "Juniper" },
    text: { tg: "Арча дар кӯҳҳо хокро нигоҳ медорад ва ҳаворо тоза мекунад.",
            ru: "Арча на склонах гор удерживает почву и очищает воздух.",
            en: "Juniper holds mountain soil in place and cleans the air." } }
];

var ECO_TIPS = {
  tg: [
    "Дарахт шинонед ва ба он нигоҳубин кунед.",
    "Партовҳоро ба ҷояш партоед ва ҷудо кунед.",
    "Обро беҳуда сарф накунед: канӯро баста нигоҳ доред.",
    "Ба ҷои халтаи пластикӣ халтаи матоӣ истифода баред.",
    "Гиёҳҳоро бо эҳтиёт ҷамъ кунед: решаашро наканед ва гиёҳҳои камёбро нигоҳ доред.",
    "Баргу партовҳоро насузонед: ҳаворо ифлос мекунад."
  ],
  ru: [
    "Посадите дерево и ухаживайте за ним.",
    "Не мусорьте, а сортируйте отходы.",
    "Не тратьте воду зря: закрывайте кран.",
    "Берите тканевую сумку вместо пластикового пакета.",
    "Собирайте травы бережно: не вырывайте корни и не трогайте редкие растения.",
    "Не жгите листья и мусор: это загрязняет воздух."
  ],
  en: [
    "Plant a tree and look after it.",
    "Do not litter, and sort your waste.",
    "Do not waste water: turn the tap off.",
    "Use a cloth bag instead of a plastic one.",
    "Pick herbs carefully: do not pull out roots and leave rare plants alone.",
    "Do not burn leaves or rubbish: it pollutes the air."
  ]
};

// ===== 3. Действия для экономии энергии (kwh = экономия в месяц) =====
var ACTIONS = [
  { kwh: 5.4, text: {
      tg: "Ҳангоми аз ҳуҷра баромадан чароғро хомӯш кунед",
      ru: "Выключайте свет, когда выходите из комнаты",
      en: "Switch off the light when you leave the room" } },
  { kwh: 6.1, text: {
      tg: "Чароғи оддиро бо чароғи LED иваз кунед",
      ru: "Замените обычную лампу на LED-лампу",
      en: "Replace a regular bulb with an LED bulb" } },
  { kwh: 3, text: {
      tg: "Дастгоҳҳои истифоданашавандаро аз розетка ҷудо кунед",
      ru: "Вынимайте из розетки приборы, которыми не пользуетесь",
      en: "Unplug devices you are not using" } },
  { kwh: 3.6, text: {
      tg: "Аз рӯшноии рӯз истифода баред: пардаро кушоед",
      ru: "Пользуйтесь дневным светом: откройте шторы",
      en: "Use daylight: open the curtains" } },
  { kwh: 6, text: {
      tg: "Телевизорро ҳангоми тамошо накардан хомӯш кунед",
      ru: "Выключайте телевизор, когда его никто не смотрит",
      en: "Switch off the TV when nobody is watching" } }
];

// ===== Вода: тексты и действия (liters = экономия в месяц) =====
UI.tg.navWater = "Об";
UI.tg.waterTitle = "Об: ҳар қатраро нигоҳ доред";
UI.tg.waterIntro = "Оби тоза захираи маҳдуд аст. Тоҷикистон аз пиряхҳо ва дарёҳо бой аст, аммо обро бояд сарфакорона истифода бурд. Амалҳои имрӯзаро аломат гузоред.";
UI.tg.waterSave = "литр об сарфа дар як моҳ";
UI.tg.waterBottles = "шишаи 1,5 литра";
UI.tg.waterNote = "Ҳисобҳо тахминӣ ва содда анд: масалан, канӯи кушода ҳангоми шустани дандон дар як дақиқа тақрибан 5 литр об мебарад.";
UI.tg.liter = "л";

UI.ru.navWater = "Вода";
UI.ru.waterTitle = "Вода: берегите каждую каплю";
UI.ru.waterIntro = "Чистая вода — ограниченный ресурс. Таджикистан богат ледниками и реками, но воду всё равно нужно тратить бережно. Отметьте действия, которые вы выполнили сегодня.";
UI.ru.waterSave = "литров воды экономии в месяц";
UI.ru.waterBottles = "бутылок по 1,5 литра";
UI.ru.waterNote = "Расчёты приблизительные и простые: например, открытый кран при чистке зубов уносит около 5 литров в минуту.";
UI.ru.liter = "л";

UI.en.navWater = "Water";
UI.en.waterTitle = "Water: save every drop";
UI.en.waterIntro = "Clean water is a limited resource. Tajikistan is rich in glaciers and rivers, but water still has to be used carefully. Tick the actions you did today.";
UI.en.waterSave = "litres of water saved per month";
UI.en.waterBottles = "bottles of 1.5 litres";
UI.en.waterNote = "Rough, simple estimates: a running tap uses about 5 litres a minute while you brush your teeth.";
UI.en.liter = "L";

var WATER_ACTIONS = [
  { liters: 600, text: {
      tg: "Ҳангоми шустани дандон канӯро бибандед",
      ru: "Закрывайте кран, пока чистите зубы",
      en: "Turn off the tap while brushing your teeth" } },
  { liters: 1500, text: {
      tg: "Душро кӯтоҳ кунед: 5 дақиқа ба ҷойи 10",
      ru: "Принимайте душ 5 минут вместо 10",
      en: "Take a 5-minute shower instead of 10" } },
  { liters: 400, text: {
      tg: "Канӯи чакидаро таъмир кунед",
      ru: "Почините капающий кран",
      en: "Fix a dripping tap" } },
  { liters: 450, text: {
      tg: "Зарфу меваро дар тос шуед, на зери оби ҷорӣ",
      ru: "Мойте посуду и фрукты в тазу, а не под струёй",
      en: "Wash dishes and fruit in a basin, not under a running tap" } },
  { liters: 300, text: {
      tg: "Растаниҳоро бегоҳӣ бо лейка обёрӣ кунед, беҳтараш бо оби борон",
      ru: "Поливайте растения вечером из лейки, лучше дождевой водой",
      en: "Water plants in the evening with a can, ideally with rainwater" } }
];
var checkedWater = [false, false, false, false, false];

// ===== Новые страницы: тексты меню, главной и статей =====
UI.tg.navHome = "Асосӣ"; UI.ru.navHome = "Главная"; UI.en.navHome = "Home";
UI.tg.navWaste = "Партовҳо"; UI.ru.navWaste = "Мусор"; UI.en.navWaste = "Waste";
UI.tg.homeTitle = "Хуш омадед!"; UI.ru.homeTitle = "Добро пожаловать!"; UI.en.homeTitle = "Welcome!";
UI.tg.homeIntro = "Саҳифаро интихоб кунед: дар ҳар кадом маълумоти муфид ва маслиҳатҳои амалӣ ҳаст.";
UI.ru.homeIntro = "Выберите страницу: в каждой есть полезная информация и практические советы.";
UI.en.homeIntro = "Choose a page: each one has useful information and practical tips.";
UI.tg.homeEcoD = "Гиёҳу дарахтони муфид ва ҳифзи табиат"; UI.ru.homeEcoD = "Полезные травы, деревья и защита природы"; UI.en.homeEcoD = "Useful herbs, trees and protecting nature";
UI.tg.homeEnergyD = "Барқро дуруст истифода баред"; UI.ru.homeEnergyD = "Как правильно использовать электричество"; UI.en.homeEnergyD = "How to use electricity wisely";
UI.tg.homeWaterD = "Обро сарфакорона истифода баред"; UI.ru.homeWaterD = "Как не расходовать воду зря"; UI.en.homeWaterD = "How not to waste water";
UI.tg.homeWasteD = "Тозагӣ ва партовҳо: зарар ва роҳи ҳал"; UI.ru.homeWasteD = "Чистота и мусор: вред и решения"; UI.en.homeWasteD = "Cleanliness and rubbish: harm and solutions";
UI.tg.clickHint = "Ба гиёҳ ё дарахт пахш кунед, то маълумоти бештар бинед."; UI.ru.clickHint = "Нажмите на растение, чтобы узнать больше."; UI.en.clickHint = "Click a plant or tree to read more.";
UI.tg.tryTitle = "Имрӯз санҷед"; UI.ru.tryTitle = "Попробуйте сегодня"; UI.en.tryTitle = "Try it today";
UI.tg.moreTitle = "Маълумоти бештар"; UI.ru.moreTitle = "Подробнее"; UI.en.moreTitle = "More information";
UI.tg.wasteTitle = "Партовҳо: тозагиро нигоҳ доред"; UI.ru.wasteTitle = "Мусор: берегите чистоту"; UI.en.wasteTitle = "Waste: keep things clean";
UI.tg.wasteIntro = "Партовҳои партофташуда ба табиат, об ва саломатии одамон зарар мерасонад. Инҷо мебинед, чӣ мешавад ва чӣ тавр онро ислоҳ кардан мумкин аст.";
UI.ru.wasteIntro = "Брошенный мусор вредит природе, воде и здоровью людей. Здесь вы увидите, что происходит и как это исправить.";
UI.en.wasteIntro = "Rubbish left lying around harms nature, water and people's health. Here you can see what happens and how to fix it.";

// Подробный текст для окна растения (ключ = имя файла фото)
var MORE = {
  "mint.jpg": {
    tg: "Пудина дар ҷойҳои намнок хуб мерӯяд ва парвариши он дар боғча осон аст. Баргҳояшро тару хушк карда барои чой истифода мебаранд. Касоне, ки дилсӯзӣ доранд, бояд эҳтиёт шаванд ва бо духтур маслиҳат кунанд.",
    ru: "Мята хорошо растёт во влажных местах и легко выращивается на грядке. Листья используют свежими и сушёными для чая. Людям с изжогой стоит быть осторожными и посоветоваться с врачом.",
    en: "Mint grows well in damp places and is easy to grow in a garden. The leaves are used fresh or dried for tea. People with heartburn should be careful and ask a doctor." },
  "chamomile.jpg": {
    tg: "Гулҳои бобунаро ҳангоми гулкунӣ ҷамъ карда, дар соя хушк мекунанд. Дамкардаи он барои ғарғара кардани гулӯ ва ором кардани меъда истифода мешавад. Касоне, ки ба растаниҳои оилаи мураккабгул аллергия доранд, бояд эҳтиёт шаванд.",
    ru: "Цветки ромашки собирают во время цветения и сушат в тени. Настой используют для полоскания горла и для спокойствия желудка. Людям с аллергией на сложноцветные нужно быть осторожными.",
    en: "Chamomile flowers are picked while blooming and dried in the shade. The infusion is used for gargling and to settle the stomach. People allergic to daisy-family plants should be careful." },
  "rosehip.jpg": {
    tg: "Меваи настаронро тирамоҳ ҷамъ карда, хушк мекунанд ва чой месозанд. Буттаи хордор паррандагонро паноҳ медиҳад ва нишебиро мустаҳкам мекунад. Буттаро бо решааш накашед.",
    ru: "Плоды шиповника собирают осенью, сушат и заваривают как чай. Колючий куст даёт приют птицам и укрепляет склоны. Куст нельзя вырывать с корнем.",
    en: "Rosehips are picked in autumn, dried and brewed as tea. The thorny bush shelters birds and holds slopes. Never pull the bush out by the roots." },
  "seabuckthorn.jpg": {
    tg: "Меваи чакандаро тирамоҳ ҷамъ карда, аз он мураббо ва равған месозанд. Решаҳои чаканда хокро бо нитроген бой мекунанд ва соҳилу нишебиро нигоҳ медоранд, бинобар ин онро дар канори дарёҳо мешинонанд.",
    ru: "Ягоды облепихи собирают осенью, из них делают варенье и масло. Корни облепихи обогащают почву азотом и удерживают берега и склоны, поэтому её сажают вдоль рек.",
    en: "Sea buckthorn berries are picked in autumn and made into jam and oil. Its roots enrich the soil with nitrogen and hold riverbanks and slopes, so it is planted along rivers." },
  "plane.jpg": {
    tg: "Чинор метавонад садсолаҳо умр бинад ва тоҷи пурбаргаш дар тобистон сояи сард медиҳад. Баргҳояш чангро ҷамъ мекунанд. Чинорҳои қадимиро набуред.",
    ru: "Чинар может жить сотни лет, а его густая крона даёт прохладную тень летом. Листья задерживают пыль. Старые чинары нужно беречь и не рубить.",
    en: "An oriental plane can live for hundreds of years and its dense crown gives cool shade in summer. The leaves catch dust. Old plane trees should be protected, not cut down." },
  "walnut.jpg": {
    tg: "Дар чормағз равған ва сафеда зиёд аст ва чӯбаш қиматбаҳост. Баргҳои афтидаи он моддае мепартоянд, ки рушди баъзе растаниҳои наздикро суст мекунад, бинобар ин зери он сабзавот накоред.",
    ru: "В грецком орехе много жиров и белка, а древесина ценная. Опавшие листья выделяют вещество, которое тормозит рост некоторых соседних растений, поэтому под ним не стоит сеять овощи.",
    en: "Walnuts are rich in fats and protein and the wood is valuable. Fallen leaves release a substance that slows some nearby plants, so do not plant vegetables right under it." },
  "mulberry.jpg": {
    tg: "Меваи тутро тару хушк мехӯранд. Дарахт гармиро нисбатан хуб мекашад ва дар ҳавлӣ сояи хуб медиҳад. Баргаш ғизои асосии кирми абрешим аст.",
    ru: "Ягоды тута едят свежими и сушёными. Дерево сравнительно легко переносит жару и даёт хорошую тень во дворах. Листья — основной корм шелкопряда.",
    en: "Mulberries are eaten fresh or dried. The tree copes fairly well with heat and gives good shade in yards. Its leaves are the main food of silkworms." },
  "juniper.jpg": {
    tg: "Арча дар кӯҳҳо оҳиста мерӯяд ва тамоми сол сабз мемонад. Ҷангалҳои арча хокро нигоҳ медоранд ва ба захира шудани об кӯмак мекунанд. Онро набуред: барқарор шудани он даҳсолаҳо мегирад.",
    ru: "Арча растёт в горах медленно и остаётся зелёной круглый год. Арчовые леса удерживают почву и помогают сохранять воду. Их нельзя вырубать: восстановление занимает десятилетия.",
    en: "Juniper grows slowly in the mountains and stays green all year. Juniper forests hold the soil and help store water. They must not be cut: recovery takes decades." }
};

// Статьи для страниц энергии, воды и мусора: h = заголовок, p = абзац, l = список
var ARTICLES = {
  energy: [
    { h: { tg: "Барқ чаро муҳим аст?", ru: "Почему важно беречь электричество", en: "Why saving electricity matters" },
      p: { tg: "Қисми зиёди барқи Тоҷикистон аз неругоҳҳои обӣ меояд, вале зимистон он аксар вақт намерасад. Ҳар як киловатт-соати сарфашуда ба ҳама кӯмак мекунад ва хароҷоти оиларо кам мекунад.",
           ru: "Большая часть электричества в Таджикистане вырабатывается на ГЭС, но зимой его нередко не хватает. Каждый сэкономленный киловатт-час помогает всем и снижает расходы семьи.",
           en: "Most of Tajikistan's electricity comes from hydropower plants, but in winter there is often not enough. Every saved kilowatt-hour helps everyone and lowers a family's bills." } },
    { h: { tg: "Рӯшноӣ", ru: "Освещение", en: "Lighting" },
      l: { tg: ["Чароғи LED-и 9 Вт ба ҷойи чароғи оддии 60 Вт ҳамон қадар рӯшноӣ медиҳад ва тақрибан 85% камтар барқ мехӯрад.", "Ҳангоми аз ҳуҷра баромадан чароғро хомӯш кунед.", "Рӯзона пардаро кушоед ва аз нури офтоб истифода баред."],
           ru: ["LED-лампа 9 Вт светит примерно как обычная 60 Вт, но потребляет примерно на 85% меньше.", "Уходя из комнаты, выключайте свет.", "Днём открывайте шторы и пользуйтесь дневным светом."],
           en: ["A 9 W LED bulb gives about the same light as a 60 W regular bulb and uses roughly 85% less electricity.", "Switch off the light when you leave a room.", "Open the curtains in the daytime and use daylight."] } },
    { h: { tg: "Дастгоҳҳои хонагӣ", ru: "Бытовая техника", en: "Home appliances" },
      l: { tg: ["Заряднокунак ва дастгоҳҳои бекорро аз розетка ҷудо кунед: дар ҳолати интизорӣ ҳам барқ мехӯранд.", "Яхдонро кам-кам кушоед ва хӯроки гармро ба он нагузоред.", "Мошини ҷомашӯйро пурра бор кунед, на ним-холӣ.", "Барои чой ба қадри лозимӣ об ҷӯшонед."],
           ru: ["Вынимайте из розетки зарядки и ненужные приборы: в режиме ожидания они тоже потребляют ток.", "Реже и короче открывайте холодильник и не ставьте в него горячую еду.", "Стирайте при полной загрузке машины, а не наполовину.", "Кипятите в чайнике только столько воды, сколько нужно."],
           en: ["Unplug chargers and unused devices: they use power even on standby.", "Open the fridge less often and never put hot food in it.", "Run the washing machine with a full load, not half empty.", "Boil only as much water as you need."] } },
    { h: { tg: "Гармкунӣ ва хунуккунӣ", ru: "Отопление и прохлада", en: "Heating and cooling" },
      l: { tg: ["Сӯрохиҳои тирезаю дарҳоро пӯшонед, то гармӣ набарояд.", "Бегоҳ пардаҳои ғафсро кашед ва пеш аз фурӯзон кардани гармкунак либоси гарм пӯшед.", "Вақте тиреза кушода аст, гармкунак ё кондитсионерро хомӯш кунед."],
           ru: ["Заделайте щели в окнах и дверях, чтобы не уходило тепло.", "Вечером задёргивайте плотные шторы и одевайтесь теплее, прежде чем включать обогреватель.", "Пока окно открыто, выключайте обогреватель или кондиционер."],
           en: ["Seal gaps around windows and doors so heat does not escape.", "Close thick curtains in the evening and put on warm clothes before turning on a heater.", "Switch off the heater or air conditioner while a window is open."] } },
    { h: { tg: "Дар мактаб", ru: "В школе", en: "At school" },
      l: { tg: ["Дар синфи холӣ чароғ, компютер ва проекторро хомӯш кунед.", "Дар синфатон «посбонони энергия» таъин кунед: онҳо баъди дарс ҳама чизро месанҷанд.", "Агар чароғ беҳуда сӯзад, ба муаллим хабар диҳед."],
           ru: ["В пустом классе выключайте свет, компьютеры и проектор.", "Назначьте в классе «дежурных по энергии»: они проверяют всё после урока.", "Сообщайте учителю, если где-то зря горит свет."],
           en: ["Switch off lights, computers and the projector in an empty classroom.", "Appoint “energy monitors” in your class to check everything after lessons.", "Tell a teacher if a light is left on for no reason."] } }
  ],
  water: [
    { h: { tg: "Чаро обро сарфа кардан лозим?", ru: "Почему воду надо беречь", en: "Why we must save water" },
      p: { tg: "Оби ширин тақрибан 2,5% -и тамоми оби Замин аст ва қисми зиёди он дар яхҳост. Тоҷикистон аз пиряхҳо бой аст, вале онҳо бар асари гарм шудани иқлим об мешаванд. Оби тоза бояд ба наслҳои оянда ҳам расад.",
           ru: "Пресная вода — это около 2,5% всей воды на Земле, и большая её часть заключена во льдах. Таджикистан богат ледниками, но они тают из-за потепления климата. Чистой воды должно хватить и будущим поколениям.",
           en: "Fresh water is only about 2.5% of all water on Earth, and most of it is locked in ice. Tajikistan is rich in glaciers, but they are melting as the climate warms. Clean water must last for future generations too." } },
    { h: { tg: "Дар хона", ru: "Дома", en: "At home" },
      l: { tg: ["Ҳангоми шустани дандон ва собунмолӣ канӯро бибандед.", "Душро кӯтоҳ кунед.", "Канӯи чакидаро фавран таъмир кунед: он дар як рӯз литрҳои зиёди об гум мекунад.", "Мошини ҷомашӯйро танҳо пурра бор кунед."],
           ru: ["Закрывайте кран, пока чистите зубы и намыливаетесь.", "Принимайте душ покороче.", "Сразу чините капающий кран: он теряет много литров воды в день.", "Запускайте стиральную машину только с полной загрузкой."],
           en: ["Turn the tap off while brushing your teeth and soaping.", "Take shorter showers.", "Fix a dripping tap quickly: it loses many litres a day.", "Run the washing machine only with a full load."] } },
    { h: { tg: "Дар боғ ва ҳавлӣ", ru: "В саду и во дворе", en: "In the garden and yard" },
      l: { tg: ["Растаниҳоро саҳар ё бегоҳ обёрӣ кунед, на дар нисфирӯзии гарм: об камтар буғ мешавад.", "Обро ба решаи растанӣ диҳед ва агар имкон бошад, обёрии қатраӣ истифода баред.", "Оби боронро барои обёрӣ ҷамъ кунед.", "Мошинро бо шланги кушода нашӯед: сатл истифода баред."],
           ru: ["Поливайте утром или вечером, а не в жаркий полдень: так меньше воды испаряется.", "Лейте воду под корень, по возможности используйте капельный полив.", "Собирайте дождевую воду для полива.", "Не мойте машину из открытого шланга: используйте ведро."],
           en: ["Water in the morning or evening, not at hot midday: less water evaporates.", "Pour water at the roots and use drip irrigation if you can.", "Collect rainwater for watering.", "Do not wash a car with an open hose: use a bucket."] } },
    { h: { tg: "Оби тозаро ифлос накунед", ru: "Не загрязняйте воду", en: "Keep water clean" },
      l: { tg: ["Партовҳо, пластик ва равғанро ба дарё, ҷӯй ва ариқ напартоед.", "Дар лаби об ҷомашӯйӣ ва мошиншӯйӣ накунед.", "Доруву кимиёвиро ба обрав нарезед."],
           ru: ["Не бросайте мусор, пластик и масло в реки, ручьи и арыки.", "Не стирайте и не мойте машины прямо на берегу.", "Не сливайте лекарства и химикаты в канализацию."],
           en: ["Never throw rubbish, plastic or oil into rivers, streams and canals.", "Do not wash clothes or cars right at the water's edge.", "Do not pour medicines or chemicals down the drain."] } },
    { h: { tg: "Дар мактаб", ru: "В школе", en: "At school" },
      l: { tg: ["Канӯҳои мактабро санҷед ва агар чакад, ба муаллим хабар диҳед.", "Дар синфатон «посбонони об» таъин кунед."],
           ru: ["Проверяйте краны в школе и сообщайте учителю, если они текут.", "Назначьте в классе «дежурных по воде»."],
           en: ["Check taps at school and tell a teacher if one leaks.", "Appoint “water monitors” in your class."] } }
  ],
  waste: [
    { h: { tg: "Агар тозагиро риоя накунем, чӣ мешавад?", ru: "Что будет, если не соблюдать чистоту", en: "What happens if we do not keep things clean" },
      l: { tg: ["Партовҳои ҷамъшуда мушу пашшаро ҷалб мекунад ва бӯи бад паҳн мекунад.", "Хок ва оби зеризаминӣ ифлос мешавад: аз партовҳо моддаҳои зараровар ба замин мераванд.", "Партовҳо ҷӯй ва ариқҳоро баста, хатари обхезиро зиёд мекунад.", "Пластик садсолаҳо пӯсида намешавад ва танҳо ба зарраҳои хурд тақсим мешавад.", "Сӯзондани партовҳо дуди заҳролуд медиҳад."],
           ru: ["Скопившийся мусор привлекает крыс и мух и вызывает неприятный запах.", "Загрязняются почва и грунтовые воды: из мусора в землю попадают вредные вещества.", "Мусор забивает ручьи и арыки, и из-за этого чаще бывают подтопления.", "Пластик сотни лет не разлагается, а лишь крошится на мелкие частицы.", "При сжигании мусора выделяется ядовитый дым."],
           en: ["Piles of rubbish attract rats and flies and cause bad smells.", "Soil and groundwater get polluted as harmful substances seep into the ground.", "Rubbish blocks streams and canals, which makes flooding more likely.", "Plastic does not rot for hundreds of years; it only breaks into tiny pieces.", "Burning rubbish releases poisonous smoke."] } },
    { h: { tg: "Партовҳо ба одам чӣ зарар мерасонанд?", ru: "Чем мусор вредит человеку", en: "How rubbish harms people" },
      l: { tg: ["Бемориҳои рӯда (масалан, дизентерия) тавассути пашша ва оби ифлос паҳн мешаванд.", "Дуди партовсӯзӣ ба нафаскашӣ ва шуш зарар мерасонад, махсусан ба кӯдакон ва пиронсолон.", "Зарраҳои хурди пластик метавонанд ба об ва ғизо ворид шаванд.", "Шишаи шикаста ва оҳани занг боиси буридагӣ ва ҷароҳат мешавад.", "Ҷойи ифлос кайфияти одамонро бад мекунад ва меҳмононро дур мекунад."],
           ru: ["Кишечные инфекции (например, дизентерия) распространяются через мух и грязную воду.", "Дым от горящего мусора вредит дыханию и лёгким, особенно детям и пожилым людям.", "Микрочастицы пластика могут попадать в воду и пищу.", "Битое стекло и ржавый металл становятся причиной порезов и травм.", "Грязное место портит настроение людей и отпугивает гостей."],
           en: ["Intestinal infections such as dysentery spread through flies and dirty water.", "Smoke from burning rubbish harms breathing and lungs, especially of children and older people.", "Tiny plastic particles can get into water and food.", "Broken glass and rusty metal cause cuts and injuries.", "A dirty place spoils people's mood and puts visitors off."] } },
    { h: { tg: "Чӣ тавр онро ислоҳ кардан мумкин аст?", ru: "Как это исправить", en: "How to fix it" },
      l: { tg: ["Партовҳоро ҷудо кунед: коғаз, пластик, шиша, оҳан ва боқимондаи хӯрок дар зарфҳои алоҳида.", "Камтар партоед: халтаи матоӣ ва шишаи такроран истифодашаванда истифода баред.", "Такроран истифода баред: зарфҳои шишагию пластикӣ барои ниҳолҳо ҷо мешаванд.", "Боқимондаи хӯрок ва баргро ба компост табдил диҳед ва ба боғ ғизо диҳед.", "Партовҳоро насузонед.", "Ҳар моҳ дар мактаб ё маҳалла ҳашари тозакунӣ гузаронед.", "Агар партовгоҳи ғайриқонуниро бинед, ба мақомоти маҳаллӣ хабар диҳед."],
           ru: ["Сортируйте мусор: бумага, пластик, стекло, металл и пищевые отходы отдельно.", "Производите меньше мусора: пользуйтесь тканевой сумкой и многоразовой бутылкой.", "Используйте повторно: банки и бутылки пригодятся для рассады и хранения.", "Превращайте пищевые отходы и листья в компост для огорода.", "Не сжигайте мусор.", "Проводите в школе или махалле хашар по уборке каждый месяц.", "Если видите стихийную свалку, сообщите местным властям."],
           en: ["Sort rubbish: paper, plastic, glass, metal and food waste separately.", "Make less rubbish: use a cloth bag and a refillable bottle.", "Reuse: jars and bottles can hold seedlings or store things.", "Turn food scraps and leaves into compost for the garden.", "Never burn rubbish.", "Hold a clean-up day (khashar) at school or in your neighbourhood every month.", "If you see an illegal dump, report it to local authorities."] } }
  ]
};

var CO2_FACTOR = 0.45;

// ===== 4. Состояние =====
var lang = "tg";
var checked = [false, false, false, false, false];

function byId(id) { return document.getElementById(id); }
function fmt(n) { return (Math.round(n * 10) / 10).toString(); }

// ===== 5. Отрисовка =====
function cardHtml(item, group, i) {
  return '<div class="card" onclick="openItem(\'' + group + '\',' + i + ')">' +
    '<div class="photo">' +
      '<img src="images/' + item.img + '" alt="' + item.name[lang] + '" ' +
        'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">' +
      '<span class="emoji">' + item.emoji + '</span>' +
    '</div>' +
    '<div class="body"><h4>' + item.name[lang] + '</h4>' +
    '<em>' + item.latin + '</em>' +
    '<p>' + item.text[lang] + '</p></div></div>';
}

function renderEcology() {
  if (!byId("herbs")) return;
  byId("herbs").innerHTML = HERBS.map(function (it, i) { return cardHtml(it, "herbs", i); }).join("");
  byId("trees").innerHTML = TREES.map(function (it, i) { return cardHtml(it, "trees", i); }).join("");
  byId("ecoTips").innerHTML = ECO_TIPS[lang].map(function (t) { return "<li>" + t + "</li>"; }).join("");
}

function renderEnergy() {
  if (!byId("actions")) return;
  byId("actions").innerHTML = ACTIONS.map(function (a, i) {
    return '<label class="action' + (checked[i] ? " on" : "") + '">' +
      '<input type="checkbox" ' + (checked[i] ? "checked" : "") + ' onchange="toggleAction(' + i + ')">' +
      '<span class="txt">' + a.text[lang] + '</span>' +
      '<span class="kwh">−' + fmt(a.kwh) + " " + UI[lang].kwh + '</span></label>';
  }).join("");

  var count = 0;
  var total = 0;
  for (var i = 0; i < ACTIONS.length; i++) {
    if (checked[i]) { count++; total += ACTIONS[i].kwh; }
  }
  byId("doneCount").textContent = count;
  byId("saveKwh").textContent = fmt(total);
  byId("saveCo2").textContent = fmt(total * CO2_FACTOR);
}

function toggleAction(i) {
  checked[i] = !checked[i];
  renderEnergy();
}

function renderWater() {
  if (!byId("waterActions")) return;
  byId("waterActions").innerHTML = WATER_ACTIONS.map(function (a, i) {
    return '<label class="action' + (checkedWater[i] ? " on" : "") + '">' +
      '<input type="checkbox" ' + (checkedWater[i] ? "checked" : "") + ' onchange="toggleWater(' + i + ')">' +
      '<span class="txt">' + a.text[lang] + '</span>' +
      '<span class="kwh">−' + a.liters + " " + UI[lang].liter + '</span></label>';
  }).join("");

  var count = 0;
  var total = 0;
  for (var i = 0; i < WATER_ACTIONS.length; i++) {
    if (checkedWater[i]) { count++; total += WATER_ACTIONS[i].liters; }
  }
  byId("waterDone").textContent = count;
  byId("saveWater").textContent = total;
  byId("saveBottles").textContent = Math.round(total / 1.5);
}

function toggleWater(i) {
  checkedWater[i] = !checkedWater[i];
  renderWater();
}

function openItem(group, i) {
  var item = (group === "herbs" ? HERBS : TREES)[i];
  byId("modalBody").innerHTML =
    '<div class="photo">' +
      '<img src="images/' + item.img + '" alt="' + item.name[lang] + '" ' +
        'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">' +
      '<span class="emoji">' + item.emoji + '</span>' +
    '</div>' +
    '<div class="body"><h4>' + item.name[lang] + '</h4><em>' + item.latin + '</em>' +
    '<p>' + item.text[lang] + '</p>' +
    '<h3>' + UI[lang].moreTitle + '</h3>' +
    '<p>' + MORE[item.img][lang] + '</p></div>';
  byId("modal").hidden = false;
}

function closeItem() {
  byId("modal").hidden = true;
}

function renderChrome() {
  var c = byId("chrome");
  if (!c) return;
  var pages = [["index.html", "home", "navHome"], ["ecology.html", "eco", "navEco"],
               ["energy.html", "energy", "navEnergy"], ["water.html", "water", "navWater"],
               ["waste.html", "waste", "navWaste"]];
  var nav = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[1] === c.dataset.active ? ' class="active"' : '') +
           ' data-i18n="' + p[2] + '"></a>';
  }).join("");
  c.innerHTML =
    '<header><div><h1 data-i18n="title"></h1><p data-i18n="subtitle"></p></div>' +
    '<div class="langs">' +
      '<button data-lang="tg" onclick="setLang(\'tg\')">Тоҷикӣ</button>' +
      '<button data-lang="ru" onclick="setLang(\'ru\')">Русский</button>' +
      '<button data-lang="en" onclick="setLang(\'en\')">English</button>' +
    '</div></header><nav>' + nav + '</nav>';
}

function renderHome() {
  var h = byId("homeCards");
  if (!h) return;
  var items = [["ecology.html", "🌿", "navEco", "homeEcoD"], ["energy.html", "⚡", "navEnergy", "homeEnergyD"],
               ["water.html", "💧", "navWater", "homeWaterD"], ["waste.html", "♻️", "navWaste", "homeWasteD"]];
  h.innerHTML = items.map(function (it) {
    return '<a href="' + it[0] + '"><span class="big">' + it[1] + '</span>' +
           '<b data-i18n="' + it[2] + '"></b><span data-i18n="' + it[3] + '"></span></a>';
  }).join("");
}

function renderArticle() {
  var a = byId("article");
  if (!a) return;
  a.className = "art";
  a.innerHTML = ARTICLES[a.dataset.article].map(function (b) {
    return '<h3>' + b.h[lang] + '</h3>' +
      (b.p ? '<p>' + b.p[lang] + '</p>' : '') +
      (b.l ? '<ul>' + b.l[lang].map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' : '');
  }).join("");
}

function setLang(newLang) {
  lang = newLang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}

  renderChrome();
  renderHome();
  var texts = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < texts.length; i++) {
    texts[i].textContent = UI[lang][texts[i].dataset.i18n];
  }
  var buttons = document.querySelectorAll(".langs button");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.toggle("active", buttons[j].dataset.lang === lang);
  }
  renderEcology();
  renderEnergy();
  renderWater();
  renderArticle();
}

// ===== 6. Запуск =====
var startLang = "tg";
try { startLang = localStorage.getItem("lang") || "tg"; } catch (e) {}
setLang(startLang);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && byId("modal")) closeItem();
});
