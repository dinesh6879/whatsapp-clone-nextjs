import firebase from 'firebase'
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBr9bTek7dbnDqXtX28dXbjmjXAeU6RpY0",
    authDomain: "whatsapp-9a35c.firebaseapp.com",
    projectId: "whatsapp-9a35c",
    storageBucket: "whatsapp-9a35c.appspot.com",
    messagingSenderId: "654920751140",
    appId: "1:654920751140:web:60abae83439b97c26de0b1",
    measurementId: "G-81GZBRZQZW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
