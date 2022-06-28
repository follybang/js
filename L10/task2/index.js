const randomNumbers = ['g7', '7eleven', 11.11, 75, 80, 91.1];

function getParsedIntegers(arr) {
  const result = arr.map(n => Number.parseInt(n));
  return result;
}

console.log(getParsedIntegers(randomNumbers));

function getParsedIntegersV2(arr) {
  const result = arr.map(n => parseInt(n));
  return result;
}

console.log(getParsedIntegersV2(randomNumbers));

function getParsedFloats(arr) {
  const result = arr.map(n => Number.parseFloat(n));
  return result;
}

console.log(getParsedFloats(randomNumbers));

function getParsedFloatsV2(arr) {
  const result = arr.map(n => parseFloat(n));
  return result;
}

console.log(getParsedFloatsV2(randomNumbers));
