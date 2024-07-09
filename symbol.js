// * MARK: EX 1

/*
let symbol1 = Symbol()
let symbol2 = Symbol()

console.log(symbol1 === symbol2);  // false
console.log(symbol1 == symbol2); // false

console.log(symbol1);  // Symbol()
console.log(symbol2);  // Symbol()
*/

// * MARK: EX 2

// There's option to put description inside Symbol.

/*
let symbol1 = Symbol('Symbol 1')
let symbol2 = Symbol('Symbol 2')

console.log(symbol1); // Symbol(Symbol 1)
console.log(symbol2); // Symbol(Symbol 2)
*/


// * MARK: EX 3

// Symbol is a primitive data type but cannot be initiated with 'new'

/*
let symbol1 = new Symbol()

console.log(symbol1); // Error
*/

// Symbols are unique and the value is hidden


// * MARK: EX 4

/*
let symbol1 = Symbol.for('Symbol 1') 
let symbol2 = Symbol.for('Symbol 1')

// The value inside the (), will now act as 'key'
// By using 'for', Symbol can be used as 'Singleton'

console.log(symbol1 === symbol2);  // true
*/


// * MARK: EX 5

// Symbol can be used an object's property

let sportName = Symbol('This is a sport')

let sport = { name: 'X', [sportName]: 'XYZ' }

console.log(sport);