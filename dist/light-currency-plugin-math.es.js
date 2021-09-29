/**
 * light-currency-plugin-math - v1.0.1
 * https://github.com/yerundong/light-currency-plugin-math.git
 * 
 * Copyright (c) 2021 yerundong
 * Released under MIT license
 */

import Decimal from 'decimal.js';

/**
 * Mathematical operation
 */

var add = function add() {
  return Decimal.add.apply(Decimal, arguments).valueOf();
}; // +

var sub = function sub() {
  return Decimal.sub.apply(Decimal, arguments).valueOf();
}; // -

var mul = function mul() {
  return Decimal.mul.apply(Decimal, arguments).valueOf();
}; // ×

var div = function div() {
  return Decimal.div.apply(Decimal, arguments).valueOf();
}; // ÷

var sum = function sum() {
  return Decimal.sum.apply(Decimal, arguments).valueOf();
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

export { add, lightCurrencyPluginMath as default, div, mul, sub, sum };
