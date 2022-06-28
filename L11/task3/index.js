function splitString(str, len) {
  if (typeof str !== 'string') {
    return null;
  }

  const strArr = [];
  let startPosition = 0;
  let dots = '';

  if (len === undefined) {
    len = 10;
  }

  while (true) {
    const chunk = str.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    if (chunk.length < len) {
      for (let i = chunk.length; i < len; i += 1) {
        dots += '.';
      }
      strArr.push(chunk + dots);
      return strArr;
    }

    strArr.push(chunk);
    startPosition += len;
  }

  return strArr;
}

console.log(splitString());

console.log(splitString('1234123412341234123412', 4));
// ('adsfasdfas', 4) => ['adsf', 'asdf', 'as'] => ['adsf', 'asdf', 'as..']
