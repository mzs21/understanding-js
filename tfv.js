let x = 'sdgs'

// false, 0, NaN, '', null, undefined

// If the value of a variable is either one of the 6 above mentioned value, then it'll return a 'falsy' value. Otherwise, 'truthy' value

if (x) {
    console.log('Truthy');
}
else { console.log('Falsy'); }