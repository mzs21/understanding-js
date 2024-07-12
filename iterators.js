// If a data type has Symbol.iterator() in it, then it's iterable.

// * MARK: EX 1

/*
let name = 'JavaScript'

for (const iterator of name) {
    console.log(iterator);
}
*/

// String is iterable


// * MARK: EX 2

/*
let arr = ['x', 'Y', 'Z']

for (const iterator of arr) {
    console.log(iterator);
}
*/

// Array is iterable


// * MARK: EX 3
/*
let obj = { X: 1, Y: 2, Z: 3 }

for (const iterator of obj) {
    console.log(iterator);
}
*/

// Object is not iterable


// The mechanism of iterating is 'Iteration'. In every iteration, Symbol.iterator is called.