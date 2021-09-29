/**
 * light-currency-plugin-math - v1.0.1
 * https://github.com/yerundong/light-currency-plugin-math.git
 * 
 * Copyright (c) 2021 yerundong
 * Released under MIT license
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('decimal.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'decimal.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lightCurrencyPluginMath = {}, global.Decimal));
})(this, (function (exports, Decimal) { 'use strict';

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
	  name: 'sum',
	  handler: function handler(value) {
	    return this.setValue(sum(this.value, value).valueOf());
	  }
	}];

	exports.add = add;
	exports["default"] = lightCurrencyPluginMath;
	exports.div = div;
	exports.mul = mul;
	exports.sub = sub;
	exports.sum = sum;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
