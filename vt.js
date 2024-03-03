var varVariable = "This is var" // Can defined multiple times with the same name

console.log(varVariable);

if (true) {
    var varVariable = "This is var again" // Var is function scope
}

console.log(varVariable);


if (true) {
    let letVariable = "This is let" // Let is block scope
    // let letVariable = "This is let again" // Can't be defined with the same name again

    //  letVariable = "This is let again" // But the value can be changed

    console.log(letVariable); // This will work
}

// console.log(letVariable); // As let is block scope, it won't work


if (true) {

    const constVariable = "This is const" // const is block scope
    // const constVariable = "This is const again" // Can't be defined with the same name again

    //  constVariable = "This is const again" // And the value cannot be changed


    console.log(constVariable); // This will work



    // But object property can be updated.

    const constObject = {
        name: 'XYZ', number: 1
    }

    console.log(constObject);


    constObject.number = 3


    console.log(constObject)
}

// console.log(constVariable); // As const is block scope, it won't work


function a() {
    var a = 5
    console.log(a); // This will work
}

// console.log(a); // This won't, because of function scope

a()