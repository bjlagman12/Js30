class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phone: '',
    };
    this.changeInput = this.changeInput.bind(this);
    this.nextForm = this.nextForm.bind(this)
  }
  changeInput(input, value) {
    this.setState({ [input]: value})
  }
  nextForm () {
    console.log()
  }
  
  render(){
    return(
      <div>
        <h2>
          Checkout Here
        </h2>
        <PersonalForm changeInput={this.changeInput}/>
      </div>
    )
  }
}


const PersonalForm = ({ changeInput }) => {
  return(
      <form className="container">
        <div>
          <label>
          First Name:
          <input 
            type="text" 
            name="firstname" 
            onChange={(e) => changeInput('firstname', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          Last Name:
          <input 
            type="text" 
            name="lastname" 
            onChange={(e) => changeInput('lastname', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          Address:
          <input 
            type="text" 
            name="address" 
            onChange={(e) => changeInput('address', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          Email:
          <input 
            type="text" 
            name="email" 
            onChange={(e) => changeInput('email', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          Phone Number
          <input 
            type="tel" 
            name="phonenumber" 
            maxLength="10" 
            onChange={(e) => changeInput('phone', e.target.value)} 
          required/>
          </label>
        </div>
        <input 
          type="submit" 
          value="next"
        />
      </form>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
