/*
Closure is a way to access the variable inside the private box. This happens because of a saved reference to the lexical environment. Children will always get access to parent but parent does not have access to children. It is basically stored data that is carried with the internal function. By using closures, we can create variables that are stored in memory to be used in the future so it promotes memory efficient.
*/

// EX 1

/*
var num1 = 1
var num2 = 2

var sum = function () {
    return function () {
        return num1 + num2;
    }
}

var myFunc = sum()

console.dir(myFunc)

*/


// The above function will still refer to Global


// EX 2

/*
var num1 = 1

var sum = function () {
    var num2 = 2                // This is like a private property
    return function () {        // And we can access the private property for the closure
        return num1 + num2;
    }
}

var myFunc = sum()

console.dir(myFunc)
*/

// The above function will still refer to both Closure and Global


// EX 3

function bankAccount(initialBalance) {
    var balance = initialBalance        // This is like a private property
    return function () {                 // And we can access the private property for the closure
        return balance                  // Secure the private property
    }
}

var account = bankAccount(100)

console.dir(account)

// The above function will still refer to both Closure and Global


// EX 4

let num1 = 5
let num2 = 6

var sum = function () {
    return num1 + num2;     // let and var are different, thus we see "Script" instead of "Closure". Also, num1 and num2 can be globally accessed.
}

console.dir(sum)


// EX 5
/*
(function () {
    let num1 = 5
    let num2 = 6

    var sum = function () {
        return num1 + num2;
    }

    console.dir(sum)    // In this case you'll see 'Closure'. Because, they are enclosed in a block now.
})()
*/


// EX 6

function stopWatch() {
    var startTime = Date.now()

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}


var timer = stopWatch()


for (let i = 0; i < 10000000; i++) {
    var a = Math.random() * 10000000000;
}


timer() // Even after the delay (for loop), the timer() has kept track of its value by referencing. It doesn't matter how many lines/steps/executions were before timer(), JS will keep track of it. 

console.dir(timer)

// Performance optimization

// timer = null // After this line, JS will throwaway timer as garbage and the following console.log will not run. 

// console.log(timer)


// EX 7

function async() {
    var a = 20;

    setTimeout(() => {
        console.log(a)
    }, 3000);
}

async()

// The above function will still refer to both Closure and Global


// EX 8

function async() {
    var a = 20;
    function myFunc() {
        console.log(a)
    }
    setTimeout(myFunc, 3000);

    console.dir(myFunc)
}

async()

// The above function will still refer to both Closure and Global


// EX 9

function apiFunction(url) {
    fetch(url)
        //.then(response => console.log(response)) // This will not be in closure
        .then(response => console.log(url)) // But this will be in closure
}


apiFunction("https://jsonplaceholder.typicode.com/todos/1")

console.log(apiFunction())


// EX 10

for (let i = 0; i < 3; i++) {
    const myFunc = () => {
        console.log(i)
    };

    console.log(i)
    console.dir(myFunc)
    setTimeout(myFunc, 3000)
}

console.log('After for loop')

/*
The above output will be:

- 0 
- myFunc {inside the closure i = 0}
- 1 
- myFunc {inside the closure i = 1}
- 2
- myFunc {inside the closure i = 2}
- After for loop
- 0
- 1
- 2

*/

// As 'let' is block scope, it's using closure to make new instance of it.



// EX 11

for (var i = 0; i < 3; i++) {
    const myFunc = () => {
        console.log(i)
    };

    console.log(i)
    console.dir(myFunc)
    setTimeout(myFunc, 3000)
}

console.log('After for loop')


/*
The above output will be:

- 0
- myFunc {inside the global i = 3}
- 1
- myFunc {inside the global i = 3}
- 2
- myFunc {inside the global i = 3}
- After for loop
- 3 {3 times}

*/

// As 'var' function scope, it's being updated globally 