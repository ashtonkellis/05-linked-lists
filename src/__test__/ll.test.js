'use strict';

const LinkedList = require('./../lib/ll');

describe('Linked List class', () => {
  let testList;
  
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });
  
  test('#insertAtHead', () => {
    testList.insertAtHead(1);
    expect(testList.head.value).toEqual(1);

    testList.insertAtHead(2);
    expect(testList.head.value).toEqual(2);
    expect(testList.head.next.value).toEqual(1);

    testList.insertAtHead(3);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(1);
  });

  test('#insertAtEnd', () => {
    testList.insertAtEnd(1);
    expect(testList.head.value).toEqual(1);

    testList.insertAtEnd(2);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);

    testList.insertAtEnd(3);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(3);
  });

  test('#find', () => {
    testList.insertAtHead(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.insertAtHead(0);
    expect(testList.find(1).value).toBe(1);
    expect(testList.find(2).value).toBe(2);
    expect(testList.find(3).value).toBe(3);
    expect(testList.find(0).value).toBe(0);
  });

  test('#pop', () => {
    expect(testList.pop()).toBe(undefined);
    testList.insertAtHead(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    expect(testList.pop()).toBe(3);
    expect(testList.pop()).toBe(2);
    expect(testList.pop()).toBe(1);
  });

  test('#remove: removes from 1st position', () => {
    testList.insertAtHead(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.remove(1);
    expect(testList.head.value).toBe(2);
  });
  
  test('#remove: removes from middle of list', () => {
    testList.insertAtEnd(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.remove(2);
    expect(testList.head.next.value).toBe(3);
    expect(testList.remove(1)).toBeInstanceOf(LinkedList);
  });

  test('#remove: returns linked list', () => {
    testList.insertAtHead(1);
    expect(testList.remove(1)).toBeInstanceOf(LinkedList);
  });

  test('#map: simple case', () => {
    testList.insertAtEnd(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    
    const mappedList = testList.map(x => x * 2);
    expect(mappedList.head.value).toBe(2);
    expect(mappedList.head.next.value).toBe(4);
    expect(mappedList.head.next.next.value).toBe(6);

    expect(testList.head.value).toBe(1);
    expect(testList.head.next.value).toBe(2);
    expect(testList.head.next.next.value).toBe(3);
  });

  test('#map: returns instance of LinkedList', () => {
    testList.insertAtEnd(1);
    expect(testList.map(x => x * 2)).toBeInstanceOf(LinkedList);
  });
});
