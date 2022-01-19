//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name")

function send(){
      msg = document.getElementById("msg").value

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").innerHTML = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
