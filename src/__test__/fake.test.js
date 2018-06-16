'use strict';

const fake = require('./../lib/fake');

describe('testing fake function is linked up', () => {
  test('fake function test', () => {
    expect(fake()).toBe('working');
  });
});
