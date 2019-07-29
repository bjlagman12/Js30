class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, "First Name:", React.createElement("input", {
      type: "text",
      name: "name"
    })), React.createElement("input", {
      type: "submit",
      value: "submit"
    })));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
