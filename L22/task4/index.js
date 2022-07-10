const checkbox = document.querySelector('.task-status');
const getBoolean = () => console.log(checkbox.checked);
checkbox.addEventListener('click', getBoolean);
