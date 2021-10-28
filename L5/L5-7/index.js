function sum(from, to) {
  let sum = 0;
  while (from <= to) {
    sum += from;
    from += 1;
  }
  return sum;
}

function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}

console.log(compareSums(10, 10, 1, 2));
console.log(compareSums(1, 2, 3, 4));
