function findDivCount(a, b, n) {
  let count = 0;
  for (let x = a; x <= b; x += 1) {
    if (x % n === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(findDivCount(2, 10, 2));
