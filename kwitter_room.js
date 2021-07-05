//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCRxZBExdqy6PR9aAX1U067LJMI4pDy1oM",
      authDomain: "kwitter-eccb8.firebaseapp.com",
      databaseURL: "https://kwitter-eccb8-default-rtdb.firebaseio.com",
      projectId: "kwitter-eccb8",
      storageBucket: "kwitter-eccb8.appspot.com",
      messagingSenderId: "303496978275",
      appId: "1:303496978275:web:33bb705c6ab9908856fd56",
      measurementId: "G-L55FE9MQ77"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function addroom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
    }
    
    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "index.html";
    }