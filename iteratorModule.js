'use strict';

const iteratorModule = {

  count: 0,
  updateCount: (skip) => {
    iteratorModule.count = ++skip;
  },
  init: (arr) => {

    return (skip /*stretch*/) => {
      if(typeof skip !== 'number') {
        var counter = iteratorModule.count;
        iteratorModule.count++;
        return arr[counter];
      } else {
        iteratorModule.updateCount(skip);
        return arr[skip];
      }
    };
  }
};

module.exports = iteratorModule;