import * as firebase from "firebase";

// Initialize Firebase
var config = {
  authDomain: "ingus-info.firebaseapp.com",
  databaseURL: "https://ingus-info.firebaseio.com",
  projectId: "ingus-info",
  storageBucket: "ingus-info.appspot.com",
  messagingSenderId: "132242895267"
};
firebase.initializeApp(config);
