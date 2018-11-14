if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.call(null, ...arr);
    },

    speak : function(fn, obj) {
      return fn.bind(obj)();
    },

    functionFunction : function(str) {
      return (str2) => {
        return `${str}, ${str2}`;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map((el) => {
        const calc = () => {
          return fn(el);
        }
        return calc;
      });
    },

    partial : function(fn, str1, str2) {
      return (str3) => {
        return `${fn.call(null, str1, str2)}${(str3) ? str3.slice(0, -1) : ''}`;
      }
    },

    useArguments : function(...args) {
      return args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },

    callIt : function(fn, ...args) {
      // I know that it works with apply ej: fn.apply(null, args) 
      // but with rest parameters ... apply doesn't make sense
      return fn.call(null, ...args);
    },

    partialUsingArguments : function(fn, ...args) {
      return (...args2) => {
        return fn.call(null, ...args, ...args2);
      }
    },

    curryIt : function(fn) {
      return (n1) => {
        return (n2) => {
          return (n3) => {
            return fn(n1, n2, n3);
          }
        }
      }
    }
  };
});
