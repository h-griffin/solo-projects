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
console.log(history);
console.log(science);
console.log(math);

const jake = new Student(1, "Jake", [1,2]);
const mike = new Student(2, "Mike", [1,3]);
const john = new Student(1, "John", [2,3]);
console.log(jake);
console.log(mike);
console.log(john);

const mrHowser = new Teacher("mrHowser", 1);
const mrsMiller = new Teacher("mrsMiller", 2);
const mrsSmith = new Teacher("mrsSmith", 3);
console.log(mrHowser);
console.log(mrsMiller);
console.log(mrsSmith);

