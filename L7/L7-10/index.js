const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, current) => acc + current);
};

const numbers = [1, 2, 3];
console.log(sum(numbers));
