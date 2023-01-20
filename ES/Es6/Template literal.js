//Template literal

const firstName = 'Sam';
const lastName = 'Rathore';
// not use template literal
const name = 'Hello, My name is' + firstName + ', ' + lastName;
// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;


console.log(nameWithLiteralString)