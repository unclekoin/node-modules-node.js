// require is synchronous!
const moduleA = require('./a');
// Below any variable name is viable
const moduleB = require('./b');
const Greeter = require('./c');

// Live binding in CommonJS
require('./e');
const moduleD = require('./d');
moduleD.sayHi(); // Hi from Module D

moduleA.sayHi('Module A');
moduleB('Module B');

const greeterInstance = new Greeter('Module C');
greeterInstance.sayHi();

module.exports.a = 1;
console.log(this === module.exports); // true
console.log(this); // { a: 1 } === exports
