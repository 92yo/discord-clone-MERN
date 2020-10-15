import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKPaMujZ4n5tBbU1c9Q3wQmxL0_SMqvcQ",
  authDomain: "discord-clone-mern-d4e49.firebaseapp.com",
  databaseURL: "https://discord-clone-mern-d4e49.firebaseio.com",
  projectId: "discord-clone-mern-d4e49",
  storageBucket: "discord-clone-mern-d4e49.appspot.com",
  messagingSenderId: "815402719527",
  appId: "1:815402719527:web:779d826b675945c1e07102",
  measurementId: "G-BBYJR0PJ5H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
