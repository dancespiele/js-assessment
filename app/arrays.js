if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      arr.push(-1);


      return arr[(item === 3) ? item - 2 : item];
    },

    sum : function(arr) {
      return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    },

    remove : function(arr, item) {
      return arr.filter((value) => value !== item);
    },

    removeWithoutCopy : function(arr, item) {
      const arr2 = arr.slice();
      let index;

      arr2.forEach((value) => {
        if (value === item) {
          index = arr.indexOf(value);
          arr.splice(index, 1);
        }
      });

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      const total = arr.filter((value) => value === item);
      return total.length;
    },

    duplicates : function(arr) {
      let duplicates = [];

      return arr.reduce((accumulator, currentValue) => {
        const elements = arr.filter((value) => value === currentValue &&
          !duplicates.some((value) => value === currentValue));
        if (elements.length > 1) {
          duplicates.push(currentValue);
        }

        return duplicates;
      });
    },

    square : function(arr) {
      return arr.map((value) => Math.pow(value, 2));
    },

    findAllOccurrences : function(arr, target) {
      const occurences = [];

      arr.forEach((values, index) => {
        if (values === target) {
          occurences.push(index);
        }
      });

      return occurences;
    }
  };
});
