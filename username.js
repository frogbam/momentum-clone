const usernameContainer = document.querySelector(".js-username");

function checkName() {
  username = localStorage.getItem("name");
  if (username) {
    sayHello();
  } else {
    makeInput();
  }
}

function sayHello() {
  usernameContainer.innerHTML = `<h1>Hello ${username}!`;
}

function makeInput() {
  usernameContainer.innerHTML =
    '<input style="text" id="nameInput" placeholder="type your name here" onkeypress="if(event.keyCode==13) {setName();}">';
}

function setName() {
  username = document.getElementById("nameInput").value;
  localStorage.setItem("name", username);
  sayHello();
}

function init() {
  checkName();
}

init();
