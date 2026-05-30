export const WHATSAPP_PHONE = '79679550843';

export const popularDishes = [
  {
    id: 'steak',
    name: 'Стейк на кости',
    description: 'Сочный стейк на открытом огне с овощами гриль, соусом и ароматной зеленью.',
    price: '900 ₽',
    image: '/images/steak.png',
    tag: 'Хит',
  },
  {
    id: 'shashlik',
    name: 'Шашлык из баранины',
    description: 'Мягкая баранина, маринованная по кавказскому рецепту, подается с луком и лавашом.',
    price: '700 ₽',
    image: '/images/shashlik.png',
    tag: 'Хит',
  },
  {
    id: 'galnash',
    name: 'Жижиг-галнаш',
    description: 'Главное чеченское блюдо: домашние галушки, нежное мясо, бульон и чесночный соус.',
    price: '750 ₽',
    image: '/images/galnash.png',
    tag: 'Фирменное',
  },
  {
    id: 'chechen-dish',
    name: 'Чепалгаш с тыквой',
    description: 'Тонкие лепешки с деликатной начинкой, сливочным маслом и домашней подачей.',
    price: '380 ₽',
    image: '/images/chechen-dish.png',
    tag: 'Новинка',
  },
  {
    id: 'chef-dish',
    name: 'Авторское блюдо от шефа',
    description: 'Премиальная мясная доска с овощами, картофелем фри и фирменными соусами.',
    price: '1 450 ₽',
    image: '/images/chef-dish.png',
    tag: 'Chef',
  },
];

export const menuCategories = [
  {
    id: 'meat',
    title: 'Мясные блюда',
    subtitle: 'Огонь, дым и правильная прожарка',
    items: [
      {
        id: 'bone-steak',
        name: 'Стейк на косточке',
        description: 'Премиальный отруб, овощи гриль, картофель, домашний соус.',
        price: '900 ₽',
        image: '/images/steak.png',
        badge: 'Хит',
      },
      {
        id: 'lamb-shashlik',
        name: 'Шашлык баранина',
        description: 'Сочная баранина с луком, зеленью, лавашом и фирменным маринадом.',
        price: '700 ₽',
        image: '/images/shashlik.png',
        badge: 'Хит',
      },
      {
        id: 'chicken-steak',
        name: 'Стейк куриный',
        description: 'Нежное филе на мангале, картофель фри, овощи и сливочный соус.',
        price: '500 ₽',
        image: '/images/chef-dish.png',
        badge: 'Новинка',
      },
    ],
  },
  {
    id: 'caucasus',
    title: 'Кавказская кухня',
    subtitle: 'Традиции Чечни и Кавказа',
    items: [
      {
        id: 'jijig-galnash',
        name: 'Жижиг-галнаш',
        description: 'Домашние галушки, мясо, бульон и чесночный соус.',
        price: '750 ₽',
        image: '/images/galnash.png',
        badge: 'Фирменное',
      },
      {
        id: 'chepalgash',
        name: 'Чепалгаш',
        description: 'Тонкая лепешка с начинкой, сливочным маслом и теплой подачей.',
        price: '380 ₽',
        image: '/images/chechen-dish.png',
        badge: 'Новинка',
      },
      {
        id: 'nokhchi-chorp',
        name: 'Нохчи чорп',
        description: 'Насыщенный суп с мясом, зеленью и мягкими специями.',
        price: '300 ₽',
        image: '/images/chef-dish.png',
        badge: 'Хит',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Салаты',
    subtitle: 'Свежесть к мясу и семейному столу',
    items: [
      {
        id: 'caesar',
        name: 'Салат Цезарь',
        description: 'Курица гриль, листья салата, пармезан, сухари и сливочный соус.',
        price: '300 ₽',
        image: '/images/interior-1.jpg',
        badge: 'Хит',
      },
      {
        id: 'grill-veg',
        name: 'Овощи на мангале',
        description: 'Баклажан, перец, томаты, кабачок и зелень с легкой дымностью.',
        price: '300 ₽',
        image: '/images/shashlik.png',
        badge: 'Новинка',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    subtitle: 'Чай, лимонады и прохладные напитки',
    items: [
      {
        id: 'mountain-tea',
        name: 'Горный чай',
        description: 'Ароматный чай с травами, медом и сухофруктами.',
        price: '250 ₽',
        image: '/images/drink.jpg',
        badge: 'Хит',
      },
      {
        id: 'berry-lemonade',
        name: 'Ягодный лимонад',
        description: 'Домашний лимонад с ягодами, цитрусом и свежей мятой.',
        price: '280 ₽',
        image: '/images/drink.jpg',
        badge: 'Новинка',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    subtitle: 'Мягкое завершение вечера',
    items: [
      {
        id: 'honey-dessert',
        name: 'Медовый десерт',
        description: 'Слоеный медовый торт с кремовой текстурой и золотой крошкой.',
        price: '320 ₽',
        image: '/images/dessert.jpg',
        badge: 'Хит',
      },
      {
        id: 'chef-dessert',
        name: 'Десерт от шефа',
        description: 'Сезонный десерт с ягодами, кремом и премиальной подачей.',
        price: '390 ₽',
        image: '/images/dessert.jpg',
        badge: 'Новинка',
      },
    ],
  },
];

export const galleryImages = [
  { id: 'interior-1', title: 'Интерьер', image: '/images/interior-1.jpg', size: 'large' },
  { id: 'interior-2', title: 'Атмосфера зала', image: '/images/interior-2.jpg', size: 'small' },
  { id: 'vip-room', title: 'VIP-кабинка', image: '/images/vip-room.jpg', size: 'tall' },
  { id: 'hall', title: 'Главный зал', image: '/images/hall.jpg', size: 'wide' },
  { id: 'dish', title: 'Подача блюд', image: '/images/hero-dish.png', size: 'small' },
  { id: 'dessert', title: 'Десерты', image: '/images/dessert.jpg', size: 'small' },
];
