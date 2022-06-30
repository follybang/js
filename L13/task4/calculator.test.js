import { calc } from './calculator';

it('should return sum of numbers', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
});

it('should return substruction difference', () => {
  const result = calc('2 - 2');
  expect(result).toEqual('2 - 2 = 0');
});

it('should return result of multiplication', () => {
  const result = calc('4 * 4');
  expect(result).toEqual('4 * 4 = 16');
});

it('should return result of division', () => {
  const result = calc('4 / 4');
  expect(result).toEqual('4 / 4 = 1');
});

it('should return null', () => {
  const result = calc(1);
  expect(result).toEqual(null);
});
