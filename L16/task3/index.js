export function createArrayOfFunctions(len) {
  if (len === undefined) {
    return [];
  } else if (isNaN(len)) {
    return null;
  }

  const resultArray = [];
  for (let index = 0; index < len; index += 1) {
    resultArray.push(function () {
      return index;
    });
  }
  return resultArray;
}

const array = createArrayOfFunctions(11);

console.log(array);
console.log(array[4]());
console.log(createArrayOfFunctions('string'));
console.log(createArrayOfFunctions());
