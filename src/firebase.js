import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQwpeHR21VRIBWQ6mFSbGjD1HUtWER9Gk",
  authDomain: "messenger-clone-ef70f.firebaseapp.com",
  projectId: "messenger-clone-ef70f",
  storageBucket: "messenger-clone-ef70f.appspot.com",
  messagingSenderId: "766621386277",
  appId: "1:766621386277:web:cb3d1ed7dff1f66a3821cc",
  measurementId: "G-F62RQHR13X",
});
const db = firebaseApp.firestore();
export default db;
