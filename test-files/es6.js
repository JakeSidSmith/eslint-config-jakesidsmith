/* Comment */

import fs from 'fs';

fs.doSomething();

const isThisNice = (input) => {
  switch (input) {
    case 'nice':
      return true;
    default:
      return false;
  }
};

const nice = 'nice';

const doSomething = (arg) => arg + 1;

if (isThisNice(nice) === true) {
  doSomething(1);
} else {
  throw new Error('That shirt is nasty');
}

let arr = [1, 2, 3, 4, 5];
let obj = {
  foo: 'bar'
};

arr.push(6);
obj.bar = 'foo';
