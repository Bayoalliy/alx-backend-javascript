export default function getStudentsByLocation(objLst, city) {
  return objLst.filter((obj) => obj.location === city);
}
