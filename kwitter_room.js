
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD_DQBTxHrDMMwPMGAxVmyyM1ALCJnDCns",
      authDomain: "chat-us-rooms.firebaseapp.com",
      databaseURL: "https://chat-us-rooms-default-rtdb.firebaseio.com",
      projectId: "chat-us-rooms",
      storageBucket: "chat-us-rooms.appspot.com",
      messagingSenderId: "23286172345",
      appId: "1:23286172345:web:3afb503bdddf50cee56968"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML ="Welcome "+user_name+"!"

function addRoom(){
     room_name = document.getElementById("room_name").value

     firebase.database().ref("/").child(room_name).update({
           purpose: "adding room"
     })
     localStorage.setItem("room_name" , room_name)

     window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names)
      row = "<div class='room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name){
         console.log(name);
         localStorage.setItem("room_name" , name)
         window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}