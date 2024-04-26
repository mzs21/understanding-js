/*
JS interprets its code into machine language. While doing so, it divides the main code into small chunks of code. And this small chunk of code is called 'Execution Context'.
*/

// First of all JS creates a 'Global Execution Context' (when there is no code). Inside that, the following objects are there -

/*

Global Exectuion Context

Phase: Loading/Creation     // In this state, the following objects are available 

window: global object

this: window                // 'this' keyword points to window

variable object

scope chain

*/

// Let's say, we have the following code now. {EX-1}


var topic = 'JS Execution Context'

function getTopic() {
    return topic;
}

getTopic()

// Now our 'Global Execution Context' looks like the following -

/*

Global Exectuion Context

Phase: Loading/Creation     // In this state, the following objects are available 

window: global object

this: window                // 'this' keyword points to window

topic: undefined            // Memory is allocated for the 'topic' variable in variable object

getTopic: fn()              // Memory is allocated for the 'getTopic' function in variable object and will create a reference of it

scope chain                 // scopes are defined here

*/


// Now 'Global Execution Context' will enter 'Execution' phase and will look like the following -

/*

Global Exectuion Context

Phase: Execution                 // In this state, the following objects are available 

window: global object

this: window                            // 'this' keyword points to window

topic: 'JS Execution Context'           // The value is assigned to 'topic' variable

getTopic: fn()                          // It's already referenced in the memory. It'll be called when it's necessary

scope chain                             // scopes are defined here

*/

// To understand the difference between 'Loading' and 'Execution' phase, let's look at the following code.

console.log(topic) // This will output 'undefined'

var topic = 'JS Execution Context'

function getTopic() {
    return topic;
}

getTopic()


// In case of Node.js the window object is called 'global', in Browser, it's 'window'.

// Let's move onto the next step.

// When the execution phase will come to the line where 'getTopic' is called, 

getTopic()

// A new context, named 'Function Execution Context' will be created.

// 'Function Execution Context' looks like following -

/*

Function Exectuion Context

Phase: Loading/Creation                 // In this state, the following objects are available 

arguments: {}                           // Like the window/global object, 'arguments' obejct is created. It's for this context only.

this: window                            // 'this' keyword points to window

variable object

scope chain
       
*/

// After this, 'Function Execution Context' will enter 'Execution' phase.

/*

Function Exectuion Context

Phase: Execution                         // In this state, the following objects are available 

arguments: {}                            // In our current example, we don't have any parameters/arguments in the funtion

this: window                             // 'this' keyword points to window

variable object                          // In our current example, we don't have any variable or functions inside the function

scope chain                              // Since there are no variable or functions inside the function scopes are not defined here. But if   
                                            there were then, scope would be defined here.

*/

// Now, compiler will go inside the function, and when it will find the word 'return', it will end the 'Function Exectuion Context'. 


function getTopic() {
    return topic;
}

// In the case, if there is no 'return' keyword in the function, then it will still 'return', but it will return 'undefined' as end the 'Function Exectuion Context'


// Let's see a nested function. EX - 2.
// The contexts are kept in a Stack data structure. In Stack, it's LIFO (Last in First Out).

// Example 2:

var a = 1;

function one() {
    console.log(a);

    function two() {
        console.log(b);
        var b = 2;

        function three(d) {
            console.log(c + d);
            let c = 3
        }
        three(4)
    }
    two()
}

one()

// Let's see the Stack.

/*
    |                          |
    |                          |
    | Global Execution Context |
    |__________________________|
*/

// This is our stack now. Let's see the execution context now.

// Firstly,

/*

Global Exectuion Context

Phase: Loading/Creation     // In this state, the following objects are available 

window: global object

this: window                // 'this' keyword points to window

a: undefined                // Memory is allocated for the 'a' variable in variable object

one: fn()                   // Memory is allocated for the 'one' function in variable object and will create a reference of it

scope chain

*/

// Then,

/*

Global Exectuion Context

Phase: Execution                        // In this state, the following objects are available 

window: global object

this: window                            // 'this' keyword points to window

a: 1                                    // The value is assigned to 'a' variable

one: fn()                               // It's already referenced in the memory. It'll be called when it's necessary

scope chain                             // scopes are defined here

*/

// Now it'll go to the line where function 'one' is called, then create a 'Function Execution Context' and push it to the Stack.

one()

// The stack now looks like this -

/*
    |                          |
    | one() Execution Context  |
    | Global Execution Context |
    |__________________________|
*/

