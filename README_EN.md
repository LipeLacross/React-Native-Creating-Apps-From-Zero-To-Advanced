## React Native - Complete Guide from Beginner to Advanced

This guide is based on Professor Matheus Fraga's React Native course, focused on building native Android and iOS apps using JavaScript, React Native, and Flexbox. The goal is to build high-performance mobile apps with a native look and publish them to app stores.

---

## Initial Environment Setup

### Prerequisites

Before starting, install:

- **Node.js** (LTS version)
- **JDK 17** (Java Development Kit)
- **Android Studio** with SDK configured
- **Chocolatey** (Windows package manager - optional)

### Windows Installation (with Chocolatey)

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

**Important:** After installing JDK, verify the path is configured correctly:

```
C:\Program Files\microsoft\ (openjdk17 folder)
```

### Android SDK Setup

The `ANDROID_HOME` environment variable should point to:

```
C:\Users\YOUR_USER\AppData\Local\Android\Sdk
```

### Useful Setup Links

- [Linux environment](https://sujeitoprogramador.com/ambiente-linux/)
- [React Native on macOS](https://sujeitoprogramador.com/react-native-macos/)
- [Official React Native docs](https://reactnative.dev/docs/environment-setup)
- [Expo docs](https://docs.expo.dev/)

---

## Creating and Running Projects

### React Native CLI (Pure Project)

From version 0.71 onward, React Native creates projects with TypeScript already configured.

```bash
# Create a new project
npx @react-native-community/cli@latest init MyApp

# Run on Android (with emulator open)
npx react-native run-android

# Run with detailed logs
npx react-native run-android --verbose > build-log.txt

# Run on iOS (macOS only)
npx react-native run-ios
```

### Expo (Fast development alternative)

```bash
# Create a new project
npx create-expo-app MyApp

# List available templates
npx create-expo-app MyApp -t

# Start the project
npx expo start

# Start and clear cache
npx expo start -c

# Generate native folders (for projects that need native code)
npx expo prebuild
npx expo run:android
```

### Difference between `npm run android` and `npm run start`

| Command | What it does | When to use |
|---------|--------------|-------------|
| **`npm run android`** | Compiles, installs, and opens the app | When you want to test the app immediately |
| **`npm run start`** | Starts Metro Bundler (JS server) | During development (keep it running) |

---

## Dependency Management

### npm commands to resolve conflicts

| Command | What it does | When to use |
|---------|--------------|-------------|
| `npm install` | Installs dependencies respecting peerDependencies | Recommended default |
| `npm install --legacy-peer-deps` | Ignores peer dependency conflicts | For quick installs with conflicts |
| `npm install --force` | Forces install and ignores conflicts | Last resort |
| `npm update` | Updates packages within allowed ranges | Keep dependencies up to date |

### Project Diagnostics

```bash
# Check Expo project issues
npx expo doctor

# Auto-fix dependencies
npx expo install --fix

# Check React Native CLI project issues
npx react-native doctor
npx react-native doctor --fix
```

---

## Gradle Commands (Android Build)

### Main commands

```bash
# Go to android folder
cd android

# Clean previous builds (most common)
./gradlew clean

# Clean everything (builds, caches, temporary files)
./gradlew cleanBuildCache

# Compile only (faster for checking errors)
./gradlew assembleDebug

# Compile and install (does not open app)
./gradlew installDebug

# Compile release
./gradlew assembleRelease

# Build bundle for Play Store
./gradlew bundleRelease
```

### Gradle optimization

| Command | Uses daemon? | Process keeps running? | Next build |
|---------|---------------|-------------------------|------------|
| `./gradlew assembleDebug` | Yes | Yes (kept in memory) | Faster |
| `./gradlew assembleDebug --no-daemon` | No | No | Slower |

### Cache cleanup

| Path | What it is | Can delete? |
|------|------------|-------------|
| `C:\Users\YOUR_USER\.gradle` | Global Gradle cache | Yes (auto-recreated) |
| `C:\Users\YOUR_USER\.android\cache` | Android cache | Yes |

---

## Important Project Files

### Configuration structure

| File | Frequency | Common cases |
|------|:---------:|--------------|
| **`android/app/build.gradle`** | High | Versions, dependencies, signing setup |
| **`android/gradle.properties`** | Medium | Performance, feature flags |
| **`android/build.gradle`** | Low | SDK updates, Kotlin version |
| **`android/settings.gradle`** | Rare | Module linking issues |

---

## Icons and Navigation

### React Native Vector Icons

- [GitHub repository](https://github.com/oblador/react-native-vector-icons)
- [Icon library](https://oblador.github.io/react-native-vector-icons/)

### React Navigation

- [Official docs](https://reactnavigation.org/docs/getting-started/)

---

## Emulator Tips

### Choosing a lightweight device profile

For a faster emulator, choose a profile with:
- **Lower resolution** (e.g. 720x1280)
- **Lower pixel density (dpi)**
- **Small Phone** profile (recommended)

---

## Publishing to Google Play Store

### 1) Generate the Keystore (Upload key)

**Windows (run as administrator):**
```bash
cd "C:\Program Files\Java\jdk-17.x.x_x\bin"
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

**macOS:**
```bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

**You will be asked for:**
- Keystore password
- Key password
- Name, organizational unit, city, state, and country

**Result:** `my-upload-key.keystore` file generated.

---

### 2) Configure Keystore in the Project

**Step 1:** Move the file to the correct folder

```
my-upload-key.keystore -> android/app/
```

**Step 2:** Edit `android/gradle.properties` (add at the end)

```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=yourpassword
MYAPP_UPLOAD_KEY_PASSWORD=yourpassword
```

**Step 3:** Edit `android/app/build.gradle` (inside `android { ... }`)

```gradle
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```

---

### 3) Generate AAB (Android App Bundle)

```bash
npx react-native build-android --mode=release
```

**Generated file:**

```
android/app/build/outputs/bundle/release/app-release.aab
```

---

### 4) Test before publishing

```bash
npm run android -- --mode="release"
```

---

### 5) Publish to Play Store

1. Go to [Google Play Console](https://play.google.com/console/)
2. Create a new app
3. Upload the `.aab` file
4. Complete store listing details
5. Submit for review

---

### Important warnings

- Keep your keystore in a safe place (do not lose it)
- Passwords cannot be recovered
- For future updates, use the **same keystore**

---

## Workflow Summary

| Step | Description | Command |
|------|-------------|---------|
| 1 | Configure environment | Node.js, JDK 17, Android Studio |
| 2 | Create project | `npx react-native init MyApp` |
| 3 | Open emulator | Android Studio |
| 4 | Run app | `npm run android` |
| 5 | Develop | `npm start` (keep it running) |
| 6 | Generate keystore | `keytool -genkeypair ...` |
| 7 | Configure signing | `gradle.properties` + `build.gradle` |
| 8 | Build debug APK | `./gradlew assembleDebug` |
| 9 | Build Play Store bundle | `./gradlew bundleRelease` |
| 10 | Publish | Google Play Console |

---

## Common Troubleshooting

### Issue: Emulator not detected
**Fix:** Check `ANDROID_HOME` and make sure emulator is running before `run-android`.

### Issue: Java version error
**Fix:** Ensure JDK 17 is installed and configured in PATH.

### Issue: Slow build
**Fix:** Keep Gradle daemon running (`./gradlew assembleDebug` without `--no-daemon`) and avoid unnecessary cache cleanup.

---

## Additional Resources

- [Official React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Google Play Console](https://play.google.com/console/)

