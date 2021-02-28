"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var INITIAL_STATE = {
  errorMessage: ''
};

var setErrorMessage = function setErrorMessage(message) {
  var newMessage = '';
  if (message.message.includes("Unexpected token < in JSON at position 0")) return "INVALID CREDENTIALS";
};

var errorReducer = function errorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_ERROR":
      return {
        errorMessage: setErrorMessage(action.payload)
      };

    case "RESET_ERROR":
      return {
        errorMessage: null
      };

    default:
      return state;
  }
};

var _default = errorReducer;
exports["default"] = _default;