# Target the Same Element with Multiple jQuery Selectors

Now you know three ways of targeting elements: by type: `$("button")`, by class: `$(".btn")`, and by id `$("#target1")`.

Although it is possible to add multiple classes in a single `.addClass()` call, let's add them to the same element in three separate ways.

Using `.addClass()`, add only one class at a time to the same element, three different ways:

Add the `animated` class to all elements with type `button`.

Add the `shake` class to all the buttons with class `.btn`.

Add the `btn-primary` class to the button with id `#target1`.

**Note:** You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes `shake`, `animated`, and `btn-primary` to `#target1`.

### Instructions:
1. Your code should use the `$("button")` selector.
2. Your code should use the `$(".btn")` selector.
3. Your code should use the `$("#target1")` selector.
4. You should only add one class with each of your three selectors.
5. Your `#target1` element should have the classes `animated`‚ `shake` and `btn-primary`.
6. You should only use jQuery to add these classes to the element.