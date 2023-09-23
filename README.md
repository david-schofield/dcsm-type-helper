# dcsm-type-helper

[![npm version](https://badge.fury.io/js/dcsm-type-helper.svg)](https://badge.fury.io/js/dcsm-type-helper)
![Static Badge](https://img.shields.io/badge/JavaScript_Style_Guide-Airbnb_ES6%2B-blue?style=flat)

A vanilla JavaScript library for checking the type of variables in a more robust and accurate way than the typeof operator. It can be used to get the type of one or more values and check if one or more values are of a specified type or not. 

## Installation

```bash
npm install dcsm-type-helper
```

## Table of Contents
- [dcsm-type-helper](#dcsm-type-helper)
  - [Installation](#installation)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Using the class directly](#using-the-class-directly)
    - [Using the wrapper function instead of the class](#using-the-wrapper-function-instead-of-the-class)
  - [Examples](#examples)
    - [Create your own helper functions](#create-your-own-helper-functions)
    - [Handling errors](#handling-errors)
  - [API](#api)
    - [`constructor(...valuesToCheck)`](#constructorvaluestocheck)
    - [`getTypeof(options)`](#gettypeofoptions)
    - [`isTypeof(typeToCheck, options)`](#istypeoftypetocheck-options)
    - [`notTypeof(typeToCheck, options)`](#nottypeoftypetocheck-options)
    - [The `options` parameter](#the-options-parameter)
    - [1. `enablePrettyTypeNames`:](#1-enableprettytypenames)
    - [2. `disableThrowErrors`:](#2-disablethrowerrors)
    - [The default behavior](#the-default-behavior)
  - [License](#license)

## Usage

### Using the class directly
```javascript
import { TypeHelper } from 'dcsm-type-helper';

const typeHelper = new TypeHelper('hello', 123, true);
console.log(typeHelper.getTypeof()); // ['string', 'number', 'boolean']
```

### Using the wrapper function instead of the class
```javascript
import { default as typeHelper } from 'dcsm-type-helper';

console.log(typeHelper('hello', 123, true).getTypeof()); // ['string', 'number', 'boolean']
```

## Examples

### Create your own helper functions

```javascript
import { TypeHelper } from 'dcsm-type-helper';

function getTypeof(...valuesToCheck) {
  const typeHelper = new TypeHelper(...valuesToCheck);
  return typeHelper.getTypeof();
}

function isTypeof(typeToCheck, ...valuesToCheck) {
  const typeHelper = new TypeHelper(...valuesToCheck);
  return typeHelper.isTypeof(typeToCheck);
}

function notTypeof(typeToCheck, ...valuesToCheck) {
  const typeHelper = new TypeHelper(...valuesToCheck);
  return typeHelper.notTypeof(typeToCheck);
}

function getTypeofPretty(...valuesToCheck) {
  const typeHelper = new TypeHelper(...valuesToCheck);
  return typeHelper.getTypeof({ enablePrettyTypeNames: true });
}

function isObject(...valuesToCheck) {
  const typeHelper = new TypeHelper(...valuesToCheck);
  return typeHelper.isTypeof('object');
}

console.log(getTypeof('hello', 123, true)); // ['string', 'number', 'boolean']
console.log(isTypeof('string', 'hello')); // true
console.log(notTypeof('string', 123)); // true
console.log(getTypeofPretty('hello', 123, true)); // ['String', 'Number', 'Boolean']
console.log(isObject({hello: 'World'})); // true


```

---

### Handling errors
A simple try-catch example for handling the error thrown when using the `notTypeof` method:

```javascript
// Create a new instance of the TypeHelper class. Take note that no values are provided to the constructor.
const typeHelper = new TypeHelper();
try {
  // This will throw an error because there are no values to check provided to the constructor.
  typeHelper.notTypeof('object');
} catch (error) {
  console.error(error.name); // InvalidValuesToCheckError
  console.error(error.message); // No values to check were provided!
}
```


## API

### `constructor(...valuesToCheck)`

Creates a new instance of the TypeHelper class.

- `valuesToCheck` - The values to check the type of.

---

### `getTypeof(options)`

Gets the types of the values provided to the constructor.

- `options` (optional): The options to use when getting the types.

Returns the types of the values provided to the constructor, as an array of strings containing the types of the values. Or a single string containing the type of the value if only one value was provided to the constructor.

---

### `isTypeof(typeToCheck, options)`

Checks if the values to check are of the specified type.

- `typeToCheck`: The type to check for.
- `options` (optional): The options to use when checking the type.

Returns `true` if the values to check are of the specified type, `false` otherwise.

---

### `notTypeof(typeToCheck, options)`

Checks if the values to check are not of the specified type.

- `typeToCheck`: The type to check for.
- `options` (optional): The options to use when checking the type.

Returns `true` if the values to check are not of the specified type, `false` otherwise.

---

### The `options` parameter

The `getTypeof`, `isTypeof`, and `notTypeof` methods can be provided with an `options` object as an optional parameter.

The `options` object has two boolean properties:

### 1. `enablePrettyTypeNames`: 
When set to `true`, the `getTypeof` method returns pretty type names instead of the default lowercase type names. This option can be useful when you want to display the type of a value in a user-friendly way. Here are some examples of types that `getTypeof` would return with the option `enablePrettyTypeNames` set to `true`:

- `'Undefined'` for undefined values
- `'Null'` for null values
- `'Boolean'` for boolean values
- `'Number'` for number values
- `'String'` for string values
- `'Symbol'` for symbol values
- `'Object'` for object values (excluding null and arrays)
- `'Array'` for array values
- `'Function'` for function values
- `'BigInt'` for bigint values
- `'Date'` for date objects
- `'RegExp'` for regular expression objects
- `'Map'` for map objects
- `'Set'` for set objects
- `'WeakMap'` for weakmap objects
- `'WeakSet'` for weakset objects
- `'Int8Array'` for 8-bit signed integer arrays
- `'Uint8Array'` for 8-bit unsigned integer arrays
- `'Int16Array'` for 16-bit signed integer arrays
- `'Uint16Array'` for 16-bit unsigned integer arrays
- `'Int32Array'` for 32-bit signed integer arrays
- `'Uint32Array'` for 32-bit unsigned integer arrays
- `'Float32Array'` for 32-bit floating point arrays
- `'Float64Array'` for 64-bit floating point arrays
- `'ArrayBuffer'` for array buffer objects
- `'SharedArrayBuffer'` for shared array buffer objects
- `'DataView'` for data view objects
- `'Error'` for error objects
- `'Promise'` for promise objects

Note that the exact list of types returned by `getTypeof` may vary depending on the JavaScript engine being used. Not all types have pretty type names, so some types will still be returned as lowercase strings

If enablePrettyTypeNames is set to `false` or not provided, the `getTypeof` method will return lowercase type names instead of pretty type names. For example, instead of returning `'String'`, it would return `'string'`.

### 2. `disableThrowErrors`:
When set to `true`, this property disables the methods throwing errors when an error occurs. Instead, the methods will return `undefined` when an error occurs. This is useful when you want to check the type of a value without having to handle thrown errors. However, it's important to note that if an error occurs and `disableThrowErrors` is set to `true`, the methods will not provide any information about the error since they will always only return `undefined`. It's up to you to handle the returned `undefined` value when an error occurs.

Examples of errors that can occur in the `getTypeof`, `isTypeof`, and `notTypeof` methods of the `TypeHelper` class:

- `NoValuesToCheckError`: This error occurs when there are no values to check in the `getTypeof`, `isTypeof`, and `notTypeof` methods.
- `UnknownTypeError`: This error occurs when an unknown type is detected in the `getTypeof` method.
- `InvalidTypeToCheckError`: This error occurs when the `typeToCheck` parameter in the `isTypeof` or `notTypeof` method is not a string containing only alphanumeric characters.
- `InvalidOptionsTypeError`: This error occurs when the `options` parameter in the `getTypeof`, `isTypeof`, and `notTypeof` methods is not an object.
- `InvalidOptionsError`: This error occurs when the `options` parameter in the `getTypeof`, `isTypeof`, and `notTypeof` methods contains invalid options or values.
- `InvalidValuesToCheckError`: This error occurs when no values are provided to the `TypeHelper` constructor.

These errors can be thrown if the corresponding conditions are met. However, if `disableThrowErrors` is set to `true`, the methods will not throw these errors and will instead return `undefined` when an error occurs. It's up to you to handle the returned `undefined` value when an error occurs.

---

### The default behavior 

The `getTypeof`, `isTypeof`, and `notTypeof` methods when `options` is not provided is to use the default options object, which has the following properties:

```javascript
{
  enablePrettyTypeNames: false,
  disableThrowErrors: false,
}
```

This means that if you don't provide an `options` object when calling these methods, they will use the default options object and behave accordingly. Providing an `options` object is optional, but it can be useful if you want to customize the behavior of these methods. If you provide an option that is not supported by the method, the method will throw an error and tell you which option is not supported. If you provide an option that is supported by the method but has an invalid value, the method will throw an error and tell you which option has an invalid value.

---

## License

This project is licensed under the MPL-2.0 License - see [LICENSE](https://www.mozilla.org/en-US/MPL/2.0/) for details.

