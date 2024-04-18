// implicit binding
/*
// EX-1

let x = {
    name: 'X',
    age: 12,
    printName: function () {
        console.log(this.name);
    }
}

x.printName()

// Workflow - printName() -> Is there a dot notation? If, yes -> What is before dot notation? An object? Yes -> That's our 'this'
// The above workflow works for normal function, not for arrow function.
// Other than the mentioned workflow, the 'this' will refere to window.


// EX-2

function printNameFunction(obj) {
    obj.printName = function () {
        console.log(this.name);
    }
}


let y = {
    name: 'Y',
    age: 13,
}


printNameFunction(y)

y.printName()


// Workflow - printNameFunction(y) -> Is there a dot notation? If, yes -> What is before dot notation? An object? Yes -> That's our 'this'
// The above workflow works for normal function, not for arrow function.
// Other than the mentioned workflow, the 'this' will refere to window.


// EX-3


let person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name)
        }
    }
}


let z = person('Z', 14);

z.printName()


// Workflow - printName() -> Is there a dot notation? If, yes -> What is before dot notation? An object? Yes -> That's our 'this'
// The above workflow works for normal function, not for arrow function.
// Other than the mentioned workflow, the 'this' will refere to window.


// EX-4

let personExtened = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name)
        },
        parent: {
            name: 'WW',
            printName: function () {
                console.log(this.name)
            },
        }
    }
}


let w = personExtened('W', 14);

w.printName()

w.parent.printName()

// Workflow - printName() -> Is there a dot notation? If, yes -> What is before dot notation? An object? Yes -> That's our 'this'
// The above workflow works for normal function, not for arrow function.
// Other than the mentioned workflow, the 'this' will refere to window.

*/

// explicit binding

// Explicit binding is using a function for different objects.

// EX-1
/*
let printName = function () {
    console.log(this.name);
}

let x = {
    name: 'X',
    age: 12,

}

printName.call(x)
*/

// The call method will take an object and give output based on the provided object. Here 'this.name' is referring to 'name' in 'x' object.


// EX-2
/*
let printName = function (v1, v2) {
    console.log(`${this.name} is ${v1} and ${v2}`);
}

let x = {
    name: 'X',
    age: 12,
}

let v1 = 'Sleepy'
let v2 = 'Tired'

printName.call(x, v1, v2) // While using the call the method, we pass the parameters one by one.
*/


// EX -3
/*
let printName = function (v1, v2) {
    console.log(`${this.name} is ${v1} and ${v2}`);
}

let x = {
    name: 'X',
    age: 12,
}

let v1 = 'Sleepy'
let v2 = 'Tired'


let v = [v1, v2]

printName.apply(x, v) // While using the apply the method, we pass the parameter as an array.
*/


// EX-4

/*
let printName = function (v1, v2) {
    console.log(`${this.name} is ${v1} and ${v2}`);
}

let x = {
    name: 'X',
    age: 12,
}

let v1 = 'Sleepy'
let v2 = 'Tired'

let callFunc = printName.bind(x, v1, v2) // It's the same as call method but it creates an instance of the function call and gets assigned to a separate variable.

callFunc();
*/


// new binding

// New binding is basically constructing a new function. It's like constructor.

// Check EX-4 of prototype.js
/*
function Person(name, age) {
    // let this = Object.create(name, age)
    this.name = name;
    this.age = age;

    console.log(`${this.name} is ${this.age} years old`)

    // return this
}

let x = new Person('X', 12)
*/


// window binding

let printName = function () {
    console.log(this.name); // This is refering to window
    // console.log(this)
    // console.log(window === this); // true . This is true in case of arrow function too.

    // We can write "use strict" to fix this ref window issue, so we can get error
}

let x = {
    name: 'X',
}

printName() // This will be equal to window object in case of arrow function