function increaser(a, index) {
  if (a > index) {
    return a + index;
  }
  return a;
}

console.log(increaser(10, 20));
console.log(increaser(30, 20));
