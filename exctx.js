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

Phase: Loading/Creation                 // In this state, the following objects are available 

window: global object

this: window                             // 'this' keyword points to window

topic: 'JS Execution Context'            // The value is assigned to 'topic' variable

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