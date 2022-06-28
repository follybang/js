const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }

  const result = text.match(new RegExp(str, 'g'));
  return result.length;
};

console.log(countOccurrences('reference', 'r'));
