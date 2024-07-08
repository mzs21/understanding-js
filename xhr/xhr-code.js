const getButton = document.getElementById('get-data')

const sendButton = document.getElementById('send-data')

const sendRequest = (method, url, data) => {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = "json"

        xhr.setRequestHeader("Content-Type", "application/json")

        xhr.send(data)

        xhr.onload = () => {

            xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response) // For all kind of errors

            /*
            const result = xhr.response;

            console.log(result)
            console.log(typeof result);

            
            const json = JSON.parse(result)
            console.log(json)
            console.log(typeof json);
            */

            // We could write like the above if we don't use 'responseType' before 'send' 
        }

        xhr.onerror = () => {           // For network specific error, not application specific error
            reject('Something was wrong')
        }
    })
    return promise;
}

const getData = () => {
    sendRequest('GET', "https://jsonplaceholder.typicode.com/todos/1")
        .then((responeData) => console.log(responeData))
}

const sendData = () => {
    const postData = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    });


    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', postData)
        .then((responeData) => console.log(responeData))
        .catch(err => console.log(err))
}

getButton.addEventListener('click', getData)


sendButton.addEventListener('click', sendData)