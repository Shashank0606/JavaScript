//Object property shorthand
const name = 'Sam', age = 18, city = 'chittor';

// Before ES6, we must write like this
const customer = {
    name: name,
    age: age,
    city: city
} // // {name: 'Sam', age: 18, city: 'chittor'}

// After ES6, we can do it
const newCustomer = {
    name,
    age,
    city
} // {name: 'Sam, age: 18, city: 'chittor'}