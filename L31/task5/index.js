// input: time
// output: delayed function execution

// 1. create new promise
// 2. set delay for resolve
// 3. return delayed promise

export function delay(time) {
  const pr = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return pr;
}
