import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDomain: "react-todo-app-e791c.firebaseapp.com",
  databaseURL: "https://react-todo-app-e791c.firebaseio.com",
  projectId: "",
  storageBucket: "react-todo-app-e791c.appspot.com",
  messagingSenderId: "",
  appId: "",
});

const db = firebaseConfig.firestore();
export default db;
