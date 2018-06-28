// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favInstructor = props.favInstructor;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} recieves a pefect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach((subject) => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallange(subject) {
    console.log(`${this.name} has begun the sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

/*
! Test Data
*/
const fred = new Instructor({
  name: 'Josh',
  location: 'UT',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Yo! Waddup!',
});

const steven = new Student({
  name: 'Steven',
  location: '404',
  age: 100,
  gender: 'male',
  favLanguage: 'Korean',
  specialty: '404',
});

const dani = new ProjectManager({
  name: 'Dani',
  location: 'St. Paul',
  age: 23,
  gender: '',
  favLanguage: 'Python',
  specialty: 'kanji',
  catchPhrase: 'this is garbage',
  gradClassName: 'CS7',
  favInstructor: 'Josh Knell',
});

/*
! Test Console Logs
*/
dani.standup('@cs7');
dani.debugsCode(steven, 'JS');