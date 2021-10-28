/* eslint-disable no-restricted-syntax */
'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7];

function increaseEvenEl(arr, delta) {
  const resultArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const i of arr) {
    if (i % 2 === 0) {
      resultArr.push(i + delta);
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(increaseEvenEl(numbers, 100));
console.log(increaseEvenEl(''));
console.log(increaseEvenEl([], 57));
