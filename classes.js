/*
function Person() { }

Object.prototype.snigdho = () => console.log('I am Snigdho');

// Prototype chain, Master Object
// "Object" is the master object. We can add our own custom property to the Object via prototype and use it.

let me = {
}

me.snigdho()
*/



/*
function Person(name, age) { // Acting like Parent class
    this.name = name;
    this.age = age;
}


function Cricketer(name, age, type, country) { // Acting like sub class
    Person.call(this) // Here 'this' is the Cricketer. When we are passing 'this' we are passing the properties of Cricketer to Person. Hence, Person and Cricketer now have a connection.
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}


Cricketer.prototype = Object.create(Person.prototype) // Now Cricketer inherited the properties inside Person.prototype.

Cricketer.prototype.constructor = Cricketer; // Overwritng the the Constructor method of Cricketer. Because, by default, 'Person.call(this)' will not be called.

Cricketer.prototype.play = function(){
    console.log(`${this.name} is playing`);
}

// This is Prototype inheritance.


let X = new Cricketer('X', 45, 'All', 'BD')

X.play()
*/



// Function to Class conversion
/*
class Person { // Parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person { // Sub class
    constructor(name, age, type, country) {
        super(name,age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

let X = new Cricketer('X', 45, 'All', 'BD')

X.play()
*/


// Getter - Setter - Static
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

    get getName() { // Getter - It's simply property that behaves like a function
        return this.name;
    }

    set setName(name) {  // Setter - It's simply property that behaves like a function
        this.name = name
    }

    static staticMethod() { // Static - It's not dependent on object instantiation
        console.log('I am static method')
    }

    static isEqualAge(p1, p2) {
        return p1.age === p2.age;
    }

    static returnName() {
        return this.name;
    }

}

let X = new Person('X', 24)
let Y = new Person('Y', 25)
console.log(X.getName)


X.setName = 'Y'

console.log(X.name)

Person.staticMethod() // We can call the static method without using the 'X' object

// X.staticMethod() // This will give error. Because, static method is not dependent on object 'X'


console.log(Person.isEqualAge(X, Y));


console.log(Person.returnName()); // Output will be 'Person'. Static is independent. It doesn't know 'this.name'.
*/


// Polymorphism

class Person { // Parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}

class Cricketer extends Person { // Sub class
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() { // The process of overwriting the parent's class properties is called polymorphism 
        super.play() // By calling 'super', we can have access to both the parent and child classes' functions
        console.log(`${this.name} is playing something`);
    }
}

let X = new Cricketer('X', 45, 'All', 'BD')

X.play()