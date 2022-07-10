const input = document.querySelector('.text-input');
const getValue = event => console.log(event.target.value);
input.addEventListener('change', getValue);
