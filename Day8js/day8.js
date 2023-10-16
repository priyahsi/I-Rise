const array1 = [1, 3, 2, 4];
array1.sort();
console.log(array1)
const array2 = [1, 3, 9, 4];
array2.sort((a, b)=>b-a);
console.log(array2)


const array3 = ['a', 'b', 'c'];

array3.forEach((element) => console.log(element));


const array4 = [1, 2, 3, 4];

0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);

// // Object
var myObject = {students:20, studentsList:["vinay", "anjali", "rani"]}
console.log(myObject.students)
console.log(myObject.studentsList[0])
// local storage
var myStudent = ["isha", "rina", "asmita"]
localStorage.setItem("student",  JSON.stringify(myStudent));

// JSON.stringify(myname); // convert js into json 
// JSON.parse(myname); // convert json into js



// localStorage.removeItem("StudentsList"))
var data =JSON.parse(localStorage.getItem("student"))
console.log(data, "data from is")
