let x = 0;
const y = 1000;
let sum = 0;

while (x <= y) {
  if (x % 2 === 1) {
    console.log('Found');
    sum += x;
  }
  x += 1;
}

if (sum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
