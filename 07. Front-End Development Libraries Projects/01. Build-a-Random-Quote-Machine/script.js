// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
const quotes = [
   {
    text: "درکار ہے صلۂ محنت فقط اتنا کہ پیروں کی خاک بن جائے قدم قدم کامیابی کی منزلیں",
    author: "سعدیہ سلیم"
  },
  {
    text: "خاموشی بھی ہزاروں داستانیں کہ رہی ہے لفظ لفظ کا محتاج نہیں ہوتا ہر کوئی",
    author: "سعدیہ سلیم"
  },{
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  }
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: quotes[
        Math.floor(Math.random() * quotes.length)
      ]
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );

    this.setState({
      quote: quotes[randomIndex]
    });

    // Small jQuery animation
    $("#quote-box")
      .stop(true, true)
      .animate(
        {
          opacity: 0.4
        },
        100,
        function () {
          $(this).animate(
            {
              opacity: 1
            },
            400
          );
        }
      );
  }

  render() {
    const quote = this.state.quote;

    const tweetUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(
        `"${quote.text}" — ${quote.author}`
      );

    return (
      <div id="quote-box">

        <div id="text">
          {quote.text}
        </div>

        <div id="author">
          — {quote.author}
        </div>

        <div>
          <button
            id="new-quote"
            onClick={this.getNewQuote}
          >
            ✨ New Quote
          </button>

          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Tweet
          </a>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <QuoteMachine />,
  document.getElementById("root")
);