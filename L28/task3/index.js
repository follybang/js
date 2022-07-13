export const mult = firstNumber => secondNumber => firstNumber * secondNumber;
export const twice = mult(2);
export const triple = mult(3);

console.log(twice(20));
console.log(triple(20));
