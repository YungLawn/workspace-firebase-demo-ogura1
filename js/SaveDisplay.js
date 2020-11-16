// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
  e.preventDefault();

  //get value of the form using serializeArray method
  var data = $("form").serializeArray();
  console.log(data);

  var inputJson = {};
  for(var i = 0; i < data.length;i++){

    var name = data[i]["name"];
    var value = data[i]["value"];
    // console.log(name + " " + value);
    inputJson[name] = value;
  }
  
  console.log(inputJson);

  firebase
    .firestore()
    .collection("survey")
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();

});

// update the result in table
