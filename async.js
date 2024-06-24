const processOrder = (customer) => {
    console.log(`Processing order for customer 1`)

    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);

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

// Then it will see a setTimout function. JS will put it on top of the stack.

/*
    |   setTimeout(() => {...})   |
    |        processOrder()       |
    |           main()            |
    |_____________________________|
*/


// setTimeout is a built-in asynchronous function. JS will not wait for the callback function of setTimeout to execute. Rather it will move setTimeout to WebAPI from the main thread. WebAPI is part of the runtime env. It is like a separate thread.

/*
    Main Thread (Call Stack) -

    |   setTimeout(() => {...})   |
    |        processOrder()       |
    |           main()            |
    |_____________________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// Then, JS will find another console.log after the setTimeout and put it on top of the stack.

/*
    Main Thread (Call Stack) -

    |   console.log(`Order processed for customer 1`)   |
    |                   processOrder()                  |
    |                       main()                      |
    |___________________________________________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// console.log(`Order processed for customer 1`) - Prints to the screen / terminal. Then pops out from the stack.

/*  Main Thread (Call Stack) -

    |   processOrder()  |
    |       main()      |
    |___________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// Then processOrder() pops out from the stack.

/*
    Main Thread (Call Stack) -

    |                          |
    |         main()           |
    |__________________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// Then,

/*

    Main Thread (Call Stack) -

    |   console.log(`Completed order for customer 1`)   |
    |                       main()                      |
    |___________________________________________________|


    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// console.log(`Completed order for customer 1`) - Prints to the screen / terminal. Then pops out from the stack.

/*

    Main Thread (Call Stack) -

    |                          |
    |         main()           |
    |__________________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// As all the calls have been finished, the main() will pop out from the stack.

/*

    Main Thread (Call Stack) -

    |                          |
    |                          |
    |__________________________|

    Web API -

    |   setTimeout(() => {...})   |
    |_____________________________|
*/

// Now, setTimeout as an asynchronous function, will send its callback functions to "Callback Queue" after the assigned delay time is over. Callback Queue is also a part of runtime env.

/*

    Main Thread (Call Stack) -

    |                          |
    |                          |
    |__________________________|

    Web API -

    |                             |
    |_____________________________|


    Callback Queue -

    |      console.log(`Cooking completed`)       |
    |                                             |
    |_____________________________________________|
*/

// Main Thread (Call Stack) is a Stack data structure, where the last element comes, goes first. LIFO.

// Callback Queue is a Stack queue structure, where the first element comes, goes first. FIFO.

// Then comes, "Event Loop" which is also a part of runtime env.

// Event loop compares the Main Thread (Call Stack) and Callback Queue. When Event Loop will find the Main Thread (Call Stack) empty and find something in the Callback Queue, it will then send the calls from Callback Queue to Main Thread (Call Stack) following FIFO.


/*

    Main Thread (Call Stack) -

    |      console.log(`Cooking completed`)       |
    |                                             |
    |_____________________________________________|

                ^
                |
            Event Loop
                ^
                |

    Callback Queue -

    |                          |
    |                          |
    |__________________________|


    Web API -

    |                             |
    |_____________________________|
*/

// Then, console.log(`Cooking completed`) - Prints to the screen / terminal. Then pops out from the stack.


/*

    Main Thread (Call Stack) -

    |                          |
    |                          |
    |__________________________|

                
                ^
                |
            Event Loop
                ^
                |
    
    Callback Queue -

    |                          |
    |                          |
    |__________________________|


    Web API -

    |                             |
    |_____________________________|
*/

// There is no blocking in the asynchronous behavior.