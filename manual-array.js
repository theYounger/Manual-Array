'use strict';

  // load module
  var iteratorModule = require('./iteratorModule.js');

  // initialize the module with an array. the return value is a function so we need to store it to a variable.
  var step = iteratorModule.init([9, 66, 'Oprah Windfury', [5, 4, 6]]);

  // from here on each time we invoke `step` it returns the next value starting at first index.
  console.log(step(1)); // returns 9
  console.log(step()); // returns 66
  console.log(step()); // returns 'Oprah Windfury'
  console.log(step()); // returns [5, 4, 6]
  console.log(step()); // returns 'Error: end of array'
  console.log(step()); // returns 'Error: end of array'