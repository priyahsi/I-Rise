var numbers = [5,67,54,3,89,90,65,88,34,23]
console.log(numbers)

function findSumAndEven(array) {
    console.log(array)

    for (var i = 0; i < array.length; i++) {
        console.log(array[i], i)
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} this number is even.`)
        } else {
            console.log(`${array[i]} this number is odd.`)
        }
    }
}
findSumAndEven(numbers)


// // // Q Find the count of numbers who odd and even.
var numbers = [5,67,54,3,89,90,65,88,34,23]
console.log(numbers)

function findSumAndEven(array) {
    console.log(array)
    var oddCount = 0;
    var evenCount = 0;

    for (var i = 0; i < array.length; i++) {
        console.log(array[i], i)
        if (array[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(oddCount, "-oddcount")
    console.log(evenCount, "-evenCount")
}
// findSumAndEven(numbers)

// // Nested for loops

for (var i = 0; i < Array.length; i++) {
    for (var j = 0; j < Array.length; j++) {

    }
}


var array = [5,67,54,3,89,90,65,88,34,23]
var target = 8;

for (var i = 0; i < array.length - 1; i++) {
    console.log(array[i], "i")
    for (var j = i + 1; j < array.length; j++) {
        console.log(array[j], "j", array[i], "i")
        if (array[i] + array[j] == target) {
            console.log(`${array[i]} + ${array[j]} = ${target}`)
        }
    }
}