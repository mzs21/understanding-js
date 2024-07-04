/*
There are two type of values in JS 

- Primitive Value: 
    1. String
    2. Number 
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol

- Reference Value / Object Value:
  Everything except the primitive types. Like, Object, Array, Date, Function etc. All the Reference Value come from a Master Object.

*/

// Primitive values are stored in a Stack data structure.


// * MARK: EX 1


let title = 'JS'

let name = title

// In Stack, the values will be stored in the following way-

/*          
    name  ->            'JS'       
    title ->            'JS'
            __________________________
*/

// Both the variables point to separate location in the memory


// Reference Values are stored in a Heap data structure.

// * MARK: EX 2

let person = { name: 'X', age: 20 }

// In Heap, the values will be stored in the following way-

/*


person ----------> personPointer ----
                                    |
                                    |
                                    |
                                { name: 'X', age: 20 }

*/

// In Heap, the value is kept in a random place. It's more like keeping a ball, in a random place of big field.
// But there is a Stack here, and this Stack is used to store the pointer of that value in the memory.
// So, the value is in a random place of Heap, and the variable will point to the value through a pointer that is stored in a Stack.

// Now, let's say we create another variable having the same value of 'person'. Let's call it 'person2'.

let person2 = person

// In Heap, the values will be stored in the following way-

/*

person2 ---------> person2Pointer -----------
                                            |
person ----------> personPointer ----       |
                                    |       |
                                    |       |
                                    |       |
                                { name: 'X', age: 20 }

*/

// In the Stack,

/*          
    person2 ->        person2Pointer      ---------------
                                                        |
                                                { name: 'X', age: 20 }
                                                        |
    person  ->        personPointer       ---------------
                 ________________________
*/

// If we console.log the 2 variables,

console.log(person);        // { name: 'X', age: 20 }
console.log(person2);       // { name: 'X', age: 20 }

// If we mutate a value of 'person', the same value of 'person2' will be changed too.

person.name = 'Y'

console.log(person);        // { name: 'Y', age: 20 }
console.log(person2);       // { name: 'Y', age: 20 }


// Let's change the value of 'person'

person = {}

console.log(person)     // {}

// In this case, we are not mutating, we are doing assignment. So, another pointer for the value will be created and the value will have a new memory allocation in the Heap.



// Copying references immutably

// * MARK: EX 3


/*
let lang = { name: 'JS' }

let lang2 = { ...lang } // With ... spread operator we can copy value and make a unique reference to the memory. The value of 'lang2' is not dependent on the change of 'lang'.

lang.level = 'HIGH'

console.log(lang);      // { name: 'JS', level: 'HIGH' }
console.log(lang2);     // { name: 'JS' }
*/




// Copying nested references immutably

// * MARK: EX 4

/*
let lang = { name: 'JS', libraries: ['React', 'Vue'] }

// let lang2 = _.cloneDeep(lang) // lodash can be used for deep copying

let lang2 = structuredClone(lang) // Also structuredClone can be used for deep copying


lang.libraries.push('D3')

console.log(lang);      // { name: 'JS', libraries: [ 'React', 'Vue', 'D3' ] }
console.log(lang2);     // { name: 'JS', libraries: [ 'React', 'Vue', 'D3' ] }

// The reason it's not immutably copying is because the 'lang2' is being assigned the first level of values. In other words, spread operator can copy till first level. It cannot do 'deep copy'. Also, the property 'libraries' is a reference type. So, it's copying the reference value in the memory through the pointer of the 'libraries' property.
*/


// Wrapper Type

// * MARK: EX 5

/*
let a = 'XYZ'

let b = new String('XYZ')

console.log(a)
console.dir(a)


console.log(b);
console.dir(b)

// String, Number and Boolean are Primitive type, but they also have object functionality/representation, that's why they are called 'Wrapper type'.

// We can see that by using the keyword 'new' before String or Number or Boolean. We can access other built-in methods inside the prototype of that object.

console.log(b.charAt(2)) // This is because of Wrapper type.

console.log(a.charAt(3))

// While in console.log/dir 'a', we can't see any object representation. But we can still access the built-in methods. It is because, the data type checks it's Wrapper type to find the built-in method and use it.
*/



// Primitive types are not mutable.

// * MARK: EX 6

/*
let a = 12

a.age = 14 // This assignment will be ignored since JS knows Primitive types are immutable

console.log(a);
*/


// Pass by value / reference

// * MARK: EX 7

/*
let a = 1

function value(val) {
    val = 2  // This may look like pass by value but it's pass by reference
}

value(a)

console.log(a); // 1
*/

// Here 'val' is in another scope inside value().

// In JS, when we pass a parameter to a function, it's always PASS by REFERENCE


// Let's see another example

// * MARK: EX 8

/*
let a = { num: 1 }

function value(val) {
    val = {}  // This may look like pass by value but it's pass by reference
}

value(a)

console.log(a); // { num: 1 }
*/

// Despite being a reference type in this case, we are still getting {num: 1}. The reason is, when we are assignment operation inside the function and it's a separate SCOPE. JS is creating another variable named 'val' and making a another reference to the memory or allocating another address for that value in the memory of Heap.

// The same is for primitive type. JS create another address in the Stack.


// * MARK: EX 9


let a = { num: 1 }

function value(val) {
    val.num = 2  // Mutate
}

value(a)

console.log(a); // { num: 2 }

// The reason the value of 'a' is changing is because it's pass by reference.