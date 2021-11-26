/* eslint-disable no-restricted-syntax */

const getAdults = obj => {
  const resultObject = {};
  for (let i in obj) {
    if (obj[i] >= 18) {
      resultObject[i] = obj[i];
    }
  }
  return resultObject;
};

const ppl = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(getAdults(ppl));
