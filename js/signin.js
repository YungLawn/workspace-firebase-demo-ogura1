var firebaseConfig = {
  apiKey: "AIzaSyA6BlQyU38IZj3MNizq4KeKttMvqnNuftU",
  authDomain: "grocerylist-41c62.firebaseapp.com",
  databaseURL: "https://grocerylist-41c62.firebaseio.com",
  projectId: "grocerylist-41c62",
  storageBucket: "grocerylist-41c62.appspot.com",
  messagingSenderId: "899318465752",
  appId: "1:899318465752:web:bd2ef218b10ac6c33b03ad",
  measurementId: "G-52120D3SXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$("#Login").submit(function(e) {
  e.preventDefault();
  console.log("button clicked");

  var email = "ccteelon@gmail.com";
  var password = "pieandcake123";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
