const sortDesc = arr => arr.slice().sort((a, b) => b - a);

const numbers = [22, 11, 434, 13, 16, 14, 100, 50];

console.log(numbers);
console.log(sortDesc(numbers));
