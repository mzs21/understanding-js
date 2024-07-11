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

/*
let sportName = Symbol('This is a sport')

let sport = { name: 'X', [sportName]: 'XYZ' }

console.log(sport);
*/

// * MARK: EX 6

/*
let object = {}

object.name = 'X'
object.year = 1234

object[Symbol('rank')] = 1

console.log(object);

// But the Symbol can't be accessed using for loop.

for (const key in object) {
    let value = object[key]
    console.log(key, value);
}

// To access the symbol property, we need to use 'getOwnPropertySymbols'

let symbols = Object.getOwnPropertySymbols(object)

for (const symbol of symbols) {
    console.log(symbol, object[symbol])
}

// Symbol is used as an unique identifier.
// JS can ignore the Symbol in normal loops.
*/

// * MARK: EX 7
/*
let arr = [1, 2, 3]

console.log(arr.includes(2));
console.log(arr['includes'](2));


// We can make our own method and add it to a Master Object without polluting globally.

let includes = Symbol('My inlcude method')

Array.prototype[includes] = () => console.log('My own Include Method');

arr[includes](2)

// Since, Symbol is an unique identifier, we can make a lot of versions of 'includes' without affecting the original 'includes' method of Array.
*/

// * MARK: EX 8
/*
let title = 'JavaScript'

// Steps:

// 1. Converts the title variable to new String()
// 2. Convert the parameter to the RegExp
// 3. JS will check whether there is implementation Symbol.search() in RegExp or not. If yes, code will be executed.

console.log(title.search('Script'));

console.log(title.search(/Script/));
*/

// * MARK: EX 9

// Now, we will make our own search implementation using Symbol
/*
class Product {
    constructor(title) {
        this.title = title
    }

    [Symbol.search](string) {
        return string.indexOf(this.title) >= 0 ? 'Found' : 'Not Found'
    }
}

let laptop = new Product('Laptop')

console.log('HP Laptop'.search(laptop)); // Found

// The above 'search()' will only work for our 'laptop'

console.log('JavaScript'.search('Script')); // 4

// We can see the that the built in search method is still the same
*/

// * MARK: EX 10

const myFunc = (obj) => {
    const PVT = Symbol('My value')

    return {
        modify(obj) {
            obj[PVT] = true
        },
        output(obj) {
            return obj[PVT]
        }
    }
}

const value = myFunc()

let object = { a: 1, b: 2 }

value.modify(object)

console.log(value.output(object));

console.log(object);

// Symbol is an unique identifier. It can't be deleted.

delete object['[Symbol(My value)]']

console.log(object);