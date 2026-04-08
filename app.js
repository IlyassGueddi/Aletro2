/**
 * Altero Food - Main Application Logic
 * 
 * This module handles:
 * - Rendering menu items from data.js
 * - Product modal functionality
 * - Size selection and price updates
 * - Quantity management
 * - Category filtering
 */

// Import configuration and data from data.js
import { MENU_ITEMS, siteConfig, translations, t, CATEGORIES } from '../data.js';

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
let currentLang = siteConfig.defaultLanguage;

// ============================================
// CENTRALIZED CART STATE
// ============================================
class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.listeners = [];
    }

    // LocalStorage persistence
    loadCart() {
        try {
            const saved = localStorage.getItem('altero_cart');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('altero_cart', JSON.stringify(this.cart));
            this.notifyListeners();
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    // Cart operations
    addItem(product, size, quantity) {
        const existingItem = this.cart.find(item => 
            item.id === product.id && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                size: size,
                quantity: quantity,
                price: product.prices[size],
                category: product.category
            });
        }
        
        this.saveCart();
        return this.cart;
    }

    removeItem(productId, size) {
        this.cart = this.cart.filter(item => 
            !(item.id === productId && item.size === size)
        );
        this.saveCart();
        return this.cart;
    }

    updateQuantity(productId, size, quantity) {
        const item = this.cart.find(item => 
            item.id === productId && item.size === size
        );
        
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId, size);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
        return this.cart;
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        return this.cart;
    }

    getCart() {
        return [...this.cart];
    }

    getTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    // Event listeners
    subscribe(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => {
            try {
                callback(this.cart);
            } catch (error) {
                console.error('Error in cart listener:', error);
            }
        });
    }
}

// Initialize global cart manager
const cartManager = new CartManager();

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    currentProduct: null,
    selectedSize: 'Medium',
    currentPrice: 0,
    quantity: 1,
    activeCategory: 'all'
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    productGrid: document.getElementById('product-grid'),
    modal: document.getElementById('product-modal'),
    modalOverlay: document.getElementById('modal-overlay-bg'),
    modalImage: document.getElementById('modal-image'),
    modalName: document.getElementById('modal-name'),
    modalCategory: document.getElementById('modal-category'),
    modalDescription: document.getElementById('modal-description'),
    displayPrice: document.getElementById('display-price'),
    sizeButtonsContainer: document.getElementById('size-buttons'),
    qtyCount: document.getElementById('qty-count'),
    qtyDecrease: document.getElementById('qty-decrease'),
    qtyIncrease: document.getElementById('qty-increase'),
    addToCartBtn: document.getElementById('add-to-cart-btn'),
    modalClose: document.getElementById('modal-close'),
    modalCloseMobile: document.getElementById('modal-close-mobile'),
    categoryButtons: document.querySelectorAll('[data-category]')
};

// ============================================
// PLACEHOLDER IMAGES FOR MENU ITEMS
// ============================================
// Since we don't have real images, we'll use high-quality food placeholders
const placeholderImages = {
    Burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    Pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    Pasta: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=600',
    Salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    Sides: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    Desserts: 'https://images.unsplash.com/photo-1547294313-c0d0ad15b1f4?auto=format&fit=crop&q=80&w=600',
    Beverages: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600'
};

// ============================================
// TRANSLATION FUNCTIONS
// ============================================

/**
 * Update all translatable text elements on the page
 */
const updateTranslations = () => {
    // Update elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(element => {
        const key = element.dataset.t;
        const translation = t(key, currentLang);
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-t-placeholder]').forEach(element => {
        const key = element.dataset.tPlaceholder;
        element.placeholder = t(key, currentLang);
    });

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = t(key, currentLang);
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update size buttons in modal
    document.querySelectorAll('.size-btn').forEach(btn => {
        const sizeText = btn.querySelector('span:first-child');
        if (sizeText && sizeText.dataset.t) {
            sizeText.textContent = t(sizeText.dataset.t, currentLang);
        }
    });

    // Update menu items with multilingual names and descriptions
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = card.dataset.id;
        const product = MENU_ITEMS.find(item => item.id === productId);
        
        if (product) {
            const nameEl = card.querySelector('.product-name');
            const descEl = card.querySelector('.product-description');
            
            if (nameEl) {
                const name = product.name[currentLang] || product.name.en || product.name;
                nameEl.textContent = name;
            }
            
            if (descEl) {
                const desc = product.description?.[currentLang] || product.description?.en || product.description;
                descEl.textContent = desc;
            }
        }
    });
};

