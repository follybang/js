// 1. iterate array and find abs minimum number
// 2. square a abs number

export function getMinSquareNumber(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const absNumbers = array.map(num => Math.abs(num));
  const minNum = Math.min(...absNumbers);
  return minNum * minNum;
}

const rndNumbers = [10, -11, 7, 3];
console.log(getMinSquareNumber(rndNumbers));
console.log(getMinSquareNumber([]));
console.log(getMinSquareNumber(''));
