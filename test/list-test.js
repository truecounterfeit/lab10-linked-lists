'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const SLList = require('../lib/list.js');

describe('append module', function() {

    it('should create new element if no list exists', function(){

        let testList = new LinkedList();
        testList.append(3);

        expect(testList).toEqual({
            head: {
                value: 3,
                next: null,
            },
        });
    });

    it('should add a new element to the end of the list', function(){

        let testList2 = new LinkedList();
        testList2.append(3);
        testList2.append(4);
        expect(testList2).toEqual({
            head: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        });

    });

});

describe('prepend module', function() {

    it('should create new element if no list exists', function(){

        let testList = new LinkedList();
        testList.preppend(3);

        expect(testList).toEqual({
            head: {
                value: 3,
                next: null,
            },
        });
    });

    it('should add a new element to the end of the list', function(){

        let testList2 = new LinkedList();
        testList2.preppend(3);
        testList2.preppend(4);
        expect(testList2).toEqual({
            head: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        });

    });

});

describe('remove', function(){

    it('should remove selected index from list', function(){
        let testlist = new LinkedList();
        testlist.append(1);
        testlist.append(2);
        testlist.append(3);
        testlist.remove(3);
        expect(testlist).toEqual({head:
      {value: 1,
          next:
        {value: 2,
            next: null},
      },
        });
    });
});

describe('reverse', function(){

    it('should reverse list', function(){
        let testlist = new LinkedList();
        testlist.append(1);
        testlist.append(2);
        testlist.append(3);
        let newList = testlist.reverse();
        expect(newList).toEqual({head:
      {value: 3, next:
        {value: 2, next:
          {value: 1, next: null,
          },
        },
      },
        }
        );
    }
    );
});
