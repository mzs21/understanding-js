// Generator is a special type of iterator


// * MARK: EX 1

/*
function* generator() {
    yield 1             // yield works like iterator
    yield 2
    yield 3
    yield 4

}

let iterator = generator()

console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
*/


// * MARK: EX 2

/*
function* generator() {
    yield 1
    yield 2
    return "Finished"   // return stops the generator function
    yield 3
    yield 4

}

let iterator = generator()

console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
*/

// Generator function syntaxes

/*

// function *generator() { }

// function* generator() { }

// function * generator() { }

// As generator method

// const generator = function* () { }

// Generator can't be used with arrow function

// const generator = ()* => {}

// Inside class

class Generator() {
    * generator(){ }
}

// Inside Object Literal

const generatorObj = {
    *generator() { }
}
*/


// * MARK: EX 3

// Making object iterable with iterable and iterator protocols

/*
let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
}

// console.log(Object.entries(object)); // [ [ 'value1', 1 ], [ 'value2', 2 ], [ 'value3', 3 ], [ 'value4', 4 ] ]


Object.prototype[Symbol.iterator] = function () {

    let entries = Object.entries(object)
    let count = entries.length
    let index = 0

    return {
        next() {
            if (count > 0) {
                let result = { done: false, value: entries[index][1] }
                count--
                index++
                return result
            }
            return { done: true }
        }
    }
}

for (const iterator of object) {
    console.log(iterator)
}

console.log([...object]);
*/

// Now the object is iterable


// * MARK: EX 4

// Making object iterable with generator

/*
let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
}

function* generator(obj) {
    let entries = Object.entries(obj)

    for (const element of entries) {
        yield element[1]
    }
}


let iterator = generator(object)

// for (const element of iterator) {
//     console.log(element)
// }

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

console.log([...iterator]);
*/

// * MARK: EX 5

// Range function with generator

/*
function* range(start, end, step) {
    let current = start

    while (current <= end) {
        yield current;
        console.log('Execute?');
        current += step
    }
}

let iterator = range(1, 31, 3)

console.log(iterator.next());
console.log(iterator.next());

// Yield give us a value, then gets paused in the memory. Then it starts again from the paused location.
*/

// * MARK: EX 6

function* generator(a, b) {
    let k = yield a + b
    let m = yield k + a + b

    yield a + b + k + m
}


let gen = generator(10, 20)

console.log(gen.next()); // { value: 30, done: false }

// So, we passed 10 and 20 as parameters and it's being yield but it's not being assigned to the variable 'k'. It's getting paused after yielding and before being assigned to 'k'.

console.log(gen.next(50)); // { value: 80, done: false }

// Now, we are passing a parameter with a value of 50. As mentioned before, k is not being assigned any value, so, iterator will start just before the pause, and as we pass a parameter 'k' will have the value 50.

console.log(gen.next(100)); // { value: 180, done: false }

// Same thing will happen to variable 'm'.