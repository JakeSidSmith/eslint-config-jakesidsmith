'use strict';

(function () {

  /* Comment */

  function isThisNice (input) {
    switch (input) {
      case 'nice':
        return true;
      default:
        return false;
    }
  }

  function doSomething (arg) {
    return arg + 1;
  }

  var nice = 'nice';

  if (isThisNice(nice) === true) {
    doSomething(1);
  } else {
    throw new Error('That shirt is nasty');
  }

  var arr = [1, 2, 3, 4, 5];
  var obj = {
    foo: 'bar'
  };

  arr.push(6);
  obj.bar = 'foo';

})();
