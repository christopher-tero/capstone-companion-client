import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    return this.props.history.push('/home/');
  }

  render() {
    return(
      <div className="container">
        <h1 id="login-welcome">Welcome to <div className="logo">Capstone Companion!</div></h1>
        <form id="login" onSubmit={this.submitHandler}>
          <div className="field">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" required />
          </div>
          <div className="field">
            <input type="submit" id="login-submit" />
          </div>
        </form>
      </div>
    )
  }
}
