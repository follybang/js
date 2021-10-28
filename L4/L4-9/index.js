let sum = 0;
for (let x = 1; x <= 1000; x += 1) {
  sum += x;
}

const result = sum / 1234 > sum % 1234;

console.log(result);
