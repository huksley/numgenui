# numgenui

## Dev workflow in a nutshell

- Run emulator `~/usr/Android/SDK/emulator/emulator -avd test1 -verbose`
- Execute in one terminal `yarn start`
- Execute in another terminal `react-native run-android`

## Making a release

- Generate new keystore `keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
- Package to APK `(cd android && ./gradlew assembleRelease)`
- Test APK `adb install ./app/build/outputs/apk/release/app-release.apk`

## Commands in emulator / debugged app

- Reload app - double press **R**
