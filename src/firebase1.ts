import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCscnfbhj8p27eD6BhHwZo8MseEI31Tm9U",
  authDomain: "collabflow-82014.firebaseapp.com",
  projectId: "collabflow-82014",
  storageBucket: "collabflow-82014.appspot.com",
  messagingSenderId: "488570500193",
  appId: "1:488570500193:web:e7f2a05d8a1a4722962620",
  measurementId: "G-XDT6E4ZYFP"
  };
// const firebaseApp = firebase.initializeApp(fireba)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider};
export default db;