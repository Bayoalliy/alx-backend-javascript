export default function getListStudentIds(objLst) {
  const lst = [];
  function getId(obj) {
    for (const key in obj) {
      if (key === 'id') {
        lst.push(obj[key]);
      }
    }
  }
  if (Array.isArray(objLst)) {
    objLst.map(getId);
  }
  return lst;
}
