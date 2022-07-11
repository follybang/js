export function getDiff(startDate, endDate) {
  let totalSec;
  if (startDate < endDate) {
    totalSec = new Date(endDate - startDate) / 1000;
  } else {
    totalSec = new Date(startDate - endDate) / 1000;
  }

  const days = Math.floor(totalSec / (3600 * 24));
  const hours = Math.floor(totalSec / 3600) % 24;
  const minutes = Math.floor(totalSec / 60) % 60;
  const seconds = Math.floor(totalSec) % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(2011, 1), new Date(2001, 10, 12, 12, 30, 31)));
console.log(getDiff(new Date(2001, 10, 12, 12, 30, 31), new Date(2011, 1)));
