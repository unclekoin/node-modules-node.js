const IIFE_module = (() => {
  let innerVariable = 'Secret';

  const publicInterface = {
    getValue() {
      return innerVariable;
    },
    setValue(newValue) {
      if (typeof newValue === 'string') {
        innerVariable = newValue;
      } else {
        innerVariable = 'DEFAULT';
      }
    },
  };

  return publicInterface;
})();

console.log(IIFE_module.getValue())

IIFE_module.setValue('new string');
console.log(IIFE_module.getValue());

IIFE_module.setValue(35);
console.log(IIFE_module.getValue());
