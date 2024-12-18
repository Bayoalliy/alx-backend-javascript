export default function cleanSet(set, startString) {
  if (!startString.length) {
    return '';
  }
  return [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.replace(startString, ''))
    .join('-');
}
