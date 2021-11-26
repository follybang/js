/* eslint-disable no-restricted-syntax */

const numbers = [11, 22, 33, 44, 55, 66];

function checker(arr) {
  function getMaxNumber() {
    let maxNumber = 0;
    for (const i of arr) {
      if (maxNumber < i) {
        maxNumber = i;
      }
    }
    return maxNumber;
  }

  function getMinNumber() {
    let minNumber = getMaxNumber(arr);
    for (const j of arr) {
      if (minNumber > j) {
        minNumber = j;
      }
    }
    return minNumber;
  }

  return getMaxNumber(numbers) + getMinNumber(numbers) > 1000;
}

console.log(checker(numbers));
