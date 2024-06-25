const processOrder = (customer) => {
    console.log(`Processing order for customer 1`)

    var currentTime = new Date().getTime()
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`Order processed for customer 1`)
}

console.log(`Take order from customer 1`);

processOrder()

console.log(`Completed order for customer 1`);


/*
Inside a browser there are 2 things.

Runtime env - window, document these come from the Runtime Env.

JS Engine - It converts JS into machine code.


Inside JS Engine, one of things that exist is called Call Stack
*/

/*
In the Call Stack the following activities will happen step by step -

    |                          |
    |         main()           |
    |__________________________|
*/

// In every JS file, there is a main function that will run before running any other thing.

// Then,

/*
    |   console.log(`Take order from customer 1`)   |
    |                   main()                      |
    |_______________________________________________|
*/

// Then line by line it will execute the calls, like console.log or methods etc.

// console.log(`Take order from customer 1`); - Prints to the screen / terminal. Then pops out from the stack.

/*
    |                          |
    |         main()           |
    |__________________________|
*/

// Then,

/*
    |   processOrder()  |
    |       main()      |
    |___________________|
*/

// JS will look into the processOrder() method.

// Inside it will find a console.log and put it on top of the stack.

/*
    |   console.log(`Processing order for customer 1`)  |
    |                   processOrder()                  |
    |                       main()                      |
    |___________________________________________________|
*/

// console.log(`Processing order for customer 1`) - Prints to the screen / terminal. Then pops out from the stack.

/*
    |   processOrder()  |
    |       main()      |
    |___________________|
*/

// Then it will see a while loop that lasts for 3 seconds. In this 3 seconds, JS will block all other works in the browser. User will not be able to execute anything within this 3 seconds.

// This is called Synchronous Blocking Behavior of JS.

// Then, JS will find another console.log after the while loop and put it on top of the stack.

/*
    |   console.log(`Order processed for customer 1`)   |
    |                   processOrder()                  |
    |                       main()                      |
    |___________________________________________________|
*/

// console.log(`Order processed for customer 1`) - Prints to the screen / terminal. Then pops out from the stack.

/*
    |   processOrder()  |
    |       main()      |
    |___________________|
*/

// Then processOrder() pops out from the stack.

/*
    |                          |
    |         main()           |
    |__________________________|
*/

// Then,

/*
    |   console.log(`Completed order for customer 1`)   |
    |                       main()                      |
    |___________________________________________________|
*/

// console.log(`Completed order for customer 1`) - Prints to the screen / terminal. Then pops out from the stack.

/*
    |                          |
    |         main()           |
    |__________________________|
*/

// As all the calls have been finished, the main() will pop out from the stack.

/*
    |                          |
    |                          |
    |__________________________|
*/

