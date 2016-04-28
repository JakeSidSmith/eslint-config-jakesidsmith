'use strict';

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

describe('a test suite', function () {

  var Component = function () {
    return (
      <p>
        Hello, world!
      </p>
    );
  };

  it('is a test', function () {
    var instance = TestUtils.renderIntoDocument(
      <Component />
    );

    expect(instance.render()).to.exist;
  });

});
