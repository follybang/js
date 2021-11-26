// unsorted array => sorted array

const sortArray = numbers => numbers.slice().sort((a, b) => a - b);

const arr = [1, 5, 3, 4, 11, 51, 23, 12, 100];

console.log(sortArray(arr));

console.log(arr);
