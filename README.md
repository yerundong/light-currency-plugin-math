# light-currency-plugin-math

[light-currency](https://www.npmjs.com/package/light-currency)  plugin to provide basic mathematical operation methods.

**p.s. The following `cur` stands for an instance of `Currency`**

# Install

```js
npm i -S light-currency
npm i -S light-currency-plugin-math
```

```js
import Currency from 'light-currency'
import lightCurrencyPluginMath from 'light-currency-plugin-math'
Currency.extend(lightCurrencyPluginMath)
```



# Methods

### add

- Method

  `cur.add(x)`

- Parameter

  x: `{Number|String}` 

- Return

  `{Currency}` returns a new Currency whose value is the value of this Currency plus `x`.

- Example

  ```js
  1.1+0.1;// 1.2000000000000002
  new Currency(1.1).add(0.1).number;// 1.2
  ```
  

### sub

- Method

  `cur.sub(x)`

- Parameter

  x: `{Number|String}` 
  
- Return

  `{Currency}` returns a new Currency whose value is the value of this Currency minus `x`.
  
- Example

  ```js
  1.2-0.1;// 1.0999999999999999
  new Currency(1.2).sub(0.1).number;// 1.1
  ```

### mul

- Method

  `cur.mul(x)`

- Parameter

  x: `{Number|String}` 

- Return

  `{Currency}` returns a new Currency whose value is the value of this Currency times `x`.

- Example

  ```js
  1.1*1.3;// 1.4300000000000002
  new Currency(1.1).mul(1.3).number;// 1.43
  ```

### div

- Method

  `cur.div(x)`

- Parameter

  x: `{Number|String}` 

- Return

  `{Currency}` returns a new Currency whose value is the value of this Currency  divided by `x`.

- Example

  ```js
  0.3/3;// 0.09999999999999999
  new Currency(0.3).div(3).number;// 0.1
  ```

### toFixed

- Method

  `cur.toFixed(dp)`

- Parameter

  dp: `{Number:integer}` 

- Return

  `{Currency}` Returns a new Currency whose value is a string representing the value of this Currency in normal (fixed-point) notation rounded to `dp`

- Example

  ```js
  1.0005.toFixed(3);// '1.000'
  new Currency(1.0005).toFixed(3).value;// '1.001'
  new Currency(1).toFixed(3).value;// '1.000'
  ```

### toDP

- Method

  `cur.toDP(dp)`

- Parameter

  dp: `{Number:integer}` 

- Return

  `{Currency}` Returns a new Currency whose value is the value of this Currency rounded to `dp` decimal places.

- Example

  ```js
  1.0005.toFixed(3);// '1.000'
  new Currency(1.0005).toDP(3).value;// // '1.001'
  new Currency(1).toDP(3).value;// // '1'
  ```

# License

light-currency-plugin-math is licensed under a [MIT License](https://github.com/yerundong/light-currency-plugin-math/blob/master/license).

