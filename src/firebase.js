import firebase from 'firebase';
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCq7ysOiiGaqtwsbYY1Y4Cl2x2MaK5CAcA",
    authDomain: "vue-shop-220ff.firebaseapp.com",
    projectId: "vue-shop-220ff",
    storageBucket: "vue-shop-220ff.appspot.com",
    messagingSenderId: "465240292789",
    appId: "1:465240292789:web:a1e88e103f82a701b6adfc"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb, db}