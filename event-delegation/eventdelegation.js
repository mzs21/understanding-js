// Event delegation involves using a single event listener for multiple elements. This listener will still work even if new elements are added.

const list = document.getElementById('list')

list.addEventListener('click', (e) => {
    console.dir(e)

    if (e.target.matches('li')) {
        switch (e.target.innerText) {
            case 'JavaScript':
                e.target.style.backgroundColor = 'yellow'
                break;
            case 'PHP':
                e.target.style.backgroundColor = 'blue'
                break;
            case 'Java':
                e.target.style.backgroundColor = 'red'
                break;
            case 'Python':
                e.target.style.backgroundColor = 'green'
                break;
            case 'TypeScript':
                e.target.style.backgroundColor = 'aqua'
                break;
            default:
                e.target.style.backgroundColor = 'orange'
                break;
        }

    }
    console.dir(e.target)

})

const addElement = () => {
    const newElement = document.createElement('li')

    newElement.textContent = 'C#'

    list.appendChild(newElement)
}