import React, { Component } from "react";
import Fire from "../Fire";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  login = (event) => {
    event.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {})
      .catch((err) => console.log(err));
  };
  signup = (event) => {
    event.preventDefault();
    Fire.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {})
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          {/* <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          /> */}
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
