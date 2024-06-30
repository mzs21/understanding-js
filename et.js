// Follow the examples of 'Higher Order Function' and the topics under 'Synchronous-Asynchronous'.


// EX 1

// 'Render Queue'

/*
function process(num) {
    // Heavy sync task - Think that this task does blocking behavior
    console.log(num)
}

[1, 2, 3, 4, 5].forEach(i => process(i))
*/

/*
In the Call Stack the following activities will happen step by step -

    |        process(5)        |
    |        process(4)        |
    |        process(3)        |
    |        process(2)        |
    |        process(1)        |
    |        forEach()         |
    |         main()           |
    |__________________________|
*/

// One by one the calls will pop out.

/*

- 'Render Queue' will be discussed briefly as it's a complex thing.

- Render Queue has higher priority than Callback Queue.

- Render Queue is one of the queues in Event Loop.

- We know the synchronous blocking behavior. The user can't do anything at that time. The browser or screen becomes unresponsive. After the synchronous blocking behavior is finished, and there is no task in the Call Stack, 'Render Queue' is run by JS and the browser or screen becomes responsive.

- Then, Event loop compares the Main Thread (Call Stack) and Callback Queue. When Event Loop will find the Main Thread (Call Stack) empty and find something in the Callback Queue, it will then send the calls from Callback Queue to Main Thread (Call Stack) following FIFO.

*/




// EX 2

// 'Microstack Queue'

const second = () => console.log("second");

const third = () => console.log("third");

const first = () => {
    console.log("first");
    setTimeout(second, 0);
    new Promise((resolve, reject) =>
        resolve(`I am right after third, before second`)).then(res => console.log(res))

    third()
}

first()


/*
The following activities will happen step by step -

    Main Thread (Call Stack) -


    |        first()       |
    |         main()       |
    |______________________|
*/

// It'll find the console.log. So, print - "first"

// Then, it'll see the setTimeout async function. It'll be put on the top of first()

/*

    Main Thread (Call Stack) -

    |  setTimeout(() => {second})   |
    |           first()             |
    |           main()              |
    |_______________________________|

*/

// Afterwards, setTimeout async function will moved to Web API.

/*

    Main Thread (Call Stack) -

    |        first()       |
    |         main()       |
    |______________________|

    Web API -

    | setTimeout(() => {second})  |
    |_____________________________|
*/

// In this case, as it is only 0 seconds, the setTimeout will moved to the 'Callback Queue'.

/*

    Main Thread (Call Stack) -

    |        first()       |
    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|
*/

// Then, JS will see a 'Promise'. It'll send the callback of 'Promise' to a queue named 'Microstack Queue'.


/*

    Main Thread (Call Stack) -

    |        first()       |
    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|

    Microstack Queue -

    |   Promise(callback)  |
    |______________________|
*/

// Then, JS sees the third() inside first. So,

/*

    Main Thread (Call Stack) -

    |        third()       |
    |        first()       |
    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|

    Microstack Queue -

    |   Promise(callback)  |
    |______________________|
*/

// Now, It'll find the console.log. So, print - "third"

// Output now looks like the following -

/*
first
third
*/

// third() and first() will pop out.

/*

    Main Thread (Call Stack) -

    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|

    Microstack Queue -

    |   Promise(callback)  |
    |______________________|
*/

// Check after "NOTE"

// NOTE: 'Microstack Queue'

/*

- This queue is for Promise callback functions

- Microstack Queue has higher priority than Callback Queue.

- When Event Loop will find the Main Thread (Call Stack) empty, it will send the callback functions from Microstack Queue to the Main Thread, then it will then send the calls from Callback Queue to Main Thread (Call Stack).
*/

// Now, (read the above explanation), Promise(callback) will be sent to Callstack Queue first from Microstack Queue.

/*

    Main Thread (Call Stack) -

    |   Promise(callback)  |
    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|

    Microstack Queue -

    |                     |
    |_____________________|

*/

// Now, the Promise(callback) output will be on the screen and then it will pop out from the main thread. So, the output will look like the following -

// Output now looks like the following -

/*
first
third
I am right after third, before second
*/

// Stack and other Queues will look like the following -

/*

    Main Thread (Call Stack) -

    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    | setTimeout(() => {second})  |
    |_____________________________|

    Microstack Queue -

    |                     |
    |_____________________|

*/

// Lastly, setTimeout callback function will be sent to main thread.

/*

    Main Thread (Call Stack) -

    | setTimeout(() => {second})  |
    |           main()            |
    |_____________________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    |                     |
    |_____________________|

    Microstack Queue -

    |                     |
    |_____________________|

*/


// Then, it will execute and pop out.

// Output now looks like the following -

/*
first
third
I am right after third, before second
second
*/

// Stack and other Queues will look like the following -

/*

    Main Thread (Call Stack) -

    |         main()       |
    |______________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    |                     |
    |_____________________|

    Microstack Queue -

    |                     |
    |_____________________|

*/

// main() will pop out too.

/*

    Main Thread (Call Stack) -

    |                     |
    |_____________________|

    Web API -

    |                     |
    |_____________________|

    Callback Queue -

    |                     |
    |_____________________|

    Microstack Queue -

    |                     |
    |_____________________|

*/