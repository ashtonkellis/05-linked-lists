'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1) time complexity
  // O(1) space complexity
  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  // the insertion is O(1) time complexity, however in order the insert at the end, you must walk through the entire linked list, which is an O(n) time complexity operation, where n is the number of nodes
  // O(1) space complexity
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return this;
  }

  // O(n) time complexity, where n is the number of nodes
  // O(1) space complexity
  find(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) return this.head;

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) return currentNode.next;
      currentNode = currentNode.next;
    }
    return null;
  }

  // the removal is O(1) time complexity, however in order the remove at the end, you must walk through the entire linked list, which is an O(n) time complexity operation, where n is the number of nodes
  // O(1) space complexity
  pop() {
    if (!this.head) return undefined;

    let poppedNode;
    if (!this.head.next) {
      poppedNode = this.head;
      this.head = null;
      return poppedNode.value;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    poppedNode = currentNode.next;
    currentNode.next = null;
    return poppedNode.value;
  }

  // the removal is O(1) time complexity, however in order the remove at the end, you must walk through the entire linked list, which is an O(n) time complexity operation, where n is the number of nodes
  // O(1) space compexity
  remove(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return this;
      }
      currentNode = currentNode.next;
    }

    return this;
  }

  // O(n) time complexity, where n is the number of nodes
  // O(n) space complexity, where n is the number of nodes
  map(callback) {
    const copy = new LinkedList();
    let currentNode = this.head;

    while (currentNode.next) {
      copy.insertAtEnd(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    copy.insertAtEnd(callback(currentNode.value));

    return copy;
  }
};
