
# Change Log
All notable changes to this project will be documented in this file.

## [Unreleased] - 2022-04-24



## [9.0.0] - 2022-04-27

Redux and Thunk.

### Added
- Redux-Thunk implementation for App state management
    - [Redux](https://redux.js.org/)
    - [Thunk](https://redux.js.org/usage/writing-logic-thunks)
- Redux `Store` repository
    - [Store](https://redux.js.org/api/store)
- Extended Redux features via Middlewares
    - [Middleware](https://redux.js.org/understanding/history-and-design/middleware)
    - [Redux-Thunk](https://redux.js.org/usage/writing-logic-thunks)
    - [Redux-Logger](https://github.com/LogRocket/redux-logger)

### Removed
- Local data containers

## [8.0.0] - 2022-04-27

JSON server.

### Added
- Fetch images from remote JSON server
- Use common colors

### Removed
- Locally loaded images
- Hardcoded color codes

## [7.0.0] - 2022-04-27

Buttons and icons.

### Added
- Added comments to trip details screen
- Favourite trip selection feature
    - [Icon](https://reactnativeelements.com/docs/icon/)

### Changed
- Drawer Navigator layout
- Drawer Navigator toggler icon
    - [Drawer Actions](https://reactnavigation.org/docs/drawer-actions/)

## [6.0.0] - 2022-04-25

Component navigation.

### Added
- `Contact` component
- `About` component
    - [ScrollView](https://reactnative.dev/docs/scrollview)

### Changed
- New component screens added to Drawer Navigator
- Home component items layout
    - [StyleSheet](https://reactnative.dev/docs/stylesheet)

## [5.0.0] - 2022-04-24

Drawer Navigation.

### Added
- Home page
- [Drawer Navigation](https://reactnavigation.org/docs/drawer-based-navigation/)

## [4.0.0] - 2022-04-24

Stack Navigation.

### Added

- [Navigation](https://reactnavigation.org/docs/getting-started) feature.
- [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/)

## [3.0.0] - 2022-04-24

Use functional components in React Native.

### Added

- `RenderTrip` component
    - [Card](https://reactnativeelements.com/docs/3.4.2/card)
- `TripDetails` component
- Allow trip selection on main view. When item selected, item details are displayed on top of the view.

## [2.0.0] - 2022-04-24

Create React Native components.

### Added

- `TRIPS` array of data
- `Basecamp` component
    - [React.Component](https://reactjs.org/docs/react-component.html)
- `Calendar` component
    - [SafeAreaView](https://reactnative.dev/docs/safeareaview)
    - [FlatList](https://reactnative.dev/docs/flatlist)
    - [ListItem](https://reactnativeelements.com/docs/3.4.2/listitem)
    - [Avatar](https://reactnativeelements.com/docs/3.4.2/avatar)

## [1.0.0] - 2022-04-24

Initial version.

### Added

- Project creation.
