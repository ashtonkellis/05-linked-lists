'use strict';

const Node = require('./../lib/node');

describe('Node class', () => {
  test('Successful instantiation', () => {
    const testNode = new Node(1);
    expect(testNode).toBeInstanceOf(Node);
    expect(testNode.value).toBe(1);
    expect(testNode.next).toBeNull();
  });

  test('Unsuccessful instantiation', () => {
    const testNode = JSON.parse(JSON.stringify(new Node(1)));
    expect(testNode).not.toBeInstanceOf(Node);
  });
});
