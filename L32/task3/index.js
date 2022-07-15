export const makePromise = num => {
  const pr = new Promise(resolve => {
    resolve(num);
  });
  return pr;
};

// console.log(makePromise(17));

// makePromise(19).then(number => {
//   console.log(number);
// });