/**
 * Set language with RTL/LTR support and font switching
 */
const setLanguage = (lang) => {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not supported`);
        return;
    }

    // Update current language
    currentLang = lang;

    // Store preference in LocalStorage
    localStorage.setItem('altero_language', lang);

    // Update language button states
    document.querySelectorAll('[id^="lang-"]').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-on-primary');
        btn.classList.add('text-on-surface-variant');
    });
    
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-on-surface-variant');
        activeBtn.classList.add('bg-primary', 'text-on-primary');
    }

    // Set document direction and font
    if (lang === 'ar') {
        document.body.dir = 'rtl';
        document.body.setAttribute('lang', 'ar');
        document.body.style.fontFamily = 'Cairo, Almarai, sans-serif';
        // Add Arabic font to head if not already present
        if (!document.querySelector('#arabic-font')) {
            const link = document.createElement('link');
            link.id = 'arabic-font';
            link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Almarai:wght@400;700&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    } else {
        document.body.dir = 'ltr';
        document.body.setAttribute('lang', lang);
        document.body.style.fontFamily = 'sans-serif';
    }

    // Update all translations
    updateTranslations();

    // Update bag items if open
    if (document.getElementById('bag-overlay').classList.contains('visible')) {
        renderBagItems();
    }

    // Update search placeholder
    const searchInput = document.querySelector('input[data-t-placeholder="searchPlaceholder"]');
    if (searchInput) {
        searchInput.placeholder = t('searchPlaceholder', currentLang);
    }

    // Update form placeholders
    const nameInput = document.getElementById('customer-name');
    const addressInput = document.getElementById('customer-address');
    
    if (nameInput) nameInput.placeholder = t('yourName', currentLang);
    if (addressInput) addressInput.placeholder = t('yourAddress', currentLang);

    // Re-render products with new language for instant UI update
    if (state.activeCategory === 'all') {
        renderProducts(MENU_ITEMS, lang);
    } else {
        const filtered = MENU_ITEMS.filter(item => item.category === state.activeCategory);
        renderProducts(filtered, lang);
    }

    console.log(`Language switched to: ${lang} (${lang === 'ar' ? 'RTL' : 'LTR'})`);
};

/**
 * Load saved language from LocalStorage
 */
const loadSavedLanguage = () => {
    const savedLang = localStorage.getItem('altero_language');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
        return savedLang;
    }
    return siteConfig.defaultLanguage;
};

/**
 * Switch language and update all text
 */
const switchLanguage = (lang) => {
    if (translations[lang]) {
        currentLang = lang;
        updateTranslations();
        console.log(`Language switched to: ${lang}`);
    }
};

// ============================================
// HIGH-PERFORMANCE SEARCH FILTER
// ============================================

// Debounce utility for performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Search filter function with simple unified logic
const filterProducts = (searchTerm) => {
    const value = searchTerm.toLowerCase().trim();
    
    if (value === '') {
        // Show full menu if search is empty
        if (state.activeCategory === 'all') {
            renderProducts(MENU_ITEMS, currentLang);
        } else {
            const filtered = MENU_ITEMS.filter(item => item.category === state.activeCategory);
            renderProducts(filtered, currentLang);
        }
        return;
    }
    
    // Simple filtering logic
    const results = MENU_ITEMS.filter(item => {
        const name = item.name[currentLang] || item.name.en || item.name;
        return name.toLowerCase().includes(value);
    });
    
    renderProducts(results, currentLang);
};

// Initialize search functionality
const initializeSearch = () => {
    // Get the search input
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // Simple unified input listener
        searchInput.addEventListener('input', (e) => {
            filterProducts(e.target.value);
        });
        
        // Clear search on Escape key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                filterProducts('');
            }
        });
    }
};

// ============================================
// BAG UI FUNCTIONS
// ============================================

/**
 * Render bag items
 */
const renderBagItems = () => {
    const cart = cartManager.getCart();
    const bagItems = document.getElementById('bag-items');
    const bagEmpty = document.getElementById('bag-empty');
    const bagTotal = document.getElementById('bag-total');

    if (cart.length === 0) {
        bagItems.innerHTML = '';
        bagEmpty.classList.remove('hidden');
        bagTotal.textContent = `${siteConfig.currencySymbol}0.00`;
        bagTotal.style.cssText = currentLang === 'ar' ? 'text-align: left' : 'text-align: right';
        return;
    }

    bagEmpty.classList.add('hidden');
    
    bagItems.innerHTML = cart.map(item => {
        // Get localized name for cart items
        const product = MENU_ITEMS.find(p => p.id === item.id);
        const name = product ? (product.name[currentLang] || product.name.en || product.name) : item.name;
        
        return `
        <div class="bag-item bg-surface-variant rounded-lg p-4 space-y-3" data-item-id="${item.id}" data-item-size="${item.size}">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <h4 class="font-semibold text-on-surface">${name}</h4>
                    <p class="text-sm text-on-surface-variant">${t(`size${item.size}`, currentLang)}</p>
                    <p class="text-primary font-bold" style="${currentLang === 'ar' ? 'text-align: left' : 'text-align: right'}">${siteConfig.currencySymbol}${item.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-bright transition-colors flex items-center justify-center" onclick="updateBagQuantity('${item.id}', '${item.size}', -1)">
                        <span class="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span class="w-12 text-center font-bold text-on-surface">${item.quantity}</span>
                    <button class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-bright transition-colors flex items-center justify-center" onclick="updateBagQuantity('${item.id}', '${item.size}', 1)">
                        <span class="material-symbols-outlined text-sm">add</span>
                    </button>
                    <button class="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center ml-2" onclick="removeFromBag('${item.id}', '${item.size}')" title="Remove item">
                        <span class="material-symbols-outlined text-sm text-white">delete</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');

    const total = cartManager.getTotal();
    bagTotal.textContent = `${siteConfig.currencySymbol}${total.toFixed(2)}`;
    bagTotal.style.cssText = currentLang === 'ar' ? 'text-align: left' : 'text-align: right';
};

/**
 * Update bag item quantity
 */
window.updateBagQuantity = (productId, size, delta) => {
    const cart = cartManager.getCart();
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        cartManager.updateQuantity(productId, size, item.quantity + delta);
    }
};

