import { withdraw } from './withdraw';

it('should return transaction result', () => {
  expect(withdraw(['Ann', 'Jack', 'Buck'], [1000, 11, 777], 'Ann', 200)).toEqual(800);
});

it('should return transaction result', () => {
  expect(withdraw(['Ann', 'Jack', 'Buck'], [1000, 11, 777], 'Buck', 7)).toEqual(770);
});

it('should return transaction result', () => {
  expect(withdraw(['Ann', 'Jack', 'Buck'], [1000, 11, 777], 'Jack', 200)).toEqual(-1);
});
