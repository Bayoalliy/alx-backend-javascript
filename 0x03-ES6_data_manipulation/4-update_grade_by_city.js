// Create a function updateStudentGradeByCity that returns an
// array of students for a specific city with their new grade
// It should accept a list of students (from getListStudents),
// a city (String), and newGrades (Array of “grade” objects) as parameters.
// newGrades is an array of objects with this format:

/*  {
    studentId: 31,
    grade: 78,
  }
*/

// Solution
export default function updateStudentGradeByCity(objLst, city, newGrades) {
  return objLst.filter((obj) => obj.location === city).map((obj) => {
    const sGrade = newGrades.filter((x) => x.studentId === obj.id)[0];
    return { ...obj, grade: sGrade ? sGrade.grade : 'N/A' };
  });
}
