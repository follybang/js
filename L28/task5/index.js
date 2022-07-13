const checker = value => {
  let modifier = 1;
  if (value === 'years') {
    modifier *= 1000 * 60 * 60 * 24 * 30 * 12;
  } else if (value === 'months') {
    modifier *= 1000 * 60 * 60 * 24 * 30;
  } else if (value === 'days') {
    modifier *= 1000 * 60 * 60 * 24;
  } else if (value === 'hours') {
    modifier *= 1000 * 60 * 60;
  } else if (value === 'minutes') {
    modifier *= 1000 * 60;
  } else if (value === 'seconds') {
    modifier *= 1000;
  }
  return modifier;
};

const shmoment = initualDate => {
  let modifiedDate = new Date(initualDate);

  const calc = {
    add(measurementValue, value) {
      modifiedDate += value * checker(measurementValue);
      return this;
    },
    subtract(measurementValue, value) {
      modifiedDate -= value * checker(measurementValue);
      return this;
    },
    result() {
      return new Date(modifiedDate);
    },
  };

  return calc;
};

// const result = shmoment(new Date(10, 10, 10))
//   .subtract('years', 200)
//   .add('months', 5)
//   .result();
// console.log(result);
