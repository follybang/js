export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }

  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};

const user1 = new User('Tom', 17);
console.log(user1);

user1.sayHi();
user1.requestNewPhoto();
user1.setAge(30);
console.log(user1);
user1.setAge(11);
console.log(user1);

console.log(user1.setAge(-7));
console.log(user1);
