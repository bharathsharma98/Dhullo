"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFromCart = exports.RemoveFromCart = exports.AddToCart = exports.CartToggle = void 0;

var CartToggle = function CartToggle() {
  return {
    type: "CART_TOGGLE"
  };
};

exports.CartToggle = CartToggle;

var AddToCart = function AddToCart(item) {
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};

exports.AddToCart = AddToCart;

var RemoveFromCart = function RemoveFromCart(item) {
  return {
    type: "REMOVE_FROM_CART",
    payload: item
  };
};

exports.RemoveFromCart = RemoveFromCart;

var UpdateFromCart = function UpdateFromCart(item) {
  return {
    type: "UPDATE_FROM_CART",
    payload: item
  };
};

exports.UpdateFromCart = UpdateFromCart;