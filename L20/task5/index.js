/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;

    this._name = name;

    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(obj => obj.name);
  }

  getUserIds() {
    return this.users.map(obj => obj.id);
  }

  getUserNameById(id) {
    let result;
    this.users.forEach(obj => {
      if (obj.id === id) {
        result = obj.name;
      }
    });
    return result;
  }
}

const test = new User(11, 'Tom');
const test1 = new User(15, 'Rick');
console.log(test);
console.log(test.name);
test.name = 'Bob';
console.log(test.name);

const test2 = new UserRepository([test, test1]);
console.log(test2);
console.log(test2.getUserNames());
console.log(test2.getUserIds());
console.log(test2.getUserNameById(11));
