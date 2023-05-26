// Exercise 1 : Analyzing
// Analyze these pieces of code before executing them. What will be the outputs
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//the it will display: ['bread', 'carrot', 'potato', 'chicken','apple', 'orange']
// ------2------
const country = "USA";
console.log([...country]);
//it will display: ['U', 'S', 'A']
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//it will display: [undefined, undefined]

// Exercise 2 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message.

const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
console.log(welcomeStudents)

// Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResidents = users.filter(user => user.role ==="Full Stack Resident")
console.log(fullStackResidents)

// 3. Bonus : Chain the filter method with a map method, 
// to return an array containing only the lastName of the Full Stack Residents.
const fullStackResLastNames = fullStackResidents.map(fullStackResident=>fullStackResident.lastName)
console.log(fullStackResLastNames);

// Exercise 3 : Star Wars
// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
});
console.log(combinedString);

// Exercise 4 : Employees #2
//Using the filter() method, create a new array,
// containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const studentsPassed= students.filter(student => student.isPassed)
console.log(studentsPassed)
studentsPassed.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))
