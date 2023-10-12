//push 

var result = [2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 1; i < 11; i++) {
    console.log(i)
    result.push(i)
}
console.log(result)
console.log(result.join(" "))

const fruits = ['banana', 'grapes', 'apple'];

const count = fruits.push('watermalon');
console.log(count);

console.log(fruits);


fruits.push('banana', 'grapes', 'apple');
console.log(fruits);


// pop

const colors = ['red', 'purple', 'orange', 'pink', 'yellow'];

console.log(colors.pop());


console.log(colors);


colors.pop();
colors.pop();

console.log(colors);
// const array1 = [5, 6, 7];
// array1.shift()
// array1.shift()
// array1.shift()
// console.log(array1)

// const firstElement = array1.shift();

// console.log(array1);


// console.log(firstElement);






var array3 = [3, 4, 5, 6]
array3.unshift(7)
array3.unshift(8)
array3.unshift(9,10)
console.log(array3)




var numbers = [5, 6, 7, 8, 9]

// function myFunc (){}
// const myFunction = () => { }
//   () => 

// for (var i = 0; i < numbers.length; i++) { }

var multiByTwo = numbers.map((i) => i * 3)
var additionByTwo = numbers.map((i) => i + 3)
console.log(multiByTwo, "multiByTwo")
console.log(additionByTwo, "additionByTwo")