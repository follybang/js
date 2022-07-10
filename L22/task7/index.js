const buttons = document.querySelectorAll('.btn');
const handleClick = () => {
  console.log(event.target.textContent);
};
buttons[0].addEventListener('click', handleClick);
buttons[1].addEventListener('click', handleClick);
