# Linked List

[![Build Status](https://travis-ci.org/ashtonkellis/05-linked-lists.svg?branch=master)](https://travis-ci.org/ashtonkellis/05-linked-lists)

## installation 
```
require('/src/lib/ll);
```

## lined lists constructor
The linked list consists of a series of nodes. Each node has a value, and a 'next' property, which points to the next node in the linked list.
The linked list has a head property, which points to the first node in the link.
Creating a new linked list:
``` 
const myLinkedList = new LinkedList();
```

## Linked List Methods
### .insertAtHead(value)
Creates a new node at the head of the linked list.
Method signature: (value)
Arity: 1
Argument: the value of the node to be inserted at the head.
Creating a new node at the head with a value of 1:
``` 
const myLinkedList = new LinkedList();
myLinkedList.insertAtHead(1)
```

### .insertAtTail(value)
Creates a new node at the tail of the linked list.
Method signature: (value)
Arity: 1
Argument: the value of the node to be inserted at the tail.
Creating a new node at the tail with a value of 1:
```
const myLinkedList = new LinkedList();
myLinkedList.insertAttail(1)
```

### .find(value)
Finds and returns the node with a given value.
Method signature: (value) => node
Arity: 1
Argument: the value of the node to be returned
Finding and returning a node with a given value:
```
const myLinkedList = new LinkedList();
myLinedList.insertAtHead(1);
myLinkedList.find(1); // returns node with value 1
```

### .pop()
Removes and returns the last node in the linked list
Method signature: () => node
Arity: 0
Removing the last node in the list example
```
const myLinkedList = new LinkedList();
myLinedList.insertAtEnd(1);
myLinedList.insertAtEnd(2);
myLinedList.insertAtEnd(3);
myLinkedList.pop() // returns node with value 3;
```
### .remove(value)
removes the node with a given value and returns the linked list
method signature: (value) => LinkedList with value removed
arity: 1
argument: the value of the node to be removed
removing a node example:
```
const myLinkedList = new LinkedList();
myLinedList.insertAtEnd(1);
myLinedList.insertAtEnd(2);
myLinedList.insertAtEnd(3);
myLinkedList.remove(2) // returns linked list with the value 2 removed;
```

### .map(callback)
makes a copy of the linkedList, and applies the provided callback function to each node value in the copy
method signature: (callback) => mapped linked list
arity: 1
argument: the callback function to be applied to each element. this callback function has an arity of 1
mappin a linked list example
```
const myLinkedList = new LinkedList();
myLinedList.insertAtEnd(1);
myLinedList.insertAtEnd(2);
myLinedList.insertAtEnd(3);
myLinkedList.map(x => x * 2) // returns a linked list with node values of 2, 4, 6.
```

## testing 
testing with jest. to run the full suite of jest tests:
```
npm run test
```