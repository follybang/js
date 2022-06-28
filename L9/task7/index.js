const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const getTotalRevenue = transactions => {
  let sum = 0;
  transactions.map(obj => (sum += obj.amount));
  return sum;
};

console.log(getTotalRevenue(dayTransactions));

let age = 44;
console.log(age);
const passportId = 444560;
console.log(passportId);
var height = 180;
console.log(height);
