const todoContainaer = document.querySelector(".js-todo");
const todoForm = todoContainaer.querySelector("form");
const todoInput = todoForm.querySelector("input");

function onSubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  addTodo(value);
}

function addTodo(todo) {
  const div = document.createElement("div");
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  div.appendChild(deleteSpan);

  div.innerHTML += todo;

  todoContainaer.appendChild(div);
}

function init() {}

todoForm.addEventListener("submit", onSubmit);
init();
