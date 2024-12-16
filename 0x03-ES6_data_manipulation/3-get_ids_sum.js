export default function getStudentIdsSum(objLst) {
  return objLst.reduce((acc, curr) => acc + curr.id, 0);
}
