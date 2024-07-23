// A debounce function is a way to ensure that a specific task does not fire so often, helping to limit the rate at which a function is executed. 


const button = document.getElementById('button')

const debounce = (fn, delay) => {
    let timeoutID;

    return () => {
        if (timeoutID) {
            clearTimeout(timeoutID)
        }

        timeoutID = setTimeout(() => {
            fn()
        }, delay);
    }
}

// For the first time, timeoutID will be empty, so the setTimeout will be assigned, then, because of 'Closure', the value will be remembered, since the 'timeoutID' is one scope higher. Second time, when button is clicked, it will enter the if conditional and clear the timeoutID.

button.addEventListener('click', debounce(() => {
    console.log('Clicked');
}, 500)
);