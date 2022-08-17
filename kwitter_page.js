//YOUR FIREBASE LINKS
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
const roomName = localStorage.getItem("room-name");

function getData() {
  firebase
    .database()
    .ref("/" + roomName)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          console.log(firebase_message_id);
          console.log(message_data);
          const name = message_data["name"];
          const like = message_data["like"];
          const message = message_data["message"];
          const nameWithTag = `<h4> ${name}"<img class='user_tick' src='tick.png'>`;
          const messageWithTag = `<h4 class='message_h4'>" ${message}</h4>`;
          const likeWithTag = `<button class='btn btn-warning' id=${firebase_message_id} value=${like} onclick=${updateLike(
            this.id
          )}>`;
          const likeWithSpam = `<span class='glyphicon glyphicon-thumbs-up'>Like: ${like}</span></button><hr>`;
          const row = `${nameWithTag}${messageWithTag}${likeWithSpam}`;
          document.querySelector("#output").innerHTML += row;
          //End code
        }
      });
    });
}
getData();

const send = () => {
  const messageValue = document.querySelector("#msg").value;
  firebase.database().ref(roomName).push({
    name: username,
    msg: messageValue,
    like: 0,
  });
  messageValue.value = "";
};

const logout = () => {
  localStorage.removeItem("room-name");
  localStorage.removeItem("username");
};

const updateLike = (messageId) => {
  const likes = document.querySelector(messageId).value;
  const updateLikes = Numeber(likes) + 1;
  console.log(updateLikes);

  firebase.database().ref(roomName).child(messageId).update({
    like: updateLike,
  });
};
