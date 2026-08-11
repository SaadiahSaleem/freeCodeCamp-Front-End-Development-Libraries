# ⚛️ React - Front End Development Libraries

## 🧠 Overview

React is a JavaScript library for building user interfaces.

React allows you to break a web page into small, reusable components. Each component can have its own structure, data, and behavior.

In this section, you will learn the fundamentals of React and how to use it to create interactive web applications.

---

## 📚 What You'll Learn

In this section, you will learn about:

* React components
* JSX
* Rendering elements
* Props
* State
* Event handling
* Conditional rendering
* Controlled inputs
* Component composition
* React lifecycle methods
* React hooks
* Using React to build interactive applications

---

## 🧩 React Components

A component is a reusable piece of a user interface.

```jsx
function Welcome() {
  return <h1>Hello World!</h1>;
}
```

A component can then be rendered in an application.

```jsx
<Welcome />
```

Components help divide a large application into smaller and easier-to-manage parts.

---

## ✨ JSX

JSX allows you to write HTML-like syntax inside JavaScript.

```jsx
const element = <h1>Hello, World!</h1>;
```

JSX makes it easier to describe what the user interface should look like.

JavaScript expressions can also be used inside JSX with curly braces:

```jsx
const name = "Saadiah";

const element = <h1>Hello, {name}!</h1>;
```

---

## 🎨 Rendering Elements

React can render elements to the page.

```jsx
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById("root")
);
```

The React application is rendered inside an HTML element, commonly one with an ID such as `root`.

---

## 📦 Props

Props allow you to pass information from one component to another.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Welcome name="Saadiah" />
```

Props are used to make components reusable with different data.

---

## 🔄 State

State allows a React component to store information that can change over time.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

When state changes, React can update the user interface.

---

## 🖱️ Event Handling

React can respond to user actions such as button clicks.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button onClick={this.increase}>
        {this.state.count}
      </button>
    );
  }
}
```

The `onClick` event runs a function when the user clicks the button.

---

## 🔀 Conditional Rendering

React allows you to display different content depending on a condition.

```jsx
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in.</h1>;
}
```

This allows the interface to respond to different application states.

---

## 📝 Controlled Inputs

React can control the value of form inputs using state.

```jsx
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <input
        value={this.state.input}
        onChange={this.handleChange}
      />
    );
  }
}
```

The input value is stored in React state and updated whenever the user types.

---

## 🧱 Component Composition

React components can be placed inside other components.

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my website!</p>
    </div>
  );
}
```

This allows applications to be built from small, reusable components.

---

## 🔁 React Lifecycle

React components go through different stages during their lifetime.

Some important lifecycle methods include:

* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount()`

Example:

```jsx
componentDidMount() {
  console.log("Component has been rendered.");
}
```

Lifecycle methods allow you to perform actions at specific points in a component's lifecycle.

---

## 🪝 React Hooks

Hooks allow functional components to use React features such as state.

One common hook is `useState`.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Hooks make it possible to manage state and other React features inside functional components.

---

## 🧰 Important React Concepts

| Concept               | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| Component             | Reusable part of the UI                         |
| JSX                   | HTML-like syntax inside JavaScript              |
| Props                 | Pass data between components                    |
| State                 | Store changing data                             |
| Events                | Respond to user actions                         |
| Conditional Rendering | Display different UI based on conditions        |
| Lifecycle             | Run code at different stages of a component     |
| Hooks                 | Use React features inside functional components |
| Composition           | Build larger components from smaller ones       |

---

## 💡 Key Takeaways

* React is used to build interactive user interfaces.
* Applications are divided into reusable components.
* JSX combines JavaScript with HTML-like syntax.
* Props allow components to receive data.
* State stores information that can change.
* Events allow components to respond to user interactions.
* Conditional rendering allows the UI to change based on data.
* Hooks allow functional components to use state and other React features.

---

## 🚀 Goal

By completing this section, you should understand the basic principles of React and be able to create reusable components, pass data using props, manage state, handle events, and build interactive user interfaces.
