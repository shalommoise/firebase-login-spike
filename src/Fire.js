import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCketJS1yVGmybg-URs-CpbnFtZd3oMw0w",
  authDomain: "fir-example-548b2.firebaseapp.com",
  databaseURL: "https://fir-example-548b2.firebaseio.com",
  projectId: "fir-example-548b2",
  storageBucket: "fir-example-548b2.appspot.com",
  messagingSenderId: "383288875729",
  appId: "1:383288875729:web:8de5d33fb54df8444483f0",
};
const Fire = firebase.initializeApp(config);
export default Fire;
