// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and reusing those results when the same inputs occur again. 

// * MARK: EX 1

/*
function add(x) {
    return 10 + x;
}

const memo = (func) => {
    let cache = {}

    return (x) => {
        console.log(cache);

        if (cache[x]) {
            console.log('Result from cache');
            return cache[x]
        }
        else {
            console.log('Calculate result');
            const result = func(x)
            cache[x] = result
            return result
        }
    }
}

const calculate = memo(add)

console.log(calculate(10));

console.log(calculate(10));

console.log(calculate(20));
*/


// * MARK: EX 2

function add(...x) {
    return x.reduce((acc, prev) => acc + prev);
}

const memo = (func) => {
    let cache = {}

    return (...x) => {
        console.log(cache);

        const key = JSON.stringify(x)
        console.log(key);

        if (cache[x]) {
            console.log('Result from cache');
            return cache[x]
        }
        else {
            console.log('Calculate result');
            const result = func(...x)
            cache[x] = result
            return result
        }
    }
}

const calculate = memo(add)

console.log(calculate(10, 20, 30, 40));

console.log(calculate(10, 20, 30, 40));

