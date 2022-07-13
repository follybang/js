const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};
export const shmoment = initualDate => {
  let modifiedDate = new Date(initualDate);

  const calc = {
    add(measureValue, value) {
      const currentMeasureValue = modifiedDate[getMethodsNames[measureValue]]();
      modifiedDate = new Date(
        modifiedDate[setMethodsNames[measureValue]](
          currentMeasureValue + value,
        ),
      );
      return this;
    },
    subtract(measureValue, value) {
      return this.add(measureValue, -value);
    },
    result() {
      return modifiedDate;
    },
  };

  return calc;
};

// const result = shmoment(new Date())
//   .add('years', 1000)
//   .subtract('months', 9)
//   .result();
// console.log(result);
