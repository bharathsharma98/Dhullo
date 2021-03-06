"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCard = exports.CarBox = exports.Userpopup = exports.SmallPopupRound = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _washing = _interopRequireDefault(require("../Image/washing.png"));

var _sanitization = _interopRequireDefault(require("../Image/sanitization.png"));

var _detailing = _interopRequireDefault(require("../Image/detailing.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nheight:100PX;\nwidth:40%;\nmargin:2%;\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\nbackground-color:", ";\nborder-radius:5px;\ncursor:pointer;\n position:relative;\nborder:2px solid ", ";\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\na{font-size:clamp(2vw,3.5vw,4vw);\n \n \ncolor:", ";\nfont-weight:bold;\ntext-decoration:none;\n  font-family: 'Josefin Sans', sans-serif;\n font-size:3.4vw;\n \n \n    position: relative;\ntop:-40%;\nleft:7%;\n   width: 100%;\n   margin: auto;\n   width: 100%;\n   height: 50px;\n \n }\nimg{\n  bottom:-8px;\n  z-index:-1;\n  height:100%;\n  width:100%;\n  -webkit-filter: blur(2.5px);\n  position:relative;\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n height:clamp(4rem,5rem,10rem);\n margin-bottom:0.5rem;\n margin-right:0.5rem;\n    min-width: 15rem;\n    max-width:fit-content;\n   border-radius:5px;\n   \n    border:2px solid #bab3b3;\n      background-color:#ebe4e4;\ntext - align: center;\n// margin-bootom:1rem;\ndisplay:flex;\n \nflex-direction:row;\ninput{\n     align-items:center;\n     height:20px;\n     width:20px;\n   text-align:center;\n    cursor:pointer;\n  margin:1rem;\n    background-color:blue;\n } \n label{\nfont-size:small;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-left:10%;\n\n \n }\n small{\n   font-size:medium;\n  font-family: 'Josefin Sans', sans-serif;\n \n    color:gray;\n    width:100%;\n }\n p{\n     font-size:large;\n }\n \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nheight:fit-content;\nwidth:clamp(10rem,15rem,20rem);\nz-index:3000;\nbackground-color:white;\ndisplay:flex;\nflex-direction:column;\nposition:absolute;\ntop:100%;\nleft:85%;\nmargin-right:1rem;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  button{\n  color:red;\n  background:none;\n  font-size:clamp(0.5rem,2.3rem,1.5rem);\n  font-family: 'Josefin Sans', sans-serif;\n  \n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n       background-color: #ed2828;\n     "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n     background-color: #4fc26e;\n   "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nheight:2.5rem;\nmax-width:fit-content;\n \nborder-radius:100px;\nopacity:80%;\nz-index:200;\n\n margin:3%;\n text-align:center;\n p {\n font-size:small;\ntext-align:center;\n     color:black;\n     opacity:100%;\n }\n ", "\n   ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmallPopupRound = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.message === "success" && (0, _styledComponents.css)(_templateObject2());
}, function (props) {
  return props.message === "error" && (0, _styledComponents.css)(_templateObject3());
});

exports.SmallPopupRound = SmallPopupRound;

var Userpopup = _styledComponents["default"].div(_templateObject4());

exports.Userpopup = Userpopup;

var CarBox = _styledComponents["default"].div(_templateObject5());

exports.CarBox = CarBox;

var ServiceCard = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontColor;
});

exports.ServiceCard = ServiceCard;