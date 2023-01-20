//Object.values()

const exampleObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.value(exampleObj)); // [1, 2, 3, 4];

// To do the same thing before, use the following notation. much verbose
const values = Object.keys(exampleObj).map(key => exampleObj[key]);