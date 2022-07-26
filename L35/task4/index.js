const testData = '{"name":"Tom"}';
const testData2 = '"name":"Tom"}';

function parseUser(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

console.log(parseUser(testData));
console.log(parseUser(testData2));
