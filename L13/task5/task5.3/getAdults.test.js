import { getAdults } from './getAdults';

it('should return adults', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return adults', () => {
  expect(getAdults({ Tracy: 25, Richard: 12 })).toEqual({ Tracy: 25 });
});

it('should return empty object', () => {
  expect(getAdults({})).toEqual({});
});
