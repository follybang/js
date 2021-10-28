const numbers = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  const xxx = [];
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i of arr) {
    xxx.unshift(i);
  }
  return xxx;
}

console.log(reverseArray(numbers));
