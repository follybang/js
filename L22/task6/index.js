const button = document.querySelector('.single-use-btn');
const clicked = () => {
  console.log('clicked');
  button.removeEventListener('click', clicked);
};
button.addEventListener('click', clicked);
