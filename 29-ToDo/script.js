const form = document.querySelector('#form');
const todosUl = document.querySelector('.todos');
const input = document.querySelector('.input');

const todos = JSON.parse(localStorage.getItem('todos'));

const addList = function (todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement('li');

    if (todo && todo.completed) {
      li.classList.add('completed');
    }

    li.innerText = todoText;

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      updateList();
    });

    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      li.remove();
      updateList();
    });

    todosUl.appendChild(li);
    input.value = '';
    updateList();
  }
};

const updateList = function () {
  todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((item) => {
    todos.push({
      text: item.innerText,
      completed: item.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
};

if (todos) {
  todos.forEach((todo) => {
    addList(todo);
    console.log(todo.text);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addList();
});
