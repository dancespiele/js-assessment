if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      let files = [];
      
      if (data.files) {
        data.files.forEach((file) => {
          if (file.files) {
            files = files.concat(this.listFiles(file, dirName));
          } else {
            const regs = new RegExp(`${dirName ? `\.${dirName}$`: ''}`, 'g');

            if (file.match(regs)) {
              files.push(file);
            }
          }
        })
      }

      return files;
    },

    permute: function(arr) {
      let result = [];

      arr.forEach((value, index) => {
        let result2 = this.permute(arr.slice(0, index).concat(arr.slice(index + 1)));
        if(!result2.length) {
          result.push([arr[index]])
        } else {
          result2.forEach((value, result2Index) => {
            result.push([arr[index]].concat(result2[result2Index]));
          });
        }
      });

      return result;
    }
  };
});
