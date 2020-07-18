const usernameContainer = document.querySelector(".js-username");
const usernameInput = usernameContainer.querySelector("input");
const greetingContainer = document.querySelector(".js-greeting");
const greetingH1 = greetingContainer.querySelector("h1");

function checkName() {
  username = localStorage.getItem("name");
  if (username) {
    sayHello();
  }
}

function sayHello() {
  usernameInput.style.visibility = "hidden";
  greetingH1.innerHTML = `Hello ${username}!`;
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
