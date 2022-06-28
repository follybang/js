/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  Object.assign(userData, { id: userId });
  return userData;
}

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

function addPropertyV4(userData, userId) {
  return {
    ...userData,
    ...{ id: userId },
  };
}

console.log(addPropertyV1(user, '17'));

console.log(addPropertyV2(user, '19'));

console.log(addPropertyV3(user, '120'));

console.log(addPropertyV4(user, '1200'));
