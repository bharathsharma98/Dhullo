"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RetainUser = exports.updateCar = exports.addOrder = exports.removeCar = exports.addCar = exports.isLoggedout = exports.isLogged = void 0;

var isLogged = function isLogged(customer) {
  return {
    type: "LOGGED_IN",
    payload: customer
  };
};

exports.isLogged = isLogged;

var isLoggedout = function isLoggedout(customer) {
  return {
    type: "LOGGED_OUT"
  };
};

exports.isLoggedout = isLoggedout;

var addCar = function addCar(carArray) {
  return {
    type: "ADD_CAR",
    payload: carArray
  };
};

exports.addCar = addCar;

var removeCar = function removeCar(carobj) {
  return {
    type: "REMOVE_CAR",
    payload: carobj
  };
};

exports.removeCar = removeCar;

var addOrder = function addOrder(orderobj) {
  return {
    type: "ADD_ORDER",
    payload: orderobj
  };
};

exports.addOrder = addOrder;

var updateCar = function updateCar(tempobj) {
  return {
    type: "UPDATE_CAR",
    payload: tempobj
  };
};

exports.updateCar = updateCar;

var RetainUser = function RetainUser(carArray) {
  return {
    type: "RETAIN"
  };
};

exports.RetainUser = RetainUser;