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
    home: "Home", menu: "Menu", reservations: "Reservations",
    limitedEdition: "Limited Edition", getDiscount: "GET 50% OFF", noirSelection: "Noir Selection",
    heroDescription: "Experience the peak of gastronomic artistry with our signature curated plates.",
    orderNow: "Order Now", exploreCategories: "Explore Categories", all: "All",
    pizzas: "Pizzas", burgers: "Burgers", tacosSandwiches: "Tacos & Sandwiches",
    mainsPastas: "Main Dishes & Pasta", salads: "Salads", beverages: "Beverages",
    selectSize: "Select Size", quantity: "Quantity", addToOrder: "Add to Order",
    addedToBag: "Added to Bag", calories: "Calories", keyIngredients: "Key Ingredients",
    sizeMedium: "Medium", sizeBig: "Big", sizeSuperFamily: "Super Family",
    sizeSansFries: "Without Fries", sizeAvecFries: "With Fries", sizeStandard: "Standard",
    sizeGratinated: "Gratinated", sizeSmall: "Small", sizeLarge: "Large",
    sizePetite: "Petite", sizeGrande: "Grande", 
    sizeQuarter: "Quarter", sizeHalf: "Half", sizeWhole: "Whole",
    searchPlaceholder: "Search culinary noir...", close: "Close", remove: "Remove",
    add: "Add", cart: "Shopping Bag", clearCart: "Clear Bag", yourName: "Your Name",
    yourAddress: "Your Address", pageTitle: "Altero Food - The Culinary Noir",
    brandName: "Altero Food", closeModal: "Close", cartEmptyMessage: "Your bag is empty",
    cartTotal: "Total", customerNamePlaceholder: "Your Name", customerAddressPlaceholder: "Your Address",
    clearBagButton: "Clear Bag", confirmOrderButton: "Confirm Order"
  },
  fr: {
    home: "Accueil", menu: "Menu", reservations: "Réservations",
    limitedEdition: "Édition Limitée", getDiscount: "50% DE RÉDUCTION", noirSelection: "Sélection Noir",
    heroDescription: "Découvrez le summum de l'art gastronomique avec nos plats signatures.",
    orderNow: "Commander", exploreCategories: "Explorer les Catégories", all: "Tout",
    pizzas: "Pizzas", burgers: "Burgers", tacosSandwiches: "Tacos et Sandwichs",
    mainsPastas: "Plats et Pâtes", salads: "Salades", beverages: "Boissons et Jus",
    selectSize: "Choisir la Taille", quantity: "Quantité", addToOrder: "Ajouter à la Commande",
    addedToBag: "Ajouté au Panier", calories: "Calories", keyIngredients: "Ingrédients Clés",
    sizeMedium: "Moyen", sizeBig: "Grand", sizeSuperFamily: "Super Familial",
    sizeSansFries: "Sans Frites", sizeAvecFries: "Avec Frites", sizeStandard: "Standard",
    sizeGratinated: "Gratiné", sizeSmall: "Petit", sizeLarge: "Grand",
    sizePetite: "Petite", sizeGrande: "Grande",
    sizeQuarter: "Quart", sizeHalf: "Demi", sizeWhole: "Entier",
    searchPlaceholder: "Rechercher dans le menu...", close: "Fermer", remove: "Retirer",
    add: "Ajouter", cart: "Panier", clearCart: "Vider le Panier", yourName: "Votre Nom",
    yourAddress: "Votre Adresse", pageTitle: "Altero Food - The Culinary Noir",
    brandName: "Altero Food", closeModal: "Fermer", cartEmptyMessage: "Votre panier est vide",
    cartTotal: "Total", customerNamePlaceholder: "Votre Nom", customerAddressPlaceholder: "Votre Adresse",
    clearBagButton: "Vider le Panier", confirmOrderButton: "Confirmer la Commande"
  },
  ar: {
    home: "الرئيسية", menu: "القائمة", reservations: "الحجوزات",
    limitedEdition: "إصدار محدود", getDiscount: "خصم 50%", noirSelection: "تشكيلة نوار",
    heroDescription: "استمتع بقمة الفن الغذائي مع أطباقنا المميزة.",
    orderNow: "اطلب الآن", exploreCategories: "استكشف الأقسام", all: "الكل",
    pizzas: "بيتزا", burgers: "برجر", tacosSandwiches: "طاكوس وسندوتشات",
    mainsPastas: "أطباق وباستا", salads: "سلطات", beverages: "مشروبات وعصائر",
    selectSize: "اختر الحجم", quantity: "الكمية", addToOrder: "أضف للطلب",
    addedToBag: "تمت الإضافة", calories: "سعرة حرارية", keyIngredients: "المكونات الأساسية",
    sizeMedium: "وسط", sizeBig: "كبير", sizeSuperFamily: "عائلي سوبر",
    sizeSansFries: "بدون بطاطس", sizeAvecFries: "مع بطاطس", sizeStandard: "عادي",
    sizeGratinated: "جراتان (مخبوز بالجبن)", sizeSmall: "صغير", sizeLarge: "كبير",
    sizePetite: "صغيرة", sizeGrande: "كبيرة",
    sizeQuarter: "ربع", sizeHalf: "نصف", sizeWhole: "كامل",
    searchPlaceholder: "ابحث في القائمة...", close: "إغلاق", remove: "إزالة",
    add: "إضافة", cart: "سلة التسوق", clearCart: "إفراغ السلة", yourName: "اسمك",
    yourAddress: "عنوانك", pageTitle: "Altero Food - The Culinary Noir",
    brandName: "Altero Food", closeModal: "إغلاق", cartEmptyMessage: "سلتك فارغة",
    cartTotal: "المجموع", customerNamePlaceholder: "اسمك", customerAddressPlaceholder: "عنوانك",
    clearBagButton: "إفراغ السلة", confirmOrderButton: "تأكيد الطلب"
  }
};

