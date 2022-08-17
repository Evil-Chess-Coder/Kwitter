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

const addUser = () => {
  const usernameVal = document.querySelector("#username").value;
  firebase
    .database()
    .ref("/")
    .child(usernameVal)
    .update({ purpose: "Adding User" });
};
