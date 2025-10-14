# Bootstrap

🧠 **Overview**

The **Bootstrap** section introduces you to one of the most popular front-end frameworks for building **responsive**, **mobile-first web pages** quickly and efficiently.
Bootstrap provides prebuilt **CSS classes**, **components**, and **layouts** that save time and ensure consistency across your designs.

📦 **What You’ll Learn**

In this section, you’ll learn how to:

- Include **Bootstrap** in your project.
- Use **container**, **row**, and **column** classes for layout.
- Style text, buttons, and images.
- Build navigation bars and responsive elements.
- Use prebuilt **components** like modals, cards, alerts, and badges.
- Understand **Bootstrap’s grid system** and responsive breakpoints.

⚙️ **Adding Bootstrap to Your Page**

Add the Bootstrap CDN link in the `<head>` of your HTML file:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

Now you can use Bootstrap’s classes directly in your HTML.

🧱 **Layout with Containers, Rows, and Columns**

Bootstrap uses a **12-column grid system** for responsive layouts.
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>

```

✅ `.container` centers your content
✅ `.row` creates a horizontal group
✅ `.col-*` defines how much space each column takes

🖌️ **Styling Text and Buttons**
**Text**

You can easily adjust text alignment, color, and weight:
```html
<p class="text-center text-primary fw-bold">
  Welcome to Bootstrap!
</p>

```

**Buttons**

Use Bootstrap’s built-in button styles:
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

```

🧭 **Navigation Bar Example**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">MySite</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>

```

🪄 **Common Components**

Bootstrap includes many ready-made components you can use:
| Component | Class Example                                                       |
| --------- | ------------------------------------------------------------------- |
| Alerts    | `<div class="alert alert-warning">Warning!</div>`                   |
| Cards     | `<div class="card"><div class="card-body">Card content</div></div>` |
| Badges    | `<span class="badge bg-success">New</span>`                         |
| Modals    | `<div class="modal" id="exampleModal">...</div>`                    |


📱 **Responsive Images**

Make images scale with screen size:
```html
<img src="image.jpg" class="img-fluid rounded" alt="Responsive image">

```

⚡ **Summary**

✅ Bootstrap helps you create **responsive** and **modern** layouts quickly.
✅ It uses **classes** to style elements without writing custom CSS.
✅ You’ll use **containers**, **rows**, and **columns** for layout.
✅ Buttons, alerts, and modals come pre-styled and ready to use.

🧩 **Next Steps**

Once you complete this section, you’ll move on to **jQuery**, where you’ll learn how to add interactivity and dynamic behavior to your Bootstrap components.