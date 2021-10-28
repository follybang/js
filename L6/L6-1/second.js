const arr = [11, 12, 13, 14];

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [arr.length, arr[0], arr[arr.length - 1]];
}

const arrayBounds = getArrayBounds(arr);
console.log(arrayBounds);
