const testArray = ['  1.9 ', '16.4', 17, ' 1 dollar ', '18'];

// function cleanTransactionsList(arr) {
//   const result = [];
//   arr.forEach(el => result.push('$' + parseFloat(el).toFixed(2)));
//   return result;
// }

// function cleanTransactionsList(arr) {
//   return arr.map(el => '$' + parseFloat(el).toFixed(2));
// }

function cleanTransactionsList(arr) {
  const result = [];
  for (let el of arr) {
    if (/[a-zA-Z]/.test(el)) {
      continue;
    }

    result.push('$' + parseFloat(el).toFixed(2));
  }
  return result;
}

// ====================

console.log(cleanTransactionsList(testArray));
