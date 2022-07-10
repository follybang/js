const btns = document.querySelectorAll('.pagination__page');
const handleClick = event => console.log(event.target.dataset.pageNumber);
[...btns].forEach(el => el.addEventListener('click', handleClick));