// ============================================
// MENU ITEMS
// ============================================
export const MENU_ITEMS = [
  {
    "id": "pizza-orientale",
    "name": {
      "en": "Orientale Pizza",
      "fr": "Pizza Orientale",
      "ar": "بيتزا Orientale"
    },
    "description": {
      "en": "Premium Orientale pizza prepared with fresh ingredients",
      "fr": "Pizza premium Orientale préparée avec des ingrédients frais",
      "ar": "بيتزا Orientale فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-pepperoni",
    "name": {
      "en": "Pepperoni Pizza",
      "fr": "Pizza Pepperoni",
      "ar": "بيتزا Pepperoni"
    },
    "description": {
      "en": "Premium Pepperoni pizza prepared with fresh ingredients",
      "fr": "Pizza premium Pepperoni préparée avec des ingrédients frais",
      "ar": "بيتزا Pepperoni فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-tortiette",
    "name": {
      "en": "Tortiette Pizza",
      "fr": "Pizza Tortiette",
      "ar": "بيتزا Tortiette"
    },
    "description": {
      "en": "Premium Tortiette pizza prepared with fresh ingredients",
      "fr": "Pizza premium Tortiette préparée avec des ingrédients frais",
      "ar": "بيتزا Tortiette فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-carbonara",
    "name": {
      "en": "Carbonara Pizza",
      "fr": "Pizza Carbonara",
      "ar": "بيتزا Carbonara"
    },
    "description": {
      "en": "Premium Carbonara pizza prepared with fresh ingredients",
      "fr": "Pizza premium Carbonara préparée avec des ingrédients frais",
      "ar": "بيتزا Carbonara فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-queen",
    "name": {
      "en": "Queen Pizza",
      "fr": "Pizza Queen",
      "ar": "بيتزا Queen"
    },
    "description": {
      "en": "Premium Queen pizza prepared with fresh ingredients",
      "fr": "Pizza premium Queen préparée avec des ingrédients frais",
      "ar": "بيتزا Queen فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-vegetarienne",
    "name": {
      "en": "Vegetarienne Pizza",
      "fr": "Pizza Vegetarienne",
      "ar": "بيتزا Vegetarienne"
    },
    "description": {
      "en": "Premium Vegetarienne pizza prepared with fresh ingredients",
      "fr": "Pizza premium Vegetarienne préparée avec des ingrédients frais",
      "ar": "بيتزا Vegetarienne فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-thon",
    "name": {
      "en": "Thon Pizza",
      "fr": "Pizza Thon",
      "ar": "بيتزا Thon"
    },
    "description": {
      "en": "Premium Thon pizza prepared with fresh ingredients",
      "fr": "Pizza premium Thon préparée avec des ingrédients frais",
      "ar": "بيتزا Thon فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-hawai",
    "name": {
      "en": "Hawai Pizza",
      "fr": "Pizza Hawai",
      "ar": "بيتزا Hawai"
    },
    "description": {
      "en": "Premium Hawai pizza prepared with fresh ingredients",
      "fr": "Pizza premium Hawai préparée avec des ingrédients frais",
      "ar": "بيتزا Hawai فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-poulet",
    "name": {
      "en": "Poulet Pizza",
      "fr": "Pizza Poulet",
      "ar": "بيتزا Poulet"
    },
    "description": {
      "en": "Premium Poulet pizza prepared with fresh ingredients",
      "fr": "Pizza premium Poulet préparée avec des ingrédients frais",
      "ar": "بيتزا Poulet فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-chawarma",
    "name": {
      "en": "Chawarma Pizza",
      "fr": "Pizza Chawarma",
      "ar": "بيتزا Chawarma"
    },
    "description": {
      "en": "Premium Chawarma pizza prepared with fresh ingredients",
      "fr": "Pizza premium Chawarma préparée avec des ingrédients frais",
      "ar": "بيتزا Chawarma فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-hot-dog",
    "name": {
      "en": "Hot Dog Pizza",
      "fr": "Pizza Hot Dog",
      "ar": "بيتزا Hot Dog"
    },
    "description": {
      "en": "Premium Hot Dog pizza prepared with fresh ingredients",
      "fr": "Pizza premium Hot Dog préparée avec des ingrédients frais",
      "ar": "بيتزا Hot Dog فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-dinde",
    "name": {
      "en": "Dinde Pizza",
      "fr": "Pizza Dinde",
      "ar": "بيتزا Dinde"
    },
    "description": {
      "en": "Premium Dinde pizza prepared with fresh ingredients",
      "fr": "Pizza premium Dinde préparée avec des ingrédients frais",
      "ar": "بيتزا Dinde فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 35,
      "Big": 55,
      "SuperFamily": 70
    }
  },
  {
    "id": "pizza-beef",
    "name": {
      "en": "Beef Pizza",
      "fr": "Pizza Beef",
      "ar": "بيتزا Beef"
    },
    "description": {
      "en": "Premium Beef pizza prepared with fresh ingredients",
      "fr": "Pizza premium Beef préparée avec des ingrédients frais",
      "ar": "بيتزا Beef فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 40,
      "Big": 60,
      "SuperFamily": 80
    }
  },
  {
    "id": "pizza-mexicaine",
    "name": {
      "en": "Mexicaine Pizza",
      "fr": "Pizza Mexicaine",
      "ar": "بيتزا Mexicaine"
    },
    "description": {
      "en": "Premium Mexicaine pizza prepared with fresh ingredients",
      "fr": "Pizza premium Mexicaine préparée avec des ingrédients frais",
      "ar": "بيتزا Mexicaine فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 40,
      "Big": 60,
      "SuperFamily": 80
    }
  },
  {
    "id": "pizza-4-saisons",
    "name": {
      "en": "4 Saisons Pizza",
      "fr": "Pizza 4 Saisons",
      "ar": "بيتزا 4 Saisons"
    },
    "description": {
      "en": "Premium 4 Saisons pizza prepared with fresh ingredients",
      "fr": "Pizza premium 4 Saisons préparée avec des ingrédients frais",
      "ar": "بيتزا 4 Saisons فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 40,
      "Big": 60,
      "SuperFamily": 80
    }
  },
  {
    "id": "pizza-4-fromages",
    "name": {
      "en": "4 Fromages Pizza",
      "fr": "Pizza 4 Fromages",
      "ar": "بيتزا 4 Fromages"
    },
    "description": {
      "en": "Premium 4 Fromages pizza prepared with fresh ingredients",
      "fr": "Pizza premium 4 Fromages préparée avec des ingrédients frais",
      "ar": "بيتزا 4 Fromages فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 45,
      "Big": 75,
      "SuperFamily": 90
    }
  },
  {
    "id": "pizza-altero",
    "name": {
      "en": "Altero Pizza",
      "fr": "Pizza Altero",
      "ar": "بيتزا Altero"
    },
    "description": {
      "en": "Premium Altero pizza prepared with fresh ingredients",
      "fr": "Pizza premium Altero préparée avec des ingrédients frais",
      "ar": "بيتزا Altero فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 45,
      "Big": 75,
      "SuperFamily": 90
    }
  },
  {
    "id": "pizza-fruits-de-mer",
    "name": {
      "en": "Fruits de Mer Pizza",
      "fr": "Pizza Fruits de Mer",
      "ar": "بيتزا Fruits de Mer"
    },
    "description": {
      "en": "Premium Fruits de Mer pizza prepared with fresh ingredients",
      "fr": "Pizza premium Fruits de Mer préparée avec des ingrédients frais",
      "ar": "بيتزا Fruits de Mer فاخرة محضرة بمكونات طازجة"
    },
    "category": "Pizzas",
    "prices": {
      "Medium": 45,
      "Big": 75,
      "SuperFamily": 90
    }
  },
  {
    "id": "burger-hamburger",
    "name": {
      "en": "Hamburger Burger",
      "fr": "Hamburger Burger",
      "ar": "برجر Hamburger"
    },
    "description": {
      "en": "Delicious Hamburger Burger served on a fresh bun",
      "fr": "Délicieux Hamburger Burger servi sur un pain frais",
      "ar": "Hamburger Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 18,
      "AvecFries": 25
    }
  },
  {
    "id": "burger-cheese",
    "name": {
      "en": "Cheese Burger",
      "fr": "Cheese Burger",
      "ar": "برجر Cheese"
    },
    "description": {
      "en": "Delicious Cheese Burger served on a fresh bun",
      "fr": "Délicieux Cheese Burger servi sur un pain frais",
      "ar": "Cheese Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 18,
      "AvecFries": 25
    }
  },
  {
    "id": "burger-chicken",
    "name": {
      "en": "Chicken Burger",
      "fr": "Chicken Burger",
      "ar": "برجر Chicken"
    },
    "description": {
      "en": "Delicious Chicken Burger served on a fresh bun",
      "fr": "Délicieux Chicken Burger servi sur un pain frais",
      "ar": "Chicken Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 18,
      "AvecFries": 25
    }
  },
  {
    "id": "burger-egg",
    "name": {
      "en": "Egg Burger",
      "fr": "Egg Burger",
      "ar": "برجر Egg"
    },
    "description": {
      "en": "Delicious Egg Burger served on a fresh bun",
      "fr": "Délicieux Egg Burger servi sur un pain frais",
      "ar": "Egg Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 22,
      "AvecFries": 29
    }
  },
  {
    "id": "burger-double-cheese",
    "name": {
      "en": "Double Cheese Burger",
      "fr": "Double Cheese Burger",
      "ar": "برجر Double Cheese"
    },
    "description": {
      "en": "Delicious Double Cheese Burger served on a fresh bun",
      "fr": "Délicieux Double Cheese Burger servi sur un pain frais",
      "ar": "Double Cheese Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 28,
      "AvecFries": 35
    }
  },
  {
    "id": "burger-double-chicken",
    "name": {
      "en": "Double Chicken Burger",
      "fr": "Double Chicken Burger",
      "ar": "برجر Double Chicken"
    },
    "description": {
      "en": "Delicious Double Chicken Burger served on a fresh bun",
      "fr": "Délicieux Double Chicken Burger servi sur un pain frais",
      "ar": "Double Chicken Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 28,
      "AvecFries": 35
    }
  },
  {
    "id": "burger-mixte",
    "name": {
      "en": "Mixte Burger",
      "fr": "Mixte Burger",
      "ar": "برجر Mixte"
    },
    "description": {
      "en": "Delicious Mixte Burger served on a fresh bun",
      "fr": "Délicieux Mixte Burger servi sur un pain frais",
      "ar": "Mixte Burger لذيذ يقدم على خبز طازج"
    },
    "category": "Burgers",
    "prices": {
      "SansFries": 28,
      "AvecFries": 35
    }
  },
  {
    "id": "tacos-kefta",
    "name": {
      "en": "Tacos Kefta",
      "fr": "Tacos Kefta",
      "ar": "طاكوس Kefta"
    },
    "description": {
      "en": "French tacos stuffed with Kefta and cheese sauce",
      "fr": "Tacos français garni de Kefta et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Kefta وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-poulet",
    "name": {
      "en": "Tacos Poulet",
      "fr": "Tacos Poulet",
      "ar": "طاكوس Poulet"
    },
    "description": {
      "en": "French tacos stuffed with Poulet and cheese sauce",
      "fr": "Tacos français garni de Poulet et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Poulet وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-cordon-bleu",
    "name": {
      "en": "Tacos Cordon Bleu",
      "fr": "Tacos Cordon Bleu",
      "ar": "طاكوس Cordon Bleu"
    },
    "description": {
      "en": "French tacos stuffed with Cordon Bleu and cheese sauce",
      "fr": "Tacos français garni de Cordon Bleu et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Cordon Bleu وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-dinde",
    "name": {
      "en": "Tacos Dinde",
      "fr": "Tacos Dinde",
      "ar": "طاكوس Dinde"
    },
    "description": {
      "en": "French tacos stuffed with Dinde and cheese sauce",
      "fr": "Tacos français garni de Dinde et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Dinde وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-saucisse",
    "name": {
      "en": "Tacos Saucisse",
      "fr": "Tacos Saucisse",
      "ar": "طاكوس Saucisse"
    },
    "description": {
      "en": "French tacos stuffed with Saucisse and cheese sauce",
      "fr": "Tacos français garni de Saucisse et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Saucisse وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-escalope",
    "name": {
      "en": "Tacos Escalope",
      "fr": "Tacos Escalope",
      "ar": "طاكوس Escalope"
    },
    "description": {
      "en": "French tacos stuffed with Escalope and cheese sauce",
      "fr": "Tacos français garni de Escalope et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Escalope وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-shawarma",
    "name": {
      "en": "Tacos Shawarma",
      "fr": "Tacos Shawarma",
      "ar": "طاكوس Shawarma"
    },
    "description": {
      "en": "French tacos stuffed with Shawarma and cheese sauce",
      "fr": "Tacos français garni de Shawarma et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Shawarma وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-nuggets",
    "name": {
      "en": "Tacos Nuggets",
      "fr": "Tacos Nuggets",
      "ar": "طاكوس Nuggets"
    },
    "description": {
      "en": "French tacos stuffed with Nuggets and cheese sauce",
      "fr": "Tacos français garni de Nuggets et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Nuggets وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 28,
      "Gratinated": 33
    }
  },
  {
    "id": "tacos-mixte",
    "name": {
      "en": "Tacos Mixte",
      "fr": "Tacos Mixte",
      "ar": "طاكوس Mixte"
    },
    "description": {
      "en": "French tacos stuffed with Mixte and cheese sauce",
      "fr": "Tacos français garni de Mixte et sauce fromagère",
      "ar": "طاكوس فرنسي محشو بـ Mixte وصلصة الجبن"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 33,
      "Gratinated": 38
    }
  },
  {
    "id": "panini-fromage",
    "name": {
      "en": "Panini Fromage",
      "fr": "Panini Fromage",
      "ar": "بانيني Fromage"
    },
    "description": {
      "en": "Toasted Fromage panini with hot melted cheese",
      "fr": "Panini Fromage toasté avec fromage fondu",
      "ar": "بانيني Fromage محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 16
    }
  },
  {
    "id": "panini-thon",
    "name": {
      "en": "Panini Thon",
      "fr": "Panini Thon",
      "ar": "بانيني Thon"
    },
    "description": {
      "en": "Toasted Thon panini with hot melted cheese",
      "fr": "Panini Thon toasté avec fromage fondu",
      "ar": "بانيني Thon محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 16
    }
  },
  {
    "id": "panini-dinde",
    "name": {
      "en": "Panini Dinde",
      "fr": "Panini Dinde",
      "ar": "بانيني Dinde"
    },
    "description": {
      "en": "Toasted Dinde panini with hot melted cheese",
      "fr": "Panini Dinde toasté avec fromage fondu",
      "ar": "بانيني Dinde محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "panini-poulet",
    "name": {
      "en": "Panini Poulet",
      "fr": "Panini Poulet",
      "ar": "بانيني Poulet"
    },
    "description": {
      "en": "Toasted Poulet panini with hot melted cheese",
      "fr": "Panini Poulet toasté avec fromage fondu",
      "ar": "بانيني Poulet محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "panini-crevettes",
    "name": {
      "en": "Panini Crevettes",
      "fr": "Panini Crevettes",
      "ar": "بانيني Crevettes"
    },
    "description": {
      "en": "Toasted Crevettes panini with hot melted cheese",
      "fr": "Panini Crevettes toasté avec fromage fondu",
      "ar": "بانيني Crevettes محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 23
    }
  },
  {
    "id": "panini-mixte",
    "name": {
      "en": "Panini Mixte",
      "fr": "Panini Mixte",
      "ar": "بانيني Mixte"
    },
    "description": {
      "en": "Toasted Mixte panini with hot melted cheese",
      "fr": "Panini Mixte toasté avec fromage fondu",
      "ar": "بانيني Mixte محمص مع جبن ذائب"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 23
    }
  },
  {
    "id": "sandwich3ish-dinde",
    "name": {
      "en": "Sandwich 3ish Dinde",
      "fr": "Sandwich 3ish Dinde",
      "ar": "سندويش عيش Dinde"
    },
    "description": {
      "en": "Authentic street-style sandwich with Dinde",
      "fr": "Sandwich authentique avec Dinde",
      "ar": "سندويش عيش تقليدي مع Dinde"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "sandwich3ish-saucisse",
    "name": {
      "en": "Sandwich 3ish Saucisse",
      "fr": "Sandwich 3ish Saucisse",
      "ar": "سندويش عيش Saucisse"
    },
    "description": {
      "en": "Authentic street-style sandwich with Saucisse",
      "fr": "Sandwich authentique avec Saucisse",
      "ar": "سندويش عيش تقليدي مع Saucisse"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "sandwich3ish-kefta",
    "name": {
      "en": "Sandwich 3ish Kefta",
      "fr": "Sandwich 3ish Kefta",
      "ar": "سندويش عيش Kefta"
    },
    "description": {
      "en": "Authentic street-style sandwich with Kefta",
      "fr": "Sandwich authentique avec Kefta",
      "ar": "سندويش عيش تقليدي مع Kefta"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "sandwich3ish-poulet",
    "name": {
      "en": "Sandwich 3ish Poulet",
      "fr": "Sandwich 3ish Poulet",
      "ar": "سندويش عيش Poulet"
    },
    "description": {
      "en": "Authentic street-style sandwich with Poulet",
      "fr": "Sandwich authentique avec Poulet",
      "ar": "سندويش عيش تقليدي مع Poulet"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "sandwich3ish-escalope",
    "name": {
      "en": "Sandwich 3ish Escalope",
      "fr": "Sandwich 3ish Escalope",
      "ar": "سندويش عيش Escalope"
    },
    "description": {
      "en": "Authentic street-style sandwich with Escalope",
      "fr": "Sandwich authentique avec Escalope",
      "ar": "سندويش عيش تقليدي مع Escalope"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 20
    }
  },
  {
    "id": "sandwich3ish-mixte",
    "name": {
      "en": "Sandwich 3ish Mixte",
      "fr": "Sandwich 3ish Mixte",
      "ar": "سندويش عيش Mixte"
    },
    "description": {
      "en": "Authentic street-style sandwich with Mixte",
      "fr": "Sandwich authentique avec Mixte",
      "ar": "سندويش عيش تقليدي مع Mixte"
    },
    "category": "TacosSandwiches",
    "prices": {
      "Standard": 22
    }
  },
  {
    "id": "plat-kefta",
    "name": {
      "en": "Plate Kefta",
      "fr": "Assiette Kefta",
      "ar": "طبق Kefta"
    },
    "description": {
      "en": "Hot plate of Kefta served with sides",
      "fr": "Assiette chaude de Kefta avec garnitures",
      "ar": "طبق Kefta ساخن مع مقبلات"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "plat-dinde",
    "name": {
      "en": "Plate Dinde",
      "fr": "Assiette Dinde",
      "ar": "طبق Dinde"
    },
    "description": {
      "en": "Hot plate of Dinde served with sides",
      "fr": "Assiette chaude de Dinde avec garnitures",
      "ar": "طبق Dinde ساخن مع مقبلات"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "plat-escalope",
    "name": {
      "en": "Plate Escalope",
      "fr": "Assiette Escalope",
      "ar": "طبق Escalope"
    },
    "description": {
      "en": "Hot plate of Escalope served with sides",
      "fr": "Assiette chaude de Escalope avec garnitures",
      "ar": "طبق Escalope ساخن مع مقبلات"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "plat-nuggets",
    "name": {
      "en": "Plate Nuggets",
      "fr": "Assiette Nuggets",
      "ar": "طبق Nuggets"
    },
    "description": {
      "en": "Hot plate of Nuggets served with sides",
      "fr": "Assiette chaude de Nuggets avec garnitures",
      "ar": "طبق Nuggets ساخن مع مقبلات"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "plat-mixte",
    "name": {
      "en": "Plate Mixte",
      "fr": "Assiette Mixte",
      "ar": "طبق Mixte"
    },
    "description": {
      "en": "Hot plate of Mixte served with sides",
      "fr": "Assiette chaude de Mixte avec garnitures",
      "ar": "طبق Mixte ساخن مع مقبلات"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 40
    }
  },
  {
    "id": "plat-poulet-roti",
    "name": {
      "en": "Roast Chicken",
      "fr": "Poulet Rôti",
      "ar": "دجاج محمر"
    },
    "description": {
      "en": "Traditional moroccan styled roast chicken",
      "fr": "Poulet rôti traditionnel",
      "ar": "دجاج محمر بالطريقة التقليدية"
    },
    "category": "MainsPastas",
    "prices": {
      "Quarter": 30,
      "Half": 60,
      "Whole": 120
    }
  },
  {
    "id": "pasta-spaghetti-napolitaine",
    "name": {
      "en": "Spaghetti Napolitaine",
      "fr": "Spaghetti Napolitaine",
      "ar": "باستا Spaghetti Napolitaine"
    },
    "description": {
      "en": "Oven baked premium Spaghetti Napolitaine",
      "fr": "Spaghetti Napolitaine premium cuit au four",
      "ar": "مخبوزة في الفرن Spaghetti Napolitaine فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 25
    }
  },
  {
    "id": "pasta-spaghetti-bolognaise",
    "name": {
      "en": "Spaghetti Bolognaise",
      "fr": "Spaghetti Bolognaise",
      "ar": "باستا Spaghetti Bolognaise"
    },
    "description": {
      "en": "Oven baked premium Spaghetti Bolognaise",
      "fr": "Spaghetti Bolognaise premium cuit au four",
      "ar": "مخبوزة في الفرن Spaghetti Bolognaise فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 40
    }
  },
  {
    "id": "pasta-lasagne",
    "name": {
      "en": "Lasagne",
      "fr": "Lasagne",
      "ar": "باستا Lasagne"
    },
    "description": {
      "en": "Oven baked premium Lasagne",
      "fr": "Lasagne premium cuit au four",
      "ar": "مخبوزة في الفرن Lasagne فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "pasta-lasagne-fruits-de-mer",
    "name": {
      "en": "Lasagne Fruits de Mer",
      "fr": "Lasagne Fruits de Mer",
      "ar": "باستا Lasagne Fruits de Mer"
    },
    "description": {
      "en": "Oven baked premium Lasagne Fruits de Mer",
      "fr": "Lasagne Fruits de Mer premium cuit au four",
      "ar": "مخبوزة في الفرن Lasagne Fruits de Mer فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 50
    }
  },
  {
    "id": "pasta-pasticcio",
    "name": {
      "en": "Pasticcio",
      "fr": "Pasticcio",
      "ar": "باستا Pasticcio"
    },
    "description": {
      "en": "Oven baked premium Pasticcio",
      "fr": "Pasticcio premium cuit au four",
      "ar": "مخبوزة في الفرن Pasticcio فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 35
    }
  },
  {
    "id": "pasta-pasticcio-fruits-de-mer",
    "name": {
      "en": "Pasticcio Fruits de Mer",
      "fr": "Pasticcio Fruits de Mer",
      "ar": "باستا Pasticcio Fruits de Mer"
    },
    "description": {
      "en": "Oven baked premium Pasticcio Fruits de Mer",
      "fr": "Pasticcio Fruits de Mer premium cuit au four",
      "ar": "مخبوزة في الفرن Pasticcio Fruits de Mer فاخرة"
    },
    "category": "MainsPastas",
    "prices": {
      "Standard": 50
    }
  },
  {
    "id": "salade-marocaine",
    "name": {
      "en": "Marocaine Salad",
      "fr": "Salade Marocaine",
      "ar": "سلطة Marocaine"
    },
    "description": {
      "en": "Fresh Marocaine mix",
      "fr": "Mélange Marocaine frais",
      "ar": "مزيج Marocaine طازج"
    },
    "category": "Salads",
    "prices": {
      "Petite": 15,
      "Grande": 20
    }
  },
  {
    "id": "salade-niçoise",
    "name": {
      "en": "Niçoise Salad",
      "fr": "Salade Niçoise",
      "ar": "سلطة Niçoise"
    },
    "description": {
      "en": "Fresh Niçoise mix",
      "fr": "Mélange Niçoise frais",
      "ar": "مزيج Niçoise طازج"
    },
    "category": "Salads",
    "prices": {
      "Petite": 20,
      "Grande": 30
    }
  },
  {
    "id": "salade-mexicaine",
    "name": {
      "en": "Mexicaine Salad",
      "fr": "Salade Mexicaine",
      "ar": "سلطة Mexicaine"
    },
    "description": {
      "en": "Fresh Mexicaine mix",
      "fr": "Mélange Mexicaine frais",
      "ar": "مزيج Mexicaine طازج"
    },
    "category": "Salads",
    "prices": {
      "Petite": 20,
      "Grande": 30
    }
  },
  {
    "id": "salade-poulet",
    "name": {
      "en": "Poulet Salad",
      "fr": "Salade Poulet",
      "ar": "سلطة Poulet"
    },
    "description": {
      "en": "Fresh Poulet mix",
      "fr": "Mélange Poulet frais",
      "ar": "مزيج Poulet طازج"
    },
    "category": "Salads",
    "prices": {
      "Petite": 20,
      "Grande": 30
    }
  },
  {
    "id": "salade-fruits-de-mer",
    "name": {
      "en": "Fruits de Mer Salad",
      "fr": "Salade Fruits de Mer",
      "ar": "سلطة Fruits de Mer"
    },
    "description": {
      "en": "Fresh Fruits de Mer mix",
      "fr": "Mélange Fruits de Mer frais",
      "ar": "مزيج Fruits de Mer طازج"
    },
    "category": "Salads",
    "prices": {
      "Petite": 30,
      "Grande": 50
    }
  },
  {
    "id": "jus-orange",
    "name": {
      "en": "Fresh Orange Juice",
      "fr": "Jus de Orange Frais",
      "ar": "عصير Orange طازج"
    },
    "description": {
      "en": "Premium Orange juice",
      "fr": "Jus premium de Orange",
      "ar": "عصير Orange فاخر"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 13
    }
  },
  {
    "id": "jus-pomme",
    "name": {
      "en": "Fresh Pomme Juice",
      "fr": "Jus de Pomme Frais",
      "ar": "عصير Pomme طازج"
    },
    "description": {
      "en": "Premium Pomme juice",
      "fr": "Jus premium de Pomme",
      "ar": "عصير Pomme فاخر"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 14
    }
  },
  {
    "id": "jus-avocat",
    "name": {
      "en": "Fresh Avocat Juice",
      "fr": "Jus de Avocat Frais",
      "ar": "عصير Avocat طازج"
    },
    "description": {
      "en": "Premium Avocat juice",
      "fr": "Jus premium de Avocat",
      "ar": "عصير Avocat فاخر"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 16
    }
  },
  {
    "id": "jus-panaché",
    "name": {
      "en": "Fresh Panaché Juice",
      "fr": "Jus de Panaché Frais",
      "ar": "عصير Panaché طازج"
    },
    "description": {
      "en": "Premium Panaché juice",
      "fr": "Jus premium de Panaché",
      "ar": "عصير Panaché فاخر"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 18
    }
  },
  {
    "id": "jus-tiramisu",
    "name": {
      "en": "Fresh Tiramisu Juice",
      "fr": "Jus de Tiramisu Frais",
      "ar": "عصير Tiramisu طازج"
    },
    "description": {
      "en": "Premium Tiramisu juice",
      "fr": "Jus premium de Tiramisu",
      "ar": "عصير Tiramisu فاخر"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 25
    }
  },
  {
    "id": "boisson-soda",
    "name": {
      "en": "Soda Can",
      "fr": "Cannette de Soda",
      "ar": "صودا علبة"
    },
    "description": {
      "en": "Refreshing cold soda",
      "fr": "Soda rafraîchissant",
      "ar": "صودا باردة منعشة"
    },
    "category": "Beverages",
    "prices": {
      "Standard": 6
    }
  },
  {
    "id": "boisson-water",
    "name": {
      "en": "Mineral Water",
      "fr": "Eau Minérale",
      "ar": "مياه معدنية"
    },
    "description": {
      "en": "Still mineral water",
      "fr": "Eau minérale plate",
      "ar": "مياه معدنية غير غازية"
    },
    "category": "Beverages",
    "prices": {
      "Small": 3,
      "Medium": 5,
      "Large": 10
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