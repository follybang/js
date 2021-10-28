/* eslint-disable no-restricted-syntax */
'use strict';

function checker(arr) {}

const numbers = [11, 22, 33, 44, 55, 66];
let maxNumber = 0;
let minNumber = 100;

for (let i of numbers) {
  if (maxNumber < i) {
    maxNumber = i;
  }
}

console.log(maxNumber);

for (let j of numbers) {
  if (minNumber > j) {
    minNumber = j;
  }
}

console.log(minNumber);
