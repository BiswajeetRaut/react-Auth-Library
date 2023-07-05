import firebase from "firebase";
declare const db: firebase.firestore.Firestore;
declare const auth: firebase.auth.Auth;
declare const provider: firebase.auth.GoogleAuthProvider;
export { auth, provider };
export default db;
