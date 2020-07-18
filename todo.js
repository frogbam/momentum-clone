const todoContainaer = document.querySelector(".js-todo");
const todoForm = todoContainaer.querySelector("form");
const todoInput = todoForm.querySelector("input");
todoForm.addEventListener("submit", addTodo);

function addTodo() {
  const todo = todoInput.value;
  const span = document.createElement("span");
  const text = document.createTextNode(todo);
  todoContainaer.appendChild(span);
  span.appendChild(text);
}

function init() {}

init();
