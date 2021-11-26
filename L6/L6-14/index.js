function getSubArray(arr, n) {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    const tmp = arr.shift();
    result.push(tmp);
  }
  return result;
}
