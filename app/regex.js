if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return (/[0-9]/).test(str);
    },

    containsRepeatingLetter : function(str) {
      return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {
      return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers : function(str) {
      const serie = str.match(/\d{3}/);
      return (serie) ? serie[0] : false;
    },

    matchesPattern : function(str) {
      return (/^(\d{3})-(\d{3})-(\d{4})$/).test(str);
    },
    isUSD : function(str) {
      return (/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/);
    }
  };
});
