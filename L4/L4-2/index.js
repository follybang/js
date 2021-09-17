const m = 1;
const n = 15;
let c = m;
let result = 1;

while (c <= n) {
  if (c % 2 === 1) {
    result *= c;
  }
  c += 1;
}

console.log(result);
