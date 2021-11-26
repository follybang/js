const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(number => {
    if (number % 2 === 0) {
      return number + delta;
    }
    return number;
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(increaseEvenEl(numbers, 20));
console.log(increaseEvenEl(''));
