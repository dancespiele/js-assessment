if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      const binary = num.toString(2);
      const result = bit > binary.length 
        ? 0 
        : binary.toString(2)[binary.length - bit];
      
      return parseInt(result, 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let binary = num.toString(2);
      while (binary.length < 8) {
        binary = `0${binary}`;
      }
      return binary;
    },

    multiply: function(a, b) {
      const precision = b.toString().split(".")[1].length;
      return parseFloat((a * b).toPrecision(precision));
    }
  };
});

