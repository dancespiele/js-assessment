if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise((resolve) => {
        resolve(value);
      })
    },

    manipulateRemoteData : function(url) {
      return Promise.resolve($.get(url))
        .then((data) => {
          const people = (data.people) ? data.people : null;
          return people.map((person) => person.name).sort();
        });
    },
  };
});
