# 🎨 Sass - Front End Development Libraries

## 🧠 Overview

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds useful features to CSS.

It helps you write cleaner, more organized, and reusable stylesheets. Sass code is compiled into regular CSS that browsers can understand.

---

## 📚 What You'll Learn

In this section, you will learn how to:

* Use Sass variables
* Nest CSS selectors
* Create reusable styles with mixins
* Use `@if` and `@else` statements
* Use `@for` loops
* Use `@each` loops
* Use `@while` loops
* Create reusable styles with `@mixin`
* Use `@extend`
* Work with Sass partials

---

## 🎯 Sass Variables

Sass allows you to store values in variables.

```scss
$primary-color: blue;
$font-size: 20px;

.title {
  color: $primary-color;
  font-size: $font-size;
}
```

This makes it easier to reuse the same values throughout your stylesheet.

---

## 🪆 Nesting

Sass allows you to nest CSS selectors inside one another.

Instead of:

```scss
nav {
  background: black;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

You can write:

```scss
nav {
  background: black;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

Nesting makes related styles easier to read and organize.

---

## 🧩 Mixins

Mixins allow you to create reusable groups of CSS properties.

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

The `@mixin` keyword creates the reusable style, while `@include` uses it.

---

## 🔀 Conditional Statements

Sass supports conditional logic using `@if` and `@else`.

```scss
@mixin text-color($light-theme) {
  @if $light-theme {
    color: black;
  } @else {
    color: white;
  }
}
```

This allows styles to change depending on a condition.

---

## 🔁 `@for` Loops

Sass can generate styles using loops.

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

This can generate multiple related CSS classes automatically.

---

## 🔄 `@each` Loops

The `@each` directive allows you to loop through a list.

```scss
@each $color in red, blue, green {
  .#{$color}-text {
    color: $color;
  }
}
```

This creates separate styles for each color.

---

## ⏳ `@while` Loops

Sass also supports `@while` loops.

```scss
$i: 1;

@while $i <= 3 {
  .item-#{$i} {
    width: 100px * $i;
  }

  $i: $i + 1;
}
```

The loop continues while the condition is true.

---

## 🧱 `@extend`

The `@extend` directive allows one selector to inherit the styles of another selector.

```scss
.info {
  border: 1px solid black;
  padding: 10px;
}

.warning {
  @extend .info;
  color: red;
}
```

The `.warning` class receives the styles from `.info` and adds its own styles.

---

## 📂 Sass Partials

Partials allow you to split Sass code into multiple files.

A partial file starts with an underscore:

```text
_variables.scss
_mixins.scss
_header.scss
```

These files can contain reusable Sass code that can be included in another stylesheet.

---

## 🔗 Sass Imports

Sass allows you to combine different Sass files.

```scss
@import "variables";
@import "mixins";
```

This helps organize large projects into smaller files.

---

## 🧰 Important Sass Features

| Feature     | Purpose                                  |
| ----------- | ---------------------------------------- |
| `$variable` | Store reusable values                    |
| Nesting     | Organize related selectors               |
| `@mixin`    | Create reusable styles                   |
| `@include`  | Use a mixin                              |
| `@if`       | Create conditional styles                |
| `@else`     | Provide an alternative condition         |
| `@for`      | Repeat styles a specific number of times |
| `@each`     | Loop through a list                      |
| `@while`    | Repeat while a condition is true         |
| `@extend`   | Share styles between selectors           |
| Partials    | Organize Sass into separate files        |

---

## 💡 Key Takeaways

* Sass extends the capabilities of CSS.
* Variables make styles easier to reuse.
* Nesting makes CSS easier to organize.
* Mixins allow you to reuse groups of styles.
* Conditional statements allow styles to depend on conditions.
* Loops can generate repetitive CSS automatically.
* `@extend` allows selectors to share styles.
* Partials help organize large Sass projects.

---

## 🚀 Goal

By completing this section, you should understand how Sass can make CSS more **organized, reusable, maintainable, and powerful**.
