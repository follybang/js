const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Eternal',
  hasWheels: false,
  dropAnchor() {
    console.log('anchor dropped');
  },
  raiseAnchor() {
    console.log('anchor raised');
  },
};

Object.setPrototypeOf(ship, vehicle);

export function getOwnProps(obj) {
  const result = [];
  for (let prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop) && typeof obj[prop] !== 'function') {
      result.push(prop);
    }
  }
  return result;
}

console.log(getOwnProps(ship));
