"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.addItemsToCart = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var addItemsToCart = function addItemsToCart(CartItems, CartItemToAdd) {
  var existingCartItem = CartItems.find(function (CartItem) {
    return CartItem.mycar === CartItemToAdd.mycar && CartItem.category === CartItemToAdd.category;
  });

  if (existingCartItem) {
    alert("already added to cart");
    return CartItems;
  }

  return [].concat(_toConsumableArray(CartItems), [CartItemToAdd]);
};

exports.addItemsToCart = addItemsToCart;

var removeFromCart = function removeFromCart(CartItems, RemoveItem) {
  var filteredItems = CartItems.filter(function (item) {
    return item.id !== RemoveItem.id;
  });
  return filteredItems;
};

exports.removeFromCart = removeFromCart;