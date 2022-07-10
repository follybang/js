const button = document.querySelector('.single-use-btn');
const click = () => {
  console.log('clicked');
  button.removeEventListener('click', click);
};
button.addEventListener('click', click);
