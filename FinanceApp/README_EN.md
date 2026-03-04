# 💰 FinanceApp

🌐🇧🇷 [Portuguese Version of README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md)

Personal finance control application developed in React Native with TypeScript, allowing you to manage income and expenses in a simple and efficient way.

## 🔨 Project Features

- **User Authentication**: Complete login and registration system with JWT tokens
- **Financial Dashboard**: View balance, daily income and expenses
- **Transaction Registration**: Record income and expenses with description and value
- **History**: List all transactions with deletion capability
- **Date Filter**: Interactive calendar to filter transactions by period
- **Drawer Navigation**: Side menu with navigation between screens
- **Data Persistence**: Local storage of authentication token

## ✔️ Technologies and Techniques Used

- **React Native 0.84.1**: Framework for cross-platform mobile development
- **TypeScript**: Static typing for better safety and productivity
- **React Navigation**: Navigation with Drawer and Stack Navigator
- **Styled Components**: Styling with CSS-in-JS
- **Axios**: HTTP client for API requests
- **AsyncStorage**: Local data persistence
- **Date-fns**: Date manipulation and formatting
- **React Native Calendars**: Calendar component
- **Vector Icons**: Feather and MaterialIcons icons
- **Context API**: Global state management
- **Jest**: Unit testing framework

## 📁 Project Structure

```
src/
├── assets/          # Images and static resources
├── components/      # Reusable components
│   ├── BalanceItem/
│   ├── CalendarModal/
│   ├── CustomDrawer/
│   ├── Header/
│   ├── HistoricoList/
│   └── RegisterTypes/
├── contexts/        # React contexts (AuthContext)
├── pages/           # Application screens
│   ├── Home/
│   ├── New/
│   ├── Profile/
│   ├── SignIn/
│   └── SignUp/
├── routes/          # Route configuration
└── services/        # Services (API)
```

## 🛠️ Installation and Execution

### Prerequisites

- Node.js >= 22.11.0
- npm or yarn
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- Backend application running (see Backend section)

### Installation Steps

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure the backend IP in `src/services/api.ts`:
```typescript
baseURL: 'http://YOUR_IP:3333'
```

4. Run the application:

**Android:**
```bash
npm run android
```

**iOS:**
```bash
cd ios && pod install && cd ..
npm run ios
```

## 🌐 Backend

The project uses a Node.js backend with Prisma and SQLite.

**Backend Repository:**  
https://github.com/devfraga/backend-financas

### Running the Backend

1. Navigate to the `backend-financas` folder
2. Install dependencies: `npm install`
3. Run migrations: `npx prisma migrate dev`
4. Start the server: `npm run dev`

The backend will be available at `http://localhost:3333`

## 🗄️ Database

To view and manage the SQLite database, **Beekeeper Studio** is recommended:

**Download:**  
https://github.com/beekeeper-studio/beekeeper-studio/releases

## 🎨 Design

The application design is available on Figma:

**Project Figma:**  
https://www.figma.com/design/O7hp0vwYIswS6xfKC51TFj/App-Finan%C3%A7as?node-id=0-1&p=f

## 📱 Application Screens

- **Login**: User authentication
- **Sign Up**: New user registration
- **Home**: Dashboard with balance and transactions
- **Register**: New income/expense registration
- **Profile**: User information and logout option

## 🧪 Testing

Run unit tests:

```bash
npm test
```

Run linter:

```bash
npm run lint
```

## 📄 License

This project is open source and available for educational use.

## 👨‍💻 Author

Developed as a study project in React Native and TypeScript.

