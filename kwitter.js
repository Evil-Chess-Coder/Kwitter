const addUser = () => {
  const inputEl = document.querySelector("#username-input");
  localStorage.setItem("username", inputEl.value);
  window.location = "./kwitter_room.html";
};
