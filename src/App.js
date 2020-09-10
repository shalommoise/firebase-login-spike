import React from "react";

import "firebase/auth";
import "./App.css";
import Fire from "./Fire";
import Home from "./components/Home";
import LogIn from "./components/Login";
class App extends React.Component {
  state = {
    user: {},
  };
  authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };
  componentDidMount = () => {
    this.authListener();
  };
  render() {
    return <div className="App">{this.state.user ? <Home /> : <LogIn />}</div>;
  }
}

export default App;
