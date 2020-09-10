import React, { Component } from "react";

class signup extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
  };

  clickHandler = (event, email, password) => {
    event.preventDefault();
    this.setState((currentState) => {
      return { email: "", password: "", displayName: "" };
    });
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "userEmail")
      this.setState((currentState) => {
        return { email: value };
      });
    else if (name === "userPassword")
      this.setState((currentState) => {
        return { password: value };
      });
    else if (name === "displayName")
      this.setState((currentState) => {
        return { displayName: value };
      });
  };
  render() {
    const { email, password, displayName } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="displayName">Name:</label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            value={displayName}
            onChange={this.changeHandler}
          />
          <label htmlFor="userEmail">Email:</label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            value={email}
            onChange={this.changeHandler}
          />
          <label htmlFor="userPassword">Password:</label>
          <input
            type="text"
            name="userPassword"
            id="userPassword"
            value={password}
            onChange={this.changeHandler}
          />
          <button
            type="submit"
            onClick={(event) => {
              this.clickHandler(event, email, password);
            }}
          >
            Sign Up!
          </button>
        </form>
      </div>
    );
  }
}

export default signup;
