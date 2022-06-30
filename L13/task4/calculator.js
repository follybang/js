export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('2 + 2'));
console.log(calc('2 - 2'));
console.log(calc('4 * 4'));
console.log(calc('4 / 4'));
console.log(calc(1));
