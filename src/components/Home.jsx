import React, { Component } from "react";
import Fire from "../Fire";
class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout = () => {
    Fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logout}>LogOut</button>
      </div>
    );
  }
}

export default Home;
