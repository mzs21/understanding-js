// Set is a reference data type

// * MARK: EX 1
/*
let mySet = new Set() // Always constructor function, with 'new' keyword

mySet.add(5);

mySet.add('X');

console.log(mySet.has('X'));

mySet.delete('X')

mySet.add(7).add(8).add(10).delete(5)

console.log(mySet);

console.log(mySet.size);

// mySet.add(16).clear()

// console.log(mySet);
*/

// * MARK: EX 2

// Converting array to set
/*
let arr = [1, 2, 4, 5, 1];

let mySet = new Set(arr);

// We can pass any iterable to the Set constructor, i.e., Array, String

console.log(mySet);


let str = 'XYZ';

let mySet2 = new Set(str);

console.log(mySet2);

for (const value of mySet2) {
    console.log(value);
}
*/

// * MARK: EX 3

// Converting set to array 
/*
let arr = [1, 2, 4, 5, 1];

let mySet = new Set(arr);

console.log([...mySet]); // Using spread operator we can convert set to array

console.log(Array.from(mySet)); // Also, using Array.form()
*/


// * MARK: EX 4
/*
let arr = [1, 2, 4, 5, 1];

let mySet = new Set(arr);

mySet.add(5)

console.log(mySet); // Only unique values

// But, if we add the same object multiple time, the set will have all the objects, becuase, each object has a separate reference.

mySet.add({ x: 0, y: 9 })

mySet.add({ x: 0, y: 9 })

console.log(mySet);
*/

// * MARK: EX 5

let arr = [1, 2, 4, 5, 1];

let mySet = new Set(arr);

mySet.add(5)

console.log(mySet); // Only unique values

// But, if we store the value of the object in a variable and then add the same object, then the set will only keep the unique objects

let obj = { x: 0, y: 9 }

mySet.add(obj)

mySet.add(obj)

console.log(mySet);