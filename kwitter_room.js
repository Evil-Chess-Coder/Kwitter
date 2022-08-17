const firebaseConfig = {
  apiKey: "AIzaSyA8kAvKyAqAqxzhBHwwx3dxaHIZC66pytA",
  authDomain: "practice-59e5e.firebaseapp.com",
  databaseURL: "https://practice-59e5e-default-rtdb.firebaseio.com",
  projectId: "practice-59e5e",
  storageBucket: "practice-59e5e.appspot.com",
  messagingSenderId: "726106800755",
  appId: "1:726106800755:web:25623ac5738424b2302006",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const username = localStorage.getItem("username");
document.querySelector("#display-username").textContent = `Welcome ${username}`;
const addRoom = () => {
  const roomName = document.querySelector("#room-name").value;
  console.log(roomName);
  firebase
    .database()
    .ref("/")
    .child(roomName)
    .update({ purpose: "Adding Room" });
  localStorage.setItem("roomName", roomName);
  // window.location = "kwitter-page.html";
};

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log(Room_names);
        let row = `<div class="room-name" id="${Room_names}" onClick="redToRoomName(this.id)">#${Room_names}</div>`;
        document.querySelector("#output").innerHTML += row;
        //End code
      });
    });
}
getData();

const redToRoomName = (name) => {
  console.log(name);
  localStorage.setItem("room-name", name);
  window.location = "kwitter-page.html";
};
