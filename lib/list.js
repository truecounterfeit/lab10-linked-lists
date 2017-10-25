'use strict';

const Node = require('../lib/list.js');

//list constructor
const List = module.exports = function(node) {
  this.head = node || null;
};

//prepend list
List.prototype.prepend = function(value) {
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
};

//append list
List.prototype.append = function(value) {
  if (this.head === null) return this.head = new Node(value);
  let current = this.head;
  while(current.next !== null)
    current = current.next;
  current.next = new Node(value);
};
