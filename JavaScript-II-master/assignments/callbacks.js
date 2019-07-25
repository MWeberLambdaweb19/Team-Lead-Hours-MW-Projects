// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// console.log(items[0]);
// console.log(items.length);
// writing a Higher Order Function (HOF)


function getLength(arr) {
  return arr.length
  // getLength passes the length of the array into the callback.
}
//console.log(itemsHOF(items, getLength));

// getLengthHOF


function getLengthHOF(arr, cb) {
  return cb(arr.length)
}

const itemsHOF = (arr, cb) => {
  return cb(arr)
}

//getLengthHOF(items, function(mack){console.log(mack)});

function last(arr) {
  return arr[arr.length-1]
  // last passes the last item of the array into the callback.
}

//console.log(itemsHOF(items, last));

function lastHOF(arr, cb) {
  return cb(arr[arr.length-1])
}
/////lastHOF(items, function(last){console.log(last)})

// function sumNumsHOF(x, y, cb) {
//   return cb(x,y)
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

// sumNumsHOF(5, 5, function(num1, num2){console.log(num1 + num2)})

function MathCalculator (x, y, cb) {
  return cb(x, y)
}

// function sumNums(x, y) {
//   return (x + y)
// }

// console.log(MathCalculator(sumNums, 5, 5))

// function multiplyNumsHOF(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb (x, y)
// }

multiplyNumsHOF(5, 5, function(num1, num2){
  console.log(num1+num2)
})

function multiplyNums(apple, orange) {
  return apple*orange
}

console.log(MathCalculator(5, 5, multiplyNums))

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
