const randomNumbers = [11.11, 75, 80, 91.1];

// function getTotalPrice(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }

//   const result = Math.floor(sum * 100) / 100;
//   return `$${result}`;
// }

function getTotalPrice(arr) {
  const sum = arr.reduce((acc, current) => acc + current);
  return `$${Math.floor(sum * 100) / 100}`;
}

console.log(getTotalPrice(randomNumbers));
