//  ==== CLASSES ====
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

//  ==== INSTANCES ====
const history = new Course(1, "History");
const science = new Course(2, "Science");
const math = new Course(3, "Math");

const jake = new Student(1, "Jake", [1,2,3]);
const mike = new Student(2, "Mike", [1,3]);
const john = new Student(1, "John", [2,3]);

const mrHowser = new Teacher("Mr. Howser", 1);
const mrsMiller = new Teacher("Mrs. Miller", 2);
const mrsSmith = new Teacher("Mrs. Smith", 3);

const courses = [history, science, math];
const students = [jake, mike, john];
const teachers = [mrHowser, mrsMiller, mrsSmith];

//  ==== FUNCTIONS ====

// ** 1. Find how many students in a teacher's class? **
function studentsInTeacherCourse(teacher, students) { // pass the teacher and all students

    const courseId = teacher.courseSessionId;

    // new array of students that have a matching course id
    const studentsInClass = students.filter(student => student.classes.includes(courseId));

    const studentCount = studentsInClass.length; // how many students are in the array
    const result = `${teacher.name} has ${studentCount} students in their course.`;
    return result;

}

// == FUNCTION CALLS ==
console.log(studentsInTeacherCourse(mrHowser, students));
console.log(studentsInTeacherCourse(mrsMiller, students));
console.log(studentsInTeacherCourse(mrsSmith, students));



// ** 2. List each student and a list of teachers associated to that student **

function allStudentsTeachers(students, teachers){ // pass all students and all teachers
    const allStudents =[]; // create empty array for return list

    students.forEach(student => { // list all students
        const singleStudent = [student.studentName];

        student.classes.forEach(courseId => { // look at each course
            const teacherInClass = teachers.filter(teacher => teacher.courseSessionId === courseId); // find the teacher for the courseSessionId

            let teacherName = teacherInClass.map(teacher => teacher.name); // map the array of Teacher objects to grab the Teacher.name
            singleStudent.push(teacherName);
        });

        allStudents.push(singleStudent); // combine each students list of teachers to the return list
    });

    return allStudents;
}

// == FUNCTION CALL ==
console.log(allStudentsTeachers(students, teachers));

// ==== OUTPUT ====

// run 'node index.js' in console to view output

    // Mr. Howser has 2 students in their course.
    // Mrs. Miller has 2 students in their course.
    // Mrs. Smith has 3 students in their course.
    // [
    //   [ 'Jake', [ 'Mr. Howser' ], [ 'Mrs. Miller' ], [ 'Mrs. Smith' ] ],
    //   [ 'Mike', [ 'Mr. Howser' ], [ 'Mrs. Smith' ] ],
    //   [ 'John', [ 'Mrs. Miller' ], [ 'Mrs. Smith' ] ]
