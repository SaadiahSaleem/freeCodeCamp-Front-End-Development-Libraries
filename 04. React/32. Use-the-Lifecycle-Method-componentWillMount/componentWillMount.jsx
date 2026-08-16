class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('MyComponent is about to mount!');
    // Change code above this line
  }
  render() {
    return <div>
    <h1>Hello World</h1>
    </div>;
  }
};