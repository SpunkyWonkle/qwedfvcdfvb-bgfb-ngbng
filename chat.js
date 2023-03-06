// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCaCCxlc_TuzIAFlCwpFyM4bJkoOyaIC2w",
    authDomain: "sussierthanmost.firebaseapp.com",
    databaseURL: "https://sussierthanmost-default-rtdb.firebaseio.com",
    projectId: "sussierthanmost",
    storageBucket: "sussierthanmost.appspot.com",
    messagingSenderId: "972241832131",
    appId: "1:972241832131:web:5df45222dfa1f104ea7a76"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



