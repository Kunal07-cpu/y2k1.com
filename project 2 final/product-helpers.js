// Helper functions for product interactions on listing pages

// Toggle wishlist with visual feedback
function toggleWishlist(productId, button) {
    const isInWishlist = window.isInWishlist(productId);

    if (isInWishlist) {
        window.removeFromWishlist(productId);
        button.classList.remove('active');
        button.innerHTML = '<i class="fa fa-heart-o"></i>';
    } else {
        window.addToWishlist(productId);
        button.classList.add('active');
        button.innerHTML = '<i class="fa fa-heart"></i>';
    }
}

// Initialize wishlist buttons on page load
document.addEventListener('DOMContentLoaded', function () {
    // Update wishlist button states
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        const productCard = button.closest('[data-product-id]');
        if (productCard) {
            const productId = parseInt(productCard.dataset.productId);
            if (window.isInWishlist(productId)) {
                button.classList.add('active');
                button.innerHTML = '<i class="fa fa-heart"></i>';
            }
        }
    });
});
