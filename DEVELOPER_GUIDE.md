# 🔍 ShopV - Developer Quick Reference

## 📂 Project Structure Overview

```
shop-v/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css               # Global styles
│   │   ├── layout.jsx                # Root layout
│   │   ├── page.jsx                  # Home page
│   │   ├── cart/
│   │   │   └── page.jsx              # Shopping cart
│   │   ├── checkout/
│   │   │   └── page.jsx              # Checkout form
│   │   ├── product/
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Product details (dynamic)
│   │   ├── products/
│   │   │   └── page.jsx              # Products listing
│   │   ├── add-product/
│   │   │   └── page.jsx              # Product management
│   │   ├── wishlist/
│   │   │   └── page.jsx              # Wishlist
│   │   └── order-success/
│   │       └── page.jsx              # Order confirmation
│   │
│   ├── components/                   # React components
│   │   ├── home/                     # Home page sections
│   │   │   ├── BrandSection.jsx
│   │   │   ├── CategorySection.jsx
│   │   │   ├── DealsSection.jsx
│   │   │   └── FeaturedProducts.jsx
│   │   │
│   │   ├── layout/                   # Layout components
│   │   │   ├── Navbar.jsx            # Navigation bar
│   │   │   ├── Footer.jsx            # Footer
│   │   │   ├── HeroSlider.jsx        # Banner carousel
│   │   │   ├── ProductCard.jsx       # Product card
│   │   │   └── ProductGrid.jsx       # Products grid with filters
│   │   │
│   │   └── product/                  # Product components
│   │       ├── AddToCartButton.jsx
│   │       ├── WishlistButton.jsx
│   │       ├── FilterSidebar.jsx
│   │       └── SortDropdown.jsx
│   │
│   ├── redux/                        # Redux state management
│   │   ├── Provider.jsx              # Redux provider wrapper
│   │   ├── store.jsx                 # Redux store configuration
│   │   └── slices/                   # Redux slices
│   │       ├── cartSlice.jsx
│   │       ├── productSlice.jsx
│   │       ├── wishlistSlice.jsx
│   │       ├── orderSlice.jsx
│   │       └── searchSlice.jsx
│   │
│   └── utils/
│       └── imageUtils.js             # Image path utilities
│
├── public/
│   └── images/                       # Asset images
│       ├── banner*.jpg
│       ├── product*.jpg
│       ├── categories/
│       ├── brands/
│       └── deals/
│
├── package.json                      # Dependencies
├── next.config.mjs                   # Next.js config
├── tailwind.config.mjs               # Tailwind config
├── eslint.config.mjs                 # ESLint config
├── jsconfig.json                     # JS config
├── postcss.config.mjs                # PostCSS config
│
├── IMPROVEMENTS.md                   # What was improved
├── USER_GUIDE.md                     # User guide
└── COMPLETION_REPORT.md              # This project completion report

```

---

## 🎯 Key Files Explained

### **Pages (src/app/)**

| File | Purpose | Key Components |
|------|---------|-----------------|
| `page.jsx` | Home page | Hero slider, categories, brands, deals, featured products |
| `products/page.jsx` | Products listing | Filter sidebar, sort dropdown, product grid |
| `product/[id]/page.jsx` | Product details | Image, price, rating, quantity selector, add to cart |
| `cart/page.jsx` | Shopping cart | Cart items, quantity controls, checkout button |
| `checkout/page.jsx` | Order form | Customer details, payment method selection |
| `wishlist/page.jsx` | Saved products | Wishlist items display |
| `add-product/page.jsx` | Seller panel | Add/edit/delete products |
| `order-success/page.jsx` | Confirmation | Order ID, success message |

### **Components (src/components/)**

#### Home Components
- **BrandSection.jsx**: Shows top brands in grid
- **CategorySection.jsx**: Displays 8 product categories
- **DealsSection.jsx**: Shows 4 special deals
- **FeaturedProducts.jsx**: Featured items carousel

#### Layout Components
- **Navbar.jsx**: Header with search, cart, wishlist, add product links
- **Footer.jsx**: Footer with company info and social links
- **HeroSlider.jsx**: Auto-rotating banner with navigation buttons
- **ProductCard.jsx**: Individual product card with image and price
- **ProductGrid.jsx**: Grid of products with filtering and sorting applied

#### Product Components
- **AddToCartButton.jsx**: Add to cart with quantity parameter
- **WishlistButton.jsx**: Toggle wishlist heart icon
- **FilterSidebar.jsx**: Category, brand, price, rating filters
- **SortDropdown.jsx**: Sort options dropdown

### **Redux Slices (src/redux/slices/)**

#### cartSlice
```javascript
// State: { items: [] }
// Actions:
// - addToCart(product, quantity)
// - increaseQuantity(id)
// - decreaseQuantity(id)
// - removeFromCart(id)
// - clearCart()
```

#### productSlice
```javascript
// State: { items: [], sort, category, brands, rating, maxPrice }
// Actions:
// - addProduct(product)
// - deleteProduct(id)
// - updateProduct(product)
// - setSort(sortType)
// - setCategory(categories)
// - setBrand(brands)
// - setRating(rating)
// - setMaxPrice(price)
// - clearFilters()
```

