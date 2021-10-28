function getSpecialNumbers(from, to) {
  const specialNumbers = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(0, 100);
console.log(specialNumbers);
