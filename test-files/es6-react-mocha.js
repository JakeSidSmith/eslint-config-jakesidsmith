import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('a test suite', () => {

  const Component = () => (
    <p>
      Hello, world!
    </p>
  );

  it('is a test', () => {
    const instance = TestUtils.renderIntoDocument(
      <Component />
    );

    expect(instance.render()).to.exist;
  });

});
