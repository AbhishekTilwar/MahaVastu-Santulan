// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKPYOOr3mgd2jVZ9mB4qqE1QZyJUOCCqo",
    authDomain: "codingbeyond-dashboard.firebaseapp.com",
    projectId: "codingbeyond-dashboard",
    storageBucket: "codingbeyond-dashboard.appspot.com",
    messagingSenderId: "161475864285",
    appId: "1:161475864285:web:f9158cc3f149bd9a1f9d34",
    measurementId: "G-9FWW7WY5GS"
      
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


function togglePassword() {
    var password = document.getElementById("password");
    var showPassword = document.getElementById("show-password");
    if (password.type === "password") {
      password.type = "text";
      showPassword.innerHTML = "<p>Hide &#x1F441;</p>";
    } else {
      password.type = "password";
      showPassword.innerHTML = "<p>Show &#x1F441;</p>";
    }
  }

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = "dashboard.html";
            //document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    var err = document.getElementById("error");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = "dashboard.html";
            //document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            err.textContent = "Invalid password or don't have access!"
            err.style.color = "red"
            console.log(error.code);
            console.log(error.message)
        });
}
