export interface MenuItem {
  name: string
  description: string
  price: string
  imageQuery: string
  localFallback?: string
}

export interface MenuSection {
  title: string
  sectionImage: string
  items: MenuItem[]
  comingSoon?: boolean
}

// ─── /menus/ image aliases for readability ─────────────────────────────────
const M = {
  // Soups
  drumstickSoup:    '/menus/Drumstick Soup (Moringa Soup).jpeg',
  rasam:            '/menus/Milagu Rasam Is the Immunity Booster You Need.jpeg',
  chickenSoup:      '/menus/Chicken Soup.jpeg',

  // Snacks / starters
  vada:             '/menus/Medu vada is a popular crispy snack made with urad dal_ Medu vada recipe with step by step pictures for easy understanding and reference.jpeg',
  rassamVada:       '/menus/Have you ever tried tasty and flavorful Rasam Vada a popular South Indian dish__.jpeg',
  paneer65:         '/menus/Paneer 65.jpeg',
  chicken65:        '/menus/Air Fryer Chicken 65 \u2013 Kannamma Cooks.jpeg',
  chickenTikka:     '/menus/Chicken Malai Tikka (Air Fryer).jpeg',
  pepperChicken:    '/menus/Restaurant Style Pepper Chicken Fry Recipe - Flavor Quotient.jpeg',
  muttonPepperFry:  '/menus/Mutton Pepper Fry (Restaurant Style).jpeg',
  nethiliFry:       '/menus/_ (1).jpeg',

  // Idly
  idli:             '/menus/Samai Idli Recipe- How to make Little Millet Idli_ - Tomato Blues.jpeg',
  podiIdli:         '/menus/Podi idli is a quick and easy snack from South India.jpeg',

  // Dosa
  dosaGolden:       '/menus/_.jpeg',             // beautiful golden crispy dosa on banana leaf
  dosaCheesy:       '/menus/cheesy dosa with side dishes.jpeg',
  dosaPlain:        '/menus/dosa.jpeg',
  setDosa:          '/menus/Master The Art Of Home-Cooked Set Dosas In 7 Steps.jpeg',
  ravaDosa:         '/menus/Onion Rava Dosa.jpeg',
  uttapam:          '/images/menu-uttapam.png',  // # in menus filename is URL-unsafe; use /images

  // Indo Chinese
  schezwanRice:     '/menus/Easy Schezwan Fried Rice (30 minutes, one-pan meal).jpeg',
  chickenManchur:   '/menus/Indian Chicken Manchurian.jpeg',
  dragonChicken:    '/menus/Dragon Chicken Recipe (Restaurant Style) - Swasthi\u2019s Recipes.jpeg',
  chickenFriedRice: '/menus/Chicken Fried Rice Recipe _ Easy Homemade _ Instant Download PDF _ Printable Digital Recipe.jpeg',
  chickenNoodles:   '/menus/Indian Chicken Manchurian.jpeg',  // no noodle image; closest style

  // Parotta
  parottaCurry:     '/menus/_ (2).jpeg',         // parotta with salna — exact image
  parottaChicken65: '/menus/Parotta [4 Pieces]+Chicken 65 [Half]+Chicken Salna.jpeg',
  kothuParotta:     '/menus/Chicken Kothu Parotta.jpeg',

  // Mains
  goatCurry:        '/images/goat.jpeg',
  paya:             '/menus/_ (3).jpeg',          // mutton paya bone-in curry — exact image
  chickenCurry:     '/menus/Restaurant Style Pepper Chicken Fry Recipe - Flavor Quotient.jpeg',
  prawn:            '/menus/Prawn Biryani Recipe (Shrimp Biryani).jpeg',
  fishCurry:        '/images/menu-curry.png',
  muttonFry:        '/menus/Mutton Pepper Fry (Restaurant Style).jpeg',
  vegCurry:         '/images/menu-curry.png',

  // Non-Veg — dedicated per-item images from /non_veg/
  nvButterChicken:              '/non_veg/Butter Chicken.jfif',
  nvChickenChettinad:           '/non_veg/Chicken Chettinad.jfif',
  nvChickenTikka:               '/non_veg/Chiken tikka.jfif',
  nvDragonChicken:              '/non_veg/Dragon Chicken.jfif',
  nvMuttonDosa:                 '/non_veg/Mutton Dosa.jfif',
  nvMuttonKolaUrundai:          '/non_veg/Mutton Kola Urundai.jfif',
  nvRoganJoshChicken:           '/non_veg/Rogan josh chicken.jfif',
  nvAndhraChicken:              '/non_veg/andra chicken.jfif',
  nvAndhraLamb:                 '/non_veg/andra lamb.jfif',
  nvButterPrawn:                '/non_veg/butter prawn.jfif',
  nvChettinadPrawn:             '/non_veg/chettinad prawn.jfif',
  nvChicken65Dosa:              '/non_veg/chicken 65 dosa.jfif',
  nvChickenLollipopTossed:      '/non_veg/chicken lollipop tossed.jfif',
  nvChickenLollipop:            '/non_veg/chicken lollipop.jfif',
  nvChickenNoodles:             '/non_veg/chicken noodles.jfif',
  nvChickenSchezwanNoodles:     '/non_veg/chicken schezwan noodles.jfif',
  nvChickenTikkaMasala:         '/non_veg/chicken tikka masala.jfif',
  nvChilliChicken:              '/non_veg/chilli chicken.jfif',
  nvCrabSaru:                   '/non_veg/crab saru.jfif',
  nvEggDosa:                    '/non_veg/egg dosa.jfif',
  nvEggKothuParotta:            '/non_veg/egg kothu parotta.jfif',
  nvGonguraChicken:             '/non_veg/gongura chicken.jfif',
  nvGonguraLamb:                '/non_veg/gongura lamb.jfif',
  nvGonguraMutton:              '/non_veg/gongura mutton.jfif',
  nvKurumaChicken:              '/non_veg/kuruma chicken.jfif',
  nvKurumaLamb:                 '/non_veg/kuruma lamb.jfif',
  nvMalabarFish:                '/non_veg/malabar fish.jfif',
  nvMalabarPrawn:               '/non_veg/malabar prawn.jfif',
  nvMuttonBiryani:              '/non_veg/mutton biryani.jfif',
  nvMuttonPaya:                 '/non_veg/mutton paya.jfif',
  nvParottaWithChickenLambGoat: '/non_veg/parotta with chicken lamb goat.jfif',
  nvParottaWithChicken65:       '/non_veg/parotta with chicken 65.jpg',
  nvParottaWithGoat65:          '/non_veg/parotta with goat 65.jpg',
  nvPrawnPepperFry:             '/non_veg/prawn pepper fry.jfif',
  nvPuliKulambuChicken:          '/non_veg/puli kulambu chicken.jfif',
  nvPuliKulambuFish:             '/non_veg/puli kulambu fish.jfif',
  nvRoganGoseLamb:              '/non_veg/rogan gose lamb.jfif',
  nvTawaFish:                   '/non_veg/tawa fish.jfif',
  nvVindalooChicken:            '/non_veg/vindaloo chicken.jfif',
  nvVindalooLamb:               '/non_veg/vindaloo lamb.jfif',

  // Veg — dedicated per-item images from /veg/
  vAlooBonda:                   '/veg/Aloo Bonda.jfif',
  vEnnaiKathirikaiKulambu:      '/veg/Ennai Kathirikai Kulambu.jfif',
  vGobi65:                      '/veg/Gobi 65.jfif',
  vGobiManchurian:              '/veg/Gobi Manchurian.jfif',
  vMangoDal:                    '/veg/Mango Dal.jfif',
  vMysoreMasalaDosa:            '/veg/Mysore Masala Dosa.jfif',
  vPodiDosa:                    '/veg/Podi Dosa.jfif',
  vRavaDosa:                    '/veg/Rava Dosa.jfif',
  vSiStyleDhalTadka:            '/veg/SI style dhal tadka.jfif',
  vBananaBaji:                  '/veg/banana baji.jfif',
  vCheeseDosa:                  '/veg/cheese dosa.jfif',
  vCheeseMasalaDosa:            '/veg/cheese masala dosa.jfif',
  vChilliPaneer:                '/veg/chilli paneer.jfif',
  vCoconutRice:                 '/veg/coconut rice.jfif',
  vCurdRice:                    '/veg/curd rice.jfif',
  vDahiVada:                    '/veg/Dahi Vada.jfif',
  vFamilyPaperDosa:             '/veg/family paper dosa.jfif',
  vGheePodiMiniIdly:            '/veg/ghee podi mini idly.jfif',
  vGheeRoastDosa:               '/veg/ghee roast dosa.jfif',
  vGheeRoastMasalaDosa:         '/veg/ghee roast masala dosa.jfif',
  vGheeRoastPodiMasala:         '/veg/ghee roast podi masala.jfif',
  vLemonRice:                   '/veg/lemon rice.jfif',
  vMasalaDosa:                  '/veg/masala dosa.jfif',
  vMasalaVada:                  '/veg/masala vada.jfif',
  vMethuVada:                   '/veg/methu vada.jfif',
  vMiniIdly:                    '/veg/mini idly.jfif',
  vMirchiBhaji:                 '/veg/mirchi bhaji.jfif',
  vMixVegUthappam:              '/veg/mix veg uthappam.jfif',
  vOkraFry:                     '/veg/okra fry.jfif',
  vOnionDosa:                   '/veg/onion dosa.jfif',
  vOnionPakoda:                 '/veg/onion pakoda.jfif',
  vOnionSamosa:                 '/veg/onion samosa.jfif',
  vOnionUthappam:               '/veg/onion uthappam.jfif',
  vPaneerCheeseDosa:            '/veg/paneer cheese dosa.jfif',
  vPaneerCurry:                 '/veg/paneer curry.jfif',
  vPaneerDosa:                  '/veg/paneer dosa.jfif',
  vPlainDosa:                   '/veg/plain dosa.jfif',
  vPlainIdly:                   '/veg/plain idly.jfif',
  vPlainRice:                   '/veg/plain rice.jfif',
  vPodiMasalaDosa:              '/veg/podi masala dosa.jfif',
  vPotatoKaraCurry:             '/veg/potato kara curry.jfif',
  vRasamVada:                   '/veg/rasam vada.jfif',
  vRavaMasalaDosa:              '/veg/rava masala dosa.jfif',
  vSambarVada:                  '/veg/sambar vada.jfif',
  vTamarindRice:                '/veg/tamarind rice.jfif',
  vVegSchezwanNoodles:          '/veg/veg Schezwan Noodles.jfif',
  vVegBiryani:                  '/veg/veg briyani.jfif',
  vVegKuruma:                   '/veg/veg kuruma.jfif',
  vVegManchurian:               '/veg/veg machurian.jfif',

  // Rice
  lemonRice:        '/menus/Lemon Rice (Easy Greek Side Dish).jpeg',
  tamarindRice:     '/menus/_ (5).jpeg',          // tamarind/puliyodarai rice
  coconutRice:      '/menus/Easy Coconut Rice Recipe for a Flavorful Side Dish.jpeg',
  southFeast:       '/images/featured-thali.png',

  // Biryani
  chickenBiryani:   '/menus/_ (6).jpeg',          // chicken biryani with drumsticks
  vegBiryani:       '/menus/_ (7).jpeg',          // veg biryani in copper pot
  prawnBiryani:     '/menus/Prawn Biryani Recipe (Shrimp Biryani).jpeg',

  // Drinks & Desserts — dedicated per-item images
  sweetLassi:       '/drinks_and_dessert/sweet lassi.jfif',
  mangoLassi:       '/menus/Mango-Lassi-2.jpeg',
  buttermilk:       '/drinks_and_dessert/butter milk.jfif',
  saltLassi:        '/menus/butter milk _ chaas image generated by purple box.jpeg',
  jigarthanda:      '/drinks_and_dessert/Jigarthanda.jfif',
  riceKheer:        '/drinks_and_dessert/Rice kheer.jfif',

  // Drinks (menus folder fallbacks)
  filterCoffee:     '/menus/South Indian Filter Coffee - Filter Kaapi (With & Without Filter)- Masalakorb.jpeg',
  tea:              '/menus/_ (10).jpeg',          // masala chai / tea

  // Desserts
  ravaKesari:       '/menus/_ (9).jpeg',           // exact Rava Kesari image
  halwa:            '/menus/_ (8).jpeg',           // halwa image
  payasam:          '/menus/Semiya Payasam _ Vermicelli Kheer \u2014 KarthisKitchenStudio.jpeg',

  // Roti & Paratha — dedicated per-item images from /roti_and_naan/
  plainRoti:        '/roti_and_naan/plain roti_chapati.jfif',
  butterRoti:       '/roti_and_naan/ButterRoti.jfif',
  tandooriRoti:     '/roti_and_naan/Tandoori Roti.jfif',
  alooParatha:      '/roti_and_naan/aloo paratha.jfif',
  paneerParatha:    '/roti_and_naan/paneer paratha.jfif',
  rumaliRoti:       '/roti_and_naan/rumali roti.jfif',
  plainParotta:     '/roti_and_naan/plain parotta.jfif',
  butterParotta:    '/roti_and_naan/Butter Parotta.jfif',
  plainNaan:        '/roti_and_naan/plain naan.jfif',
  butterNaan:       '/roti_and_naan/butter naan.jfif',
  garlicNaan:       '/roti_and_naan/GARLIC NAAN.jfif',
  cheeseNaan:       '/menus/Chilli Cheese Naan (Easy Recipe) - Indian Breads - Sanjana Feasts.jpeg',
  kulcha:           '/roti_and_naan/Kulcha.jfif',
}

