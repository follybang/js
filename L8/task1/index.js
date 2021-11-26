const transformToObject = arr => {
  const obj = {};

  arr.forEach(elem => {
    obj[elem] = elem;
  });

  return obj;
};

const randomArr = [11, 'text'];
console.log(transformToObject(randomArr));
console.log(transformToObject([]));
