if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return ((greeting, name) => {
        this.greeting = greeting;
        this.name = name;
        this.sayIt = () => {
          return `${this.greeting}, ${this.name}`;
        }
        return this;
      })(str1, str2);
    }
  };
});

