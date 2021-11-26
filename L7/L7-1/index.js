const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);
//   const specialNumbers = [];

//   const result = numbers.filter(num => {
//     return num % 3 === 0 ? true : false;
//   });

//   const result = numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });

//   numbers.forEach(function checkIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }

//   return result;

const arr = [1, 2, 3, 4, 5, 6, 18, 19, 21];
console.log(getSpecialNumbers(arr));
