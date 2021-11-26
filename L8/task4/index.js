<<<<<<< HEAD
const user = {
  name: 'Tom',
  age: 17,
};

user.hobby = 'football';
const anotherKey = 'married';
user[anotherKey] = false;
user['favorite music'] = 'rock';
user.address = {};
user.address.country = 'Ukraine';
user.address.building = 17;

console.log(user);
=======
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const getKeys = obj => {
  for (let i in obj) {
    console.log(i);
  }
};
>>>>>>> e223bc286fb03dd34133d28ba9b4174457dc121f
