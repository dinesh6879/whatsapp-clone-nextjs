import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBROfY8rRT9P_Hc4K4Vyr349NGg_LFG2j0",
    authDomain: "dinesh-6d772.firebaseapp.com",
    projectId: "dinesh-6d772",
    storageBucket: "dinesh-6d772.appspot.com",
    messagingSenderId: "263967240199",
    appId: "1:263967240199:web:1a6d9db3127e0f0cebbaa2",
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
