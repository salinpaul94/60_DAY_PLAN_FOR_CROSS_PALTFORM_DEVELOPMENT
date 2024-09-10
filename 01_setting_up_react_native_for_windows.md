USE THIS LINK FOR SETTING UP DEVELOPMENT ENVIRONMENT FOR WINDOWS https://www.youtube.com/watch?v=F7xdbsjFGtU&list=PLA_u3gtc5zsyEgLaTLY7clKiM2IRU4ndI
# NODE JS
- URL
  - https://nodejs.org/en
  - Download and install node js
  - Default installation path `C:\Program Files\nodejs\`
  - To check if node is installed and the node version use the following command
    - node -v

# JDK 1.8
- URL
  - https://www.oracle.com/in/java/technologies/javase/javase8-archive-downloads.html
  - ![alt text](image.png)
  - open properties by right clicking my computer
  - click on advanced settings![alt text](image-1.png)
  - click on environment variables ![alt text](image-2.png)
  - select path and click edit ![alt text](image-3.png)
  - click new and add java program files bin path `C:\Program Files\Java\jdk1.8.0_201\bin` ![alt text](image-4.png)
  - open cmd and type `java -version` if every thing is setup properly then the version will be printed in cmd ![alt text](image-5.png)

# Android studio
- URL
  - https://developer.android.com/studio
  - SET PATH OF ANDRIOD SDK
    - C:\Users\user\AppData\Local\Android\Sdk
    - add the above path to system path as above
- After setting up all the paths use the following code to launch emulator from cmd
  -  `emulator -avd myavd`

# REACT NATIVE CLI
- Installing react native cli and set the path
  - open cmd as adminstrator and run the following command
    - `npm config set strict-ssl false`
    - `npm cache clean --force`
    - `npm install -g react-native-cli`

# YARN Packages Manager
  - Open cmd as administrator and run the following command
    - `nmp install -g yarn`
    - `yarn config set strict-ssl false`

# Setting up new react native app
  - `npx create-expo-app@latest`
  - `set NODE_TLS_REJECT_UNAUTHORIZED=0`
  - `npm run android`
  - `npm run ios` # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
  - `npm run web`
  - `npm start` then press `a`