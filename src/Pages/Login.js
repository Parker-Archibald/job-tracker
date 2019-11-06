import React, { Component } from "react";
import "../Styles/Login.css";
import {TRACKER_API} from '../Config/com';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === '' || this.state.email === '') {
            alert('Please fill out each field');
        }
        else {
            fetch(`${TRACKER_API}/login`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then(response => {return response.json()})
             .then(data => {
                 if(data === false) {
                     alert("Invalid Password or Email Address");
                 }
                 else {
                    this.props.callback(true, data.id, data.adminAccess)
                 }
             })
        }
    }

  render() {
    return (
      <div id="loginBack">
        <fieldset id="loginField">
          <div id="loginLogo" />
          <div id="loginPlease">Please login</div>
          <h1 id="loginTitle">
            Welcome to the Helio Training
            <br /> Job-Tracker
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input id="loginEmail" name='email' placeholder="Email" onChange={this.handleChange}/>
            <input id="loginPassword" name='password' placeholder="Password" onChange={this.handleChange}/>
            <div id="loginBtn">
              <button type="submit" id="loginSubmit">
                Submit
              </button>
            </div>
          </form>
          <button id='loginCreate'>Create Account</button>
          <button id='loginForgot'>Forgot Password</button>
        </fieldset>
      </div>
    );
  }
}
export default Login;
