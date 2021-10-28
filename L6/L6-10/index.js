const numbers = [1, 2, 3, 4, 5, 6];

function cloneArr(arr) {
  const yyz = [];

  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i of arr) {
    yyz.push(i);
  }
  return yyz;
}

console.log(cloneArr(numbers));
