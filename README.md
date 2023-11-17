# dcsm-type-helper

[![npm version](https://badge.fury.io/js/dcsm-type-helper.svg)](https://badge.fury.io/js/dcsm-type-helper)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

A vanilla JavaScript library for checking the type of variables in a more robust and accurate way than the typeof operator.

## Features

- Provides a simple and easy-to-use interface for checking the types of values in JavaScript.

- Allows you to check the type of a single value or multiple values at once.

- Provides options for customizing the behavior of the `TypeOf` class.
  
- Provides a set of methods for checking the type of values such as `isNumber`, `isObject`, `isBigInt`, etc.
  
- It also comes with some other useful methods such as `isEmptyArray`, `isBooleanTrue`, `isNumberZero`, etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Using the default export](#using-the-default-export)
  - [Get help information](#get-help-information)
  - [Using the class directly](#using-the-class-directly)
  - [Handling errors](#handling-errors)
  - [Using the class with options](#using-the-class-with-options)
  - [Get the type names of values](#get-the-type-names-of-values)
- [API Reference](#api-reference)
  - [TypeOf](#typeof-class)
    - [constructor](#constructor)
    - [setOptions](#setoptions-setter)
    - [getOptions](#getoptions-getter)
    - [isTypeOf](#istypeof-method)
    - [notTypeOf](#nottypeof-method)
    - [isTypeOfValues](#istypeofvalues-method)
    - [notTypeOfValues](#nottypeofvalues-method)
    - [getTypeOf](#gettypeof-method)
  - [typeOfShorthand](#typeofshorthand-object-default-export)
  - [getTypeOf](#gettypeof-function)
  - [getTypeOfPretty](#gettypeofpretty-function)
  - [typeOf](#typeof-function)
  - [typeOfSilent](#typeofsilent-function)
  - [typeOfHelp](#typeofhelp-function)
- [License](#license)

## Installation

To install `dcsm-type-helper`, you can use npm:

```
npm install dcsm-type-helper
```

## Usage

### Using the default export

```javascript
// See the output of the typeOfHelp method for a list of all the supported types and helper methods.
import typeOfShorthand from "dcsm-type-helper";
const {
  isString
} = typeOfShorthand;
console.log(isString("hello")); // true

```

### Get help information

```javascript
import { typeOfHelp } from "dcsm-type-helper";
typeOfHelp();
```

The `typeOfHelp` function provides help information on the supported types and helper methods. It will `console.log` the following string to the console:

<details>
<summary><b>Click to expand/view the help information</b></summary>
<i>
<hr>
<p>
The name of each type and helper method is a combination of a 'use case' name and a 'type/helper' name.

For instance, the method 'isString' which checks if one or all values are a string is a combination of the 'use case' name 'is' and the 'type/helper' name 'String'.
</p>
<p>
<h3>The 'use case' names are:</h3>
is&emsp;// checks if all values are of the specified 'type/helper'<br>
not&emsp;// checks if all values are not of the specified 'type/helper'<br>
everyValueIs&emsp;// same as the 'is' 'use case'<br>
everyValueNot&emsp;// same as the 'not' 'use case'<br>
someValueIs&emsp;// checks if at least one value is of the specified 'type/helper'<br>
someValueNot&emsp;// checks if at least one value is not of the specified 'type/helper'
</p>
<p>
<h3>The 'type/helper' names are:</h3>
Arguments
<br>Array
<br>Arraybuffer
<br>Arrayiterator
<br>Asyncfunction
<br>Asyncgenerator
<br>Asyncgeneratorfunction
<br>Bigint
<br>Bigint64array
<br>Biguint64array
<br>Boolean
<br>Dataview
<br>Date
<br>Error
<br>Float32array
<br>Float64array
<br>Function
<br>Generator
<br>Generatorfunction
<br>Infinity
<br>Int16array
<br>Int32array
<br>Int8array
<br>Internal
<br>Map
<br>Mapiterator
<br>Module
<br>Modulenamespaceobject
<br>Nan
<br>Null
<br>Number
<br>Object
<br>Promise
<br>Proxy
<br>Regexp
<br>Set
<br>Setiterator
<br>String
<br>Stringiterator
<br>Symbol
<br>Typedarray
<br>Uint16array
<br>Uint32array
<br>Uint8array
<br>Uint8clampedarray
<br>Undefined
<br>Weakmap
<br>Weakset
<br>EmptyArray
<br>EmptyObject
<br>EmptyString
<br>Empty
<br>BooleanTrue
<br>BooleanFalse
<br>NumberZero
<br>NumberPositive
<br>NumberNegative
<br>NumberMaxSafeInteger

</i>
<hr>
</details>
<br>


### Using the class directly

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInstance = new TypeOf("hello", 42, true);
console.log(typeOfInstance.isString); // false
console.log(typeOfInstance.someValueIsString); // true
console.log(typeOfInstance.someValueNotNumber); // true

const types = typeOfInstance.getTypeOf();
console.log(types); // ["string", "number", "boolean"]


```

### Handling errors
A simple try-catch example for handling the error thrown when using the `notTypeOf` method:

```javascript
import { TypeOf } from "dcsm-type-helper";
// Create a new instance of the TypeHelper class. Take note that no values are provided to the constructor.
const tryTypeOf = new TypeOf();
try {
  // This will throw an error because there are no values to check provided to the constructor.
  tryTypeOf.notTypeOf('object');
} catch (error) {
  console.error(error.name); // InvalidValuesToCheckError
  console.error(error.message); // No values to check were provided!
}
```

### Using the class with options

```javascript
import { TypeOf } from "dcsm-type-helper";
const optionsTypeOf = new TypeOf("hello", 42, true);

optionsTypeOf.setOptions = {
  enableCapitalizedTypeNames: true,
  disableThrowErrors: true,
};
console.log(optionsTypeOf.getTypeOf());
```

### Get the type names of values

The `getTypeOf` function allows you to get the type of a single value or multiple values at once.

```javascript
import { getTypeOf } from "dcsm-type-helper";
const myString = "hello";
const myNumber = 42;
const myBoolean = true;

const stringType = getTypeOf(myString);
console.log(stringType); // "string"

const types = getTypeOf(myString, myNumber, myBoolean);
console.log(types); // ["string", "number", "boolean"]
```

# API Reference

## TypeOf [class]
#### `constructor(...values: any[]): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.

Throws an error if no values are provided to the constructor. With error name `InvalidValuesToCheckError` and message `No values to check were provided!`.

## TypeOf - setOptions [setter]
#### `setOptions(options: TypeOfOptions): void`

Sets the options for an instance of the `TypeOf` class.

``` javascript
TypeOfOptions = {
  enableCapitalizedTypeNames?: boolean;
  disableThrowErrors?: boolean;
}
```

`options`: An optional object with the following properties:
  - `enableCapitalizedTypeNames`: A boolean value indicating whether to use capitalized type names. If `true`, the `TypeOf` class will return capitalized type names (e.g. `String` instead of `string`). If `false` (the default), the `TypeOf` class will use lowercase type names.
  - `disableThrowErrors`: A boolean value indicating whether to disable throwing errors. If 

If `enableCapitalizedTypeNames` is set to `true`, the `getTypeOf` method will return capitalized type names (e.g. `String` instead of `string`). If `enableCapitalizedTypeNames` is set to `false` (the default), the `getTypeOf` method will return lowercase type names.

If `disableThrowErrors` is set to true `true`, the `TypeOf` class will not throw errors and instead return `undefined`. It is important to remember that by returning `undefined` instead of throwing errors, the `TypeOf` class will not provide any information on why the error occurred. If `disableThrowErrors` is set to `false` (the default), the `TypeOf` class will throw errors with information on why the error occurred.

Throws error if `options` is not an object. With error name `InvalidOptionsTypeError` and message `Options must be an object!...`.
Throws error if `options.enableCapitalizedTypeNames` is not a boolean. With error name `InvalidOptionsError` and message `The options provided are not valid!...`.
Throws error if `options.disableThrowErrors` is not a boolean. With error name `InvalidOptionsError` and message `The options provided are not valid!...`.
Throws error if `options.enableCapitalizedTypeNames` is not a boolean. With error name `InvalidOptionsError` and message `The options provided are not valid!...`.
Throws error if `options.disableThrowErrors` is not a boolean. With error name `InvalidOptionsError` and message `The options provided are not valid!...`.


Example:

```javascript
import { TypeOf } from "dcsm-type-helper";
const typeOfInstance = new TypeOf("hello", 42, true);
const options = { enableCapitalizedTypeNames: true, disableThrowErrors: true };
typeOfInstance.setOptions = options;
```

## TypeOf - getOptions [getter]
#### `getOptions(): TypeOfOptions`

Gets the options for an instance of the `TypeOf` class.

- Returns an object with the properties `enableCapitalizedTypeNames` and `disableThrowErrors`.

## TypeOf - isTypeOf [method]
#### `isTypeOf(type: string, options?: TypeOfOptions): boolean | undefined`

Checks if all values are of the specified type.

- `type`: The type to check the values against.
- Returns `true` if all values are of the specified type, or `false` if not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.

## TypeOf - notTypeOf [method]
#### `notTypeOf(type: string, options?: TypeOfOptions): boolean | undefined`

Checks if all values are not of the specified type.

- `type`: The type to check the values against.
- Returns `true` if all values are not of the specified type, or `false` if not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the opposite of the `isTypeOf` method.

## TypeOf - isTypeOfValues [method]
#### `isTypeOfValues(type: string, options?: TypeOfOptions): boolean[] | undefined`

Checks if all values are of the specified type. Returns an array of booleans.

- `type`: The type to check the values against.
- Returns an array of booleans with the same length as the number of values passed to the constructor. Each boolean indicates whether the corresponding value is of the specified type or not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the same as the `isTypeOf` method, except that it returns an array of booleans instead of a single boolean.
- This method is useful if you want to check the type of multiple values at once.
- Example:

```javascript
import { TypeOf } from "dcsm-type-helper";
const typeOfInstance = new TypeOf("hello", 42, true);
const types = typeOfInstance.isTypeOfValues("string");
console.log(types); // [true, false, false]
```

## TypeOf - notTypeOfValues [method]
#### `notTypeOfValues(type: string, options?: TypeOfOptions): boolean[] | undefined`

Checks if all values are not of the specified type. Returns an array of booleans.

- `type`: The type to check the values against.
- Returns an array of booleans with the same length as the number of values passed to the constructor. Each boolean indicates whether the corresponding value is not of the specified type or not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the same as the `notTypeOf` method, except that it returns an array of booleans instead of a single boolean.
- This method is useful if you want to check the type of multiple values at once.
- Example:

```javascript
import { TypeOf } from "dcsm-type-helper";
const typeOfInstance = new TypeOf("hello", 42, true);
const types = typeOfInstance.notTypeOfValues("string");
console.log(types); // [false, true, true]
```

## TypeOf - getTypeOf [method]
#### `getTypeOf(options?: TypeOfOptions): string | string[] | undefined`

Gets the type of the values as a string or an array of strings.

- Returns a string with the type of the value if a single value is passed, or an array of strings with the types of the values if multiple values are passed.
- Example:

```javascript
import { TypeOf } from "dcsm-type-helper";
const typeOfInstance = new TypeOf("hello", 42, true);
const options = { enableCapitalizedTypeNames: true, disableThrowErrors: true };
// since the you can pass options directly to the getTypeOf method, you can also do this instead of setting the options on the instance of the TypeOf class. 
const types = typeOfInstance.getTypeOf(options);
console.log(types); // ["String", "Number", "Boolean"]
```



## typeOfShorthand [object] (default export) 
#### `[method]: (...values: any[]) => boolean | boolean[]`

An object with shorthand methods for checking the type of values. Each method is named after the type it checks prefixed with the use case. 

See the output of the `typeOfHelp` method for a list of all the supported types and helper methods.

For example, the `isString` method checks if a value is a string.


## getTypeOf [function]
#### `getTypeOf(...values: any[]): string | string[]`

Checks the type of a single value or multiple values at once.

- `values`: The values to check the type of.

## getTypeOfPretty [function]
#### `getTypeOfPretty(...values: any[]): string | string[]`

Checks the type of a single value or multiple values at once and returns a pretty string.

- `values`: The values to check the type of.
- same as getTypeOf but returns a pretty string


## typeOf [function]
#### `typeOf(...values: any[]): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.

## typeOfSilent [function]
#### `typeOfSilent(...values: any[]): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.
- same as typeOf but does not throw errors

## typeOfHelp [function]
#### `typeOfHelp(): void`

Console logs the following string with help information:

```
The name of each type and helper method is a combination of a 'use case' name and a 'type/helper' name.
For instance, the method 'isString' which checks if one or all values are a string is a combination of the 'use case' name 'is' and the 'type/helper' name 'String'.

The 'use case' names are:
is            // checks if all values are of the specified 'type/helper'
not           // checks if all values are not of the specified 'type/helper'
everyValueIs  // same as the 'is' 'use case'
everyValueNot // same as the 'not' 'use case'
someValueIs   // checks if at least one value is of the specified 'type/helper'
someValueNot  // checks if at least one value is not of the specified 'type/helper'

The 'type/helper' names are:
Arguments
Array
Arraybuffer
Arrayiterator
Asyncfunction
Asyncgenerator
Asyncgeneratorfunction
Bigint
Bigint64array
Biguint64array
Boolean
Dataview
Date
Error
Float32array
Float64array
Function
Generator
Generatorfunction
Infinity
Int16array
Int32array
Int8array
Internal
Map
Mapiterator
Module
Modulenamespaceobject
Nan
Null
Number
Object
Promise
Proxy
Regexp
Set
Setiterator
String
Stringiterator
Symbol
Typedarray
Uint16array
Uint32array
Uint8array
Uint8clampedarray
Undefined
Weakmap
Weakset
EmptyArray
EmptyObject
EmptyString
Empty
BooleanTrue
BooleanFalse
NumberZero
NumberPositive
NumberNegative
NumberMaxSafeInteger

```

## License

This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.

