'use strict';

(function () {

  /* Comment */

  var fs = require('fs');

  function isThisNice (input) {
    switch (input) {
      case 'nice':
        return true;
      default:
        return false;
    }
  }

  var nice = 'nice';

  if (isThisNice(nice) === true) {
    console.log('It is very nice');
  } else {
    throw new Error('That shirt is nasty');
  }

  var arr = [1, 2, 3, 4, 5];
  var obj = {
    foo: 'bar'
  };

  fs.doNothing(arr, obj);

})();
