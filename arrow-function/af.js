// * MARK: EX 1

/*
function number() {
    return 10;
}
*/

// Conversion to arrow function

/*
let number = () => {
    return 10;
}
*/

// let number = () => 10;

// console.log(number());

// let number = n => n

// console.log(number(10));

// let add = (a, b) => a + b

// console.log(add(10, 20));


// * MARK: EX 2

/*
let js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue'],
    printLibraries: function () {

        // console.log(this); // 'js' object

        let self = this      // The reference to this can be stored in a variable like 'self, then used.

        this.libraries.forEach(function (a) {

            // console.log(this); // global

            // console.log(`${self.name} loves ${a}`);

            console.log(`${this.name} loves ${a}`);
        })
    }
}

js.printLibraries()
*/

// To solve this 'this' issue, arrow function is used.

/*
let js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue'],
    printLibraries: function () {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    }
}

js.printLibraries()
*/

// Arrow function doesn't change the value of 'this'. The value of 'this' is same in an arrow function. Also, note that arrow function is being used inside forEach and forEach is does it's work independently.


// * MARK: EX 3

// To convert the function() to arrow function of printLibraries, we can do the following -

/*
let js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue'],
    printLibraries: () => {
        console.log(this); // 'this' does not refer to 'js' object here
        js.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    }
}
*/

/*
let js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue'],
    printLibraries: () => js.libraries.forEach((a) => console.log(`${js.name} loves ${a}`))
}

js.printLibraries()
*/

// Here doesn't have 'this' in this context, so a direct reference was made.


// * MARK: EX 4

// Arrow function with event listener

// const searchInput = document.querySelector('.search')

// const result = document.querySelector('.result')

// const thanks = document.querySelector('.thanks')


/* Normal function */

/*
function show() {

    // console.log(this) // Input Element

    result.innerHTML = this.value;

    setTimeout(function () {

        // console.log(this) // Referring to window
        // setTimeout is a built in function, that is why this.value is giving the output of 'undefined'

        thanks.innerHTML = `You have typed ${this.value}`
    }, 1000);
}
*/

// To solve this, we can store the value of 'this' in a variable, then later use it, like the code below.

/*
function show() {

    // console.log(this) // Input Element

    result.innerHTML = this.value;

    let self = this;

    setTimeout(function () {
        thanks.innerHTML = `You have typed ${self.value}`
    }, 1000);
}
*/

// or we can use an arrow function inside the setTimeout

/*
function show() {

    // console.log(this) // Input Element

    result.innerHTML = this.value;

    setTimeout(() => {
        thanks.innerHTML = `You have typed ${this.value}`
    }, 1000);
}
*/

/*
const show = () => {

    // console.log(this) // Window

    // Here, 'this' refer to 'Window', that's why, this.value is undefined

    result.innerHTML = this.value;

    setTimeout(() => {
        thanks.innerHTML = `You have typed ${this.value}`
    }, 1000);
}
*/

// Normal function is a good way, to solve this issue

// searchInput.addEventListener('keyup', show)


// * MARK: EX 5
/*
function Person(name) {
    this.name = name;
}
*/

// In JS, the functions are constructor functions, so we can write them using 'new' keyword

// But arrow functions are not constructor functions. So, we can't write them using 'new' keyword

/*
const Person = (name) => {
    this.name = name;
}

let x = new Person('X') // TypeError: Person is not a constructor

console.log(x);

console.log(x.name);
*/