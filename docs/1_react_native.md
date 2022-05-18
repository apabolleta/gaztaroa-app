# React Native. First steps

This project is a sample project created with [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [React Native](https://reactnative.dev/) for native development ([Android](https://www.android.com/) and [iOS](https://www.apple.com/ios/ios-15/)). Additional tools used during the development process are next:

- [Git](https://git-scm.com/) (VCS)
- [Trello](https://trello.com/) (Project management tool)
- [NodeJS](https://nodejs.org/en/) (JavaScript runtime for server-side development)
- [NPM](https://www.npmjs.com/) (Package manager for the NodeJS platform)
- [Yarn](https://yarnpkg.com/) (Package manager)
- [Expo](https://expo.dev/) (Platform for making universal native apps for Android, iOS and and the web with JS and React)

**Native App Development** term refers to building a mobile app exclusively for a single platform. The app is built with programming languages and tools that are specific to a single platform.

## React Native

[React Native](https://github.com/facebook/react-native) is used in this project for native app development. Native resources are accessed and managed in JavaScript and using React core concepts. Once the app is fully developed, it can be compiled to platform-specific app (Android and iOS).

> *React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, `state`, and `props`.*

## Expo

In this project [Expo](https://github.com/expo/expo) is used together with React Native for native development. [Expo CLI](https://github.com/expo/expo-cli) tool `expo-cli` can be used for building and configuring first React Native project. Additionally, the Expo client for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) and [iOS](https://apps.apple.com/app/apple-store/id982107779) provides an interactive interface for app debugging and testing during the development process.

> *Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.*

Both, the React Native Javascript framework for native development and the Expo platform, make up the development environment for this sample project. Most of the time, both environments integrate adequately and facilitate the development, however many functionalities require deep knowledge on both ecosystems to avoid conflicts. Main problems encountered have to do with some modules configuration and project dependencies.