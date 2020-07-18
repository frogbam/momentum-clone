const todoContainaer = document.querySelector(".js-todo");
const todoForm = todoContainaer.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoList = todoContainaer.querySelector(".js-todoList");

function onSubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  addTodo(value);
}

function deleteTodo(event) {
  console.log(event.target);
  alert("Asdf");
}

function addTodo(value) {
  const todo = document.createElement("div");
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "todo_btn";
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  todoList.appendChild(todo);
  todo.appendChild(deleteBtn);
  todo.innerHTML += value;
}

function init() {}

todoForm.addEventListener("submit", onSubmit);
init();
