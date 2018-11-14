if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      return ((number) => {
        let result;

        if (number % 3 === 0) {
          if (number % 5 === 0) {
            result = 'fizzbuzz';
          } else {
            result = 'fizz';
          }
        } else if (number % 5 === 0) {
          result = 'buzz';
        } else if (typeof number !== "number") {
          result = false
        } else {
          result = number
        }

        return result;
      })(num);
    }
  };
});
