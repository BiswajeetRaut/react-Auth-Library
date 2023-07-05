import React from 'react';
import firebase from "firebase";
interface conf {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
const firebaseConfig:conf = {
  apiKey: "AIzaSyCscnfbhj8p27eD6BhHwZo8MseEI31Tm9U",
  authDomain: "collabflow-82014.firebaseapp.com",
  projectId: "collabflow-82014",
  storageBucket: "collabflow-82014.appspot.com",
  messagingSenderId: "488570500193",
  appId: "1:488570500193:web:e7f2a05d8a1a4722962620",
  measurementId: "G-XDT6E4ZYFP"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
interface GoogleButtonProps {
  change: (boolean | object);
  setChange: React.Dispatch<React.SetStateAction<(boolean | object)>>;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ change, setChange }) => 
{
    const AuthCheck =()=>{
        setChange(!change);
        console.log(change);
    auth.signInWithPopup(provider).then((result)=>{
        setChange(result);
    }).catch((error)=>{
        alert(error.message);
    });
}
return(
  <button onClick={AuthCheck} style={{
    'height':`40px`,
    'width':`max-contents`,
    'padding':`12px`,
    'border':`1px solid black`,
    'borderRadius':`5px`,
    'backgroundColor':"white",
    'cursor':`pointer`,
    'color':`black`,
}}>
    Google Button
  </button>
)}
;

