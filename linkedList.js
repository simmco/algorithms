function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function(callback) {
  var node = this.head;
  while (node) {
    callback(node.value);
    node = node.next;
  }
};

LinkedList.prototype.print = function() {
  var result = [];
  this.forEach(function(value) {
    result.push(value);
  });
  return result.join(', ');
};

LinkedList.prototype.insertAfter = function(node, value) {
  // get reference to former next
  var oldNext = node.next;
  // create new node
  var newNext = new Node(value);
  // store it as the new next
  node.next = newNext;
  // set next for the new node to be the old next
  newNext.next = oldNext;
  // if reference node is tail, set tail to newNext
  if (this.tail === node) this.tail = newNext;
  return newNext;
};

LinkedList.prototype.removeAfter = function(node) {
  // store reference to removed node
  var removedNode = node.next;
  // if node is tail, then there's nothing to remove
  if (!removedNode) return 'Nothing to remove';
  // get reference to node after removed node
  var newNext = removedNode.next;
  // set newNext as the next node
  node.next = newNext;
  // remove reference from removed node to linked list
  removedNode.next = null;
  // if removedNode is tail, set tail to node
  if (removedNode === this.tail) this.tail = node;
  return removedNode;
};

LinkedList.prototype.insertHead = function(value) {
  var newHead = new Node(value);
  var oldHead = this.head;
  this.head = newHead;
  newHead.next = oldHead;
  return this.head;
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  var newHead = oldHead.next;
  this.head = newHead;
  oldHead.next = null;
  return oldHead;
};

LinkedList.prototype.findNode = function(value) {
  var node = this.head;
  while (node) {
    if (node.value === value) return node;
    node = node.next;
  }
  return 'No node with value: ' + value + ' found.';
};

LinkedList.prototype.appendToTail = function(value) {
  var newTail = new Node(value);

  // // without myList.tail property: O(n)
  // var node = this.head;
  // while(node.next) {
  //   node = node.next;
  // }
  // node.next = newTail;

  // with myList.tail property: O(1)
  this.tail.next = newTail;
  this.tail = newTail;

  return newTail;
};

var myList = new LinkedList(0);

console.log(myList.print(), 'should be 0');
console.log(myList.insertAfter(myList.head, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.removeAfter(myList.head), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.appendToTail(4), 'should be 4');
console.log(myList.print(), 'should be 0, 2, 3, 4');
console.log(myList.findNode(0) === myList.head, 'should be true');
console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
myList.insertAfter(myList.findNode(2), 2.5);
console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
myList.removeAfter(myList.findNode(2));
console.log(myList.print(), 'should be 0, 2, 3, 4');
