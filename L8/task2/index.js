/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const concatProps = obj => {
  const tmpArr = [];
  for (const key in obj) {
    tmpArr.push(obj[key]);
  }
  return tmpArr;
};

const randomObj = {
  name: 'John Doe',
  age: 17,
  interest: 'football',
};

console.log(concatProps(randomObj));
