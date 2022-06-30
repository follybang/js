/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
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
console.log(getAdults({ Tracy: 25, Richard: 12 }));
console.log(getAdults({}));
