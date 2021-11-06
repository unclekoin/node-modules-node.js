const sayHi = (msg) => console.log(`Hi! Message: ${msg}`);

// exports.sayHi = sayHi;
module.exports.sayHi = sayHi;

console.log(exports === module.exports); // true
