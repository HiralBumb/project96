
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDkf06l3EtnK725OPvGGWiSjBiNOBYDTJY",
  authDomain: "kwitter-p-76d57.firebaseapp.com",
  databaseURL: "https://kwitter-p-76d57-default-rtdb.firebaseio.com",
  projectId: "kwitter-p-76d57",
  storageBucket: "kwitter-p-76d57.appspot.com",
  messagingSenderId: "901228673380",
  appId: "1:901228673380:web:5a1892b6fcc5fd7a37a271"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
    
     user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}