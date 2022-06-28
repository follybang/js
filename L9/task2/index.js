const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(users));

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// const player = { ...user };

// console.log(player);
// console.log(player === user);

// const copyObj = obj => ({ ...obj });

// console.log(copyObj(user));

// const { name = 'default', ...restProps } = user;

// console.log(name);
// console.log(restProps);

// const player = {
//   game: 'football',
//   ...restProps,
// };

// console.log(player);

//                  //

const user = {
  name: 'Tom',
  age: '17',
  sayHi: function () {
    console.log('Hi');
  },
};

user.sayHi();

// [1, 2].forEach;

console.log('text'.toUpperCase());
console.log((1).toFixed());
