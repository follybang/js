const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr];
};

const numbers = [1, 2, 3, 4, 5];
console.log(cloneArr(numbers));
console.log(cloneArr(''));
