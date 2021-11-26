function includes(arr, n) {
  for (let i of arr) {
    if (i === n) {
      return true;
    }
  }
  return false;
}