// ─── VEG ──────────────────────────────────────────────────────────────────────
export const vegSections: MenuSection[] = [
  {
    title: 'Soup',
    sectionImage: M.rasam,
    items: [
      { name: 'Milagu Rasam (Pepper)', description: 'Spicy South Indian pepper soup infused with aromatic herbs and spices.', price: '$11.99', imageQuery: 'rasam pepper soup south indian', localFallback: M.rasam },
      { name: 'Moringa Saru (Drumstick)', description: 'Flavorful South Indian drumstick soup cooked with traditional spices and herbs.', price: '$12.99', imageQuery: 'moringa drumstick soup indian', localFallback: M.drumstickSoup },
    ],
  },
  {
    title: 'South Indian Snacks',
    sectionImage: M.vMethuVada,
    comingSoon: true,
    items: [
      { name: 'Methu Vada', description: 'Crispy golden urad dal fritters, soft inside and served fresh.', price: '$9.99', imageQuery: 'medu vada south indian', localFallback: M.vMethuVada },
      { name: 'Masala Vada (3 Nos)', description: 'Crunchy lentil fritters blended with traditional South Indian spices.', price: '$9.99', imageQuery: 'masala vada lentil fritters', localFallback: M.vMasalaVada },
      { name: 'Aloo Bonda (3 Nos)', description: 'Crispy potato masala coated in a flavorful golden gram flour batter.', price: '$9.99', imageQuery: 'aloo bonda potato fritter indian', localFallback: M.vAlooBonda },
      { name: 'Banana Baji (3 Nos)', description: 'Crispy ripe banana fritters coated in a light spiced batter.', price: '$9.99', imageQuery: 'banana bajji south indian', localFallback: M.vBananaBaji },
      { name: 'Sambar Vada (2 Nos)', description: 'Soft medu vadai soaked in flavorful traditional sambar.', price: '$11.99', imageQuery: 'sambar vada south indian', localFallback: M.vSambarVada },
      { name: 'Rasam Vada (2 Nos)', description: 'Soft medu vadai dipped in spicy and tangy rasam.', price: '$11.99', imageQuery: 'rasam vada south indian', localFallback: M.vRasamVada },
      { name: 'Dahi Vada (2 Nos)', description: 'Soft lentil dumplings topped with chilled creamy curd and spices.', price: '$11.99', imageQuery: 'dahi vada curd indian', localFallback: M.vDahiVada },
      { name: 'Onion Samosa (5 Nos)', description: 'Crispy mini pastries stuffed with spiced onion filling.', price: '$9.99', imageQuery: 'samosa indian snack', localFallback: M.vOnionSamosa },
      { name: 'Onion Pakoda', description: 'Crispy onion fritters tossed with aromatic spices and herbs.', price: '$9.99', imageQuery: 'onion pakoda indian fritter', localFallback: M.vOnionPakoda },
      { name: 'Paneer 65 (Dry or Semi)', description: 'Spicy crispy paneer tossed in bold South Indian flavors.', price: '$17.99', imageQuery: 'paneer 65 fried indian', localFallback: M.paneer65 },
      { name: 'Gobi 65 (Dry or Semi)', description: 'Crispy cauliflower bites tossed in spicy South Indian seasoning.', price: '$16.99', imageQuery: 'gobi 65 cauliflower indian', localFallback: M.vGobi65 },
      { name: 'Mirchi Bhaji (2 Nos)', description: 'Crispy fried green chilli coated in spiced gram flour batter.', price: '$9.99', imageQuery: 'mirchi bhaji chilli fritter indian', localFallback: M.vMirchiBhaji },
    ],
  },
  {
    title: 'Idly',
    sectionImage: M.vPlainIdly,
    items: [
      { name: 'Plain Idly (4 Nos)', description: 'Soft fluffy steamed rice cakes served with sambar and chutneys.', price: '$14.99', imageQuery: 'plain idli sambar south indian', localFallback: M.vPlainIdly },
      { name: 'Mini Idly (with sambar)', description: 'Bite-sized steamed rice cakes soaked in hot flavorful sambar.', price: '$15.99', imageQuery: 'mini idli sambar south indian', localFallback: M.vMiniIdly },
      { name: 'Podi Idly (4 pcs)', description: 'Soft idly tossed in roasted lentil powder and spices.', price: '$16.99', imageQuery: 'podi idli south indian', localFallback: M.podiIdli },
      { name: 'Ghee Podi Idly', description: 'Steamed rice cakes coated in aromatic ghee and podi.', price: '$17.99', imageQuery: 'ghee podi idli south indian', localFallback: M.podiIdli },
      { name: 'Ghee Podi Mini Idly', description: 'Mini idlies tossed in aromatic ghee and roasted lentil powder.', price: '$16.99', imageQuery: 'mini idli ghee podi south indian', localFallback: M.vGheePodiMiniIdly },
    ],
  },
  {
    title: 'Dosa',
    sectionImage: M.vPlainDosa,
    items: [
      { name: 'Plain Dosa', description: 'Classic crispy rice crepe served with sambar and chutneys.', price: '$11.99', imageQuery: 'plain dosa crispy south indian', localFallback: M.vPlainDosa },
      { name: 'Set Dosa', description: 'Soft spongy dosas served with sambar and chutneys.', price: '$12.99', imageQuery: 'set dosa soft south indian', localFallback: M.setDosa },
      { name: 'Podi Dosa', description: 'Crispy dosa coated with aromatic podi powder.', price: '$14.99', imageQuery: 'podi dosa south indian', localFallback: M.vPodiDosa },
      { name: 'Podi Masala Dosa', description: 'Podi dosa filled with spiced potato masala.', price: '$15.99', imageQuery: 'podi dosa filled with potato', localFallback: M.vPodiMasalaDosa },
      { name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potato masala.', price: '$15.99', imageQuery: 'masala dosa south indian', localFallback: M.vMasalaDosa },
      { name: 'Mysore Masala Dosa', description: 'Spicy dosa with red chutney and potato masala.', price: '$16.99', imageQuery: 'mysore masala dosa spicy', localFallback: M.vMysoreMasalaDosa },
      { name: 'Cheese Dosa', description: 'Crispy dosa topped with melted cheese.', price: '$15.99', imageQuery: 'cheese dosa south indian', localFallback: M.vCheeseDosa },
      { name: 'Cheese Masala Dosa', description: 'Cheese dosa filled with spiced potato masala.', price: '$16.99', imageQuery: 'cheese masala dosa indian', localFallback: M.vCheeseMasalaDosa },
      { name: 'Ghee Roast Dosa', description: 'Extra crispy dosa roasted in pure ghee.', price: '$14.99', imageQuery: 'ghee roast dosa crispy', localFallback: M.vGheeRoastDosa },
      { name: 'Ghee Roast Masala Dosa', description: 'Ghee roast dosa with spiced potato masala.', price: '$16.99', imageQuery: 'ghee dosa masala south indian', localFallback: M.vGheeRoastMasalaDosa },
      { name: 'Ghee Roast Podi Masala', description: 'Ghee dosa with podi and potato masala.', price: '$17.99', imageQuery: 'ghee podi masala dosa', localFallback: M.vGheeRoastPodiMasala },
      { name: 'Onion Dosa', description: 'Crispy dosa topped with caramelized onions.', price: '$15.99', imageQuery: 'onion dosa south indian', localFallback: M.vOnionDosa },
      { name: 'Paneer Dosa', description: 'Dosa filled with spiced paneer filling.', price: '$18.99', imageQuery: 'paneer dosa south indian', localFallback: M.vPaneerDosa },
      { name: 'Paneer Cheese Dosa', description: 'Paneer dosa topped with melted cheese.', price: '$19.99', imageQuery: 'paneer cheese dosa indian', localFallback: M.vPaneerCheeseDosa },
      { name: 'Onion Uthappam (2 pcs)', description: 'Thick rice pancakes topped with onions.', price: '$17.99', imageQuery: 'uttapam onion south indian', localFallback: M.vOnionUthappam },
      { name: 'Mix Veg Uthappam (2 pcs)', description: 'Thick rice pancakes with mixed vegetables.', price: '$18.99', imageQuery: 'vegetable uttapam south indian', localFallback: M.vMixVegUthappam },
      { name: 'Family Paper Dosa', description: 'Extra large crispy paper thin dosa.', price: '$22.99', imageQuery: 'paper dosa giant south indian', localFallback: M.vFamilyPaperDosa },
      { name: 'Rava Dosa', description: 'Crispy semolina crepe with a unique texture.', price: '$15.99', imageQuery: 'rava dosa semolina crispy', localFallback: M.vRavaDosa },
      { name: 'Rava Masala Dosa', description: 'Rava dosa filled with spiced potato masala.', price: '$17.99', imageQuery: 'rava masala dosa south indian', localFallback: M.vRavaMasalaDosa },
    ],
  },
  {
    title: 'Indo Chinese',
    sectionImage: M.vGobiManchurian,
    items: [
      { name: 'Chilly Paneer', description: 'Paneer tossed in spicy Indo-Chinese sauce.', price: '$17.99', imageQuery: 'chilli paneer indo chinese', localFallback: M.vChilliPaneer },
      { name: 'Veg Manchurian', description: 'Vegetable balls in tangy Manchurian sauce.', price: '$15.99', imageQuery: 'veg manchurian balls chinese', localFallback: M.vVegManchurian },
      { name: 'Gobi Manchurian', description: 'Crispy cauliflower in Manchurian sauce.', price: '$16.99', imageQuery: 'gobi manchurian cauliflower', localFallback: M.vGobiManchurian },
      { name: 'Veg Fried Rice', description: 'Wok-tossed rice with mixed vegetables.', price: '$15.99', imageQuery: 'vegetable fried rice chinese', localFallback: M.schezwanRice },
      { name: 'Schezwan Fried Rice', description: 'Spicy Schezwan style fried rice.', price: '$16.99', imageQuery: 'schezwan fried rice spicy', localFallback: M.schezwanRice },
      { name: 'Veg Noodles', description: 'Stir-fried noodles with fresh vegetables.', price: '$15.99', imageQuery: 'vegetable noodles stir fry', localFallback: M.vVegSchezwanNoodles },
      { name: 'Veg Schezwan Noodles', description: 'Spicy Schezwan noodles with vegetables.', price: '$16.99', imageQuery: 'schezwan noodles spicy vegetable', localFallback: M.vVegSchezwanNoodles },
    ],
  },
  {
    title: 'Mains',
    sectionImage: M.vVegKuruma,
    items: [
      { name: 'Paneer Curry', description: 'Cottage cheese in rich South Indian curry.', price: '$19.99', imageQuery: 'paneer curry south indian', localFallback: M.vPaneerCurry },
      { name: 'Okra Fry', description: 'Crispy okra stir-fried with spices.', price: '$18.99', imageQuery: 'okra bhindi fry indian', localFallback: M.vOkraFry },
      { name: 'Ennai Kathirikai Kulambu', description: 'Stuffed brinjal in tangy tamarind gravy.', price: '$18.99', imageQuery: 'brinjal curry tamarind south indian', localFallback: M.vEnnaiKathirikaiKulambu },
      { name: 'Potato Kara Curry', description: 'Spicy potato curry South Indian style.', price: '$17.99', imageQuery: 'potato kara curry south indian', localFallback: M.vPotatoKaraCurry },
      { name: 'Veg Kuruma / Curry', description: 'Mixed vegetables in coconut curry.', price: '$17.99', imageQuery: 'vegetable korma coconut curry indian', localFallback: M.vVegKuruma },
      { name: 'SI Style Dhal Tadka', description: 'Lentils tempered with South Indian spices.', price: '$17.99', imageQuery: 'dal tadka lentil south indian', localFallback: M.vSiStyleDhalTadka },
      { name: 'Mango Dhal', description: 'Lentils cooked with raw mango.', price: '$18.99', imageQuery: 'mango dal lentil curry', localFallback: M.vMangoDal },
    ],
  },
  {
    title: 'Rice Dishes',
    sectionImage: M.vTamarindRice,
    items: [
      { name: 'Plain Rice', description: 'Steamed basmati rice.', price: '$4.00', imageQuery: 'steamed basmati rice plain', localFallback: M.vPlainRice },
      { name: 'Lemon Rice', description: 'Tangy rice with lemon and spices.', price: '$12.00', imageQuery: 'lemon rice south indian', localFallback: M.vLemonRice },
      { name: 'Tamarind Rice', description: 'Rice with tangy tamarind paste.', price: '$12.00', imageQuery: 'tamarind rice south indian', localFallback: M.vTamarindRice },
      { name: 'Curd Rice', description: 'Cooling rice mixed with yogurt.', price: '$11.00', imageQuery: 'curd rice yogurt south indian', localFallback: M.vCurdRice },
      { name: 'Coconut Rice', description: 'Fragrant rice with coconut.', price: '$12.00', imageQuery: 'coconut rice south indian', localFallback: M.vCoconutRice },
    ],
  },
  {
    title: 'Veg Briyani',
    sectionImage: M.vVegBiryani,
    items: [
      { name: 'Veg Briyani', description: 'Aromatic basmati rice with spices and veges.', price: '$16.99', imageQuery: 'vegetable biryani basmati rice', localFallback: M.vVegBiryani },
      { name: 'Family Pack Briyani', description: 'Aromatic basmati rice with spices and veges — serves 4–6.', price: '$45.99', imageQuery: 'vegetable biryani large family indian', localFallback: M.vVegBiryani },
    ],
  },
]

// ─── NON-VEG ──────────────────────────────────────────────────────────────────
export const nonVegSections: MenuSection[] = [
  {
    title: 'Soup',
    sectionImage: M.chickenSoup,
    items: [
      { name: 'Kozhi Saru (Chicken)', description: 'Traditional South Indian chicken soup.', price: '$14.99', imageQuery: 'chicken soup south indian', localFallback: M.chickenSoup },
      { name: 'Crab (Nandu) Saru', description: 'Spicy South Indian crab soup enriched with coastal flavors.', price: '$16.99', imageQuery: 'crab soup south indian seafood', localFallback: M.nvCrabSaru },
    ],
  },
  {
    title: 'Appetizers',
    sectionImage: M.chicken65,
    items: [
      { name: 'Chicken 65', description: 'Spicy deep-fried chicken with South Indian spices.', price: '$18.99', imageQuery: 'chicken 65 fried south indian', localFallback: M.chicken65 },
      { name: 'Chicken Lollipop (5 Nos)', description: 'Crispy chicken winglets shaped like lollipops.', price: '$17.99', imageQuery: 'chicken lollipop appetizer indian', localFallback: M.nvChickenLollipop },
      { name: 'Chicken Lollipop Tossed', description: 'Chicken lollipop tossed in spicy sauce.', price: '$18.99', imageQuery: 'chicken lollipop spicy tossed', localFallback: M.nvChickenLollipopTossed },
      { name: 'Chicken Pepper Fry', description: 'Chicken pieces stir-fried with black pepper.', price: '$17.99', imageQuery: 'chicken pepper fry south indian', localFallback: M.pepperChicken },
      { name: 'Goat Pepper Fry', description: 'Tender goat meat with aromatic pepper.', price: '$21.99', imageQuery: 'goat pepper fry south indian', localFallback: M.muttonPepperFry },
      { name: 'Prawn Pepper Fry', description: 'Prawns stir-fried with crushed pepper.', price: '$21.99', imageQuery: 'prawn pepper fry indian seafood', localFallback: M.nvPrawnPepperFry },
      { name: 'Mutton Kola Urundai (6 pcs)', description: 'Deep-fried mutton meatballs.', price: '$18.99', imageQuery: 'mutton kola urundai fried meatballs', localFallback: M.nvMuttonKolaUrundai },
      { name: 'Nethili Fry', description: 'Crispy fried anchovies with spices.', price: '$18.99', imageQuery: 'nethili fry anchovy crispy indian', localFallback: M.nethiliFry },
      { name: 'Tawa Fish', description: 'Pan-seared fish with Indian spices.', price: '$19.99', imageQuery: 'tawa fish pan seared indian', localFallback: M.nvTawaFish },
      { name: 'Chicken Tikka', description: 'Marinated chicken grilled in tandoor.', price: '$19.99', imageQuery: 'chicken tikka tandoor grilled', localFallback: M.nvChickenTikka },
      { name: 'Malai Tikka', description: 'Creamy marinated chicken tikka.', price: '$19.99', imageQuery: 'malai tikka creamy chicken', localFallback: M.chickenTikka },
      { name: 'Tandoori Chicken 65', description: 'Tandoori style chicken 65.', price: '$21.99', imageQuery: 'tandoori chicken 65 south indian', localFallback: M.chicken65 },
    ],
  },
  {
    title: 'Non Veg Dosa',
    sectionImage: M.dosaGolden,
    items: [
      { name: 'Chicken 65 Dosa', description: 'Crispy dosa topped with chicken 65.', price: '$19.99', imageQuery: 'chicken 65 dosa south indian', localFallback: M.nvChicken65Dosa },
      { name: 'Tandoori 65 Dosa', description: 'Dosa with tandoori chicken 65.', price: '$21.99', imageQuery: 'tandoori dosa south indian', localFallback: M.nvChicken65Dosa },
      { name: 'Chicken Kheema Dosa', description: 'Dosa filled with minced chicken.', price: '$19.99', imageQuery: 'chicken kheema dosa minced', localFallback: M.dosaPlain },
      { name: 'Egg Dosa', description: 'Dosa topped with scrambled egg.', price: '$16.99', imageQuery: 'egg dosa south indian', localFallback: M.nvEggDosa },
      { name: 'Mutton Dosa', description: 'Dosa with spiced mutton filling.', price: '$19.99', imageQuery: 'mutton dosa south indian', localFallback: M.nvMuttonDosa },
    ],
  },
  {
    title: 'Parotta',
    sectionImage: M.parottaCurry,
    items: [
      { name: 'Parotta with Salna', description: 'Layered flatbread with vegetable curry.', price: '$15.99', imageQuery: 'parotta salna flatbread south indian', localFallback: M.parottaCurry },
      { name: 'Egg Kothu Parotta', description: 'Shredded parotta with egg.', price: '$16.99', imageQuery: 'kothu parotta egg shredded', localFallback: M.nvEggKothuParotta },
      { name: 'Chicken Kothu Parotta', description: 'Shredded parotta with chicken.', price: '$19.99', imageQuery: 'chicken kothu parotta south indian', localFallback: M.kothuParotta },
      { name: 'Parotta with Chicken 65', description: 'Parotta served with chicken 65.', price: '$25.99', imageQuery: 'parotta chicken 65 south indian', localFallback: M.nvParottaWithChicken65 },
      { name: 'Parotta with Goat 65', description: 'Parotta served with goat 65.', price: '$27.99', imageQuery: 'parotta goat 65 south indian', localFallback: M.nvParottaWithGoat65 },
      { name: 'Parotta with Chicken/Lamb/Goat/Mutton Paya', description: 'Parotta with rich meat trotters curry.', price: '$27.99', imageQuery: 'parotta paya curry south indian', localFallback: M.nvParottaWithChickenLambGoat },
    ],
  },
  {
    title: 'Indo Chinese',
    sectionImage: M.chickenManchur,
    items: [
      { name: 'Chilly Chicken', description: 'Chicken in spicy Indo-Chinese sauce.', price: '$17.99', imageQuery: 'chilli chicken indo chinese', localFallback: M.nvChilliChicken },
      { name: 'Chicken Dragon', description: 'Crispy chicken in dragon sauce.', price: '$19.99', imageQuery: 'dragon chicken spicy chinese', localFallback: M.nvDragonChicken },
      { name: 'Chicken Manchurian', description: 'Chicken balls in Manchurian sauce.', price: '$19.99', imageQuery: 'chicken manchurian balls chinese', localFallback: M.chickenManchur },
      { name: 'Chicken Fried Rice', description: 'Wok-tossed rice with chicken.', price: '$17.99', imageQuery: 'chicken fried rice chinese', localFallback: M.chickenFriedRice },
      { name: 'Egg Fried Rice', description: 'Fried rice with scrambled egg.', price: '$15.99', imageQuery: 'egg fried rice chinese', localFallback: M.schezwanRice },
      { name: 'Schezwan Chicken Fried Rice', description: 'Spicy Schezwan rice with chicken.', price: '$18.99', imageQuery: 'schezwan chicken fried rice spicy', localFallback: M.schezwanRice },
      { name: 'Schezwan Egg Fried Rice', description: 'Spicy Schezwan rice with egg.', price: '$16.99', imageQuery: 'schezwan egg fried rice spicy', localFallback: M.schezwanRice },
      { name: 'Chicken Noodles', description: 'Stir-fried noodles with chicken.', price: '$18.99', imageQuery: 'chicken noodles stir fry chinese', localFallback: M.nvChickenNoodles },
      { name: 'Chicken Schezwan Noodles', description: 'Spicy Schezwan noodles with chicken.', price: '$19.99', imageQuery: 'schezwan chicken noodles spicy', localFallback: M.nvChickenSchezwanNoodles },
    ],
  },
  {
    title: 'Mains',
    sectionImage: M.nvMuttonPaya,
    items: [
      { name: 'Chicken Tikka Masala', description: 'Tikka chicken in rich tomato gravy.', price: '$19.99', imageQuery: 'chicken tikka masala curry indian', localFallback: M.nvChickenTikkaMasala },
      { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry.', price: '$17.99', imageQuery: 'butter chicken creamy curry', localFallback: M.nvButterChicken },
      { name: 'Butter Prawn', description: 'Prawns in rich butter sauce.', price: '$21.99', imageQuery: 'butter prawn seafood curry', localFallback: M.nvButterPrawn },
      { name: 'Chettinad Chicken', description: 'Spicy Chettinad style chicken curry.', price: '$18.99', imageQuery: 'chettinad chicken curry south indian', localFallback: M.nvChickenChettinad },
      { name: 'Chettinad Prawn', description: 'Prawns in Chettinad masala.', price: '$21.99', imageQuery: 'chettinad prawn curry south indian', localFallback: M.nvChettinadPrawn },
      { name: 'Andhra Chicken', description: 'Fiery Andhra style chicken curry.', price: '$18.99', imageQuery: 'andhra chicken curry spicy', localFallback: M.nvAndhraChicken },
      { name: 'Andhra Lamb', description: 'Spicy Andhra lamb curry.', price: '$21.99', imageQuery: 'andhra lamb curry spicy indian', localFallback: M.nvAndhraLamb },
      { name: 'Gongura Chicken', description: 'Chicken with tangy sorrel leaves.', price: '$19.99', imageQuery: 'gongura chicken curry andhra', localFallback: M.nvGonguraChicken },
      { name: 'Gongura Lamb', description: 'Lamb with gongura leaves.', price: '$21.99', imageQuery: 'gongura lamb curry indian', localFallback: M.nvGonguraLamb },
      { name: 'Gongura Mutton', description: 'Mutton cooked with gongura.', price: '$22.99', imageQuery: 'gongura mutton curry andhra', localFallback: M.nvGonguraMutton },
      { name: 'SI Style Goat Curry', description: 'Traditional South Indian goat curry.', price: '$22.99', imageQuery: 'goat curry south indian', localFallback: M.goatCurry },
      { name: 'Puli Kulambu Chicken', description: 'Chicken in tangy tamarind gravy.', price: '$18.99', imageQuery: 'puli kulambu chicken tamarind', localFallback: M.nvPuliKulambuChicken },
      { name: 'Puli Kulambu Fish', description: 'Fish in tamarind curry.', price: '$21.99', imageQuery: 'fish tamarind curry south indian', localFallback: M.nvPuliKulambuFish },
      { name: 'Kuruma Chicken', description: 'Chicken in coconut kurma.', price: '$18.99', imageQuery: 'chicken korma coconut curry', localFallback: M.nvKurumaChicken },
      { name: 'Kuruma Lamb', description: 'Lamb in creamy kurma sauce.', price: '$21.99', imageQuery: 'lamb korma creamy curry', localFallback: M.nvKurumaLamb },
      { name: 'Vindaloo Chicken', description: 'Spicy vinegar-based chicken curry.', price: '$18.99', imageQuery: 'vindaloo chicken curry spicy', localFallback: M.nvVindalooChicken },
      { name: 'Vindaloo Lamb', description: 'Fiery lamb vindaloo.', price: '$21.99', imageQuery: 'vindaloo lamb curry fiery', localFallback: M.nvVindalooLamb },
      { name: 'Rogan Gose Chicken', description: 'Aromatic chicken rogan josh.', price: '$18.99', imageQuery: 'rogan josh chicken aromatic curry', localFallback: M.nvRoganJoshChicken },
      { name: 'Rogan Gose Lamb', description: 'Classic lamb rogan josh.', price: '$21.99', imageQuery: 'rogan josh lamb classic indian', localFallback: M.nvRoganGoseLamb },
      { name: 'Malabar Fish', description: 'Fish in Malabar coconut curry.', price: '$21.99', imageQuery: 'malabar fish coconut curry kerala', localFallback: M.nvMalabarFish },
      { name: 'Malabar Prawn', description: 'Prawns in Malabar style gravy.', price: '$21.99', imageQuery: 'malabar prawn curry kerala', localFallback: M.nvMalabarPrawn },
      { name: 'Mutton Paya', description: 'Rich mutton trotters curry.', price: '$20.99', imageQuery: 'mutton paya trotters curry', localFallback: M.nvMuttonPaya },
    ],
  },
  {
    title: 'Non Veg Briyani',
    sectionImage: M.chickenBiryani,
    items: [
      { name: 'Chicken Briyani', description: 'Aromatic basmati rice with spices and juicy chicken.', price: '$17.99', imageQuery: 'chicken biryani basmati rice', localFallback: M.chickenBiryani },
      { name: 'Goat Briyani', description: 'Aromatic jeera samba rice with tender juicy meat.', price: '$19.99', imageQuery: 'goat biryani rice indian', localFallback: M.nvMuttonBiryani },
      { name: 'Prawn Briyani', description: 'Fragrant basmati rice cooked with tender spiced prawns.', price: '$21.99', imageQuery: 'prawn biryani rice seafood', localFallback: M.prawnBiryani },
      { name: 'Family pack Chicken Briyani', description: 'Aromatic basmati rice with spices and juicy chicken — serves 4–6.', price: '$55.99', imageQuery: 'chicken biryani large family', localFallback: M.chickenBiryani },
      { name: 'Family pack Goat Briyani', description: 'Aromatic jeera samba rice with tender juicy meat — serves 4–6.', price: '$65.99', imageQuery: 'goat biryani large family indian', localFallback: M.nvMuttonBiryani },
      { name: 'Family pack Prawn Briyani', description: 'Fragrant basmati rice with tender spiced prawns — serves 4–6.', price: '$69.99', imageQuery: 'prawn biryani large family', localFallback: M.prawnBiryani },
    ],
  },
]

// ─── DRINKS & DESSERTS ────────────────────────────────────────────────────────
export const drinksSections: MenuSection[] = [
  {
    title: 'Drinks',
    sectionImage: M.filterCoffee,
    items: [
      { name: 'Masala Tea', description: 'Spiced Indian tea with aromatic herbs.', price: '$4.99', imageQuery: 'masala chai indian tea', localFallback: M.tea },
      { name: 'Filter Coffee', description: 'Traditional South Indian filter coffee.', price: '$5.99', imageQuery: 'filter coffee south indian', localFallback: M.filterCoffee },
      { name: 'Mango Lassi', description: 'Creamy mango yogurt drink.', price: '$7.99', imageQuery: 'mango lassi yogurt indian drink', localFallback: M.mangoLassi },
      { name: 'Sweet Lassi', description: 'Sweet yogurt drink.', price: '$6.99', imageQuery: 'sweet lassi yogurt indian', localFallback: M.sweetLassi },
      { name: 'Salt Lassi', description: 'Savory salted yogurt drink.', price: '$6.99', imageQuery: 'salted lassi buttermilk indian', localFallback: M.saltLassi },
      { name: 'Buttermilk', description: 'Spiced churned buttermilk.', price: '$8.99', imageQuery: 'buttermilk spiced south indian', localFallback: M.buttermilk },
      { name: 'Jigarthanda', description: 'Traditional Madurai cold drink.', price: '$9.99', imageQuery: 'jigarthanda madurai cold drink', localFallback: M.jigarthanda },
    ],
  },
  {
    title: 'Desserts',
    sectionImage: M.riceKheer,
    items: [
      { name: 'Rava Kesari', description: 'Sweet semolina pudding with saffron.', price: '$7.00', imageQuery: 'rava kesari semolina dessert south indian', localFallback: M.ravaKesari },
      { name: 'Rice Kheer', description: 'Creamy rice pudding with cardamom.', price: '$7.00', imageQuery: 'rice kheer pudding cardamom indian', localFallback: M.riceKheer },
      { name: 'Semiya Payasam', description: 'Vermicelli pudding with milk and nuts.', price: '$8.00', imageQuery: 'semiya payasam vermicelli pudding', localFallback: M.payasam },
      { name: 'Bread Halwa', description: 'Sweet bread dessert with ghee.', price: '$6.00', imageQuery: 'bread halwa sweet ghee indian', localFallback: M.halwa },
    ],
  },
]

// ─── ROTI & NAAN ──────────────────────────────────────────────────────────────
export const briyanSections: MenuSection[] = [
  {
    title: 'Roti & Paratha',
    sectionImage: M.plainRoti,
    items: [
      { name: 'Plain Roti / Chapati', description: 'Whole wheat flatbread cooked on tawa.', price: '$3.99', imageQuery: 'roti chapati whole wheat flatbread', localFallback: M.plainRoti },
      { name: 'Butter Roti', description: 'Soft whole wheat bread brushed with butter.', price: '$4.99', imageQuery: 'butter roti flatbread indian', localFallback: M.butterRoti },
      { name: 'Tandoori Roti', description: 'Whole wheat bread baked in tandoor oven.', price: '$4.99', imageQuery: 'tandoori roti flatbread oven', localFallback: M.tandooriRoti },
      { name: 'Plain Parotta', description: 'Layered flaky flatbread from Kerala.', price: '$5.99', imageQuery: 'parotta layered flatbread kerala', localFallback: M.plainParotta },
      { name: 'Butter Parotta', description: 'Flaky parotta brushed with butter.', price: '$6.99', imageQuery: 'butter parotta flaky flatbread', localFallback: M.butterParotta },
      { name: 'Aloo Paratha', description: 'Whole wheat bread stuffed with spiced potato.', price: '$8.99', imageQuery: 'aloo paratha potato stuffed bread', localFallback: M.alooParatha },
      { name: 'Paneer Paratha', description: 'Paratha stuffed with spiced cottage cheese.', price: '$9.99', imageQuery: 'paneer paratha cottage cheese stuffed', localFallback: M.paneerParatha },
      { name: 'Rumali Roti', description: 'Thin handkerchief-style bread.', price: '$6.99', imageQuery: 'rumali roti thin bread indian', localFallback: M.rumaliRoti },
    ],
  },
  {
    title: 'Naan',
    sectionImage: M.garlicNaan,
    items: [
      { name: 'Plain Naan', description: 'Leavened bread baked in tandoor oven.', price: '$4.99', imageQuery: 'plain naan tandoor bread', localFallback: M.plainNaan },
      { name: 'Butter Naan', description: 'Naan brushed with butter.', price: '$5.99', imageQuery: 'butter naan indian bread', localFallback: M.butterNaan },
      { name: 'Garlic Naan', description: 'Naan topped with fresh garlic and coriander.', price: '$6.99', imageQuery: 'garlic naan bread indian', localFallback: M.garlicNaan },
      { name: 'Cheese Naan', description: 'Naan stuffed with melted cheese.', price: '$7.99', imageQuery: 'cheese naan stuffed bread', localFallback: M.cheeseNaan },
      { name: 'Kulcha', description: 'Leavened bread stuffed with spiced potato and peas.', price: '$7.99', imageQuery: 'kulcha stuffed bread indian', localFallback: M.kulcha },
    ],
  },
]
