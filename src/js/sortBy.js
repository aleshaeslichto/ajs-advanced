// for...in
export default function orderByProps(objectSort, arrSort = []) {
  let arrKeys = [];
  for (const key in objectSort) {
    if (arrSort.indexOf(key) === -1) {
      arrKeys.push(key);
    }
  }
  arrKeys = [...arrSort, ...arrKeys.sort()];

  const result = [];
  for (const key of arrKeys) {
    result.push({ key, value: objectSort[key] });
  }
  return result;
}
