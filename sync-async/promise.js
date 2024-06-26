// EX 1
/*
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

meeting
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message)
    })
*/


// EX 2

/*
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


// const addToCalendar = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`

//         resolve(calendar);
//     })
// }


// The above code can also be shorten like the following - 

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`

    return Promise.resolve(calendar);
}

meeting
    .then(addToCalendar)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))
*/

// We can do error handling with only 1 catch block, regardless of the number of the 'then'


// EX 3 

/*
const promise1 = Promise.resolve('Promise 1 resolved')

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved')
    }, 2000);
})

// promise1.then(res => console.log(res))

// promise2.then(res => console.log(res))

// To resolve all promise together - 

Promise.all([promise1, promise2])
    .then(res => console.log(res))
*/

// EX 4

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved')
    }, 5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved')
    }, 2000);
})


Promise.race([promise1, promise2])
    .then(res => console.log(res))

// Promise.race resolve the promise than can be resolved first