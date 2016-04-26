/* Comment */

import fs from 'fs';

const isThisNice = (input) => {
  switch (input) {
    case 'nice':
      return true;
    default:
      return false;
  }
};

const nice = 'nice';

if (isThisNice(nice) === true) {
  console.log('It is very nice');
} else {
  throw new Error('That shirt is nasty');
}

let arr = [1, 2, 3, 4, 5];
let obj = {
  foo: 'bar'
};

fs.doNothing(arr, obj);
