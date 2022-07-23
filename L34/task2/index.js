const link = 'https://62dc0b824438813a261052e1.mockapi.io/v1';

export function getUsersList() {
  return fetch(link).then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${link}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
  return fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${link}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}

export function updateUser(userId, userData) {
  return fetch(`${link}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

const newUserData = {
  id: '1',
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// getUsersList().then(users => {
//   console.log(users);
// });

// getUserById('1').then(userData => {
//   console.log(userData);
// });

const updatedUserData = {
  id: '100',
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('1').then(() => {
//   console.log('User updated');
// });
