# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that map returns a new array of elements while in turn passing each element back to the callback
.map() calls a provided function on each element of the provided array and returns a new array of the same size or new size
 
.forEach() doesn’t return anything, it simply calls the provided function on each element of the array.
 
To   iterate the array and perform some operation on each element like saving it into the database then it will be better to go with .forEach()
 
To transform the elements of the array then it will be good to choose .map() method. If you want to filter your data after modifying it then .map() is the good option because it creates a new array and we are free to perform any operation on that new array.


2. What is the difference between a function and a method?

Speaking strictly, a procedure is a subroutine that is executed purely for its side effects (like printing something to the screen) and returns no values. 
A function is a subroutine that always returns the same value given the same inputs and has no side effects. 
A method is a procedure or function that is associated with a class or object.  Methods are usually associated with object oriented programming.
For convenience programming languages don't always make a distinction between functions, procedures, and methods. They have one or two ways to declare a subroutine. Whether it's a function, procedure, or method depends on how the programmer uses it.
Function declarations are made up of several syntactical parts:
The function keyword
The name of the function
An optional list of parameters
The statements inside the block of code {}
function add(a,b){ 
 return a + b;
}


3. What is closure?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods.
Objects are not the only way to produce data privacy. Closures can also be used to create stateful functions whose return values may be influenced by their internal state.


4. Describe the four rules of the 'this' keyword.

There are four rules to this discovery. And they all have to do with where an object is bound. Remember, JavaScript has a global object (or execution context) that exists wherever JavaScript lives. In the browser this is called window and in node it’s called global/console. Either way, JavaScript lives inside of a context. Go ahead and try this out in your Chrome web browser.
Window/Global Object Binding
When in the global scope, the value of “this” is in the window/console Object;
 
Implicit Binding
Whenever a function is called by a preceding dot, the object before that dot is this.
New binding
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
Principle 4: Explicit binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined.


5. Why do we need super() in an extended class?

The extends keyword, and super(); function make it so trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we’re used to. super() is used to tell a parent’s constructor to be concerned with the child’s attributes vis versa and abstracts away the Object.create(this, Class) syntax
To create a subclass from this Animal class it’s really simple
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(this.name + ' barks.');
  }
}
 
No more .bind(), .call(), .apply() and Object.create() etc.


## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
