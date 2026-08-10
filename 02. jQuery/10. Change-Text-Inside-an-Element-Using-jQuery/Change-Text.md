# Change Text Inside an Element Using jQuery

Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called .html() that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:

````html
$("h3").html("<em>jQuery Playground</em>");
````

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

Change the button with id `target4` by emphasizing its text.

[View our news article for <em>](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element) to learn the difference between `<i>` and `<em>` and their uses.

Note that while the `<i>` tag has traditionally been used to emphasize text, it has since been adopted for use as a tag for icons. The `<em>` tag is now widely accepted as the tag for emphasis. Either will work for this challenge.

### Instructions:
1. You should emphasize the text in your `target4` button by adding HTML tags.
2. The text should otherwise remain unchanged.
3. You should not alter any other text.
4. You should be using `.html()` and not `.text()`.
5. You should select button `id="target4"` with jQuery.
