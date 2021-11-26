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

<<<<<<< HEAD
const object1 = { a: 1, b: 2, c: 3 };
const array1 = ['a', 'c', 'd'];

console.log(pickProps(object1, array1));
=======
const ppl = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(getAdults(ppl));
>>>>>>> e223bc286fb03dd34133d28ba9b4174457dc121f
