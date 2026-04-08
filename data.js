/**
 * Altero Food - Central Configuration File
 * 
 * This file serves as the single source of truth for:
 * - Site configuration (name, logo, contact, language, location)
 * - Multi-language translations (English, French, Arabic)
 * - Menu items with pricing
 * 
 * Branding Colors (from DESIGN.md):
 * - Primary: #ff8d8c
 * - Primary Container: #ff7576
 * - Secondary: #fb7e9e
 * - Surface: #0e0e0e
 * - Surface Container: #1a1a1a
 * - Surface Bright: #2c2c2c
 */

// ============================================
// SITE CONFIGURATION
// ============================================
export const siteConfig = {
  name: "Altero",
  logo: "Altero", // Text logo, can be replaced with image URL
  whatsappNumber: "+212710388625", // Morocco format, update as needed
  defaultLanguage: "en", // Options: 'en', 'fr', 'ar'
  locationLink: "https://maps.google.com/?q=Casablanca,Morocco",
  currency: "MAD", // Moroccan Dirham
  currencySymbol: "DH"
};

// ============================================
// TRANSLATIONS
// ============================================
export const translations = {
  en: {
    // Navigation
    home: "Home",
    menu: "Menu",
    reservations: "Reservations",
    
    // Hero Section
    limitedEdition: "Limited Edition",
    getDiscount: "GET 50% OFF",
    noirSelection: "Noir Selection",
    heroDescription: "Experience the peak of gastronomic artistry with our signature curated plates, now at half the price for loyal patrons.",
    orderNow: "Order Now",
    
    // Categories
    exploreCategories: "Explore Categories",
    all: "All",
    burgers: "Burgers",
    pizza: "Pizza",
    pasta: "Pasta",
    salads: "Salads",
    sides: "Sides",
    desserts: "Desserts",
    beverages: "Beverages",
    
    // Modal
    selectSize: "Select Size",
    medium: "Medium",
    big: "Big",
    super: "Super",
    family: "Family",
    quantity: "Quantity",
    addToOrder: "Add to Order",
    addedToBag: "Added to Bag",
    calories: "Calories",
    keyIngredients: "Key Ingredients",
    
    // Sizes
    sizeMedium: "Medium",
    sizeBig: "Big",
    sizeSuper: "Super",
    sizeFamily: "Family",
    
    // Search
    searchPlaceholder: "Search culinary noir...",
    
    // Common
    close: "Close",
    remove: "Remove",
    add: "Add",
    cart: "Shopping Bag",
    clearCart: "Clear Bag",
    
    // Order Form
    yourName: "Your Name",
    yourAddress: "Your Address",
    
    // Additional i18n keys
    pageTitle: "Altero Food - The Culinary Noir",
    brandName: "Altero Food",
    closeModal: "Close",
    cartEmptyMessage: "Your bag is empty",
    cartTotal: "Total",
    customerNamePlaceholder: "Your Name",
    customerAddressPlaceholder: "Your Address",
    clearBagButton: "Clear Bag",
    confirmOrderButton: "Confirm Order",
    
    // Product modal specific keys
    signatureBlend: "The Signature Blend",
    productName: "Truffle Noir Wagyu",
    calories: "740 Calories",
    price: "$42",
    decrement: "remove",
    increment: "add",
    addToOrder: "Add to Order",
    
    // Search
    searchPlaceholder: "Search culinary noir..."
  },
  
  fr: {
    // Navigation
    home: "Accueil",
    menu: "Menu",
    reservations: "Réservations",
    
    // Hero Section
    limitedEdition: "Édition Limitée",
    getDiscount: "50% DE RÉDUCTION",
    noirSelection: "Sélection Noir",
    heroDescription: "Découvrez le summum de l'art gastronomique avec nos plats signatures, maintenant à moitié prix pour nos fidèles clients.",
    orderNow: "Commander",
    
    // Categories
    exploreCategories: "Explorer les Catégories",
    all: "Tout",
    burgers: "Burgers",
    pizza: "Pizza",
    pasta: "Pâtes",
    salads: "Salades",
    sides: "Accompagnements",
    desserts: "Desserts",
    beverages: "Boissons",
    
    // Modal
    selectSize: "Choisir la Taille",
    medium: "Moyen",
    big: "Grand",
    super: "Super",
    family: "Familial",
    quantity: "Quantité",
    addToOrder: "Ajouter à la Commande",
    addedToBag: "Ajouté au Panier",
    calories: "Calories",
    keyIngredients: "Ingrédients Clés",
    
    // Sizes
    sizeMedium: "Moyen",
    sizeBig: "Grand",
    sizeSuper: "Super",
    sizeFamily: "Familial",
    
    // Search
    searchPlaceholder: "Rechercher dans le menu...",
    
    // Common
    close: "Fermer",
    remove: "Retirer",
    add: "Ajouter",
    cart: "Panier",
    clearCart: "Vider le Panier",
    
    // Order Form
    yourName: "Votre Nom",
    yourAddress: "Votre Adresse",
    
    // Search
    searchPlaceholder: "Rechercher dans le menu..."
  },
  
  ar: {
    // Navigation
    home: "الرئيسية",
    menu: "القائمة",
    reservations: "الحجوزات",
    
    // Hero Section
    limitedEdition: "إصدار محدود",
    getDiscount: "خصم 50%",
    noirSelection: "تشكيلة نوار",
    heroDescription: "استمتع بقمة الفن الغذائي مع أطباقنا المميزة، الآن بنصف السعر لعملائنا المخلصين.",
    orderNow: "اطلب الآن",
    
    // Categories
    exploreCategories: "استكشف الأقسام",
    all: "الكل",
    burgers: "برجر",
    pizza: "بيتزا",
    pasta: "باستا",
    salads: "سلطات",
    sides: "مقبلات",
    desserts: "حلويات",
    beverages: "مشروبات",
    
    // Modal
    selectSize: "اختر الحجم",
    medium: "وسط",
    big: "كبير",
    super: "سوبر",
    family: "عائلي",
    quantity: "الكمية",
    addToOrder: "أضف للطلب",
    addedToBag: "تمت الإضافة",
    calories: "سعرة حرارية",
    keyIngredients: "المكونات الأساسية",
    
    // Sizes
    sizeMedium: "وسط",
    sizeBig: "كبير",
    sizeSuper: "سوبر",
    sizeFamily: "عائلي",
    
    // Search
    searchPlaceholder: "ابحث في القائمة...",
    
    // Common
    close: "إغلاق",
    remove: "إزالة",
    add: "إضافة",
    cart: "سلة التسوق",
    clearCart: "إفراغ السلة",
    
    // Order Form
    yourName: "اسمك",
    yourAddress: "عنوانك",
    
    // Search
    searchPlaceholder: "ابحث في القائمة..."
  }
};

