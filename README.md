# dcsm-type-helper

[![npm version](https://badge.fury.io/js/dcsm-type-helper.svg)](https://badge.fury.io/js/dcsm-type-helper)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

`dcsm-type-helper` is a JavaScript library that provides a `TypeOf` class and a `getTypeof` function for checking the types of values. The `TypeOf` class allows you to create an instance with multiple values and options, while the `getTypeof` function allows you to check the type of a single value or multiple values at once.

A vanilla JavaScript library for checking the type of variables in a more robust and accurate way than the typeof operator. It can be used to get the type of one or more values and check if one or more values are of a specified type or not. 

## Features

- Provides a simple and easy-to-use interface for checking the types of values in JavaScript.

- Allows you to check the type of a single value or multiple values at once.

- Provides options for customizing the behavior of the `TypeOf` class.
  
- Provides a set of methods for checking the type of values such as `isNumber`, `isObject`, `isBigInt`, etc.
  
- It also comes with some other useful methods such as `isEmptyArray`, `isBooleanTrue`, `isNumberZero`, etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [TypeOf](#typeof)
  - [getTypeof](#gettypeof)
  - [typeOfHelp](#typeofhelp)
- [API](#api)
- [License](#license)

## Installation

To install `dcsm-type-helper`, you can use npm:

```
npm install dcsm-type-helper
```

## Usage

### Using the class directly

```javascript
import { TypeOf, getTypeof, typeOfHelp } from "dcsm-type-helper";

const typeOfInstance = new TypeOf("hello", 42, true);
console.log(typeOfInstance.isString); // false
console.log(typeOfInstance.isSomeValueString); // true
console.log(typeOfInstance.isSomeValueNumber); // true

const types = getTypeof("hello", 42, true);
console.log(types); // ["string", "number", "boolean"]

typeOfHelp();

```

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

### Using the default export

```javascript
import default as getTypeof from "dcsm-type-helper";

const types = getTypeof("hello", 42, true);
console.log(types); // ["string", "number", "boolean"]
```

### Using the class with options

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInstance = new TypeOf("hello", 42, true, {
  enableCapitalizedTypeNames: true,
  disableThrowErrors: true,
});
console.log(typeOfInstance.getTypeof());
```

### Getting help

```javascript
import { typeOfHelp } from "dcsm-type-helper";

typeOfHelp();
```

### TypeOf

The `TypeOf` class allows you to create an instance with multiple values and options. Here's an example:

```javascript
const typeOfInstance = new TypeOf("hello", 42, true);
```

You can then use the `getTypeof` function to check the type of a value:

```javascript
const stringType = getTypeof(typeOfInstance, "hello");
console.log(stringType); // "string"
```

### getTypeof

The `getTypeof` function allows you to check the type of a single value or multiple values at once. Here's an example:

```javascript
const myString = "hello";
const myNumber = 42;
const myBoolean = true;

const stringType = getTypeof(myString);
console.log(stringType); // "string"

const types = getTypeof(myString, myNumber, myBoolean);
console.log(types); // ["string", "number", "boolean"]
```

# API Reference

## TypeOf [class]
#### `constructor(...values: any[], options?: TypeOfOptions): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.
- `options`: An optional object with the following properties:
  - `enableCapitalizedTypeNames`: A boolean value indicating whether to use capitalized type names. If `true`, the `TypeOf` class will use capitalized type names (e.g. `String` instead of `string`). If `false` (the default), the `TypeOf` class will use lowercase type names.
  - `disableThrowErrors`: A boolean value indicating whether to disable throwing errors. If `true`, the `TypeOf` class will not throw errors when invalid options are provided. If `false` (the default), the `TypeOf` class will throw errors when invalid options are provided.

## TypeOf.setOptions [setter]
#### `setOptions(options: TypeOfOptions): void`

Sets the options for an instance of the `TypeOf` class.

- `options`: An object with the same properties as the `options` object passed to the constructor.

GitHub Copilot: The `enableCapitalizedTypeNames` option in the `TypeOf` and `TypeOfHelper` classes is used to determine whether the type names returned by the `getTypeof` method should be capitalized or not. 

If `enableCapitalizedTypeNames` is set to `true`, the `getTypeof` method will return capitalized type names (e.g. `String` instead of `string`). If `enableCapitalizedTypeNames` is set to `false` (the default), the `getTypeof` method will return lowercase type names.

This option can be useful if you want to standardize the formatting of the type names returned by the `getTypeof` method, or if you prefer capitalized type names for consistency with other parts of your codebase.

GitHub Copilot: The `disableThrowErrors` option in the `TypeOf` and `TypeOfHelper` classes is used to determine whether the classes should throw errors when invalid options are provided. 

If `disableThrowErrors` is set to `true`, the classes will not throw errors when invalid options are provided. If `disableThrowErrors` is set to `false` (the default), the classes will throw errors when invalid options are provided.

This option can be useful if you want to disable error handling for some reason, or if you want to handle errors in a custom way. However, it's generally recommended to leave `disableThrowErrors` set to `false` so that errors are thrown when invalid options are provided, as this can help catch bugs and prevent unexpected behavior.

Example:

```javascript
const typeOfInstance = new TypeOf("hello", 42, true);
typeOfInstance.setOptions({ enableCapitalizedTypeNames: true });
```

## TypeOf.getOptions [getter]
#### `getOptions(): TypeOfOptions`

Gets the options for an instance of the `TypeOf` class.

- Returns an object with the same properties as the `options` object passed to the constructor.

## TypeOf.isTypeof [method]
#### `isTypeof(type: string): boolean`

Checks if all values are of the specified type.

- `type`: The type to check the values against.
- Returns `true` if all values are of the specified type, or `false` if not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.

## TypeOf.notTypeof [method]
#### `notTypeof(type: string): boolean`

Checks if all values are not of the specified type.

- `type`: The type to check the values against.
- Returns `true` if all values are not of the specified type, or `false` if not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the opposite of the `isTypeof` method.

## TypeOf.isTypeofValues [method]
#### `isTypeofValues(type: string): boolean[]`

Checks if all values are of the specified type. Returns an array of booleans.

- `type`: The type to check the values against.
- Returns an array of booleans with the same length as the number of values passed to the constructor. Each boolean indicates whether the corresponding value is of the specified type or not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the same as the `isTypeof` method, except that it returns an array of booleans instead of a single boolean.
- This method is useful if you want to check the type of multiple values at once.
- Example:

```javascript
const typeOfInstance = new TypeOf("hello", 42, true);
const types = typeOfInstance.isTypeofValues("string");
console.log(types); // [true, false, false]
```

## TypeOf.notTypeofValues [method]
#### `notTypeofValues(type: string): boolean[]`

Checks if all values are not of the specified type. Returns an array of booleans.

- `type`: The type to check the values against.
- Returns an array of booleans with the same length as the number of values passed to the constructor. Each boolean indicates whether the corresponding value is not of the specified type or not. If disableThrowErrors is set to `true`, it will return `undefined` instead of throwing an error.
- This method is the same as the `notTypeof` method, except that it returns an array of booleans instead of a single boolean.
- This method is useful if you want to check the type of multiple values at once.
- Example:

```javascript
const typeOfInstance = new TypeOf("hello", 42, true);
const types = typeOfInstance.notTypeofValues("string");
console.log(types); // [false, true, true]
```

## TypeOf.getTypeof [method]
#### `getTypeof(options?: TypeOfOptions): string | string[]`

Gets the type of the values as a string or an array of strings.

- `options`: An optional object with the following properties:
  - `enableCapitalizedTypeNames`: A boolean value indicating whether to use capitalized type names. If `true`, the `TypeOf` class will use capitalized type names (e.g. `String` instead of `string`). If `false` (the default), the `TypeOf` class will use lowercase type names.
  - `disableThrowErrors`: A boolean value indicating whether to disable throwing errors. If `true`, the `TypeOf` class will not throw errors when invalid options are provided. If `false` (the default), the `TypeOf` class will throw errors when invalid options are provided.

- Returns a string with the type of the value if a single value is passed, or an array of strings with the types of the values if multiple values are passed.
- Example:

```javascript
const typeOfInstance = new TypeOf("hello", 42, true);
const options = { enableCapitalizedTypeNames: true, disableThrowErrors: true };
const types = typeOfInstance.getTypeof(options);
console.log(types); // ["String", "Number", "Boolean"]
```

## getTypeof [function]
#### `getTypeof(...values: any[], options?: TypeOfOptions): string | string[]`

Checks the type of a single value or multiple values at once.

- `values`: The values to check the type of.

## getTypeofPretty [function]
#### `getTypeofPretty(...values: any[], options?: TypeOfOptions): string | string[]`

Checks the type of a single value or multiple values at once and returns a pretty string.

- `values`: The values to check the type of.
- same as getTypeof but returns a pretty string


## typeOf [function]
#### `typeOf(...values: any[], options?: TypeOfOptions): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.

## typeOfSilent [function]
#### `typeOfSilent(...values: any[], options?: TypeOfOptions): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.
- same as typeOf but does not throw errors

## typeOfHelp [function]
#### `typeOfHelp(): string`

Console logs the help for the `TypeOf` class.

Returns the following string with the help information:

```
These are the available getter methods that return a boolean value for the given use case for the given type.
Each method name has a corresponding method for each use case as a prefix to the method name.
The use cases are: is, not, everyValueIs, everyValueNot, someValueIs, someValueNot.
 
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

@examples
// For the method name 'String' the following methods are available:
// isString, notString, everyValueIsString, everyValueNotString, someValueIsString, someValueNotString
const typeOf = new TypeOf(1, '2', 3);
console.log(
  typeOf.isString,            // false  - because not all values are strings
  typeOf.notString,           // true   - because not all values are strings. Same as !typeOf.isString
  typeOf.everyValueIsString,  // false  - same as typeOf.isString
  typeOf.everyValueNotString, // true   - same as typeOf.notString
  typeOf.someValueIsString,   // true   - because at least one value is a string
  typeOf.someValueNotString); // true   - because at least one value is a string. Same as !typeOf.someValueIsString

---------------------------------------
 
Set and get the options for the instance.
setOptions
getOptions

---------------------------------------

Check if all values are of the specified type. Returns boolean or array of booleans.
isTypeof
notTypeof
isTypeofValues
notTypeofValues

---------------------------------------

Get the type of the values as a string or an array of strings.
getTypeof(options); 
// options is an optional object with the following properties:
// enableCapitalizedTypeNames: boolean - If true, the first letter of the type name will be capitalized.
// disableThrowErrors: boolean - If true, errors will not be thrown.

@examples
const typeOf = new TypeOf(1, '2', {}, [], new RegExp());
const options = {enableCapitalizedTypeNames: true, disableThrowErrors: true};
typeOf.getTypeof(options); // ['Number', 'String', 'Object', 'Array', 'RegExp']

```

## License

This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.

