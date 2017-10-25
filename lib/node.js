'use strict';

//node constructor
var Node = module.exports = exports = function (value, next){
  this.value = value;
  this.next = next || null;
};
