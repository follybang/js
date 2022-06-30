export const getSquaredArray = arr => arr.map(num => num * num);

export const getOddNumbers = arr => arr.filter(num => num % 2 === 1);

export default (a, b) => a + b;

console.log(getSquaredArray([1, 2, 3]));
console.log(getOddNumbers([1, 2, 3, 4, 5]));
