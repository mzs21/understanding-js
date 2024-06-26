// To return Promise without using Promise and it's functionality, we use async await

// EX 1

/*
async function func() {
    return `Hello`
}

// We would write the same function to get promise like the following -

// function func() {
//     return Promise.resolve(`Hello`)
// }

console.log(func()) // Promise { `Hello` }
*/


// EX 2 - async-await

// 'await' works as 'then'. We can use 'await', when we use 'async'

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Tech Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        }
        resolve(meetingDetails)
    }
    else reject(new Error('Meeting already scheduled'))
})


const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`

    return Promise.resolve(calendar);
}


async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails)

        console.log(calendar)

    } catch (err) {
        console.error(err.message)
    }
}

myMeeting()


// It's always better to write JS code in an asynchronous way to get the best performance.

// If we have any complex code or expensive operation, we should write the code in an asynchronous way, so there is no blocking behavior.

// To control the flow of asynchronous actions, we can use the callback functions.

// Asynchronous tasks always return Promise and we can use then and catch to execute the Promise.

// async-await is the most convenient way for asynchronous tasks.