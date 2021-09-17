let m = 10;
const n = 20;
let result = 1;

do {
  if (m % 2 === 1) {
    result *= m;
  }
  m++;
} while (m <= n);

console.log(result);

let result = 1;
for (let m = 10; m <= 20; m++) {
  if (m % 2 === 1) {
    result *= m;
  }
}

console.log(result);

for (let i = 1; i <= 5; i++) {
  console.log('\n=> ' + i + ' <=\n\n');

  for (let j = 1; j <= 10; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);
  }
}

let result = 0;

while (true) {
  const userInput = prompt('Your number');
  if (!userInput) {
    break;
  }
  result += Number(userInput);
}

let result = 1;
for (let m = 10; m <= 20; m++) {
  if (m % 2 === 0) {
    continue;
  }
  result *= m;
}

console.log('Result: ' + result);

const n = 100;
let m = 1;
let sum = 0;

while (m <= n) {
  sum += m;
  m++;
}

console.log('Result: ' + sum);
