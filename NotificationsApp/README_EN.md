# 🔔 NotificationsApp

🌐🇧🇷 [Portuguese Version of README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md) ← You are here

Notifications demonstration application developed in **Expo** with **React Native** and **TypeScript**, using the **Notifee** library to manage real-time and scheduled notifications.

## 🔨 Project Features

✅ **Real-Time Notifications** - Display immediate notifications  
✅ **Scheduled Notifications** - Schedule notifications for specific times  
✅ **Recurring Notifications** - Schedule notifications that repeat weekly  
✅ **Channel Management** - Create Android channels with configurable importance  
✅ **Event Handling** - Detect when user interacts with notification  
✅ **Notification Listing** - View IDs of scheduled notifications  
✅ **Notification Cancellation** - Remove specific notifications  
✅ **Permissions** - Request and validate system permissions  

## ✔️ Technologies Used

- **Expo ~55.0.4**: Platform for React Native development
- **React Native 0.83.2**: Cross-platform mobile framework
- **TypeScript ~5.9.2**: Static typing for better safety
- **Notifee ^9.1.8**: Robust library for managing notifications
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

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation Steps

1. Navigate to project folder:
```bash
cd NotificationsApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the Expo server:
```bash
npm start
```

4. Run on different platforms:

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
1. Tap the **"Enviar notificaçao"** button
2. The notification will appear immediately in the notification bar

### Schedule Notification
1. Tap the **"Agendar notificaçao"** button
2. A notification will be scheduled for 1 minute ahead
3. The notification ID will be displayed in the console

### Schedule Weekly Recurring Notification
1. Tap the **"Agendar Semanal"** button
2. A notification will be scheduled to repeat every 7 days
3. The notification ID will be displayed in the console
4. The notification will automatically appear every week at the same time

### List Scheduled Notifications
1. Tap the **"Listar notificacoes"** button
2. Active notification IDs will appear in the console

### Cancel Notification
1. Tap the **"Cancelar Notificaçao"** button
2. The notification will be removed from the system

## 🎯 Detailed Features

### Permissions
The app requests permission on startup:
- Checks if user authorized notifications
- Sets `statusNotification` to `true` if authorized
- Displays message if user denied

### Android Channels
Notifications use a channel called `"lembrete"` with:
- Vibration enabled
- Importance: HIGH (interrupts user's screen)

### Notification Events
- **Foreground**: Detects interactions while app is open
- **Background**: Detects interactions while app is minimized
- **PRESS**: Triggered when user taps the notification
- **DISMISSED**: Triggered when user dismisses the notification

## 🧪 Testing

To test notifications:

1. Put the app in background (press home)
2. Send a notification
3. Check if it appears in the notification bar
4. Tap to open and confirm the interaction

## 📝 Important Notes

⚠️ **Android Permissions**: Notifications require `android.permission.POST_NOTIFICATIONS`  
⚠️ **iOS**: Requires push certificate configuration  
⚠️ **Notifee Version**: Installed version is `9.1.8` (compatible with Expo)  

## 📄 License

This project is open source and available for educational use.

## 👨‍💻 Author

Developed as a study project in React Native with Notifee and Expo.

