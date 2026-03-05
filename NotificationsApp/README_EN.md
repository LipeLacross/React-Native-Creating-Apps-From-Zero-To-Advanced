# 🔔 NotificationsApp

🌐🇧🇷 [Portuguese Version of README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md) ← You are here

Notification demo app built with **Expo**, **React Native**, and **TypeScript**, using **expo-notifications** for immediate and scheduled local notifications.

## 🔨 Features

- Immediate notification
- Scheduled notification (1 minute)
- Weekly recurring notification
- Foreground notification listener
- Notification response listener (tap handling)
- Scheduled IDs listing (local state)
- Cancel last scheduled notification

## ✔️ Tech Stack

- Expo `~55.0.4`
- React Native `0.83.2`
- React `19.2.0`
- TypeScript `~5.9.2`
- expo-notifications `~55.0.10`
- expo-constants `~55.0.7`

## 📁 Structure

```text
NotificationsApp/
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
└── android/ (generated with prebuild)
```

## 🛠️ Install and Run

### Prerequisites

- Node.js 18+
- Android Studio emulator or Android device

### Run with native build (recommended)

```bash
cd NotificationsApp
npm install
npx expo prebuild --platform android
npx expo run:android
```

### Start bundler only

```bash
cd NotificationsApp
npm start
```

## 📱 How to Use

- **ENVIAR NOTIFICAÇÃO**: sends immediately (`trigger: null`)
- **AGENDAR NOTIFICAÇÃO**: schedules for 60 seconds
- **AGENDAR SEMANAL**: schedules every 7 days
- **LISTAR NOTIFICAÇÕES**: logs IDs stored in local state
- **CANCELAR NOTIFICAÇÃO**: cancels the latest ID in local state

## 🎯 Technical Notes

### Permissions

On startup, the app calls `requestPermissionsAsync` and resolves authorization using:
- `ios.status` (`AUTHORIZED` or `PROVISIONAL`)
- `android` object presence in the permission response

### Foreground handler

The app uses:
- `shouldShowBanner: true`
- `shouldShowList: true`
- `shouldPlaySound: true`
- `shouldSetBadge: true`

### Scheduling triggers (current API)

```ts
trigger: {
  type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  seconds: 60,
}
```

```ts
trigger: {
  type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  seconds: 7 * 24 * 60 * 60,
  repeats: true,
}
```

## 🧪 Quick Test

1. Open the app
2. Tap **ENVIAR NOTIFICAÇÃO**
3. Check foreground log output
4. Schedule one notification and verify ID in console
5. Cancel and confirm local list update

## 📝 Notes

- **LISTAR NOTIFICAÇÕES** reads from local state (`notificationIds`).
- After app reload, this local list resets.
- Permission prompts and visual behavior can vary by Android version.

## 📄 License

Educational use.
