/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});

console.log(userDataPromise);

userDataPromise.then(function onSuccess(userData) {
  console.log(userData);
});

userDataPromise.then(function onSuccess({ name, age }) {
  console.log(`My name is ${name}. I am ${age} years old`);
});
