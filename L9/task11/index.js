// 1. get object keys array
// 2. iterate keys array and create new object on every step
// 3. sort and return result array

const getCustomersList = obj => {
  const idArray = Object.keys(obj);
  return idArray.map(key => ({ ...obj[key], id: key })).sort((a, b) => a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));
console.log(customers);
