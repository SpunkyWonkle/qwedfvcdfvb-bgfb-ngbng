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

var user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="bonkle " + user_name

  function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"  
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localstorage.setitem("room_name", name);
    window.location = "chat_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localstorage.removeItem("room_name");
      window.location = "index.html";
}