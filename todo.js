const todoContainaer = document.querySelector(".js-todo");
const todoForm = todoContainaer.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoList = todoContainaer.querySelector(".js-todoList");

function onSubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  addTodo(value);
  saveTodo(value);
}

function deleteTodo(event) {
  console.log(event.target);
  alert("Asdf");
}

function saveTodo(value) {
  const todoList = JSON.parse(localStorage.getItem("todo"));
  if (todoList) {
    const newOne = {
      id: todoList.length,
      value: value,
    };
    todoList.push(newOne);
    localStorage.setItem("todo", JSON.stringify(todoList));
  } else {
    const newOne = [
      {
        id: 0,
        value: value,
      },
    ];
    localStorage.setItem("todo", JSON.stringify(newOne));
  }
}

function showTodo() {
  const todoList = JSON.parse(localStorage.getItem("todo"));
  if (todoList) {
    for (let i of todoList) {
      addTodo(i.value);
    }
  }
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

function init() {
  showTodo();
}

todoForm.addEventListener("submit", onSubmit);
init();
