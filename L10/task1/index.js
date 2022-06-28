const randomNumbers = [17, NaN, 13.17, 99, Infinity, '100', 'NaN'];

const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

console.log(getFiniteNumbers(randomNumbers));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

console.log(getFiniteNumbersV2(randomNumbers));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

console.log(getNaN(randomNumbers));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

console.log(getNaNV2(randomNumbers));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

console.log(getIntegers(randomNumbers));
