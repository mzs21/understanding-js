/*
Prototype: It’s a blue print of an object
•	As JS look for properties || methods that doesn’t exist within current object, JS will go up to object’s blue print || base function and search for the share properties || methods. 
•	Problem with modifying prototype can lead to dangerous situation. Imagine if someone can modify .map method of an array to perform differently. 
*/

// Prototype is simply a property of a function that points to an object


// EX 1

// const personMethods = {
//     eat() {
//         console.log('Person is eating')
//     },
//     sleep() {
//         console.log('Person is sleeping')
//     },
//     play() {
//         console.log('Person is playing');
//     }
// };

// function Person(name, age) {
//     let person = Object.create(personMethods)

//     person.name = name;
//     person.age = age

//     return person
// }


// const X = Person('X', 13)

// const Y = Person('Y', 15)

// X.eat();
// Y.play()


// EX 2

// function test() {}

// console.dir(test)


// EX 3

// function Person(name, age) {
//     let person = Object.create(Person.prototype)

//     person.name = name;
//     person.age = age

//     return person
// }


// Person.prototype = {
//     eat() {
//         console.log('Person is eating')
//     },
//     sleep() {
//         console.log('Person is sleeping')
//     },
//     play() {
//         console.log('Person is playing');
//     }
// }

// const X = Person('X', 13)

// const Y = Person('Y', 15)

// X.eat();
// Y.play()

// EX 4

// function Person(name, age) {
//     let person = Object.create(Person.prototype)

//     person.name = name;
//     person.age = age

//     return person
// }

// function PersonWithNew(name, age) {
//     // let person = Object.create(PersonWithNew.prototype)
//     // becomes 
//     // let this = Object.create(PersonWithNew.prototype)

//     // person.name = name;
//     // becomes
//     this.name = name;

//     // person.age = age
//     // becomes
//     this.age = age;

//     // return person
//     // becomes
//     // return this
// }


// Person.prototype = {
//     eat() {
//         console.log('Person is eating')
//     },
//     sleep() {
//         console.log('Person is sleeping')
//     },
//     play() {
//         console.log('Person is playing');
//     }
// }

// const X = Person('X', 13)

// const Y = Person('Y', 15)


// const X = new PersonWithNew('X', 13)

// const Y = new PersonWithNew('Y', 15)

// EX 5

// Constructed version of EX 4

// function Person(name, age) {

//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     eat() {
//         console.log('Person is eating')
//     },
//     sleep() {
//         console.log('Person is sleeping')
//     },
//     play() {
//         console.log('Person is playing');
//     }
// }

// const X = new Person('X', 13)

// const Y = new Person('Y', 15)

// EX 6

// EX 5 as a Class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log('Person is eating')
//     }
//     sleep() {
//         console.log('Person is sleeping')
//     }
//     play() {
//         console.log('Person is playing');
//     }
// }

// const X = new Person('X', 13)

// const Y = new Person('Y', 15)

// Y.eat()

// EX 7

let array = []

let newArray = new Array()

console.dir(Array.prototype)