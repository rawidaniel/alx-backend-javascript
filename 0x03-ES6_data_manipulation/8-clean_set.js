export default function cleanSet(set, startString) {
  const array = [];
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  for (const ele of set.values()) {
    if (ele.startsWith(startString)) {
      array.push(ele.slice(startString.length));
    }
  }
  return array.join('-');
}
