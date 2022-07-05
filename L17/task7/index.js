export const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  setFullName(fullName) {
    const fullNameArray = fullName.split(' ');
    const [firstName, lastName] = fullNameArray;
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(user.getFullName());
user.setFullName('Tom Rich');
