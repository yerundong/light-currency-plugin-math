import Decimal from 'decimal.js'

/**
 * Mathematical operation
 */
export const add = (...params) => Decimal.add(...params).valueOf() // +
export const sub = (...params) => Decimal.sub(...params).valueOf() // -
export const mul = (...params) => Decimal.mul(...params).valueOf() // ×
export const div = (...params) => Decimal.div(...params).valueOf() // ÷
export const sum = (...params) => Decimal.sum(...params).valueOf()

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
		name: 'sum',
		handler(value) {
			return this.setValue(sum(this.value, value).valueOf())
		},
	},
]
