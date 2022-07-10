const input = document.querySelector('.text-input');
const getText = () => console.log(input.value);
input.addEventListener('change', getText);
