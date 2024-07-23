// Currying is converting a multiple parameter function into a single parameter function

// * MARK: EX 1

/*
function multiply(a, b, c) {
    return a * b * c
}

function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log(curriedMultiply(5)(6)(7));
*/


// * MARK: EX 2
/*
function multiply(a, b, c) {
    return a * b * c
}

function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

let step1 = curriedMultiply(5)
console.dir(step1)

let step2 = step1(6)
console.dir(step2)

let step3 = step2(7)

console.log(step3);
*/


// * MARK: EX 3

// The part functions of a function are called partial functions

/*
function discount(disc) {
    return (price) => {
        return price - price * disc
    }
}

let tenPercentDiscount = discount(.1)

let customerID1 = tenPercentDiscount(600)

let customerID2 = tenPercentDiscount(700)

console.log(customerID1);
console.log(customerID2);

let twentyPercentDiscount = discount(.2)

let customerID3 = twentyPercentDiscount(1200)

console.log(customerID3);
*/

// * MARK: EX 4

// Curry converter function

/*
const curry = (func) => {
    return curried = (...args) => {
        if (args.length >= func.length) {
            return func.apply(this, args)
        }
        else {
            return (...args2) => {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const sum = (a, b, c) => {
    return a + b + c
}

// console.log(sum.length);

let curriedSum = curry(sum)

console.log(curriedSum(1, 2, 3));

console.log(curriedSum(1)(2, 3));

console.log(curriedSum(1)(2)(3));
*/


// * MARK: EX 5

// Using lodash

/*
const sum = (a, b, c) => {
    return a + b + c
}

// console.log(sum.length);

let curriedSum = _.curry(sum)

console.log(curriedSum(1, 2, 3));

console.log(curriedSum(1)(2, 3));

console.log(curriedSum(1)(2)(3));
*/

// * MARK: EX 6

/*
function log(date, importance, message) {
    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importance} : ${message} `);
}


let curriedLog = _.curry(log)

curriedLog(new Date(), 'DEBUG', 'Some Debug')

curriedLog(new Date())('DEBUG')('Some Debug')

let logNow = curriedLog(new Date())

logNow('INFO', 'Info Message')
*/

// * MARK: EX 7

const multiply = (a) => (b) => (c) => a * b * c

console.log(multiply(5)(6)(7));