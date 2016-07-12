'use strict';

const iteratorModule = {

  count: 0,
  init: (arr) => {

    return () => {//this function will be returned and stored as var STEP. Calling this function returns the next element in array.
      var counter = iteratorModule.count;
      iteratorModule.count++;
      return arr[counter];
    };
  }
};

module.exports = iteratorModule;