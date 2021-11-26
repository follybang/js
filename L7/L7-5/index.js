const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(elem => elem * elem);
};

const numbers = [2, 4, 5, 10];

console.log(numbers);
console.log(squareArray(numbers));
console.log(squareArray(''));
