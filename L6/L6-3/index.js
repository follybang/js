const people = ['Tom', 'Ann', 'Bob'];

people[10] = 1000;
people[people.length] = 'Jack';
people.length = 2;
people.unshift('Jack', 'John'); // add to start
people.push('Jack'); // add to end
const last = people.pop('Jack', 'John'); // delete to end
const first = people.shift('Tom'); // delete to start

console.log(last);
console.log(people);
console.log(people.length);

// from , to => [n % 3 === 0]

function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);
console.log(specialNumbers);
