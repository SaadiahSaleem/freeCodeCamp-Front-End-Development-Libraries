class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>;
  }
};

// Change code below this line
const app = ReactDOMServer.renderToString(<App />);