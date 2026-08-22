// !! IMPORTANT README:
const { useState } = React;

/*
  Default Markdown

  This contains every element required by the FreeCodeCamp
  user stories:
  - H1
  - H2
  - Link
  - Inline code
  - Code block
  - List
  - Blockquote
  - Image
  - Bold text
*/

const defaultMarkdown = `# Welcome to My Markdown Previewer

## A Quick Markdown Demo

Here's a [link to freeCodeCamp](https://www.freecodecamp.org/).

You can use \`inline code\` inside your text.

### Code Block

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Markdown"));
\`\`\`

### My List

- Learn Markdown
- Build projects
- Have fun coding

> The best way to learn to code is to build things.

**This text is bold.**

### Image

![Beautiful landscape](https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800)

This is a Markdown previewer built with **React** and **Marked**.`;


/*
  Configure Marked

  gfm = GitHub Flavored Markdown
  breaks = Convert line breaks to <br>
*/

marked.setOptions({
  gfm: true,
  breaks: true
});


/*
  React Application
*/

function App() {

  const [markdown, setMarkdown] = useState(defaultMarkdown);


  /*
    Runs every time the user types in the textarea.
  */

  function handleChange(event) {
    setMarkdown(event.target.value);
  }


  return (
    <main className="app">

      {/* Editor */}

      <section className="panel">

        <div className="panel-title">
          Markdown Editor
        </div>

        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          aria-label="Markdown editor"
        />

      </section>


      {/* Preview */}

      <section className="panel">

        <div className="panel-title">
          Preview
        </div>

        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(markdown)
          }}
        />

      </section>

    </main>
  );
}


/*
  Render React application
*/

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

