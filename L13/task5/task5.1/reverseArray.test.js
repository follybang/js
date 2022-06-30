import { reverseArray } from './reverseArray.js';

it('should return reversed array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it('should return null', () => {
  const result = reverseArray('');
  expect(result).toEqual(null);
});

it('should return reversed array of strings', () => {
  const result = reverseArray(['first', 'second', 'third']);
  expect(result).toEqual(['third', 'second', 'first']);
});
