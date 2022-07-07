// function sumOfSquares() {
//   return [].reduce.apply(arguments, [(acc, el) => acc + el]);
// }

export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + el * el);
}

console.log(argsSum(1, 2, 3, 4));
console.log(argsSum2(1, 2, 3, 4));
