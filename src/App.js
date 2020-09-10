import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";
import { config } from "./config";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import Signup from "./signup";

import withFirebaseAuth, {
  WrappedComponentProps,
} from "react-with-firebase-auth";

const firebaseApp = firebase.initializeApp(config);

const firebaseAppAuth = firebaseApp.auth();

export const firestore = firebase.firestore();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  // EmailAuthProvider: new firebase.auth.signInWithEmailAndPassword(),
};

class App extends React.Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "userEmail")
      this.setState((currentState) => {
        return { email: value };
      });
    if (name === "userPassword")
      this.setState((currentState) => {
        return { password: value };
      });
  };

  clickHandler = (event, email, password) => {
    event.preventDefault();
  };
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithEmailAndPassword,
    } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <header className="App-header">
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <div>
              <div>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
              </div>

              <form>
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
                  Sign In!
                </button>
              </form>
              <Signup />
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
