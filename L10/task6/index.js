const getRandomNumbers = (length, from, to) => {
  if (Math.ceil(from) >= to) {
    return null;
  }

  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(Math.round(Math.random() * (to - from) + from));
  }
  return result;
};

console.log(getRandomNumbers(5, 1, 3));
console.log(getRandomNumbers(5, -1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(10, -3, 10));
console.log(getRandomNumbers(5, 1.4, 1.62));
console.log(getRandomNumbers(5, 2.5, 3));
