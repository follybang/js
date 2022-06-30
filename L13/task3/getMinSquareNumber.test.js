import { getMinSquareNumber } from './getMinSquaredNumber.js';

it('should return squared abs minimum number from array', () => {
  const result = getMinSquareNumber([10, -11, 7, 3]);
  expect(result).toEqual(9);
});

it('should return infinity', () => {
  const result = getMinSquareNumber([]);
  expect(result).toEqual(Infinity);
});

it('should return null', () => {
  const result = getMinSquareNumber('');
  expect(result).toEqual(null);
});
