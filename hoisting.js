/*
Hoisting: Hoisting is the fact that JavaScript reads your file and before executing your lines it hoists your variable and function (meaning that it keeps the variables declaration, without their value (undefined), and functions on « top of the file » before processing to any logic.
*/


// EX 1
/*
var a; // JS automatically sets the value to Undefined
console.log(a); // Undefined
a = 'BD'
console.log(a); // BD
*/


// EX 2
/*
console.log(a); // Undefined
var a; // JS automatically sets the value to Undefined
a = 'BD'
console.log(a); // BD
*/


// EX 3
/*
console.log(a); // Referrence Error
let a = 'BD'

// It's because, the variable 'a' is going up but the value is not assigned. In case of declaring a variable with 'let' the value of an variable is assigned on the line of declartion. This is why it's showing 'Referrence Error'.


// We can imagine the value assignment scenario like the following -

```
    let a;
    console.log(a)
    a = undefined
    a = 'BD'
```
*/


// EX 4
/*
let a; // undefined
console.log(a)
*/


// EX 5
/*
var LANGUAGE = 'Java'
var language = 'JavaScript'

function getLanguage() {
    if (!language) {
        var language = LANGUAGE
    }
    return language
}

console.log(`I love ${getLanguage()}`); // I love Java

// This behaviour is unexpected and causing because of 'var', it's function scope


// What happens is that - 

function getLanguage() {
    if (!language) {
        var language = LANGUAGE
    }
    return language
}

becomes,

function getLanguage() {
    var language 
    if (!language) {
        language = LANGUAGE
    }
    return language
}

Here 'language' is undefined so, the 'if' block becomes TRUE, and for that, value of LANGUAGE is assigned to the language. Ignoring the global 'language' variable that was declared on top. 
*/


// EX 6
/*
let LANGUAGE = 'Java'
let lanugage = 'JavaScript'

function getLanguage() {
    if (!lanugage) {
        let lanugage = LANGUAGE
    }
    return lanugage
}
// 'let' is block scope
console.log(`I love ${getLanguage()}`); // I love JavaScript
*/


// EX 7
/*
function myFunc() {
    console.log('JS');
}

myFunc() // JS
*/


// EX 8
/*
myFunc() // JS

function myFunc() {
    console.log('JS');
}
*/


// EX 9
/*
function myFunc() {
    lang = 'JS'
    var lang;
    console.log(lang);
}

myFunc() // JS

// So, the 'var' declaration is going top then having the value 'undefined', then 'JS' is being assigned.
*/


// EX 10
/*
function myFunc() {
    let lang = 'JS' // First, lang = undefined, then lang = 'JS'
    console.log(lang);
}

myFunc() // JS
*/

// EX 11
/*
myFunc() // Referrence Error

const myFunc = function () {
    let lang = 'JS' // First, lang = undefined, then lang = 'JS'
    console.log(lang);
}
*/

// Explanation

/*
const myFunc;
myFunc()  // Here, myFunc doesn't have any value, as a result Ref error
myFunc = undefined 
myfunc =  function () {
    let lang = 'JS' // First, lang = undefined, then lang = 'JS
    console.log(lang);
}
*/
