const tasks = [
  { text: 'Buy milk', id: Math.round(Math.random() * 1000), done: false },
  {
    text: 'Pick up Tom from airport',
    id: Math.round(Math.random() * 1000),
    done: false,
  },
  { text: 'Visit party', id: Math.round(Math.random() * 1000), done: false },
  { text: 'Visit doctor', id: Math.round(Math.random() * 1000), done: true },
  { text: 'Buy meat', id: Math.round(Math.random() * 1000), done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const inputElement = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const listItem = document.querySelector('.list__item');

const addNewElement = () => {
  const inputValue = inputElement.value;
  if (inputValue === '') return;
  tasks.push({
    text: inputValue,
    id: Math.round(Math.random() * 1000),
    done: false,
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  inputElement.value = '';
};

const turnElChecked = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const checkboxId = event.target.dataset.id;
  const taskInArray = tasks.find(({ id }) => id === +checkboxId);
  console.log(taskInArray);
  if (taskInArray.done) {
    taskInArray.done = false;
  } else {
    taskInArray.done = true;
  }

  event.target.closest('.list__item').classList.toggle('list__item_done');
  listElem.innerHTML = '';
  renderTasks(tasks);
};

createTaskBtn.addEventListener('click', addNewElement);
listElem.addEventListener('click', turnElChecked);
