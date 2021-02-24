"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removecarfunc = exports.addcarfunc = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var addcarfunc = function addcarfunc(prevcars, newcar) {
  return [].concat(_toConsumableArray(prevcars), [newcar]);
}; // export const addaddressfunc = (prevaddress, newaddress) => {
//   return [...prevaddress, newaddress];
// };


exports.addcarfunc = addcarfunc;

var removecarfunc = function removecarfunc(prevcars, cartoberemoved) {
  var items = prevcars.filter(function (item) {
    return item.id !== cartoberemoved;
  });
  return items;
}; // export const removeaddressfunc = (prevaddress, addresstoberemoved) => {
//   const items = prevaddress.filter((item) => item.id !== addresstoberemoved);
//   return items;
// };


exports.removecarfunc = removecarfunc;