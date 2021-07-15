import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1RNqdiR6OHkzgi2WOCiqcJdyoRyDK4K0",
  authDomain: "clone-f5a0d.firebaseapp.com",
  projectId: "clone-f5a0d",
  storageBucket: "clone-f5a0d.appspot.com",
  messagingSenderId: "923375598241",
  appId: "1:923375598241:web:a5a770f4e5cab5f64e4ee0",
  measurementId: "G-XTDG3T5KEK"

  ////Your firebase confing code here///
});


const auth = firebase.auth();

export {auth};