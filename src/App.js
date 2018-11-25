import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Naruto'
  }
  outputUserNameHandler = () => {
    this.setState({username: 'Test'})
  }
  inputUsernameChanged = (event) => {
    this.setState ({username: event.target.value})
  }
  render() {


    return (
      <div className="App container">
        <UserInput changed={this.inputUsernameChanged} username={this.state.username}/>
        <UserOutput username={this.state.username} changeName= {this.outputUserNameHandler} subtitle='I am a subtitle' description='Testing the description on the props object' link='Click Me!!' />
      </div>
    );
  }
}

export default App;
