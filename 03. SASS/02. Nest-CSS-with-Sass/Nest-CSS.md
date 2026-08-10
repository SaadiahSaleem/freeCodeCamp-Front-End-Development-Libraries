# Nest CSS with Sass

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```html
article {
  height: 200px;
}

article p {
  color: white;
}

article ul {
  color: blue;
}
```

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```html
article {
  height: 200px;

  p {
    color: white;
  }

  ul {
    color: blue;
  }
}
```

Use the nesting technique shown above to re-organize the CSS rules for both children of `.blog-post` element. For testing purposes, the `h1` should come before the `p` element.

### Instructions:
1. Your code should re-organize the CSS rules so the `h1` and `p` are nested in the `.blog-post` parent element.