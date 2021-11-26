// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]

// const flatArray = arr => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

//   return flatArray;
// };

// const flatArray = arr => arr.reduce((acc, elem) => acc.concat(elem), []);

const flatArray = arr => arr.flat();

const initArray = [1, [2, 3, 4], 5, [6]];

console.log(flatArray(initArray));

// [1, 2, 3, 4] => 10;

// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// });
