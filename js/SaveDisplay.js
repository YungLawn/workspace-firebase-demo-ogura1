const firebaseConfig = {
  apiKey: "AIzaSyDaq17_jm_sBe6XEffuf8uye6wXoq5WgYQ",
  authDomain: "final-project-660e8.firebaseapp.com",
  projectId: "final-project-660e8",
  storageBucket: "final-project-660e8.appspot.com",
  messagingSenderId: "798331069936",
  appId: "1:798331069936:web:a6b7fa5b75cacef8dca935",
  measurementId: "G-NBT3QYCHDR"
};


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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  //get value of the form using serializeArray method
  var data = $("form").serializeArray();
  console.log(data);

  var inputJson = {};
  for (var i = 0; i < data.length; i++) {
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

//get data from database
firebase
  .firestore()
  .collection("survey")
  .onSnapshot(function(querySnapshot) {
    console.log("size: " + querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log("1: " + doc.data());
      console.log("2: " + doc.data().choice);
      console.log("3: " + doc.data().comm);
    });
  });

firebase
  .firestore()
  .collection("survey")
  .onSnapshot(function(querySnapshot) {
    console.log(querySnapshot);
    console.log(querySnapshot.size);

    var one = parseInt($("#ans1").text());
    var two = parseInt($("#ans2").text());
    var three = parseInt($("#ans3").text());
    var four = parseInt($("#ans4").text());
    var five = parseInt($("#ans5").text());

    querySnapshot.forEach(doc => {
      var choice = doc.data().choice;

      if (choice == "A") {
        one ++;
        $("#ans1").text(one);
      }
      if (choice == "B") {
        two++;
        $("#ans2").text(two);
      }
      if (choice == "C") {
        three++;
        $("#ans3").text(three);
      }
      if (choice == "D") {
        four++;
        $("#ans4").text(four);
      }
      if (choice == "E") {
        five++;
        $("#ans5").text(five);
      }
    });
  });
