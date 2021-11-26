function sortAsc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmpVar = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmpVar;
        done = false;
      }
    }
  }
  return arr;
}

function sortDesc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] < arr[i]) {
        const tmpVar = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmpVar;
        done = false;
      }
    }
  }
  return arr;
}
