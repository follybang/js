const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, current) => acc + current) / arr.length;
};

const numbers = [1, 2, 3, 4, 5];
console.log(arrAverage(numbers));