/**
 * Remove item from bag with confirmation
 */
window.removeFromBag = (productId, size) => {
    const cart = cartManager.getCart();
    const item = cart.find(item => item.id === productId && item.size === size);
    
    if (item) {
        const confirmDelete = confirm(`Are you sure you want to remove "${item.name}" (${size}) from your bag?`);
        if (confirmDelete) {
            cartManager.removeItem(productId, size);
            renderBagItems(); // Re-render bag items
        }
    }
};

/**
 * Open bag drawer
 */
const openBag = () => {
    const overlay = document.getElementById('bag-overlay');
    const drawer = document.getElementById('bag-drawer');
    
    overlay.classList.remove('opacity-0', 'invisible');
    overlay.classList.add('opacity-100', 'visible');
    
    setTimeout(() => {
        drawer.classList.remove('translate-x-full');
    }, 10);
    
    renderBagItems();
    document.body.style.overflow = 'hidden';
};

/**
 * Close bag drawer
 */
const closeBag = () => {
    const overlay = document.getElementById('bag-overlay');
    const drawer = document.getElementById('bag-drawer');
    
    drawer.classList.add('translate-x-full');
    
    setTimeout(() => {
        overlay.classList.add('opacity-0', 'invisible');
        overlay.classList.remove('opacity-100', 'visible');
    }, 300);
    
    document.body.style.overflow = '';
};

/**
 * Update bag icon badge
 */
