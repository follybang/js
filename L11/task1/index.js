const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  if (typeof text !== 'string') {
    return null;
  }

  if (len === undefined) {
    len = 10;
  }

  while (true) {
    const chunk = text.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));

    startPosition += len;
  }

  return strArr.join('\n');
};

console.log(splitText('qwerasdfzxcvtyuighjkbnm,', 4));
console.log(splitText(1, 4));
