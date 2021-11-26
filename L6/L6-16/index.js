/* eslint-disable no-restricted-syntax */
function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [];
  result.push(arr[0]);

  a: for (let i of arr) {
    for (let j of result) {
      if (i === j) {
        continue a;
      }
    }
    result.push(i);
  }
  return result.length;
}

console.log(removeDuplicates([11, 22, 22, 33, 33, 44, 55]));
