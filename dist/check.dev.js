"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var inputString = "apple,banana,orange,apple,grape,banana";

var pro = function pro(input) {
  var wordsArray = input.split(',');

  var uniqueWordsArray = _toConsumableArray(new Set(wordsArray));

  uniqueWordsArray.sort();
  return uniqueWordsArray.join(',');
};

console.log(pro(inputString));