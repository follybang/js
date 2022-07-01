export function makeCounter() {
  let memory = 0;

  return function () {
    return memory++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());

console.log(counter2());
