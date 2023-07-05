import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCscnfbhj8p27eD6BhHwZo8MseEI31Tm9U",
  authDomain: "collabflow-82014.firebaseapp.com",
  projectId: "collabflow-82014",
  storageBucket: "collabflow-82014.appspot.com",
  messagingSenderId: "488570500193",
  appId: "1:488570500193:web:e7f2a05d8a1a4722962620",
  measurementId: "G-XDT6E4ZYFP"
};
var firebaseApp = /*#__PURE__*/firebase.initializeApp(firebaseConfig);
var auth = /*#__PURE__*/firebaseApp.auth();
var provider = /*#__PURE__*/new firebase.auth.GoogleAuthProvider();
var GoogleButton = function GoogleButton(_ref) {
  var change = _ref.change,
    setChange = _ref.setChange;
  var AuthCheck = function AuthCheck() {
    setChange(!change);
    console.log(change);
    auth.signInWithPopup(provider).then(function (result) {
      setChange(result);
    })["catch"](function (error) {
      alert(error.message);
    });
  };
  return React.createElement("button", {
    onClick: AuthCheck,
    style: {
      'height': "40px",
      'width': "max-contents",
      'padding': "12px",
      'border': "1px solid black",
      'borderRadius': "5px",
      'backgroundColor': "white",
      'cursor': "pointer",
      'color': "black"
    }
  }, "Google Button");
};

export { GoogleButton };
//# sourceMappingURL=react-auth-library.esm.js.map
