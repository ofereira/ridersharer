#####Run on Android:
1. Clone this repo using `git clone https://github.com/ofereira/ridersharer.git`
2. Move to the appropriate directory: `cd ridersharer`
3. Run `npm install` in order to install dependencies.
7. Start JS Server `react-native start`
8. Run Project `react-native run-android`
*Simulator should be already open or a device with developer permissions connected to the computer*

#####Run on iOS:
1. Clone this repo using `git clone https://github.com/ofereira/ridersharer.git`
2. Move to the appropriate directory: `cd ridersharer`
3. Run `npm install` in order to install dependencies.
4. Move to the ios folder: `cd ios`
5. Install pods: `pod install`
*At this point you can open th xcworkspace file with xcode*
*Error: main.jsbundle not found *
    1. run in root folder: `react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`
6. Return to the root folder: `cd ..`
7. Start JS Server `react-native start`
8. Run Project `react-native run-ios`
*Default simulator is iPhone X*
9. To run in specific simulator e.g iPhone 6: `react-native run-ios --simulator "iPhone 6"`

# Generate debug APK

1. If the folder `android/app/src/main/assets` does not exist, create it with `mkdir android/app/src/main/assets/`
2. Run in root directory `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`
	*This will update your code into the APK, if ./gradlew assembleDebug is run before this command, app may not be updated*
3. Run `cd android && ./gradlew clean && ./gradlew assembleDebug`
	*This will clean your project build folder and create a new one with the new APK, default output `android/app/build/outputs/apk/debug`*

# Generate release APK

1. Run `cd android && ./gradlew clean && ./gradlew assembleRelease`
	*This will clean your project build folder and create a new one with the new APK, default output `android/app/build/outputs/apk/release`*

# Troubleshooting

- On build failed, with `You have not accepted the license agreements of the following SDK components` error,
  accept all licenses:

```
$ $ANDROID_HOME/tools/bin/sdkmanager.bat --licenses
```