/**
 * light-currency-plugin-math - v1.0.4
 * https://github.com/yerundong/light-currency-plugin-math.git
 * 
 * Copyright (c) 2021 yerundong
 * Released under MIT license
 */

define(['exports', 'decimal.js'], (function (exports, Decimal) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var Decimal__default = /*#__PURE__*/_interopDefaultLegacy(Decimal);

	/**
	 * Mathematical operation
	 */

	var add = function add() {
	  return Decimal__default["default"].add.apply(Decimal__default["default"], arguments).valueOf();
	}; // +

	var sub = function sub() {
	  return Decimal__default["default"].sub.apply(Decimal__default["default"], arguments).valueOf();
	}; // -

	var mul = function mul() {
	  return Decimal__default["default"].mul.apply(Decimal__default["default"], arguments).valueOf();
	}; // ×

	var div = function div() {
	  return Decimal__default["default"].div.apply(Decimal__default["default"], arguments).valueOf();
	}; // ÷

	var sum = function sum() {
	  return Decimal__default["default"].sum.apply(Decimal__default["default"], arguments).valueOf();
	};
	/**
	 * Rounding operation
	 */

	var toFixed = function toFixed(value, dp, rm) {
	  return new Decimal__default["default"](value).toFixed(dp, rm).valueOf();
	};
	var toDP = function toDP(value, dp, rm) {
	  return new Decimal__default["default"](value).toDP(dp, rm).valueOf();
	};
	var lightCurrencyPluginMath = [{
	  name: 'add',
	  handler: function handler(value) {
	    return this.setValue(add(this.value, value).valueOf());
	  }
	}, {
	  name: 'sub',
	  handler: function handler(value) {
	    return this.setValue(sub(this.value, value).valueOf());
	  }
	}, {
	  name: 'mul',
	  handler: function handler(value) {
	    return this.setValue(mul(this.value, value).valueOf());
	  }
	}, {
	  name: 'div',
	  handler: function handler(value) {
	    return this.setValue(div(this.value, value).valueOf());
	  }
	}, {
	  name: 'toFixed',
	  handler: function handler(dp) {
	    return this.setValue(toFixed(this.value, dp));
	  }
	}, {
	  name: 'toDP',
	  handler: function handler(dp) {
	    return this.setValue(toDP(this.value, dp));
	  }
	}];

	exports.add = add;
	exports["default"] = lightCurrencyPluginMath;
	exports.div = div;
	exports.mul = mul;
	exports.sub = sub;
	exports.sum = sum;
	exports.toDP = toDP;
	exports.toFixed = toFixed;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
