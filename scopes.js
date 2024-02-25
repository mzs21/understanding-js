// "use strict" -> Ex 5: This will prevent creating automatic global variable

/* Ex 1
var x = 23 // Global scope

console.log(x) // 23
*/



function myFunc() {
    /* Ex 2
    x = 10 // Global variable can be updated inside a function
    console.log(`${x} from myFunc`) // Global variable can be accessed from function scope
    */

    /* Ex 3
    var x = 10 // As we wrote 'var', this 'x' inside this function scope or block scope
    console.log(`${x} from myFunc`) // 10
    */

    x = 10 // Ex 4: In this case, 'x' is automatically created as a global variable
    console.log(`${x} from myFunc`) // 10
}

myFunc() 

console.log(x) 