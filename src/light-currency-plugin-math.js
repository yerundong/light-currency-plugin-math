import Decimal from 'decimal.js'

/**
 * Mathematical operation
 */
export const add = (...params) => Decimal.add(...params).valueOf() // +
export const sub = (...params) => Decimal.sub(...params).valueOf() // -
export const mul = (...params) => Decimal.mul(...params).valueOf() // ×
export const div = (...params) => Decimal.div(...params).valueOf() // ÷
export const sum = (...params) => Decimal.sum(...params).valueOf()

/**
 * Rounding operation
 */
export const toFixed = (value, dp, rm) =>
	new Decimal(value).toFixed(dp, rm).valueOf()
export const toDP = (value, dp, rm) => new Decimal(value).toDP(dp, rm).valueOf()

export default [
	{
		name: 'add',
		handler(value) {
			return this.setValue(add(this.value, value).valueOf())
		},
	},
	{
		name: 'sub',
		handler(value) {
			return this.setValue(sub(this.value, value).valueOf())
		},
	},
	{
		name: 'mul',
		handler(value) {
			return this.setValue(mul(this.value, value).valueOf())
		},
	},
	{
		name: 'div',
		handler(value) {
			return this.setValue(div(this.value, value).valueOf())
		},
	},
	{
		name: 'toFixed',
		handler(dp) {
			return this.setValue(toFixed(this.value, dp))
		},
	},
	{
		name: 'toDP',
		handler(dp) {
			return this.setValue(toDP(this.value, dp))
		},
	},
]
