const numbers = [11, 22, 33, 44];
const numbers2 = [1, 2, 3, 9];

function checkSum(arr) {
  let sumOfNumbers = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let sum of arr) {
    sumOfNumbers += sum;
  }
  if (sumOfNumbers > 100) {
    return true;
  }
  return false;
}

console.log(checkSum(numbers));
console.log(checkSum(numbers2));
console.log(checkSum(''));
