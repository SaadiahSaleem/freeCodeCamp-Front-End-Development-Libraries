# 🔄 Redux - Front End Development Libraries

## 🧠 Overview

Redux is a predictable state management library for JavaScript applications.

It helps manage application data in a central **store**, making it easier to understand how data changes and flows through an application.

In this section, you will learn the fundamental concepts of Redux and how Redux can be used with React applications.

---

## 📚 What You'll Learn

In this section, you will learn about:

* Redux Store
* Actions
* Action Creators
* Reducers
* Dispatching Actions
* State Management
* Immutability
* Middleware
* React-Redux
* Connecting React components to Redux
* Managing application state with Redux

---

## 🗄️ Redux Store

The **store** holds the application's state.

```js
const store = Redux.createStore(
  reducer
);
```

The store provides a central place where application state can be managed.

---

## 🎬 Actions

An **action** describes something that happened in the application.

An action is a JavaScript object that normally contains a `type` property.

```js
const action = {
  type: "LOGIN"
};
```

Actions tell Redux **what happened**, but they do not directly change the state.

---

## 🏗️ Action Creators

An action creator is a function that creates and returns an action.

```js
const loginUser = () => {
  return {
    type: "LOGIN"
  };
};
```

Action creators make it easier to create actions consistently.

---

## ⚙️ Reducers

A **reducer** is a function that determines how the state should change when an action is dispatched.

```js
const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  return state;
};
```

A reducer receives:

1. The current state
2. An action

and returns the new state.

---

## 📤 Dispatching Actions

Actions are sent to the Redux store using `dispatch()`.

```js
store.dispatch({
  type: "INCREMENT"
});
```

The general flow is:

```text
Action
   ↓
Dispatch
   ↓
Reducer
   ↓
New State
```

---

## 🔁 Redux Data Flow

Redux follows a predictable one-way data flow:

```text
User Interaction
       ↓
     Action
       ↓
    Dispatch
       ↓
    Reducer
       ↓
   New State
       ↓
      UI
```

This makes it easier to understand where and why state changes occur.

---

## 🔒 Immutability

Redux encourages updating state without directly modifying the existing state.

Instead of changing the original object:

```js
state.count = state.count + 1;
```

a reducer should return a new value:

```js
return state + 1;
```

For objects and arrays, new objects or arrays can be created when updating state.

---

## 🧩 Combining Reducers

Large applications can have multiple reducers.

Redux provides `combineReducers()` to combine them:

```js
const rootReducer = Redux.combineReducers({
  counter: counterReducer,
  user: userReducer
});
```

This helps organize state management into smaller pieces.

---

## ⚡ Middleware

Middleware provides a way to extend Redux's behavior between dispatching an action and reaching the reducer.

```text
Dispatch Action
      ↓
  Middleware
      ↓
   Reducer
      ↓
    State
```

Middleware can be useful for tasks such as logging, asynchronous operations, and other side effects.

---

## ⚛️ React + Redux

Redux can be used together with React through **React-Redux**.

React-Redux provides tools that allow React components to interact with the Redux store.

Common concepts include:

* `Provider`
* `connect()`
* `mapStateToProps`
* `mapDispatchToProps`

---

## 🔗 Provider

The `Provider` component makes the Redux store available to React components.

```jsx
<Provider store={store}>
  <App />
</Provider>
```

Components inside the `Provider` can access the Redux store.

---

## 📥 Accessing State

`mapStateToProps` can be used to select data from the Redux store.

```js
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
```

The selected state can then be passed to a React component as props.

---

## 📤 Dispatching from React

React components can dispatch Redux actions.

```js
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({
      type: "INCREMENT"
    })
  };
};
```

This allows user interactions in React to trigger changes in Redux state.

---

## 🧰 Important Redux Concepts

| Concept              | Purpose                                   |
| -------------------- | ----------------------------------------- |
| Store                | Holds application state                   |
| Action               | Describes what happened                   |
| Action Creator       | Creates an action                         |
| Reducer              | Determines how state changes              |
| Dispatch             | Sends an action to Redux                  |
| Middleware           | Extends Redux behavior                    |
| Provider             | Makes the store available to React        |
| `mapStateToProps`    | Gets data from Redux state                |
| `mapDispatchToProps` | Provides dispatch functions to components |

---

## 💡 Key Takeaways

* Redux is used for managing application state.
* The Redux store contains the application's state.
* Actions describe events or changes.
* Action creators create actions.
* Reducers determine how state changes.
* `dispatch()` sends actions to the Redux store.
* Redux follows a predictable one-way data flow.
* State should be updated without directly mutating the existing state.
* React-Redux allows React components to work with Redux.
* Redux can make complex application state easier to manage.

---

## 🚀 Goal

By completing this section, you should understand the fundamental principles of Redux and be able to create a Redux store, define actions and reducers, dispatch actions, manage state, and connect Redux with React applications.
