# Create Reusable CSS with Mixins

In Sass, a _mixin_ is a group of CSS declarations that can be reused throughout the style sheet. The definition starts with the `@mixin` at-rule, followed by a custom name. You apply the mixin using the `@include` at-rule.

````html
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  @include reset-list;
}
````

Compiles to:

````html
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
````

Your mixins can also take arguments, which allows their behavior to be customized. The arguments are required when using the mixin.

````html
@mixin prose($font-size, $spacing) {
  font-size: $font-size;
  margin: 0;
  margin-block-end: $spacing;
}

p {
  @include prose(1.25rem, 1rem);
}

h2 {
  @include prose(2.4rem, 1.5rem);
}
````

You can make arguments optional by giving the parameters default values.

````html
@mixin text-color($color: black) {
  color: $color;
}

p {
  @include text-color(); /* color: black */
}

nav a {
  @include text-color(orange);
}
````

Write a mixin named `shape` and give it 3 parameters: `$w`, `$h`, and `$bg-color`.

Use the `shape` mixin to give the `#square` element a width and height of `50px`, and the background color `red`. For the `#rect-a` element add a width of `100px`, a height of `50px`, and the background color `blue`. Finally, for the `#rect-b` element add a width of `50px`, a height of `100px`, and the background color `orange`.

### Instructions:
1. You should declare a mixin named `shape` with 3 parameters: `$w`, `$h`, and `$bg-color`.
2. Your mixin should include a `width` property that uses the `$w` parameter.
3. Your mixin should include a `height` property that uses the `$h` parameter.
4. Your mixin should include a background-color property that uses the $bg-color parameter.
5. You should replace the styles inside the #square selector with a call to the shape mixin using the @include keyword. Setting a width and height of 50px, and the background color red.
6. You should replace the styles inside the #rect-a selector with a call to the shape mixin using the @include keyword. Setting a width of 100px, a height of 50px, and the background color blue.
7. You should replace the styles inside the #rect-b selector with a call to the shape mixin using the @include keyword. Setting a width of 50px, a height of 100px, and the background color orange.