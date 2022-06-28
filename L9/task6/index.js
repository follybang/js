const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = obj => {
  const objValues = Object.values(obj);
  const tmp = objValues.concat.apply([], objValues).map(nameObject => Object.values(nameObject));
  return tmp.concat.apply([], tmp);
};

const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(elem => elem.name);

console.log(getPeople(rooms));
