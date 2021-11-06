class Greeter {
  constructor(msg) {
    this._msg = msg;
  }

  sayHi() {
    console.log(`Hi! Message from Greeter: ${this._msg}`);
  }
}

module.exports = Greeter;
