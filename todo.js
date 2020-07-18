const todoContainaer = document.querySelector(".js-todo");
const todoForm = todoContainaer.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoList = todoContainaer.querySelector(".js-todoList");

function onSubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  if (value === "") {
    return;
  }
  todoInput.value = "";
  addTodo(value);
  addTodoInStorage(value);
}

function addTodoInStorage(value) {
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

function delTodoInStorage(value) {
  const todoList = JSON.parse(localStorage.getItem("todo"));
  if (todoList) {
    for (let i in todoList) {
      if (todoList[i].value == value) {
        todoList.splice(i, 1);
      }
    }
    localStorage.setItem("todo", JSON.stringify(todoList));
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

function deleteTodo(event) {
  const target = event.target;
  const targetDiv = target.parentElement;
  const value = targetDiv.querySelector(".todo_text").innerHTML;
  todoList.removeChild(targetDiv);
  delTodoInStorage(value);
}

function addTodo(value) {
  const todo = document.createElement("div");
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "todo_btn";
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  const text = document.createElement("span");
  text.className = "todo_text";
  text.innerHTML = value;

  todoList.appendChild(todo);
  todo.appendChild(deleteBtn);
  todo.appendChild(text);
}

function init() {
  showTodo();
}

todoForm.addEventListener("submit", onSubmit);
init();
