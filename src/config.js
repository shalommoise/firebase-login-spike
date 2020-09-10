import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const userRef = firestore.doc(`users/${user.uid}`);
// const snapshot = await userRef.get();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const config = {
  apiKey: "AIzaSyCketJS1yVGmybg-URs-CpbnFtZd3oMw0w",
  authDomain: "fir-example-548b2.firebaseapp.com",
  databaseURL: "https://fir-example-548b2.firebaseio.com",
  projectId: "fir-example-548b2",
  storageBucket: "fir-example-548b2.appspot.com",
  messagingSenderId: "383288875729",
  appId: "1:383288875729:web:8de5d33fb54df8444483f0",
};
