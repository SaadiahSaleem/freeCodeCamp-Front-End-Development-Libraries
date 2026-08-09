# 🧩 jQuery - Front End Development Libraries

## 🧠 Overview

jQuery is a JavaScript library that makes it easier to work with HTML elements, events, animations, and the DOM.

In this section, you will learn how to use jQuery to interact with web pages with simpler and shorter JavaScript syntax.

---

## 📚 What You'll Learn

In this section, you will learn how to:

* Use jQuery selectors
* Change HTML elements
* Change CSS styles
* Add and remove classes
* Respond to user actions and events
* Animate elements
* Show and hide elements
* Use jQuery methods to manipulate the DOM
* Work with Bootstrap components using jQuery

---

## 🎯 jQuery Selectors

jQuery allows you to select HTML elements using CSS-style selectors.

### Select an element by its ID

```js
$("#myElement")
```

### Select elements by their class

```js
$(".myClass")
```

### Select all elements of a type

```js
$("p")
```

---

## ✏️ Changing HTML

The `.html()` method can change the content of an element.

```js
$("#message").html("Hello World!");
```

For example:

```html
<div id="message">Old message</div>
```

After running the jQuery code:

```html
<div id="message">Hello World!</div>
```

---

## 🎨 Changing CSS

You can change CSS properties using `.css()`.

```js
$("#box").css("color", "red");
```

You can also change multiple properties:

```js
$("#box").css({
  color: "red",
  backgroundColor: "yellow"
});
```

---

## 🏷️ Adding and Removing Classes

### Add a class

```js
$("#box").addClass("highlight");
```

### Remove a class

```js
$("#box").removeClass("highlight");
```

### Toggle a class

```js
$("#box").toggleClass("highlight");
```

---

## 🖱️ Handling Events

jQuery makes it easy to respond to user actions.

For example, when a button is clicked:

```js
$("button").on("click", function() {
  $("p").html("Button clicked!");
});
```

You can also use:

```js
$("button").click(function() {
  $("p").hide();
});
```

---

## 👀 Show and Hide Elements

### Hide an element

```js
$("#box").hide();
```

### Show an element

```js
$("#box").show();
```

### Toggle visibility

```js
$("#box").toggle();
```

---

## ✨ Animations

jQuery provides simple animation methods.

```js
$("#box").fadeOut();
```

```js
$("#box").fadeIn();
```

You can also slide elements:

```js
$("#box").slideUp();
```

```js
$("#box").slideDown();
```

---

## 🔄 Changing Classes with jQuery

A common pattern is to respond to a button click by changing a class:

```js
$("button").on("click", function() {
  $(".box").toggleClass("active");
});
```

This allows JavaScript and CSS to work together to create interactive pages.

---

## 🧱 jQuery and Bootstrap

jQuery can also be used to interact with Bootstrap components.

For example:

```js
$(".btn").on("click", function() {
  $(".message").toggleClass("d-none");
});
```

This can be useful for creating interactive Bootstrap interfaces.

---

## 🧰 Common jQuery Methods

| Method           | Purpose               |
| ---------------- | --------------------- |
| `$()`            | Select elements       |
| `.html()`        | Change HTML content   |
| `.text()`        | Change text           |
| `.css()`         | Change CSS            |
| `.addClass()`    | Add a class           |
| `.removeClass()` | Remove a class        |
| `.toggleClass()` | Add/remove a class    |
| `.hide()`        | Hide an element       |
| `.show()`        | Show an element       |
| `.toggle()`      | Show/hide an element  |
| `.on()`          | Attach an event       |
| `.click()`       | Handle clicks         |
| `.fadeIn()`      | Fade an element in    |
| `.fadeOut()`     | Fade an element out   |
| `.slideUp()`     | Slide an element up   |
| `.slideDown()`   | Slide an element down |

---

## 💡 Key Takeaways

* jQuery is a JavaScript library.
* `$()` is used to select elements.
* jQuery makes DOM manipulation easier.
* You can change HTML, CSS, and classes with jQuery.
* jQuery provides simple ways to handle events.
* You can create animations without writing complex JavaScript.
* jQuery can work together with Bootstrap and other front-end tools.

---

## 🚀 Goal

By completing this section, you should be comfortable using jQuery to select HTML elements, modify them, respond to user interactions, and create simple interactive web pages.
