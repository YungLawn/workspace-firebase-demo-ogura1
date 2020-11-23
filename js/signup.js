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
console.log("1 start");

//sign up when user click button
$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("2 button clicked");

  //use provided sign in method

  var email = $('input[name="username"]').value;
  console.log("3: " + email);
  var pass = document.getElementById("password").value;
  console.log("4: " + pass);

  // var email = "cteelon@usca.edu";
  // var psw = "aiken123";
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(user =>{
    console.log("success");
  }).catch(error=>{
    console.log(error.code);
    console.log(error.message);
  });

});