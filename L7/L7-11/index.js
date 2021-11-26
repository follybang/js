const filterNames = (arr, text) => arr.filter(elem => elem.includes(text) && elem.length > 5);

const names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
console.log(filterNames(names, 'n'));
