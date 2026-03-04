# 🛒 ShoppingCarts

🌐🇧🇷 [Portuguese Version of README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md)

Shopping cart application developed in React Native with TypeScript, allowing you to add, remove and manage shopping items in a simple and intuitive way.

## 🔨 Project Features

- **Product Listing**: Display of available products for purchase
- **Add to Cart**: Add items to the shopping list with one click
- **Manage Quantity**: Increase or decrease the quantity of items in the cart
- **Remove Items**: Delete products from the cart
- **Total Calculation**: Automatic calculation of the total purchase value
- **Item Counter**: Badge showing the number of items in the cart
- **Navigation**: Smooth navigation between Home and Cart screens

## ✔️ Technologies and Techniques Used

- **React Native 0.83.2**: Framework for cross-platform mobile development
- **Expo**: Platform for rapid development in React Native
- **TypeScript**: Static typing for better safety and productivity
- **React Navigation**: Navigation system between screens
- **Context API**: Global state management for the cart
- **Expo Vector Icons**: Professional icons

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── CardItem/        # Cart item
│   └── Product/         # Product from list
├── contexts/            # React contexts (CartContext)
├── pages/               # Application screens
│   ├── Home/            # Product listing
│   └── Cart/            # Shopping cart
└── routes/              # Route configuration
```

## 🛠️ Installation and Execution

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI installed globally

### Installation Steps

1. Clone or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

4. Choose the platform to run:
   - **Android**: Press `a` in terminal or run `npm run android`
   - **iOS**: Press `i` in terminal or run `npm run ios` (Mac only)
   - **Web**: Press `w` in terminal or run `npm run web`

## 📱 Application Screens

### Home
- Displays the list of available products
- Button to add items to cart
- Badge shows the number of items in cart
- Navigation button to cart

### Cart
- Shows all items added to the cart
- Allows increasing or decreasing the quantity of each item
- Displays the total price of the purchase
- Message when the cart is empty

## 💾 Data Structure

### CartItem
```typescript
type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
  total: number;
}
```

### CartContextType
```typescript
type CartContextType = {
  cart: CartItem[];
  addItemCart: (newItem: Omit<CartItem, 'amount' | 'total'>) => void;
  removeItemCart: (product: CartItem) => void;
  total: string;
}
```

## 🚀 Available Scripts

- `npm start` - Starts Expo and allows choosing the platform
- `npm run android` - Runs on Android
- `npm run ios` - Runs on iOS (Mac only)
- `npm run web` - Runs on web

## 📝 TypeScript Conversion

The project has been fully converted from JavaScript to TypeScript:
- ✅ All components typed
- ✅ Context with explicit types
- ✅ Routes with RootStackParamList
- ✅ Props with complete typing
- ✅ State with generic types

## 📄 License

This project is open source and available for educational use.

## 👨‍💻 Author

Developed as a study project in React Native and TypeScript.

