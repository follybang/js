const searchButton = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const getInput = () => console.log(searchInput.value);
searchButton.addEventListener('click', getInput);
