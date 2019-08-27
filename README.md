# numgenui

## Dev workflow in a nutshell

- Run emulator `~/usr/Android/SDK/emulator/emulator -avd test1 -verbose`
- Deploy `yarn start`
- Package to APK `cd android && ./gradlew assembleRelease`
- Test APK `adb install ./app/build/outputs/apk/release/app-release.apk`

## Commands in emulator / debugged app

- Reload app - double press **R**
