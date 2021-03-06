localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));

export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

// console.log(getLocalStorageData());
// console.log(Object.entries(localStorage));
