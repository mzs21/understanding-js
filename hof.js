/*
Func Prog: is a paradigm where you can send one or more functions as parameter(s) to another function or return a function from another function or both.

Pure Functions: Functions always produce the same output for the same input and have no side effects (no changes outside the function, like modifying a global variable).

Immutability: Data is never changed. Instead, new data structures are created from existing ones.

First-Class Functions: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

Higher-Order Functions: Functions that can take other functions as arguments or return them as results.

Declarative Style: Focuses on what to solve rather than how to solve it, making the code more concise and readable.
*/


// Higher-Order Functions

// EX 1
/*
function hello() {
    return function () {
        console.log('Hello')
    }
}

hello()()
*/

// EX 2 - Without HOF

/*
var numbers = [1, 2, 3]

var result = []

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
}

console.log(result)
*/


// EX 2 - With HOF

/*
var numbers = [1, 2, 3]


// var result = numbers.map(function (number) {
//     return number * 2
// })


// or


// var result = numbers.map((number) => {
//     return number * 2
// })


// or

// var result = numbers.map((number) => number * 2)

console.log(result)
*/


// EX 3 - Without HOF

/*
var players = [
    { name: 'W', avg: 34.16 },
    { name: 'X', avg: 35.26 },
    { name: 'Y', avg: 36.36 },
    { name: 'Z', avg: 37.46 }
]


var filteredPlayers = []


// for (let i = 0; i < players.length; i++) {
//     if (players[i].avg > 36) {
//         filteredPlayers.push(players[i].name);
//     }
// }


// or


// for (let i = 0; i < players.length; i++) {
//     players[i].avg > 36 ? filteredPlayers.push(players[i].name) : null;
// }


console.log(filteredPlayers)
*/



// EX 3 - With HOF
/*
var players = [
    { name: 'W', avg: 34.16 },
    { name: 'X', avg: 35.26 },
    { name: 'Y', avg: 36.36 },
    { name: 'Z', avg: 37.46 }
]


// var filteredPlayers = players.filter(function (players) {
//     return players.avg >= 36
// }).map(player => player.name)


// or

// var filteredPlayers = players.filter((players) => {
//     return players.avg >= 36
// }).map(player => player.name)

// or

var filteredPlayers = players.filter((players) => players.avg >= 36).map(player => player.name)

console.log(filteredPlayers)
*/


// EX 4 - Array.map manual

const languages = ['JS', 'JAVA', 'PYTHON', 'C#']


function mapFunction(arr, fn) {
    const newArray = []

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }

    return newArray;
}


const myArr = mapFunction(languages, (lang) => lang.length)


console.log(myArr)




