import listOfStudents, { StudentALX, ALXClass } from "./9-hoisting.js";
console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

console.log(listOfStudents[0] instanceof StudentALX);
console.log(listOfStudents[0].alxClass instanceof ALXClass);
