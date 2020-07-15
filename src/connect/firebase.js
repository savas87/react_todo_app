import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAd1UUiS0EX800E2gmCPiWGfdAEbFf_-SQ",
  authDomain: "react-todo-app-e791c.firebaseapp.com",
  databaseURL: "https://react-todo-app-e791c.firebaseio.com",
  projectId: "react-todo-app-e791c",
  storageBucket: "react-todo-app-e791c.appspot.com",
  messagingSenderId: "705004140111",
  appId: "1:705004140111:web:c8b983575be67ef4c85c3a",
});

const db = firebaseConfig.firestore();
export default db;
