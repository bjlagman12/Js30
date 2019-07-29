class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phone: ''
    };
    this.changeInput = this.changeInput.bind(this);
    this.nextForm = this.nextForm.bind(this);
  }

  changeInput(input, value) {
    this.setState({
      [input]: value
    });
  }

  nextForm() {
    console.log();
  }

  render() {
    return React.createElement("div", null, React.createElement("h2", null, "Checkout Here"), React.createElement(PersonalForm, {
      changeInput: this.changeInput
    }));
  }

}

const PersonalForm = ({
  changeInput
}) => {
  return React.createElement("form", {
    className: "container"
  }, React.createElement("div", null, React.createElement("label", null, "First Name:", React.createElement("input", {
    type: "text",
    name: "firstname",
    onChange: e => changeInput('firstname', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "Last Name:", React.createElement("input", {
    type: "text",
    name: "lastname",
    onChange: e => changeInput('lastname', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "Address:", React.createElement("input", {
    type: "text",
    name: "address",
    onChange: e => changeInput('address', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "Email:", React.createElement("input", {
    type: "text",
    name: "email",
    onChange: e => changeInput('email', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "Phone Number", React.createElement("input", {
    type: "tel",
    name: "phonenumber",
    maxLength: "10",
    onChange: e => changeInput('phone', e.target.value),
    required: true
  }))), React.createElement("input", {
    type: "submit",
    value: "next"
  }));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
