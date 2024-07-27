// * MARK: EX 1

let name = 'XYZ' / 3

console.log(name); // NaN

// * MARK: EX 2

let weird = NaN

console.log(weird === weird); // false

// * MARK: EX 3

let result1 = 'X' / 1

let result2 = 'Y' / 2

console.log(result1); // NaN

console.log(result2); // NaN

console.log(result1 === result2); // false

// Even though, both are NaN, they are still not equal, because, both are different NaN. Yeah, confusing.


// * MARK: EX 4

const array = [NaN]

console.log(array.includes(NaN)); // true

// It's because, in this case, the equality is checked with same-value zero algorithm.

/*
For more:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/