const updateBagBadge = () => {
    const badge = document.querySelector('[data-cart-count]');
    if (badge) {
        const count = cartManager.getItemCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
};

/**
 * Generate WhatsApp link from cart
 */
const generateWhatsAppLink = () => {
    const cart = cartManager.getCart();
    const customerName = document.getElementById('customer-name').value.trim();
    const customerAddress = document.getElementById('customer-address').value.trim();
    
    if (cart.length === 0) {
        alert(t('cartEmpty', currentLang));
        return null;
    }
    
    if (!customerName || !customerAddress) {
        alert('Please provide your name and address');
        return null;
    }
    
    const orderLines = [
        `🍽️ *${t('orderSummary', currentLang) || 'Order Summary'}*`,
        '',
        `👤 *Name*: ${customerName}`,
        `📍 *Address*: ${customerAddress}`,
        '',
        ...cart.map(item => {
            const sizeText = t(`size${item.size}`, currentLang);
            const itemTotal = (item.price * item.quantity).toFixed(2);
            return `• ${item.quantity}x ${item.name} (${sizeText}) - ${siteConfig.currencySymbol}${itemTotal}`;
        }),
        '',
        `💰 *${t('total', currentLang) || 'Total'}*: ${siteConfig.currencySymbol}${cartManager.getTotal().toFixed(2)}`,
        '',
        `📅 ${new Date().toLocaleDateString()}`,
        `⏰ ${new Date().toLocaleTimeString()}`
    ];
    
    const message = orderLines.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Handle confirm order
 */
const handleConfirmOrder = () => {
    const whatsappURL = generateWhatsAppLink();
    if (whatsappURL) {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }
};

/**
 * Handle clear bag
 */
const handleClearBag = () => {
    if (confirm('Are you sure you want to clear your bag?')) {
        cartManager.clearCart();
        renderBagItems();
    }
};

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render all products to the grid
 */
const renderProducts = (products = MENU_ITEMS, lang = currentLang) => {
    elements.productGrid.innerHTML = products.map(product => {
        // Get localized name and description
        const name = product.name[lang] || product.name.en || product.name;
        const description = product.description?.[lang] || product.description?.en || product.description;
        const categoryTranslation = t(product.category.toLowerCase(), lang) || product.category;
        const firstPriceSize = Object.keys(product.prices)[0];
        
        return `
        <div class="product-card bg-surface-container-low rounded-xl overflow-hidden group hover:bg-surface-container transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" data-id="${product.id}">
            <div class="relative h-64 overflow-hidden">
                <img src="${placeholderImages[product.category] || placeholderImages.Burgers}" 
                     alt="Altero Food - ${name} - أفضل مطعم  في أكادير" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-4 right-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    ${categoryTranslation}
                </div>
            </div>
            <div class="p-6 space-y-3">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold tracking-tight text-on-surface leading-tight">${name}</h3>
                    <span class="text-primary font-extrabold text-lg" style="${lang === 'ar' ? 'text-align: left' : 'text-align: right'}">${siteConfig.currencySymbol}${product.prices[firstPriceSize]}</span>
                </div>
                <p class="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                    ${description}
                </p>
                <div class="pt-4 flex justify-end">
                    <button class="add-btn bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all active:scale-90 hover:bg-red-400 shadow-lg shadow-red-500/20" data-id="${product.id}">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'wght' 600;">add</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Attach click listeners to product cards
    attachProductListeners();
};

/**
 * Render size buttons in the modal
 */
const renderSizeButtons = () => {
    if (!state.currentProduct) return;

    const sizes = Object.keys(state.currentProduct.prices);
    
    elements.sizeButtonsContainer.innerHTML = sizes.map((size) => {
        const sizeKey = 'size' + size.replace(/\s+/g, '');
        return `
        <button class="size-btn group flex flex-col items-center justify-center py-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:bg-primary/10 hover:border-primary transition-all duration-300 ${size === state.selectedSize ? 'active' : ''}" 
                data-size="${size}">
            <span class="text-xs uppercase tracking-tighter text-outline group-hover:text-primary transition-colors" data-t="${sizeKey}">${t(sizeKey, currentLang) || size}</span>
            <span class="text-sm font-bold">${siteConfig.currencySymbol}${state.currentProduct.prices[size]}</span>
        </button>
    `}).join('');

    // Attach click listeners to size buttons
    elements.sizeButtonsContainer.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', handleSizeChange);
    });
};

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * Open the product modal with product data
 */
const openModal = (productId) => {
    const product = MENU_ITEMS.find(item => item.id === productId);
    if (!product) return;

    // Update state
    state.currentProduct = product;
    const availableSizes = Object.keys(product.prices);
    state.selectedSize = availableSizes[0];
    state.currentPrice = product.prices[availableSizes[0]];
    state.quantity = 1;

    // Update modal content with proper multilingual support
    const name = product.name[currentLang] || product.name.en || product.name;
    const description = product.description?.[currentLang] || product.description?.en || product.description;
    const categoryTranslation = t(product.category.toLowerCase(), currentLang);
    
    elements.modalImage.src = placeholderImages[product.category] || placeholderImages.Burgers;
    elements.modalImage.alt = `Altero Food - ${name} - أفضل مطعم  في أكادير`;
    elements.modalName.textContent = name;
    elements.modalCategory.textContent = categoryTranslation;
    elements.modalDescription.textContent = description;
    elements.qtyCount.textContent = state.quantity;
    elements.displayPrice.textContent = `${siteConfig.currencySymbol}${state.currentPrice.toFixed(2)}`;

    // Render size buttons
    renderSizeButtons();

    // Show modal with animation
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

/**
 * Close the product modal
 */
const closeModal = () => {
    elements.modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    state.currentProduct = null;
};

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle size selection
 */
const handleSizeChange = (e) => {
    const btn = e.currentTarget;
    const size = btn.dataset.size;

    // Update state
    state.selectedSize = size;
    state.currentPrice = state.currentProduct.prices[size];

    // Update price display
    elements.displayPrice.textContent = `${siteConfig.currencySymbol}${(state.currentPrice * state.quantity).toFixed(2)}`;

    // Update active button
    elements.sizeButtonsContainer.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
};

/**
 * Handle quantity changes
 */
const handleQtyChange = (delta) => {
    state.quantity = Math.max(1, state.quantity + delta);
    elements.qtyCount.textContent = state.quantity;
    elements.displayPrice.textContent = `${siteConfig.currencySymbol}${(state.currentPrice * state.quantity).toFixed(2)}`;
};

/**
 * Handle add to cart
 */
const handleAddToCart = () => {
    if (!state.currentProduct) return;

    const btn = elements.addToCartBtn;
    const originalText = btn.textContent;

    // Add to cart using Cart Manager
    cartManager.addItem(
        state.currentProduct,
        state.selectedSize,
        state.quantity
    );

    // Visual feedback
    btn.textContent = t('addedToBag', currentLang);
    btn.classList.add('bg-on-primary-container', 'text-white');

    // Log the action (in production, this would add to cart state/API)
    console.log(`Added to cart: ${state.quantity}x ${state.currentProduct.name} (${state.selectedSize}) at ${siteConfig.currencySymbol}${(state.currentPrice * state.quantity).toFixed(2)}`);

    // Reset button after delay
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('bg-on-primary-container', 'text-white');
    }, 2000);
};

/**
 * Handle category filtering
 */
const handleCategoryFilter = (category) => {
    state.activeCategory = category;

    // Update button styles
    elements.categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.remove('bg-surface-variant', 'text-on-surface-variant');
            btn.classList.add('bg-primary', 'text-on-primary', 'shadow-xl', 'shadow-primary/10');
        } else {
            btn.classList.add('bg-surface-variant', 'text-on-surface-variant');
            btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-xl', 'shadow-primary/10');
        }
    });

    // Filter products
    if (category === 'all') {
        renderProducts(MENU_ITEMS, currentLang);
    } else {
        const filtered = MENU_ITEMS.filter(item => item.category === category);
        renderProducts(filtered, currentLang);
    }
};

/**
 * Attach click listeners to product cards
 */
const attachProductListeners = () => {
    // Product card clicks (open modal)
    elements.productGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking the add button
            if (e.target.closest('.add-btn')) return;
            const productId = card.dataset.id;
            openModal(productId);
        });
    });

    // Add button clicks
    elements.productGrid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.id;
            openModal(productId);
        });
    });
};

// ============================================
// INITIALIZE EVENT LISTENERS
// ============================================
const initializeEventListeners = () => {
    // Modal close buttons
    elements.modalClose?.addEventListener('click', closeModal);
    elements.modalCloseMobile?.addEventListener('click', closeModal);
    
    // Close on overlay click
    elements.modalOverlay?.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Quantity controls
    elements.qtyDecrease?.addEventListener('click', () => handleQtyChange(-1));
    elements.qtyIncrease?.addEventListener('click', () => handleQtyChange(1));

    // Add to cart
    elements.addToCartBtn?.addEventListener('click', handleAddToCart);

    // Category filters
    elements.categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleCategoryFilter(btn.dataset.category);
        });
    });

    // Bag functionality
    const cartBtn = document.getElementById('cart-button');
    const bagCloseBtn = document.getElementById('bag-close-btn');
    const bagOverlay = document.getElementById('bag-overlay');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
    const clearBagBtn = document.getElementById('clear-bag-btn');

    if (cartBtn) {
        cartBtn.addEventListener('click', openBag);
    }

    if (bagCloseBtn) {
        bagCloseBtn.addEventListener('click', closeBag);
    }

    if (bagOverlay) {
        bagOverlay.addEventListener('click', (e) => {
            if (e.target === bagOverlay) {
                closeBag();
            }
        });
    }

    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', handleConfirmOrder);
    }

    if (clearBagBtn) {
        clearBagBtn.addEventListener('click', handleClearBag);
    }

    // Subscribe to cart changes
    cartManager.subscribe(() => {
        updateBagBadge();
    });

    // Close bag on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('bag-overlay');
            if (overlay && overlay.classList.contains('visible')) {
                closeBag();
            }
        }
    });

    // Mobile navigation functionality
    const mobileNavHome = document.getElementById('mobile-nav-home');
    const mobileNavSearch = document.getElementById('mobile-nav-search');
    const mobileNavFavorites = document.getElementById('mobile-nav-favorites');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const searchInput = document.getElementById('search-input');
    const categoriesSection = document.getElementById('categories-section');

    // Function to set active mobile navigation item
    const setActiveMobileNav = (activeElement) => {
        // Remove active class from all mobile nav items
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.classList.remove('active');
            item.classList.remove('text-primary');
            item.classList.add('text-neutral-500');
        });
        
        // Add active class to clicked element
        activeElement.classList.add('active');
        activeElement.classList.remove('text-neutral-500');
        activeElement.classList.add('text-primary');
    };

    // Home icon - scroll to top
    if (mobileNavHome) {
        mobileNavHome.addEventListener('click', () => {
            setActiveMobileNav(mobileNavHome);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search icon - focus search input and scroll to top
    if (mobileNavSearch && searchInput) {
        mobileNavSearch.addEventListener('click', () => {
            setActiveMobileNav(mobileNavSearch);
            // Scroll to top to see search input
            window.scrollTo({ top: 0 });
            // Focus the search input
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        });
    }

    // Favorites icon - placeholder for favorites functionality
    if (mobileNavFavorites) {
        mobileNavFavorites.addEventListener('click', () => {
            setActiveMobileNav(mobileNavFavorites);
            // Placeholder: Show favorites or implement favorites functionality
            alert('Favorites feature coming soon!');
        });
    }

    // Menu icon - scroll to categories section
    if (mobileNavMenu) {
        mobileNavMenu.addEventListener('click', () => {
            setActiveMobileNav(mobileNavMenu);
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language or use default
    loadSavedLanguage();
    
    // Initialize translations
    updateTranslations();
    
    // Render all products
    renderProducts(MENU_ITEMS, currentLang);
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize bag badge
    updateBagBadge();
    
    // Make functions globally available for testing
    window.switchLanguage = switchLanguage;
    window.setLanguage = setLanguage;
    window.cartManager = cartManager;
    window.openBag = openBag;
    window.closeBag = closeBag;
    
    console.log('Altero Food app initialized with', MENU_ITEMS.length, 'menu items');
    console.log('Current language:', currentLang);
    console.log('Cart items:', cartManager.getItemCount());
});