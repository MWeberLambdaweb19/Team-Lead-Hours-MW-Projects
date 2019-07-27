// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// global scope
var variable1 = "Hello 'World'"
var variable1 = "Hello World"
let variable2 = "Hello 'World'"
variable2 = "Hello World"
const variable3 = "Hello 'World'"

// functional scope
// can look out, but NEVER in
const myFunction = () => {
  let money = 600
  function Dad() {
    var allowance = 15
    let dadMoney = money - allowance
    console.log(`I had ${money} dollars, but after giving Child their allowance, I have ${dadMoney} dollars`)
    function Child() {
      console.log(`Yay, I have ${allowance} dollars!`)
      function GrandChild() {
        console.log(`Yay, one day I will have all of the ${money} dollars`)
      }
      GrandChild();
    }
    Child();
  }
  Dad();
}
myFunction();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
