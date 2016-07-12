'use strict';

const iteratorModule = {

  count: 0,
  init: (arr) => {

    return (skip /*stretch*/) => {
      if(typeof skip !== 'number') {
        var counter = iteratorModule.count;
        iteratorModule.count++;
        return arr[counter];
      } else {
        return arr[skip];
      }
    };
  }
};

module.exports = iteratorModule;