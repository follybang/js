const numbers = [11, 22, 33, 44, 55];

// function sum(numbers) {
//   let sumOfNumbers = 0;
//   for (let i = 0; i <= numbers.length - 1; i += 1) {
//     sumOfNumbers += numbers[i];
//   }
//   return sumOfNumbers;
// }

// const sumOfElements = sum(numbers);
// console.log('Result: ' + sumOfElements);

const arr = numbers;

arr[2] = 1000;
console.log(numbers);
