// function reverseString(string) {
//   if (typeof string !== 'string') {
//     return null;
//   }

//   const charArray = string.split('');
//   const resultArray = [];
//   for (let char of charArray) {
//     resultArray.unshift(char);
//   }
//   return resultArray.join('');
// }

function reverseString(string) {
  if (typeof string !== 'string') {
    return null;
  }

  return string.split('').reverse().join('');
}

console.log(reverseString('abcdef g'));
