/* eslint-disable no-restricted-syntax */
const numbers = [11, 22, 33, 44, 55, 66];

function swap(arr) {
  const [a, ...rest] = arr;
  return [...rest, a];
}

console.log(swap(numbers));

function swapManual(arr) {
  let numbersArr = [];
  for (const sum of arr) {
    if (sum !== arr[0]) {
      numbersArr.push(sum);
    }
  }
  numbersArr.push(arr[0]);
  return numbersArr;
}

console.log(swapManual(numbers));
