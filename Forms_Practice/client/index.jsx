class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
