const numbers = [1, 10, 9, 11];

function squareArray(arr) {
  const square = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    square.push(arr[i] * arr[i]);
  }
  return square;
}

console.log(squareArray(numbers));
console.log(squareArray(''));
