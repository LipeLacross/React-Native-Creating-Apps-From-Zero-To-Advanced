# ⛽ Fuel Calculator

## 🌐 Languages
- **🇧🇷 [Portuguese Version](README.md)**
- **🇺🇸 [English Version](README_EN.md)** ← You are here

## 📋 About the Project

**Fuel Calculator** is a mobile application developed in **React Native** that helps drivers discover which fuel is more economical: ethanol or gasoline. The calculation is based on the price ratio per liter between the two fuels.

### 🎯 What Does the App Do?

The application compares the prices of ethanol and gasoline to determine which offers the best cost-benefit. The rule is simple: if the ethanol price is **up to 70% of the gasoline price**, it's worth using ethanol.

---

## 🔨 Features

✅ **Automatic Calculation** - Compares ethanol vs gasoline prices  
✅ **Input Validation** - Validates numeric values entered  
✅ **Intuitive Interface** - Clean and responsive design  
✅ **Smooth Navigation** - Transitions between screens with React Navigation  
✅ **Android & iOS Support** - Works on both platforms  
✅ **Value Formatting** - Displays prices in Brazilian format (R$)  

---

## 🏗️ Architecture

```
FuelCalculator/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx      # Data entry screen
│   │   └── ResultScreen.tsx    # Result screen
│   ├── navigation/
│   │   └── types.ts            # Navigation types
├── assets/
│   ├── logo.png                # Application logo
│   └── gas.png                 # Gasoline icon
├── App.tsx                     # Root component
└── package.json                # Project dependencies
```

---

## 📱 Screens

### 🏠 HomeScreen
- Field to enter **ethanol price per liter**
- Field to enter **gasoline price per liter**
- "Calculate" button to process data
- Input validation with visual feedback

### 📊 ResultScreen
- Displays which fuel is more economical
- Shows entered values formatted
- Button to recalculate with new values

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.11.0
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

```bash
# Navigate to the project directory
cd FuelCalculator

# Install dependencies
npm install

# For iOS, install native dependencies
bundle install
bundle exec pod install
```

### Run on Android
```bash
npm run android
```

### Run on iOS
```bash
npm run ios
```

### Development Mode
```bash
npm start
```

---

## 📦 Main Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `react` | 19.2.3 | React library |
| `react-native` | 0.84.0 | Mobile framework |
| `@react-navigation/native` | ^7.1.28 | Basic navigation |
| `@react-navigation/native-stack` | ^7.13.0 | Stack Navigator |
| `typescript` | ^5.8.3 | Static typing |

---

## 🛠️ Available Scripts

```bash
npm start                # Starts Metro (dev server)
npm run android          # Compiles and runs on Android
npm run ios              # Compiles and runs on iOS
npm run lint             # Checks for code issues
npm test                 # Runs Jest tests
```

---

## 💡 Calculation Logic

The application uses the following business rule:

```
If (Ethanol Price / Gasoline Price) ≤ 0.70
  → Worth using Ethanol
Otherwise
  → Worth using Gasoline
```

**Example:**
- Ethanol: R$ 4.00
- Gasoline: R$ 6.00
- Ratio: 4.00 / 6.00 = 0.667 ✅ (≤ 0.70)
- **Result:** Worth using Ethanol

---

## 🎨 Design

- **Theme:** Dark Mode (dark background #101010)
- **Main Colors:** Green (#18d86b) for success, Red (#ff3b30) for actions
- **Typography:** FontWeight 800 for titles, 700 for content
- **Layout:** Centered with responsive spacing

---

## ✅ Testing

The project includes Jest unit tests. Run with:

```bash
npm test
```

---

## 📄 License

This project is under the license specified in the `LICENSE` file.

---

## 👨‍💻 Development

Developed as a learning project in **React Native** with **TypeScript**, demonstrating best practices in componentization and navigation.

**Version:** 0.0.1  
**Last updated:** 2026-03-03

