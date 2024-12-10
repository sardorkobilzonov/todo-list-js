const todoUlEl = document.querySelector(".todoCollectionUl");
const todoInputEl = document.querySelector(".todoText");
const todoFormEl = document.querySelector(".todoForm");

const TODOS = JSON.parse(localStorage.getItem("todos")) || [];

function todoQoshish(data) {
  while (todoUlEl.firstChild) {
    todoUlEl.firstChild.remove();
  }
  data.forEach((item) => {
    const ulLiEl = document.createElement("li");
    ulLiEl.className = "ulLi";
    ulLiEl.innerHTML = `
        <input ${item.status ? "checked" : ""} type="checkbox" />
        <span >${item.title}</span>
        `;
    todoUlEl.appendChild(ulLiEl);
  });
}

window.addEventListener("load", () => {
  todoQoshish(TODOS);
});

todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = {
    id: new Date().getTime(),
    title: todoInputEl.value,
    status: false,
  };
  TODOS.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(TODOS));
  todoQoshish(TODOS);
  todoInputEl.value = "";
});