// ============================================
// MENU ITEMS
// ============================================
export const MENU_ITEMS = [
  // ============================================
  // BURGERS
  // ============================================
  {
    id: "burger-classic",
    name: {
      en: "Classic Burger",
      fr: "Burger Classique",
      ar: "برجر كلاسيكي"
    },
    description: {
      en: "Juicy beef patty with lettuce, tomato, onion, and our signature sauce",
      fr: "Juteux steak de bœuf avec laitue, tomate, oignon et notre sauce signature",
      ar: "قطعة لحم البقري الطازجة مع الخس والطماطم والبصل وصلاتنا المميزة"
    },
    category: "Burgers",
    prices: {
      Medium: 7.99,
      Big: 11.99,
      Super: 14.99,
      Family: 24.99
    }
  },
  {
    id: "burger-classic",
    name: {
      en: "Classic Burger",
      fr: "Burger Classique",
      ar: "برجر كلاسيكي"
    },
    description: {
      en: "Juicy beef patty with lettuce, tomato, onion, and our signature sauce",
      fr: "Juteux steak de bœuf avec laitue, tomate, oignon et notre sauce signature",
      ar: "قطعة لحم البقري الطازجة مع الخس والطماطم والبصل وصلاتنا المميزة"
    },
    category: "Burgers",
    prices: {
      Medium: 7.99,
      Big: 11.99,
      Super: 14.99,
      Family: 24.99
    }
  },
  {
    id: "burger-bacon",
    name: "Bacon Deluxe",
    description: "Double patty with crispy bacon, BBQ sauce, and onion rings",
    category: "Burgers",
    prices: {
      Medium: 12.99,
      Big: 15.99,
      Super: 18.99,
      Family: 32.99
    }
  },
  {
    id: "burger-mushroom",
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms and Swiss cheese with garlic aioli",
    category: "Burgers",
    prices: {
      Medium: 11.49,
      Big: 14.49,
      Super: 17.49,
      Family: 29.99
    }
  },
  {
    id: "burger-spicy",
    name: "Spicy Jalapeño",
    description: "Jalapeños, pepper jack cheese, and chipotle mayo",
    category: "Burgers",
    prices: {
      Medium: 10.99,
      Big: 13.99,
      Super: 16.99,
      Family: 28.99
    }
  },

  // ============================================
  // PIZZA
  // ============================================
  {
    id: "pizza-margherita",
    name: "Margherita",
    description: "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil",
    category: "Pizza",
    prices: {
      Medium: 10.99,
      Big: 14.99,
      Super: 18.99,
      Family: 28.99
    }
  },
  {
    id: "pizza-pepperoni",
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella and our special tomato sauce",
    category: "Pizza",
    prices: {
      Medium: 12.99,
      Big: 16.99,
      Super: 21.99,
      Family: 32.99
    }
  },
  {
    id: "pizza-vegetarian",
    name: "Garden Vegetable",
    description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
    category: "Pizza",
    prices: {
      Medium: 11.99,
      Big: 15.99,
      Super: 19.99,
      Family: 30.99
    }
  },
  {
    id: "pizza-meat",
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and ground beef",
    category: "Pizza",
    prices: {
      Medium: 14.99,
      Big: 19.99,
      Super: 24.99,
      Family: 38.99
    }
  },
  {
    id: "pizza-hawaiian",
    name: "Hawaiian",
    description: "Ham, pineapple, and extra cheese",
    category: "Pizza",
    prices: {
      Medium: 11.49,
      Big: 15.49,
      Super: 19.49,
      Family: 29.99
    }
  },

  // ============================================
  // PASTA
  // ============================================
  {
    id: "pasta-carbonara",
    name: "Spaghetti Carbonara",
    description: "Creamy sauce with bacon, parmesan, and black pepper",
    category: "Pasta",
    prices: {
      Medium: 11.99,
      Big: 14.99,
      Super: 17.99,
      Family: 28.99
    }
  },
  {
    id: "pasta-bolognese",
    name: "Fettuccine Bolognese",
    description: "Rich meat sauce with herbs and parmesan",
    category: "Pasta",
    prices: {
      Medium: 12.49,
      Big: 15.49,
      Super: 18.49,
      Family: 29.99
    }
  },
  {
    id: "pasta-alfredo",
    name: "Chicken Alfredo",
    description: "Creamy parmesan sauce with grilled chicken",
    category: "Pasta",
    prices: {
      Medium: 13.99,
      Big: 16.99,
      Super: 19.99,
      Family: 32.99
    }
  },
  {
    id: "pasta-pesto",
    name: "Penne Pesto",
    description: "Fresh basil pesto with cherry tomatoes and pine nuts",
    category: "Pasta",
    prices: {
      Medium: 11.49,
      Big: 14.49,
      Super: 17.49,
      Family: 27.99
    }
  },
  {
    id: "pasta-seafood",
    name: "Seafood Linguine",
    description: "Mixed seafood in a garlic white wine sauce",
    category: "Pasta",
    prices: {
      Medium: 15.99,
      Big: 19.99,
      Super: 23.99,
      Family: 38.99
    }
  },

  // ============================================
  // SALADS
  // ============================================
  {
    id: "salad-caesar",
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons, and Caesar dressing",
    category: "Salads",
    prices: {
      Medium: 8.99,
      Big: 11.99,
      Super: 14.99,
      Family: 22.99
    }
  },
  {
    id: "salad-greek",
    name: "Greek Salad",
    description: "Feta cheese, olives, cucumber, tomatoes, and olive oil",
    category: "Salads",
    prices: {
      Medium: 9.49,
      Big: 12.49,
      Super: 15.49,
      Family: 24.99
    }
  },
  {
    id: "salad-chicken",
    name: "Grilled Chicken Salad",
    description: "Mixed greens with grilled chicken, avocado, and honey mustard",
    category: "Salads",
    prices: {
      Medium: 11.99,
      Big: 14.99,
      Super: 17.99,
      Family: 28.99
    }
  },
  {
    id: "salad-caprese",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze",
    category: "Salads",
    prices: {
      Medium: 9.99,
      Big: 12.99,
      Super: 15.99,
      Family: 25.99
    }
  },

  // ============================================
  // SIDES
  // ============================================
  {
    id: "side-fries",
    name: "French Fries",
    description: "Crispy golden fries with your choice of seasoning",
    category: "Sides",
    prices: {
      Medium: 3.99,
      Big: 5.49,
      Super: 6.99,
      Family: 10.99
    }
  },
  {
    id: "side-onion-rings",
    name: "Onion Rings",
    description: "Beer-battered onion rings with ranch dipping sauce",
    category: "Sides",
    prices: {
      Medium: 4.49,
      Big: 5.99,
      Super: 7.49,
      Family: 11.99
    }
  },
  {
    id: "side-nuggets",
    name: "Chicken Nuggets",
    description: "Tender chicken nuggets with your choice of sauce",
    category: "Sides",
    prices: {
      Medium: 5.99,
      Big: 7.99,
      Super: 9.99,
      Family: 15.99
    }
  },
  {
    id: "side-mozzarella",
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks with marinara sauce",
    category: "Sides",
    prices: {
      Medium: 5.49,
      Big: 7.49,
      Super: 9.49,
      Family: 14.99
    }
  },

  // ============================================
  // DESSERTS
  // ============================================
  {
    id: "dessert-brownie",
    name: "Chocolate Brownie",
    description: "Warm brownie with vanilla ice cream and chocolate sauce",
    category: "Desserts",
    prices: {
      Medium: 5.99,
      Big: 7.99,
      Super: 9.99,
      Family: 15.99
    }
  },
  {
    id: "dessert-cheesecake",
    name: "New York Cheesecake",
    description: "Classic cheesecake with strawberry topping",
    category: "Desserts",
    prices: {
      Medium: 6.49,
      Big: 8.49,
      Super: 10.49,
      Family: 16.99
    }
  },
  {
    id: "dessert-icecream",
    name: "Ice Cream Sundae",
    description: "Three scoops with toppings and whipped cream",
    category: "Desserts",
    prices: {
      Medium: 5.49,
      Big: 7.49,
      Super: 9.49,
      Family: 14.99
    }
  },

  // ============================================
  // BEVERAGES
  // ============================================
  {
    id: "beverage-soda",
    name: "Soft Drinks",
    description: "Coca-Cola, Sprite, Fanta, or Orange Juice",
    category: "Beverages",
    prices: {
      Medium: 2.49,
      Big: 3.49,
      Super: 4.49,
      Family: 6.99
    }
  },
  {
    id: "beverage-shake",
    name: "Milkshake",
    description: "Chocolate, Vanilla, or Strawberry",
    category: "Beverages",
    prices: {
      Medium: 4.99,
      Big: 6.49,
      Super: 7.99,
      Family: 12.99
    }
  },
  {
    id: "beverage-coffee",
    name: "Coffee",
    description: "Freshly brewed Arabica coffee",
    category: "Beverages",
    prices: {
      Medium: 2.99,
      Big: 3.99,
      Super: 4.99,
      Family: 7.99
    }
  }
];

