# Target the Parent of an Element Using jQuery

Every HTML element has a parent element from which it `inherits` properties.

For example, the `h3` element in your `jQuery Playground` has the parent element of `<div class="container-fluid">`, which itself has the parent element of `body`.

jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the `parent()` function if you wanted to give the parent element of the `left-well` element a background color of blue:

````html
$("#left-well").parent().css("background-color", "blue")
````

Give the parent of the `#target1` element a background-color of red.

### Instructions:
1. Your `left-well` element should have a red background.
2. You should use the `.parent()` function to modify this element.
3. The `.parent()` method should be called on the `#target1` element.
4. You should only use jQuery to add these classes to the element.