const usernameContainer = document.querySelector(".js-username");

function printName() {
  username = localStorage.getItem("name");
  if (username) {
    sayHello(username);
  } else {
    makeInput();
  }
}

function sayHello(usernamae) {
  usernameContainer.innerHTML = `<h1>Hello ${username}!`;
}

function makeInput() {
  const usernameInput = document.createElement("input");
  usernameInput.placeholder = "type your name here";
  usernameInput.id = "nameInput";
  usernameInput.style = "text";
  const form = document.createElement("form");
  form.addEventListener("submit", setName);
  form.appendChild(usernameInput);
  usernameContainer.appendChild(form);
}

function setName() {
  username = document.getElementById("nameInput").value;
  localStorage.setItem("name", username);
  sayHello(username);
}

function init() {
  printName();
}

init();