// ============================================
// DERIVED EXPORTS
// ============================================

// Export categories extracted from menu items
export const CATEGORIES = [...new Set(MENU_ITEMS.map(item => item.category))];

// Export size options
export const SIZES = ["Medium", "Big", "Super", "Family"];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get translation for a specific key in the current language
 * @param {string} key - Translation key
 * @param {string} [lang] - Language code (defaults to siteConfig.defaultLanguage)
 * @returns {string} Translated string
 */
export const t = (key, lang = siteConfig.defaultLanguage) => {
  return translations[lang]?.[key] || translations.en?.[key] || key;
};

/**
 * Get all categories with their counts
 * @returns {Array} Array of category objects with name and count
 */
export const getCategoryStats = () => {
  return CATEGORIES.map(category => ({
    name: category,
    count: MENU_ITEMS.filter(item => item.category === category).length
  }));
};

/**
 * Get menu items filtered by category
 * @param {string} category - Category name
 * @returns {Array} Filtered menu items
 */
export const getItemsByCategory = (category) => {
  if (category === 'all') return MENU_ITEMS;
  return MENU_ITEMS.filter(item => item.category === category);
};

/**
 * Search menu items by name or description
 * @param {string} query - Search query
 * @returns {Array} Matching menu items
 */
export const searchMenuItems = (query) => {
  const lowerQuery = query.toLowerCase();
  return MENU_ITEMS.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
};