const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dateInFuturt = new Date(date).setDate(day + days);
  return week[new Date(dateInFuturt).getDay()];
}

console.log(dayOfWeek(new Date(2019, 0, 1), 3));
