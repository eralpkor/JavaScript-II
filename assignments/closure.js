// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function first() {
  let name = 'I am the first function';
  console.log('This is from first function:', name);

  function second() {
    let sec = 'I am in the second function ';
    console.log(sec);

    function third() {
      let lastFunc = 'I am the last one...';
      console.log(lastFunc);
    }

    third();
  }

  second();
}
 first();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// Recursion?
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1;
  return function () {
    return count++;
  }
};

// Example usage: const newCounter = counter();
var newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      return count++;
    },
    decrement: function() {
      return count--;
    }
  };
};

let newCounterFactory = counterFactory();

newCounterFactory.increment(); // 1
newCounterFactory.increment(); // 2
newCounterFactory.increment(); // 3
newCounterFactory.decrement(); // 2
newCounterFactory.decrement(); // 1
newCounterFactory.decrement(); // 0

