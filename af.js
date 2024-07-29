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

        let self = this      // In the past, the reference to this was stored in a variable like this, then used.

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


let js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue'],
    printLibraries: () => js.libraries.forEach((a) => console.log(`${js.name} loves ${a}`))
}

js.printLibraries()

// Here doesn't have 'this' in this context, so a direct reference was made.