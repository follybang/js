const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const getSpecialNumbers = arr => arr.filter(elem => elem % 3 === 0);

console.log(getSpecialNumbers(numbers));
