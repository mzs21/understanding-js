// Event Propagation means in what order the events should execute.

// Event Propagation has many parts - Event Bubbling, Event Capturing, Event Propagation

// Event Bubbling

/*
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener);

button.addEventListener("click", listener);

function listener(event) {
    console.log(event.currentTarget);

    // event.currentTarget === this

    // We can also write,
    // console.log(this);

    // We can also get the tagName and see the order

    console.log(this.tagName);

    // But if 'event.target' has been used it would have only referred to the 'button' (in this case)

    // console.log(event.target);
}

// In this case, the order is from bottom to top. Here, first 'button', then 'form', finally 'parent' is executed. This default order is called 'Event Bubbling'.
*/


// Event Capturing or Trickling

/*
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener, { capture: true });

form.addEventListener("click", listener, { capture: true });

button.addEventListener("click", listener, { capture: true });

function listener(event) {
    console.log(event.currentTarget);

    // event.currentTarget === this

    // We can also write,
    // console.log(this);

    // We can also get the tagName and see the order

    console.log(this.tagName);

    // But if 'event.target' has been used it would have only referred to the 'button' (in this case)

    // console.log(event.target);
}
*/

// To execute the order from top to bottom, we use 'Event Capturing or Trickling'. Opposite of 'Event Bubbling'. We just have to use the third parameter of the event listener and set it to 'true'. By default, it's false.


// Problem - How to execute the order randomly, or let's say, first 'from', then 'button', finally 'parent'.

const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);

// { capture: true } === true. As by default, it's false, we can directly write true, instead of providing an object.

button.addEventListener("click", listener);

function listener(event) {
    console.log(event.currentTarget);

    // event.currentTarget === this

    // We can also write,
    // console.log(this);

    // We can also get the tagName and see the order

    console.log(this.tagName);

    // But if 'event.target' has been used it would have only referred to the 'button' (in this case)

    // console.log(event.target);
}

// For this problem, we applied Event Capturing on 'Form', then as a child element of 'Form', 'Button' has been executed. Lastly, 'Parent' has been executed as default order.