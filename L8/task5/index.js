/* eslint-disable no-restricted-syntax */

const pickProps = (obj, props) => {
  const resultObject = {};
  for (let i in obj) {
    for (let j of props) {
      if (i == j) {
        resultObject[i] = obj[i];
      }
    }
  }
  return resultObject;
};

const object1 = { a: 1, b: 2, c: 3 };
const array1 = ['a', 'c', 'd'];

console.log(pickProps(object1, array1));
