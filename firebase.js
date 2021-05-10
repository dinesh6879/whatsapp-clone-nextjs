import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyBROfY8rRT9P_Hc4K4Vyr349NGg_LFG2j0",
    authDomain: "dinesh-6d772.firebaseapp.com",
    databaseURL: "https://dinesh-6d772-default-rtdb.firebaseio.com",
    projectId: "dinesh-6d772",
    storageBucket: "dinesh-6d772.appspot.com",
    messagingSenderId: "263967240199",
    appId: "1:263967240199:web:3b6ad2ccd32515e4ebbaa2",
    measurementId: "G-5VJW273Z2T"

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
