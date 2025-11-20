# Y2K E-commerce Website - User Guide

## 🎉 What's New

Your static website has been transformed into a **fully functional e-commerce platform**! Here's what you can now do:

### ✨ Key Features

1. **Dynamic Shopping Cart**
   - Add any product to cart with one click
   - Update quantities directly in cart
   - Remove items easily
   - Cart persists even after page refresh (uses localStorage)
   - Real-time total calculation

2. **Wishlist System**
   - Save favorite products with heart icon
   - View all wishlisted items in one place
   - Move items from wishlist to cart
   - Wishlist badge shows item count

3. **Product Details**
   - Click any product to see full details
   - Select size before adding to cart
   - Choose quantity
   - View product specifications
   - Image gallery for products with multiple images

4. **Complete Checkout Flow**
   - Fill shipping information
   - Choose payment method (COD or Online)
   - Review order summary
   - Get order confirmation with order ID

5. **Smart Navigation**
   - Cart and wishlist badges show item counts
   - All products are clickable
   - Smooth animations and transitions

## 📁 New Files Created

- **`app.js`** - Core functionality (cart, wishlist, products database)
- **`product-helpers.js`** - Helper functions for product interactions
- **`cart.html`** - Dynamic shopping cart page
- **`wishlist.html`** - Wishlist management page
- **`product-details.html`** - Dynamic product details page
- **`checkout.html`** - Checkout form and order summary
- **`order-confirmation.html`** - Order success page

## 🔄 Modified Files

- **`products.html`** - Now dynamically renders all products with interactive buttons
- **`style.css`** - Added styles for badges, notifications, buttons, and animations
- **`index.html`** - Needs manual update (see instructions below)

## ⚠️ Manual Update Required for index.html

The `index.html` file needs to be updated to add interactive buttons to all products. Here's what to do:

### Option 1: Quick Fix (Recommended)
Add these two lines after line 11 in `index.html`:
```html
<script src="app.js"></script>
<script src="product-helpers.js"></script>
```

Then, for each product card, add the product actions div. For example, change:
```html
<div class="col-4">
    <img src="photo 7.jpg">
    <h4>Blue coat</h4>
    <div class="rating">...</div>
    <p>₹ 599</p>
</div>
```

To:
```html
<div class="col-4" data-product-id="2">
    <a href="product-details.html?id=2">
        <img src="photo 7.jpg">
        <h4>Blue coat</h4>
        <div class="rating">...</div>
        <p>₹ 599</p>
    </a>
    <div class="product-actions">
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(2);">Add to Cart</button>
        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(2, this);"><i class="fa fa-heart-o"></i></button>
    </div>
</div>
```

### Product ID Mapping:
- Photo 8.jpg (Blue Shirt) = ID 1
- Photo 7.jpg (Blue Coat) = ID 2
- Photo 5.jpg (Gray Shirt) = ID 3
- Photo_9_50.webp (Black Shirt) = ID 4
- Photo 18.jpg (Black T-shirt) = ID 5
- Photo 16.jpeg (Blue Shirt) = ID 6
- Photo 15.jpg (Printed Shirt) = ID 7
- Photo 14.jpg (White Shirt) = ID 8
- Photo 22.jpeg (Gold Titan Watch) = ID 9
- Photo 19.webp (Blue Shoes) = ID 10
- Photo20.jpeg (Yellow Shoes) = ID 11
- Photo 21.jpeg (Dark Blue T-Shirt) = ID 12

### Option 2: Use products.html as Reference
Open `products.html` to see how products are dynamically rendered and apply the same pattern to `index.html`.

## 🚀 How to Test

1. **Start the server** (already running):
   ```bash
   npx serve
   ```

2. **Open in browser**:
   - Go to `http://localhost:3000`

3. **Test the features**:
   - ✅ Click "Add to Cart" on any product
   - ✅ Click the heart icon to add to wishlist
   - ✅ Check cart badge updates
   - ✅ Go to cart page and update quantities
   - ✅ Go to wishlist and move items to cart
   - ✅ Click any product to see details
   - ✅ Complete a checkout flow
   - ✅ Refresh page and verify cart persists

## 💾 Data Persistence

All data is stored in browser's localStorage:
- `y2k_cart` - Shopping cart items
- `y2k_wishlist` - Wishlist items
- `lastOrder` - Last order details

To clear data, open browser console and run:
```javascript
localStorage.clear()
```

## 🎨 Customization

### Change Colors
Edit `style.css` and search for `#ff523b` (primary color) to change the theme color.

### Add More Products
Edit `app.js` and add products to the `products` array following the existing format.

### Modify Shipping Cost
In `checkout.html`, find this line and change the value:
```javascript
const shipping = total > 0 ? 50 : 0;
```

## 🐛 Troubleshooting

**Cart not updating?**
- Make sure `app.js` is loaded (check browser console for errors)
- Clear localStorage and try again

**Products not showing?**
- Check that all image files exist in the project folder
- Verify product IDs match in `app.js`

**Buttons not working?**
- Ensure both `app.js` and `product-helpers.js` are included in the HTML
- Check browser console for JavaScript errors

## 📱 Mobile Responsive

The entire site is mobile-responsive with:
- Collapsible navigation menu
- Touch-friendly buttons
- Optimized layouts for small screens

## 🔒 Security Note

This is a **client-side only** implementation. For production use:
- Add backend API for order processing
- Implement payment gateway integration
- Add user authentication
- Store orders in a database
- Add inventory management

## 🎯 Next Steps

1. Update `index.html` with product actions (see instructions above)
2. Test all features thoroughly
3. Customize colors and branding
4. Add more products to the database
5. Consider adding backend integration for production use

Enjoy your new e-commerce website! 🛍️
