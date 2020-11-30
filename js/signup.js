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

//start ....
console.log("start");

//sign up when user click button
$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("button clicked");

  //use provided sign in method

  var email = document.getElementById("username").value;
  console.log("email: " + email);
  var pass = document.getElementById("password").value;
  console.log("password: " + pass);

  // var email = "cteelon@usca.edu";
  // var psw = "aiken123";
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then(success =>{
    console.log("save success!");
  }).catch(error=>{
    console.log(error.code);
    console.log(error.message);
  });

});