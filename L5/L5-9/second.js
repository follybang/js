/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
function getPrimes(n) {
  let i = 1;
  a: while (i <= n) {
    let j = 2;
    i += 1;
    while (j < i) {
      if (i % j === 0) {
        continue a;
      }
      j += 1;
    }
    console.log(i);
  }
}
getPrimes(120);
