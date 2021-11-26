const numbers = [22, 11, [434, 13], 16, 14, 100, 50];

const flatArray = arr => arr.flat().sort((a, b) => a - b);

console.log(numbers);
console.log(flatArray(numbers));
