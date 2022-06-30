const calc = expression => {
  const valuesArray = expression.split(' ');

  let result;

  switch (valuesArray[1]) {
    case '+':
      result = Number(valuesArray[0]) + Number(valuesArray[2]);
      break;
    case '-':
      result = valuesArray[0] - valuesArray[2];
      break;
    case '*':
      result = valuesArray[0] * valuesArray[2];
      break;
    case '/':
      result = valuesArray[0] / valuesArray[2];
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('1 + 2'));
console.log(calc('4 - 2'));
console.log(calc('2 / 2'));
console.log(calc('4 * 4'));
