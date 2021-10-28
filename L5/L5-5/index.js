function getSum(num1, num2) {
  let sum = 0;
  for (let x = num1; x <= num2; x += 1) {
    if (x % 2 === 0) {
      sum += x;
    }
  }
  return sum;
}
console.log(getSum(10, 20));
