if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      const Print = {
        stop: false,
        counter: (i) => {
          setTimeout(() => {
            console.log(i);
            i++;
    
            if (i > end || Print.stop) {
              return;
            } else {
              Print.counter(i)
            }
          }, 80);
        },
        cancel: () => {
          setTimeout(() => {
            Print.stop = true;
          }, 80);
        } 
      };

      Promise.resolve(Print.counter(start));

      return Print;
    }
  };
});