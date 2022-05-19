# Functional Components

Functional components are JavaScript functions that return React elements to render view. `props` are passed to components as input data to use on render. By default functional components don't provide state and many other functionalities. [React Hooks](https://reactjs.org/docs/hooks-intro.html) extend this basic capabilities:

- `useState()`: State
- `useEffect()`: Component Lifecycle

## Basic example

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate
    return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
    </div>
    );
}

```

Functional components are used for more simple component designs and nested inside other components to render complex views.