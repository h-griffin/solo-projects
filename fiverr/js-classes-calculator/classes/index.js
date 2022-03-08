class Student {
    constructor(studentId, studentName, classes){
        this.studentId = studentId;
        this.studentName = studentName;
        this.classes = classes;
    }
}


class Course{
    constructor(courseSessionId, courseName){
        this.courseSessionId = courseSessionId;
        this.courseName = courseName;
    }
}

class Teacher {
    constructor(name, courseSessionId){
        this.name = name;
        this.courseSessionId = courseSessionId;
    }
}

const history = new Course(1, "History");
const science = new Course(2, "Science");
const math = new Course(3, "Math");
const courses = [];
courses.push(history, science, math);
// console.log(courses);

const jake = new Student(1, "Jake", [1,2]);
const mike = new Student(2, "Mike", [1,3]);
const john = new Student(1, "John", [2,3]);
const students = [];
students.push(jake, mike, john);
// console.log(students);

const mrHowser = new Teacher("mrHowser", 1);
const mrsMiller = new Teacher("mrsMiller", 2);
const mrsSmith = new Teacher("mrsSmith", 3);
const teachers = [];
teachers.push(mrHowser, mrsMiller, mrsSmith);
// console.log(teachers);


// how many students in teachers class
function studentsInTeacherCourse(teacher, students) {
    const classId = teacher.courseSessionId;

    // filter through all students classes and adding to new array if they have the classId
    const studentsInClass = students.filter(student => student.classes.includes(classId));

    console.log(studentsInClass);

    const studentCount = studentsInClass.length;
    return studentCount;

}

console.log(studentsInTeacherCourse(mrHowser, students));
console.log(studentsInTeacherCourse(mrsMiller, students));
console.log(studentsInTeacherCourse(mrsSmith, students));

// list each student - get course id - get teacher for course

