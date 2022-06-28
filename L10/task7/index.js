const superRound = (num, prec) => {
  let acc = 10;
  for (let i = 1; i < prec; i += 1) {
    acc *= 10;
  }

  return [
    Math.floor(num * acc) / acc,
    Math.trunc(num * acc) / acc,
    Math.ceil(num * acc) / acc,
    Math.round(num * acc) / acc,
    +num.toFixed(prec),
  ];
};

console.log(superRound(11.12556, 2));
console.log(superRound(6.11, 3));
console.log(superRound(-11.12353, 3));