/*

one() Exectuion Context

Phase: Loading/Creation                 // In this state, the following objects are available 

arguments: {}                           // Like the window/global object, 'arguments' obejct is created. It's for this context only.

this: window                            // 'this' keyword points to window

two: fn()                               // Memory is allocated for the 'two' function in variable object and will create a reference of it

scope chain
       
*/

// Now, the one() Execution Context will move to the 'Execution' phase. It will see

console.log(a)

// then it will check whether 'a' inside one() or not. It'll not find 'a' inside. So, it'll check the global context. In global context 'a' exists. So, it'll print the value of 'a' 

console.log(a) // 1

/*

one() Exectuion Context

Phase: Execution                         // In this state, the following objects are available 

arguments: {}                            // In our current example, we don't have any parameters/arguments in the funtion

this: window                             // 'this' keyword points to window

two: fn()                                // two function will be called when it goes to its line

scope chain                              

*/

// After seeing the two() function call, the two() Execution Context will be created and pushed to the Stack.

two()

// The stack now looks like this -

/*
    | two() Execution Context  |
    | one() Execution Context  |
    | Global Execution Context |
    |__________________________|
*/

/*

two() Exectuion Context

Phase: Loading/Creation                 // In this state, the following objects are available

arguments: {}                           // Like the window/global object, 'arguments' obejct is created. It's for this context only.

this: window                            // 'this' keyword points to window

b: undefined                            // Memory is allocated for the 'b' variable in variable object

three: fn()                             // Memory is allocated for the 'three' function in variable object and will create a reference of it

scope chain

*/

// Now, the two() Execution Context will move to the 'Execution' phase. It will see

console.log(b);
var b = 2;

function three(d) {
    ...
}

/*

two() Exectuion Context

Phase: Execution                         // In this state, the following objects are available 

arguments: {}                            // In our current example, we don't have any parameters/arguments in the funtion

this: window                             // 'this' keyword points to window

b: 2                                     // The value is assigned to 'b' variable

three: fn()                              // three function will be called when it goes to its line

scope chain                              

*/


console.log(b);         // Undefined
var b = 2;              // Value gets assigned

function three(d) {     // function found and called
    ...
}

// Let's see the context of function three(4) {with parameter 4}

three(4)


// The stack now looks like this -

/*
    | three() Execution Context |
    | two() Execution Context   |
    | one() Execution Context   |
    | Global Execution Context  |
    |___________________________|
*/

/*

three() Exectuion Context

Phase: Loading/Creation                 // In this state, the following objects are available

arguments: {0:4}                        // Value '4' is assigned to the param in the 0th index

this: window                            // 'this' keyword points to window

d: 4                                    // Memory is allocated for the 'd' variable in variable object and as the value has been already 
                                           provided, so it has been assigned

c:                                      // Memory is allocated for the 'c' variable

scope chain

*/

// As 'c' is defined with 'let' so, unlike 'var' it's not making it undefined, but it'll know there is a variable called 'c'

// Now, the three() Execution Context will move to the 'Execution' phase. It will see


console.log(c + d);
let c = 3

/*

three() Exectuion Context

Phase: Execution                         // In this state, the following objects are available 

arguments: {0:4}                         // Value '4' is assigned to the param in the 0th index

this: window                             // 'this' keyword points to window

d: 4                                     // As the value has been already provided, so it has been assigned

c:                                       // Even now the value will not be assigned, because console.log is before the 'let' declaration

scope chain                              

*/

// Can't find the value of 'c' inside before the console.log line. Neither in three() nor in parent scopes. So,

console.log(c + d);     // Reference error 
let c = 3


// But if it was like,

let c = 3
console.log(c + d);     // 7

// Then, the 'execution' would look like this -

/*

three() Exectuion Context

Phase: Execution                         // In this state, the following objects are available

arguments: {0:4}                         // Value '4' is assigned to the param in the 0th index

this: window                             // 'this' keyword points to window

d: 4                                     // As the value has been already provided, so  it has been assigned

c: 3                                     // Value of 'c' is assigned

scope chain

*/


// So, now as three() is done executing, it'll pop out from Stack. Then, two(), then one(), the Global Execution Context

// Popping out from Stack in order -

// three() pops out

/*

    | two() Execution Context   |
    | one() Execution Context   |
    | Global Execution Context  |
    |___________________________|
*/


// two() pops out


/*

    |                           |
    | one() Execution Context   |
    | Global Execution Context  |
    |___________________________|
*/


// one() pops out

/*

    |                           |
    |                           |
    | Global Execution Context  |
    |___________________________|
*/


// Global Execution Context pops out


/*
    
    |                           |
    |                           |
    |                           |
    |___________________________|
*/