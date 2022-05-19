# Redux and Thunk

One of the obvious limitation of the current implementation is the app state management, as the state in React is private to the component itself and not accessible from outside. Some techniques as State Lifting or Context solve this problem in a shallow way, but do not scale for bigger apps. For this purpose, we use Redux.

## Redux

> *Redux is a predictable state container for JavaScript apps.*

![Redux Flow Diagram](assets/redux-flow-diagram.gif)

[Redux](https://redux.js.org/) is an implementation of [Flux](https://facebook.github.io/flux/) architecture in JavaScript. It works as unidirectional data flow implementation. It provides predictability and traceability, while facilitating any other modification. Redux integrates 3 fundamentals:

- Single source of trust
- State is read-only
- Changes are performed on pure functions

Appart from Redux, we will be using [Redux-Thunk](https://github.com/reduxjs/redux-thunk) as middleware to perform asynchronous requests to the database and [Redux-Logger](https://github.com/LogRocket/redux-logger) to show app logs on console.

### Redux Store

All the app state is stored in a tree inside a single store. The function `createStore()` creates the [React Store](https://redux.js.org/api/store) where `combineReducers()` combines independent *reducers* to act as single. Additionally, both middlewares are assigned to the store in the configuration step. `ConfigureStore()` shows the store configuration:

```javascript
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            excursiones,
            comentarios,
            cabeceras,
            actividades
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

```

### Action types

Define available actions for Redux data repositories (*reducers*).

### Reducers

[Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers) are Redux respositories that compose Redux store (trips, headers, activities, comments). The goal of the reducers is to update the state based on the action triggered.

## Redux-Thunk

> Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

![Redux-Thunk Flow Diagram](assets/redux-thunk-flow-diagram.gif)

Provide an API to perform asynchronous queries to database.

### Action Creators

Functions (Thunk) and actions that will respond to the app requirements. As they are implemented based on asynchronous requests, they will manage *promise* objects using `dispatch()` function. In this case, they will perform queries to REST API from JSON server.