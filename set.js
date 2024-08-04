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
/*
let arr = [1, 2, 4, 5, 1];

let mySet = new Set(arr);

mySet.add(5)

console.log(mySet); // Only unique values

// But, if we store the value of the object in a variable and then add the same object, then the set will only keep the unique objects

let obj = { x: 0, y: 9 }

mySet.add(obj)

mySet.add(obj)

console.log(mySet);
*/


// * MARK: EX 6
/*
let arr = [1, 2, 4, 5, 5, 3, 4, 1];

console.log([...new Set(arr)]);
*/


// * MARK: EX 7
/*
let a = new Set([1, 2, 3])

let b = new Set([3, 4, 5])

// let unionSet = a.union(b) // It's not working on VSCode but working on browser

let unionSet2 = new Set([...a, ...b])

console.log(unionSet);

console.log(unionSet2);
*/


// * MARK: EX 8
/*
let a = new Set([1, 2, 3])

let b = new Set([3, 4, 5])

// let intersectionSet = a.intersection(b) // It's not working on VSCode but working on browser

let intersectionSet2 = new Set([...a].filter(x => b.has(x)))

// console.log(intersectionSet);

console.log(intersectionSet2);
*/


// * MARK: EX 9
/*
let a = new Set([1, 2, 3])

let b = new Set([3, 4, 5])

let differenceSet = a.difference(b) // It's not working on VSCode but working on browser

let differenceSet2 = new Set([...a].filter(x => !b.has(x)))

console.log(differenceSet);

console.log(differenceSet2);
*/


// WeakSet

// * MARK: EX 10
/*
let ws = new WeakSet()

ws.add({ x: 7 });

console.log(ws); // You will find the set empty, becuase, WeakSet does not collect garbage

let obj = { y: 8 }

ws.add(obj)

console.log(ws);
*/

// WeakSet doesn't have Symbol.iterator in its prototype. So, it is not iterable


// * MARK: EX 11

let ws = new WeakSet()

/*
class Something{
    constructor(){

    }
    
    func(){
        return 'Returned'
    }
}

console.log(Something.prototype.func()); // We can acess a property of a class like this, but we can prevent this by using WeakSet.
*/

class Something {
    constructor() {
        ws.add(this) // This will ensure an object is intantiated
    }

    func() {
        if (!ws.has(this)) {
            throw new Error("Mehtod can't be accessed")
        }
        else {
            return 'Accessed'
        }
    }
}

let a = new Something()

// console.log(Something.prototype.func()); // This will now throw an error

console.log(a.func()); // This won't
