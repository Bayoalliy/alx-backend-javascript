export default function getListStudentIds(objLst) {
  const lst = [];
  for (const obj of objLst) {
    for (const key in obj) {
      if (key === 'id') {
        lst.push(obj[key]);
      }
    }
  }
  return lst;
}
