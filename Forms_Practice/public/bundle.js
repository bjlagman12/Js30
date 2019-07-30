class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
    this.changeInput = this.changeInput.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.backForm = this.backForm.bind(this);
  }

  changeInput(input, value) {
    this.setState({
      [input]: value
    });
  }

  nextForm(e) {
    console.log('test');
    e.preventDefault();
    let currentPage = this.state.page;

    if (currentPage === 0 || currentPage === 1) {
      currentPage++;
      this.setState({
        page: currentPage
      });
    }
  }

  backForm(e) {
    e.preventDefault();
    let currentPage = this.state.page;

    if (currentPage > 0) {
      currentPage--;
      this.setState({
        page: currentPage
      });
    }
  }

  submit(e) {
    e.preventDefault();
  }

  render() {
    let page = this.state.page;
    let render = this.state;
    return React.createElement("div", null, React.createElement("h2", null, "Checkout Here"), page === 0 && React.createElement(PersonalForm, {
      changeInput: this.changeInput,
      nextForm: this.nextForm
    }), page === 1 && React.createElement(AddressInfo, {
      changeInput: this.changeInput,
      backForm: this.backForm,
      nextForm: this.nextForm
    }), page === 2 && React.createElement(Final, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }));
  }

}

const PersonalForm = ({
  changeInput,
  nextForm
}) => {
  return React.createElement("form", {
    onSubmit: nextForm,
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

const AddressInfo = ({
  changeInput,
  nextForm,
  backForm
}) => {
  return React.createElement("form", {
    onSubmit: nextForm,
    className: "container"
  }, React.createElement("div", null, React.createElement("label", null, "Address:", React.createElement("input", {
    type: "text",
    name: "Address",
    onChange: e => changeInput('address', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "Address 2:", React.createElement("input", {
    type: "text",
    name: "address2",
    onChange: e => changeInput('address2', e.target.value)
  }))), React.createElement("div", null, React.createElement("label", null, "City:", React.createElement("input", {
    type: "text",
    name: "city",
    onChange: e => changeInput('city', e.target.value),
    required: true
  }))), React.createElement("div", null, React.createElement("label", null, "State:"), React.createElement("select", {
    onChange: e => changeInput('state', e.target.value),
    required: true
  }, React.createElement("option", {
    value: "AL"
  }, "Alabama"), React.createElement("option", {
    value: "AK"
  }, "Alaska"), React.createElement("option", {
    value: "AZ"
  }, "Arizona"), React.createElement("option", {
    value: "AR"
  }, "Arkansas"), React.createElement("option", {
    value: "CA"
  }, "California"), React.createElement("option", {
    value: "CO"
  }, "Colorado"), React.createElement("option", {
    value: "CT"
  }, "Connecticut"), React.createElement("option", {
    value: "DE"
  }, "Delaware"), React.createElement("option", {
    value: "DC"
  }, "District Of Columbia"), React.createElement("option", {
    value: "FL"
  }, "Florida"), React.createElement("option", {
    value: "GA"
  }, "Georgia"), React.createElement("option", {
    value: "HI"
  }, "Hawaii"), React.createElement("option", {
    value: "ID"
  }, "Idaho"), React.createElement("option", {
    value: "IL"
  }, "Illinois"), React.createElement("option", {
    value: "IN"
  }, "Indiana"), React.createElement("option", {
    value: "IA"
  }, "Iowa"), React.createElement("option", {
    value: "KS"
  }, "Kansas"), React.createElement("option", {
    value: "KY"
  }, "Kentucky"), React.createElement("option", {
    value: "LA"
  }, "Louisiana"), React.createElement("option", {
    value: "ME"
  }, "Maine"), React.createElement("option", {
    value: "MD"
  }, "Maryland"), React.createElement("option", {
    value: "MA"
  }, "Massachusetts"), React.createElement("option", {
    value: "MI"
  }, "Michigan"), React.createElement("option", {
    value: "MN"
  }, "Minnesota"), React.createElement("option", {
    value: "MS"
  }, "Mississippi"), React.createElement("option", {
    value: "MO"
  }, "Missouri"), React.createElement("option", {
    value: "MT"
  }, "Montana"), React.createElement("option", {
    value: "NE"
  }, "Nebraska"), React.createElement("option", {
    value: "NV"
  }, "Nevada"), React.createElement("option", {
    value: "NH"
  }, "New Hampshire"), React.createElement("option", {
    value: "NJ"
  }, "New Jersey"), React.createElement("option", {
    value: "NM"
  }, "New Mexico"), React.createElement("option", {
    value: "NY"
  }, "New York"), React.createElement("option", {
    value: "NC"
  }, "North Carolina"), React.createElement("option", {
    value: "ND"
  }, "North Dakota"), React.createElement("option", {
    value: "OH"
  }, "Ohio"), React.createElement("option", {
    value: "OK"
  }, "Oklahoma"), React.createElement("option", {
    value: "OR"
  }, "Oregon"), React.createElement("option", {
    value: "PA"
  }, "Pennsylvania"), React.createElement("option", {
    value: "RI"
  }, "Rhode Island"), React.createElement("option", {
    value: "SC"
  }, "South Carolina"), React.createElement("option", {
    value: "SD"
  }, "South Dakota"), React.createElement("option", {
    value: "TN"
  }, "Tennessee"), React.createElement("option", {
    value: "TX"
  }, "Texas"), React.createElement("option", {
    value: "UT"
  }, "Utah"), React.createElement("option", {
    value: "VT"
  }, "Vermont"), React.createElement("option", {
    value: "VA"
  }, "Virginia"), React.createElement("option", {
    value: "WA"
  }, "Washington"), React.createElement("option", {
    value: "WV"
  }, "West Virginia"), React.createElement("option", {
    value: "WI"
  }, "Wisconsin"), React.createElement("option", {
    value: "WY"
  }, "Wyoming"))), React.createElement("div", null, React.createElement("label", null, "Zip Code:", React.createElement("input", {
    type: "number",
    name: "zip",
    maxLength: "5",
    onChange: e => changeInput('zip', e.target.value),
    required: true
  }))), React.createElement("button", {
    onClick: backForm
  }, "back"), React.createElement("input", {
    type: "submit",
    value: "next"
  }));
};

const Final = ({
  firstname,
  lastname,
  email,
  phone,
  address,
  address2,
  city,
  state,
  zip
}) => {
  return React.createElement("div", null, React.createElement("div", null, firstname), React.createElement("div", null, lastname), React.createElement("div", null, email), React.createElement("div", null, phone), React.createElement("div", null, address), React.createElement("div", null, address2), React.createElement("div", null, city), React.createElement("div", null, state), React.createElement("div", null, zip));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
