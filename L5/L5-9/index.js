/* eslint-disable no-continue */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
function getPrimes(n) {
  a: for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        continue a;
      }
    }
    console.log(i);
  }
}
getPrimes(120);
