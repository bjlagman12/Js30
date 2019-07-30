class App extends React.Component {
  constructor(){
    super()
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
    this.changeInput = this.changeInput.bind(this)
    this.nextForm = this.nextForm.bind(this)
    this.backForm = this.backForm.bind(this)
  }
  changeInput(input, value) {
    this.setState({ [input]: value})
  }

  nextForm (e) {
    console.log('test')
    e.preventDefault()
    let currentPage = this.state.page
    if (currentPage === 0 || currentPage === 1 ) {
      currentPage ++
      this.setState({ page: currentPage })
    }
  }
  backForm (e) {
    e.preventDefault()
    let currentPage = this.state.page
    if (currentPage > 0) {
      currentPage --
      this.setState({ page: currentPage })
    }
  }
  submit (e) {
    e.preventDefault()
  }
  
  render(){
    let page = this.state.page
    let render = this.state
    return(
      <div>
        <h2>
          Checkout Here
        </h2>
        {page === 0 && 
          <PersonalForm 
            changeInput={this.changeInput} 
            nextForm={this.nextForm}/>
        }
         {page === 1 && 
          <AddressInfo 
            changeInput={this.changeInput} 
            backForm={this.backForm}
            nextForm={this.nextForm}/>
        }
        {page === 2 &&
          <Final 
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            phone={this.state.phone}
            address={this.state.address}
            address2={this.state.address2}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}

          />
        }
      </div>
    )
  }
}

const PersonalForm = ({ changeInput, nextForm }) => {
  return(
      <form 
      onSubmit={nextForm}
      className="container">
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

const AddressInfo = ({ changeInput, nextForm, backForm }) => {
  return(
      <form 
        onSubmit={nextForm}
        className="container">
        <div>
          <label>
          Address:
          <input 
            type="text" 
            name="Address" 
            onChange={(e) => changeInput('address', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          Address 2:
          <input 
            type="text" 
            name="address2" 
            onChange={(e) => changeInput('address2', e.target.value)} 
          />
          </label>
        </div>
        <div>
          <label>
          City:
          <input 
            type="text" 
            name="city" 
            onChange={(e) => changeInput('city', e.target.value)} 
          required/>
          </label>
        </div>
        <div>
          <label>
          State:
          </label>
          <select onChange={(e) => changeInput('state', e.target.value)} required>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div>
          <label>
          Zip Code:
          <input 
            type="number" 
            name="zip" 
            maxLength="5" 
            onChange={(e) => changeInput('zip', e.target.value)} 
          required/>
          </label>
        </div>
        <button 
          onClick={backForm}
        >
        back
        </button> 
        <input
          type="submit" 
          value="next"
        /> 
      </form>
  )
}

const Final = ({firstname, lastname, email, phone, address, address2, city, state, zip}) => {
  return(
    <div>
      <div>
        {firstname}
      </div>
      <div>
        {lastname}
      </div>
      <div>
        {email}
      </div>
      <div>
        {phone}
      </div>
      <div>
        {address}
      </div>
      <div>
        {address2}
      </div>
      <div>
        {city}
      </div>
      <div>
        {state}
      </div>
      <div>
        {zip}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
