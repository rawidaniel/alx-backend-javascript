export default function cleanSet(set, startString) {
  const array = [];
  for (const ele of set.values()) {
    if (ele.includes(startString) && startString) {
      array.push(ele.slice(startString.length));
    }
  }
  return array.join('-');
}
