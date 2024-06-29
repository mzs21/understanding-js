/*
let total = 0;
let n = 10;

for (let i = 0; i <= n; i++) {
    total += i;
}

console.log(total);
*/

// Let's convert the above code in a recursive way -

/*
let sum = (n) => {
    if (n === 0) {
        return 0
    }
    return sum(n - 1) + n
}

console.log(sum(10))
*/

// Execution context of the above recursive function

/*
    |   sum(0) Execution Context  |
    |               |             |
    | sum(n-2) Execution Context  |
    | sum(n-1) Execution Context  |
    |  sum(n) Execution Context   |
    | Global Execution Context    |
    |_____________________________|
*/

// Then the calls will pop out from from the stack one by one.

// But there's a limit to Call Stack which will vary from browser to browser. For this, it's better to avoid recursion for a large number of value. Instead it's better to use a formula. 

// We can write the above program using a formula and it's much faster than recursion and loop.

let n = 10;

console.log(((n + 1) * n) / 2)


