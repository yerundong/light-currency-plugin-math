import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import bannerPlugin from 'rollup-plugin-banner'
import banner from './banner'

const input = 'src/light-currency-plugin-math.js'
const pathPrefix = 'dist/light-currency-plugin-math.'
export default [
	{
		input,
		output: [
			{
				file: pathPrefix + 'cjs.js',
				format: 'cjs',
			},
			{
				file: pathPrefix + 'amd.js',
				format: 'amd',
			},
			{
				file: pathPrefix + 'es.js',
				format: 'esm',
			},
			{
				file: pathPrefix + 'umd.js',
				format: 'umd',
				name: 'lightCurrencyPluginMath',
			},
		],
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
			bannerPlugin(banner),
		],
	},
	{
		input,
		output: [
			{
				file: pathPrefix + 'min.js',
				format: 'iife',
				name: 'lightCurrencyPluginMath',
			},
		],
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
			resolve(),
			commonjs(),
			uglify({
				compress: {
					pure_getters: true,
				},
			}),
			bannerPlugin(banner),
		],
	},
]
