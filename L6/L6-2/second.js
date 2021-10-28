/* eslint-disable no-restricted-syntax */
const arr = [11, 22, 33, 44, 55, 66];
const string = 'string';

function getSum(arr) {
  let sumOfNumbers = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const sum of arr) {
    sumOfNumbers += sum;
  }
  return sumOfNumbers;
}

console.log(getSum(arr));
console.log(getSum(string));
