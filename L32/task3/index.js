const makePromise = num =>
  new Promise(resolve => {
    resolve(num);
  });

// makePromise(17).then(number => {
//   console.log(number);
// });
