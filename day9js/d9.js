var name1 = ["sima", "pranjal",  "anshul", "anuja", "kiran"];
name1.sort();
console.log(name1)

var numbers = [98, 78, 65, 34, 23, 90, 77];
numbers.sort();
console.log(numbers)

var numbers2 = [98, 78, 65, 34, 23, 90, 77];

numbers2.sort((a, b) => b - a);
console.log(numbers2)
numbers2.sort((a, b) => a - b);
console.log(numbers2)

// function myFunction() { }
//   () => 

// JSON.stringify - convert JS data into JSON 
// JSON.parse     - convert JSON data into JS

var myObject = { iriseStudent: "hello" }

var students = JSON.stringify(myObject)

console.log(students)
console.log(students.iriseStudent)

students = JSON.parse(students)
console.log(students)
console.log(students.iriseStudent)