// ============================================
// PRODUCT DATABASE
// ============================================
const products = [
    {
        id: 1,
        name: "Blue Shirt",
        price: 199,
        image: "photo 8.jpg",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Premium quality blue shirt with comfortable fabric. Perfect for casual and semi-formal occasions.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "300 Grams",
            material: "Cotton Blend",
            care: "Machine washable"
        }
    },
    {
        id: 2,
        name: "Blue Coat",
        price: 599,
        image: "photo 7.jpg",
        category: "coat",
        rating: 4,
        sizes: ["M", "L", "XL", "XXL"],
        description: "Stylish blue coat for winter season. Premium quality fabric with excellent warmth.",
        details: {
            dimensions: "35 x 12 x 4 cm",
            weight: "500 Grams",
            material: "Wool Blend",
            care: "Dry clean only"
        }
    },
    {
        id: 3,
        name: "Gray Shirt",
        price: 299,
        image: "photo 5.jpg",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL"],
        description: "Classic gray shirt with modern fit. Versatile piece for any wardrobe.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "280 Grams",
            material: "Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 4,
        name: "Black Shirt",
        price: 499,
        image: "photo_9_50.webp",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Elegant black shirt suitable for all occasions. Premium cotton fabric.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "300 Grams",
            material: "Premium Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 5,
        name: "Black T-shirt",
        price: 199,
        image: "photo 18.jpg",
        category: "tshirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL"],
        description: "Comfortable black t-shirt for everyday wear. Soft and breathable fabric.",
        details: {
            dimensions: "28 x 10 x 2 cm",
            weight: "200 Grams",
            material: "Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 6,
        name: "Blue Shirt",
        price: 199,
        image: "photo 16.jpeg",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL"],
        description: "Light blue shirt with comfortable fit. Perfect for summer days.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "290 Grams",
            material: "Cotton Blend",
            care: "Machine washable"
        }
    },
    {
        id: 7,
        name: "Printed Shirt",
        price: 299,
        image: "photo 15.jpg",
        category: "shirt",
        rating: 4,
        sizes: ["M", "L", "XL"],
        description: "Trendy printed shirt with unique design. Stand out from the crowd.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "300 Grams",
            material: "Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 8,
        name: "White Shirt",
        price: 399,
        image: "photo 14.jpg",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Classic white shirt - a wardrobe essential. Premium quality fabric.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "310 Grams",
            material: "Premium Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 9,
        name: "Gold Titan Watch",
        price: 899,
        image: "photo 22.jpeg",
        category: "watch",
        rating: 4,
        sizes: ["One Size"],
        description: "Elegant gold Titan watch. Perfect accessory for formal occasions.",
        details: {
            dimensions: "5 x 5 x 1 cm",
            weight: "150 Grams",
            material: "Stainless Steel",
            care: "Water resistant"
        }
    },
    {
        id: 10,
        name: "Blue Shoes",
        price: 1999,
        image: "photo 19.webp",
        category: "shoes",
        rating: 4,
        sizes: ["7", "8", "9", "10", "11"],
        description: "Comfortable blue shoes for sports and casual wear. Excellent grip and support.",
        details: {
            dimensions: "30 x 15 x 10 cm",
            weight: "600 Grams",
            material: "Synthetic",
            care: "Wipe clean"
        }
    },
    {
        id: 11,
        name: "Yellow Shoes",
        price: 1999,
        image: "photo20.jpeg",
        category: "shoes",
        rating: 4,
        sizes: ["7", "8", "9", "10", "11"],
        description: "Vibrant yellow shoes to add color to your outfit. Comfortable and stylish.",
        details: {
            dimensions: "30 x 15 x 10 cm",
            weight: "580 Grams",
            material: "Synthetic",
            care: "Wipe clean"
        }
    },
    {
        id: 12,
        name: "Dark Blue T-Shirt",
        price: 200,
        image: "photo 21.jpeg",
        category: "tshirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL"],
        description: "Dark blue t-shirt with comfortable fit. Perfect for casual outings.",
        details: {
            dimensions: "28 x 10 x 2 cm",
            weight: "210 Grams",
            material: "Cotton",
            care: "Machine washable"
        }
    },
    {
        id: 13,
        name: "Design Shirt",
        price: 499,
        image: "photo 31.jpg",
        category: "shirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Designer shirt with unique pattern. Premium quality fabric and stitching.",
        details: {
            dimensions: "30 x 10 x 3 cm",
            weight: "300 Grams",
            material: "Premium Cotton Blend",
            care: "Machine washable"
        },
        images: ["photo 31.jpg", "photo 32.jpg", "photo 33.jpg", "photo 34.jpg"]
    },
    {
        id: 14,
        name: "Blue Printed T-Shirt",
        price: 299,
        image: "photo 35.jpg",
        category: "tshirt",
        rating: 4,
        sizes: ["S", "M", "L", "XL"],
        description: "Blue printed t-shirt with trendy design. Comfortable cotton fabric.",
        details: {
            dimensions: "28 x 10 x 2 cm",
            weight: "220 Grams",
            material: "Cotton",
            care: "Machine washable"
        }
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format price in Indian Rupees
function formatPrice(price) {
    return `₹ ${price.toLocaleString('en-IN')}`;
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fa fa-star"></i>';
        } else {
            stars += '<i class="fa fa-star-o"></i>';
        }
    }
    return stars;
}

// ============================================
// CART MANAGEMENT
// ============================================

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('y2k_cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('y2k_cart', JSON.stringify(cart));
    updateCartBadge();
}

// Add item to cart
function addToCart(productId, size = null, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    const cart = getCart();

    // Check if item already exists in cart with same size
    const existingItemIndex = cart.findIndex(item =>
        item.id === productId && item.size === size
    );

    if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }

    saveCart(cart);
    showNotification(`${product.name} added to cart!`);
    return true;
}

// Remove item from cart
function removeFromCart(productId, size = null) {
    let cart = getCart();
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart(cart);
}

// Update cart item quantity
function updateCartQuantity(productId, size, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId && item.size === size);

    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
}

// Get cart total
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Clear cart
function clearCart() {
    localStorage.removeItem('y2k_cart');
    updateCartBadge();
}

// ============================================
// WISHLIST MANAGEMENT
// ============================================

// Get wishlist from localStorage
function getWishlist() {
    const wishlist = localStorage.getItem('y2k_wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist to localStorage
function saveWishlist(wishlist) {
    localStorage.setItem('y2k_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
}

// Add item to wishlist
function addToWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return false;

    const wishlist = getWishlist();

    // Check if already in wishlist
    if (wishlist.find(item => item.id === productId)) {
        showNotification(`${product.name} is already in wishlist!`, 'info');
        return false;
    }

    wishlist.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image
    });

    saveWishlist(wishlist);
    showNotification(`${product.name} added to wishlist!`);
    return true;
}

// Remove item from wishlist
function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist(wishlist);
}

// Check if item is in wishlist
function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
}

// Move item from wishlist to cart
function moveToCart(productId) {
    const product = getProductById(productId);
    if (!product) return false;

    addToCart(productId);
    removeFromWishlist(productId);
    showNotification(`${product.name} moved to cart!`);
    return true;
}

// ============================================
// UI UPDATES
// ============================================

// Update cart badge
function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCartCount();
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Update wishlist badge
function updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-badge');
    const count = getWishlist().length;
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize badges on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartBadge();
    updateWishlistBadge();
});