#### wishlistSlice
```javascript
// State: { items: [] }
// Actions:
// - toggleWishlist(product)
```

#### orderSlice
```javascript
// State: { items: [] }
// Actions:
// - placeOrder(order)
```

#### searchSlice
```javascript
// State: { value: "" }
// Actions:
// - setSearch(term)
```

---

## 🔄 Data Flow Example: Adding Product to Cart

```
User Action (Add to Cart)
         ↓
AddToCartButton.jsx (dispatch addToCart)
         ↓
Redux cartSlice (add/update item)
         ↓
Redux Store (update cart.items)
         ↓
CartPage reads state (useSelector)
         ↓
UI updates with new cart item
         ↓
Redux Persist saves to localStorage
```

---

## 🎨 Styling System

### Tailwind CSS Classes Used
- **Colors**: `pink-600` (primary), `gray-*` (secondary), `green-600` (success)
- **Spacing**: `p-*`, `m-*`, `gap-*` for padding, margins, gaps
- **Responsive**: `sm:`, `md:`, `lg:` prefixes for breakpoints
- **Hover Effects**: `hover:shadow-xl`, `hover:bg-pink-700`, etc.
- **Transitions**: `transition`, `duration-*` classes

### Color Scheme
- **Primary**: Pink (`#ec4899`)
- **Secondary**: Gray (`#6B7280`)
- **Success**: Green (`#16A34A`)
- **Danger**: Red (`#DC2626`)

---

## 🚀 Common Tasks

### Add a New Product

1. Edit `src/redux/slices/productSlice.jsx`
2. Add to `initialState.items` array:
```javascript
{
  id: 13,
  title: "New Product",
  brand: "Brand Name",
  category: "Men", // or other category
  price: 1000,
  originalPrice: 1500,
  discount: "33% OFF",
  rating: 4.5,
  image: "/images/product*.jpg", // Use existing or add new
}
```

### Add a New Category Filter

1. Edit `src/components/product/FilterSidebar.jsx`
2. Add to `categories` array:
```javascript
const categories = [
  // ... existing categories
  "NewCategory",
];
```

### Add a New Brand

1. Edit `src/components/product/FilterSidebar.jsx`
2. Add to `brands` array:
```javascript
const brands = [
  // ... existing brands
  "NewBrand",
];
```

### Create a New Page

1. Create folder in `src/app/` (e.g., `about/`)
2. Create `page.jsx` in the folder
3. Add route automatically available at `/about`

### Modify Colors

Replace all instances of:
- `pink-600` → Your primary color
- `gray-*` → Your secondary color
- etc.

---

## 🔗 Routing

### URL Routes
```
/                          → Home page
/products                  → All products with filters
/product/1                 → Product details (ID 1)
/cart                      → Shopping cart
/checkout                  → Checkout page
/wishlist                  → Wishlist page
/add-product               → Add/manage products
/order-success             → Order confirmation
```

### Dynamic Routes
- `/product/[id]` → Uses URL parameter to load product

---

## 📦 Key Dependencies

```json
{
  "next": "16.2.12",           // React framework
  "react": "19.2.4",           // UI library
  "@reduxjs/toolkit": "2.12.0", // State management
  "react-redux": "9.3.0",      // Redux bindings
  "redux-persist": "6.0.0",    // State persistence
  "tailwindcss": "4.0",        // Styling
  "lucide-react": "1.27.0",    // Icons
  "react-icons": "5.7.0",      // More icons
  "razorpay": "2.9.8"          // Payment (not integrated)
}
```

---

## 🎯 Component Props Guide

### ProductCard
```javascript
<ProductCard 
  product={{
    id, title, brand, category, price, 
    originalPrice, discount, rating, image
  }}
/>
```

### AddToCartButton
```javascript
<AddToCartButton 
  product={product}
  quantity={1}  // Default: 1
/>
```

### WishlistButton
```javascript
<WishlistButton 
  product={product}
/>
```

---

## 🐛 Debug Tips

### Check Redux State
```javascript
// In component
const state = useSelector(state => state);
console.log("Full state:", state);
```

### Check Cart Items
```javascript
const items = useSelector(state => state.cart.items);
console.log("Cart items:", items);
```

### Clear All Storage
```javascript
localStorage.clear();
sessionStorage.clear();
location.reload();
```

### Check Build
```bash
npm run build
npm start
```

---

## 📊 State Structure

```javascript
{
  cart: {
    items: [
      {
        id, title, brand, price, originalPrice,
        discount, rating, image, quantity
      }
    ]
  },
  products: {
    items: [...],
    sort: "default",
    category: [],
    brands: [],
    rating: 0,
    maxPrice: 5000
  },
  wishlist: {
    items: [...]
  },
  orders: {
    items: [...]
  },
  search: {
    value: ""
  }
}
```

---

## ✅ Testing Checklist for Developers

- [ ] All pages load without errors
- [ ] Add to cart works with quantity
- [ ] Filters apply correctly
- [ ] Search finds products
- [ ] Wishlist toggles work
- [ ] Checkout form validates
- [ ] Data persists after refresh
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Build completes successfully

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks](https://react.dev/reference/react/hooks)

---

**Happy coding! 🚀**
