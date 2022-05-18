# React Native Components

> *React Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.*

[Components](https://reactjs.org/docs/components-and-props.html) are core concepts from React. Unlike in React, where components represent HTML objects, in React Native components represent native elements that are transformed to platform-specific objects at build. This helps building platform-independent apps, while using independent reusable components for UI.

React allows to define components as JavaScript classes `class components` or functions `functional components`. Class components provide more features than functional components, however, [React Hooks](https://reactjs.org/docs/hooks-intro.html) can extend these capabilities.

Components accept inputs called `props` and can store their own `state`, which is used to re-render the view when changed. `props` are used as input data to components. It allows particularizing view elements, as well as conditional rendering based on these values. This architecture allows implementing reusable code and designing nested components hierarchy to render complex views. Component's state management provides an intuitive and efficient way to render updated UI views while keeping the ones that don't change.

For this project, all component definitions are stored under `/components` folder in Rect app.

## Class Components

Class Components extend `React.Component` and must implement `render()` function to return the view to be rendered in the screen. When called, it should examine `this.props` and `this.state` and return one of the following types:

- [React elements](https://reactjs.org/docs/rendering-elements.html) (optionally with [JSX](https://reactjs.org/docs/introducing-jsx.html))
- [Arrays](https://reactjs.org/docs/lists-and-keys.html) and [fragments](https://reactjs.org/docs/fragments.html)
- [Portals](https://reactjs.org/docs/portals.html)
- String and numbers
- Booleans or null

## Functional Components

Functional Components in React return React elements as JavaScript functions. They accept `props` as inputs to use on render view. React Hooks extend base functionalities for functional components, providing state and more.

## Component Lifecycle

[Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) refers to special methods on the component class invoked when the component mounts (`componentDidMount()`) and unmounts (`componentWillUnmount()`). We use this methods to interact with the browser and external resources while using `render()` exclusively to return render elements. The component state should not be udated inside `render()` method, separating rendering from all other programming logic.

Both types of components are used in this project. Generally, functional components are used for simple UI elements, while more complex ones are implemented as class components. Additionally, many components are nested to create more complex views.

At first, components seem to be the easy and correct way to build the app and store the state. This is true, however there are many key aspects to come across while using small independent components related to data and the model. `props` can be passed down from one component to another in a nested level hierarchy, what makes it tedious work. This can be fixed with advanced React features such as [Context](https://reactjs.org/docs/context.html). Other example related to `state` is that it is private to the component itself, so there isn't a single data source. Distributing the app state and data model into different components makes it difficult to mantain. To fix this problems, some of the approaches used are [State Lifting](https://reactjs.org/docs/lifting-state-up.html) and [Redux](https://react-redux.js.org/).