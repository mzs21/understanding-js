const takeOrder = (customer, callback) => {
    console.log(`Take order from ${customer}`);
    callback(customer)
}

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`)

    setTimeout(() => {
        console.log(`Cooking completed`);
        console.log(`Order processed for ${customer}`)
        callback(customer)
    }, 3000);


}

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
}

takeOrder('Customer 1', (customer) => processOrder(customer, (customer) => completeOrder(customer)))

