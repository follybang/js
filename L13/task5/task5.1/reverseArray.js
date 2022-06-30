export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseArray(numbers));
console.log(reverseArray(''));
console.log(numbers);
console.log(reverseArray(['first', 'second', 'third']));
