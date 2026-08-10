# Store Data with Sass Variables

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the `let` and `const` keywords. In Sass, variables start with a `$` followed by the variable name.

Here are a couple examples:

```html
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

And to use the variables:

```html
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable `$text-color` and set it to `red`. Then change the value of the `color` property for the `.blog-post` and `h2` to the `$text-color` variable.

### Instructions:
1. Your code should have a Sass variable declared for `$text-color` with a value of `red`.
2. Your code should use the `$text-color` variable to change the color for the `.blog-post` and `h2` items.
3. Your `.blog-post` element should have a `color` of red.
4. Your `h2` elements should have a `color` of red.