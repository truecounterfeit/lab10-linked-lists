'use strict';

const Node = require('../lib/list.js');

//list constructor
const SLList = module.exports = function(node) {
    this.head = node || null;
};

//prepend list, Big O O(1)
SLList.prototype.prepend = function(value) {
    let oldHead = this.head;
    this.head = new Node(value, oldHead);
};

//append list, Big O O(n)
SLList.prototype.append = function(value) {
    if (this.head === null) return this.head = new Node(value);
    let current = this.head;
    while(current.next !== null)
        current = current.next;
    current.next = new Node(value);
};

// remove list, Big O O(n)
SLList.prototype.remove = function(index) {
    let current = this.head;
    for(let i = 0; i < index - 1; i++)
        current = current.next;
    current.next = current.next.next;
};

// reverse list, Big O O(n)
SLList.prototype.reverse = function(value) {

    let revLL = new Node(value);
    let current = this.head;
    while(current !== null) {
        revLL.prepend(current.value);
        current = current.next;
    }
    this.head = revLL.head;
};


//findNthNodeFromEnd(n)

//findMiddleNode()


// // find list
// SLList.prototype.find = function(value) {
//     let current = this.head;
//     while(current.value !== value) {
//         if (current.next === null) return null;
//         current = current.next;
//     }
//     return current;
// };
//
// // print list
// SLList.prototype.print = function() {
//     let current = this.head;
//     while(current !== null) {
//         console.log(current.value);
//         current = current.next;
//     }
// };
