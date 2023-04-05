
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  import { error } from "console";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPZscI4txP-29JlN9Z6P-QT7cN8iVRF-g",
    authDomain: "soundcloud-group-8-62a70.firebaseapp.com",
    databaseURL: "https://soundcloud-group-8-62a70-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "soundcloud-group-8-62a70",
    storageBucket: "soundcloud-group-8-62a70.appspot.com",
    messagingSenderId: "127931986621",
    appId: "1:127931986621:web:c83b20e5933358eedafdd4",
    measurementId: "G-KLCR8HER51"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  signUp.addEventListener('click', (e) => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, username, email, password)
    .then((userCredential) => {
        //Signed in
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email
        })
        alert("User Created")
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    })
  })
