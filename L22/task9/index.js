const checkbox = document.querySelector('.task-status');
const getBoolean = event => console.log(event.target.checked);
checkbox.addEventListener('change', getBoolean);
