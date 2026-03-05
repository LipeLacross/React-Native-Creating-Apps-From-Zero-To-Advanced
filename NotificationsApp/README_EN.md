# 🔔 NotificationsApp

🌐🇧🇷 [Portuguese Version of README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md) ← You are here

Notifications demonstration application developed in **Expo** with **React Native** and **TypeScript**, using the **expo-notifications** library to manage real-time and scheduled notifications.

## 🔨 Project Features

✅ **Real-Time Notifications** - Display immediate notifications  
✅ **Scheduled Notifications** - Schedule notifications for specific times  
✅ **Recurring Notifications** - Schedule notifications that repeat weekly  
✅ **Event Handling** - Detect when user interacts with notification  
✅ **Notification Listing** - View IDs of scheduled notifications  
✅ **Notification Cancellation** - Remove specific notifications  
✅ **Permissions** - Request and validate system permissions  

## ✔️ Technologies Used

- **Expo ~55.0.4**: Platform for React Native development
- **React Native 0.83.2**: Cross-platform mobile framework
- **TypeScript ~5.9.2**: Static typing for better safety
- **expo-notifications ~0.28.6**: Native Expo library for managing notifications
- **React 19.2.0**: UI library
- **Expo Status Bar ~55.0.4**: Customizable status bar

## 📁 Project Structure

```
NotificationsApp/
├── App.tsx                 # Main component
├── index.ts                # Entry point
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── assets/                 # Images and icons
    ├── icon.png
    ├── splash-icon.png
    ├── favicon.png
    ├── android-icon-*.png
    └── android-icon-monochrome.png
```

## 🛠️ Installation and Execution

### ⚠️ Important!

This project uses `expo-notifications` which requires **native modules**. Therefore, it **does not work** on standard Expo Go. You need a **Development Build**.

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo Account (free): https://expo.dev
- EAS CLI: `npm install -g eas-cli`
- Android Studio Emulator (or real Android device)

### Quick Installation Steps

1. **Login to Expo:**
```bash
eas login
```

2. **Install Dependencies:**
```bash
cd NotificationsApp
npm install
```

3. **Create Development Build:**
```bash
eas build --platform android --profile preview3
```

4. **Install and Test:**
```bash
npm start
```

Scan the QR code with the app that was installed.

### Alternative: Test Locally
```bash
npx expo start --dev-client
```
(Requires Android Studio Emulator)

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

## 📱 How to Use the Application

### Send Notification
1. Tap the **"ENVIAR NOTIFICAÇÃO"** button
2. The notification will appear immediately in the notification bar

### Schedule Notification
1. Tap the **"AGENDAR NOTIFICAÇÃO"** button
2. A notification will be scheduled for 1 minute ahead
3. The notification ID will be displayed in the console

### Schedule Weekly Recurring Notification
1. Tap the **"AGENDAR SEMANAL"** button
2. A notification will be scheduled to repeat every 7 days
3. The notification ID will be displayed in the console
4. The notification will automatically appear every week at the same time

### List Scheduled Notifications
1. Tap the **"LISTAR NOTIFICAÇÕES"** button
2. Active notification IDs will appear in the console

### Cancel Notification
1. Tap the **"CANCELAR NOTIFICAÇÃO"** button
2. The last scheduled notification will be removed from the system

## 🎯 Detailed Features

### Permissions
The app requests permission on startup:
- Checks if user authorized notifications
- Sets `statusNotification` to `true` if authorized
- Displays message if user denied

### Foreground Notifications
When the app is open and receives a notification, it's automatically displayed with sound and vibration.

### Background Notifications
The app detects when the user taps a notification while the app is minimized.

### Scheduling
- **Immediate**: `trigger: null`
- **Specific**: `trigger: { seconds: 60 }` (1 minute)
- **Recurring**: `trigger: { seconds: 604800, repeats: true }` (7 days)

## 🧪 Testing

To test notifications:

1. Put the app in background (press home)
2. Send a notification
3. Check if it appears in the notification bar
4. Tap to open and confirm the interaction

## 📝 Important Notes

⚠️ **Android Permissions**: Notifications require `android.permission.POST_NOTIFICATIONS`  
⚠️ **iOS**: Requires push certificate configuration  
⚠️ **Expo Go**: Uses expo-notifications which is fully compatible  
⚠️ **Recurrence**: Expo supports recurrence with the `repeats: true` parameter

## 📄 License

This project is open source and available for educational use.

## 👨‍💻 Author

Developed as a study project in React Native with Notifee and Expo.

