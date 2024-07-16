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

// * MARK: EX 4
/*
let arr = ['x', 'Y', 'Z']

let iterator = arr[Symbol.iterator]()

console.dir(iterator)

console.log(iterator.next()) // {value: 'x', done: false}
console.log(iterator.next()) // {value: 'y', done: false}
console.log(iterator.next()) // {value: 'z', done: false}
console.log(iterator.next()) // {value: undfined, done: true}
*/
// value is the value and done indicates whether the iteration is finished or not. If it is finished, 'done' becomes true.

// Iterable Protocol
/*
    1. The data type should be a JS object
    2. The data type should have Symbol.iterator as function
    3. The return value should be an iterator
*/

// Iterator Protocol
/*
    1. The data type should be a JS object
    2. It needs to implement a next() method
    3. next() should return an object containing 'value' and 'done'
*/


// * MARK: EX 5

// console.log([...'hello']);

// Spread operator uses [Symbol.iterator].next() to iterate


// * MARK: EX 6

// Custom iterator by changing global behavior. It's only for example. NEVER do it in real life projects.

/*
String.prototype[Symbol.iterator] = function () {
    let count = this.length
    return {
        next() {
            if (count > 0) {
                count--;
                return { done: false, value: 'JS' }
            }
            return { done: true }
        }
    }
}

console.log([...'hello']);
*/

// * MARK: EX 7

// Custom iterable following iterable and iterator protocols

function range(start, end, step) {
    let current = start
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (current <= end) {
                        result = { done: false, value: current }
                        current += step;
                        return result
                    }
                    return { done: true }
                }
            }
        }
    }
}

console.log([...range(1, 100000, 2)])