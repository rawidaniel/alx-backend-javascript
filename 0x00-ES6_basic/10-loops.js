export default function appendToEachArrayValue(array, appendString) {
  const arrayTwo = [];
  for (let arg of array) {
    arrayTwo.push(appendString + arg);
  }

  return arrayTwo;
}
