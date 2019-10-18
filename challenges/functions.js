// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume (a, b, cb) {
  return cb(a + b)
}
consume(2, 3, (sums) => {
  console.log(sums);
})

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (a, b, cb) {
  return cb(a + b)
}
add(5, 5, (consume) => {
  console.log(consume);
})

function multiply (a, b, cb) {
  return cb(a * b)
}
multiply(5, 5, (consume) => {
  console.log(consume);
})

function greeting (first, last, cb) {
  return cb(`Hello ${first} ${last}, nice to meet you!`)
}
greeting('Mary', 'Poppins', (consume) => {
  console.log(consume);
})

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

//nestedFunction can access internal because it is it downstream (nested inside).  It is inside and inner functions have access to the varibales in the outer function scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
