/* eslint-disable prefer-object-spread */

const courier = {
  name: 'Sam',
  surname: 'Porter',
};

const uca = {
  surname: 'Bridges',
};

const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);

const mergeObjectsV3 = (obj1, obj2) => ({ ...obj1, ...obj2 });

const mergeObjectsV4 = (obj1, obj2) => ({ ...obj2, ...obj1 });

console.log(courier);
console.log(uca);
console.log(mergeObjectsV4(courier, uca));
