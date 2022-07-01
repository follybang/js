export const createCalculator = () => {
  let memory = 0;

  function add(num) {
    memory += num;
  }

  function decrease(num) {
    memory -= num;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
const calc2 = createCalculator();

calc1.decrease(3);
calc1.add(10);
console.log(calc1.getMemo());
console.log(calc2.getMemo());
