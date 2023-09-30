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

## API

### `TypeOf`

#### `constructor(...values: any[], options?: TypeOfOptions): TypeOf`

Creates a new instance of the `TypeOf` class with the specified values and options.

- `values`: The values to check the type of.
- `options`: An optional object with the following properties:
  - `enableCapitalizedTypeNames`: A boolean value indicating whether to use capitalized type names. If `true`, the `TypeOf` class will use capitalized type names (e.g. `String` instead of `string`). If `false` (the default), the `TypeOf` class will use lowercase type names.
  - `disableThrowErrors`: A boolean value indicating whether to disable throwing errors. If `true`, the `TypeOf` class will not throw errors when invalid options are provided. If `false` (the default), the `TypeOf` class will throw errors when invalid options are provided.

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

#### `getOptions(): TypeOfOptions`

Gets the options for an instance of the `TypeOf` class.

- Returns an object with the same properties as the `options` object passed to the constructor.

### `getTypeof`

#### `getTypeof(...values: any[]): string | string[]`

Checks the type of a single value or multiple values at once.

- `values`: The values to check the type of.

- Returns a string with the type of the value if a single value is passed, or an array of strings with the types of the values if multiple values are passed.


### `typeOfHelp(): string`

Console logs the help for the `TypeOf` class.

- Returns the following string with the help information.


```
Evaluate all the values of the instance. Returns boolean.

isArguments
notArguments
everyValueIsArguments
everyValueNotArguments
someValueIsArguments
someValueNotArguments
isArray
notArray
everyValueIsArray
everyValueNotArray
someValueIsArray
someValueNotArray
isArraybuffer
notArraybuffer
everyValueIsArraybuffer
everyValueNotArraybuffer
someValueIsArraybuffer
someValueNotArraybuffer
isArrayiterator
notArrayiterator
everyValueIsArrayiterator
everyValueNotArrayiterator
someValueIsArrayiterator
someValueNotArrayiterator
isAsyncfunction
notAsyncfunction
everyValueIsAsyncfunction
everyValueNotAsyncfunction
someValueIsAsyncfunction
someValueNotAsyncfunction
isAsyncgenerator
notAsyncgenerator
everyValueIsAsyncgenerator
everyValueNotAsyncgenerator
someValueIsAsyncgenerator
someValueNotAsyncgenerator
isAsyncgeneratorfunction
notAsyncgeneratorfunction
everyValueIsAsyncgeneratorfunction
everyValueNotAsyncgeneratorfunction
someValueIsAsyncgeneratorfunction
someValueNotAsyncgeneratorfunction
isBigint
notBigint
everyValueIsBigint
everyValueNotBigint
someValueIsBigint
someValueNotBigint
isBigint64array
notBigint64array
everyValueIsBigint64array
everyValueNotBigint64array
someValueIsBigint64array
someValueNotBigint64array
isBiguint64array
notBiguint64array
everyValueIsBiguint64array
everyValueNotBiguint64array
someValueIsBiguint64array
someValueNotBiguint64array
isBoolean
notBoolean
everyValueIsBoolean
everyValueNotBoolean
someValueIsBoolean
someValueNotBoolean
isDataview
notDataview
everyValueIsDataview
everyValueNotDataview
someValueIsDataview
someValueNotDataview
isDate
notDate
everyValueIsDate
everyValueNotDate
someValueIsDate
someValueNotDate
isError
notError
everyValueIsError
everyValueNotError
someValueIsError
someValueNotError
isFloat32array
notFloat32array
everyValueIsFloat32array
everyValueNotFloat32array
someValueIsFloat32array
someValueNotFloat32array
isFloat64array
notFloat64array
everyValueIsFloat64array
everyValueNotFloat64array
someValueIsFloat64array
someValueNotFloat64array
isFunction
notFunction
everyValueIsFunction
everyValueNotFunction
someValueIsFunction
someValueNotFunction
isGenerator
notGenerator
everyValueIsGenerator
everyValueNotGenerator
someValueIsGenerator
someValueNotGenerator
isGeneratorfunction
notGeneratorfunction
everyValueIsGeneratorfunction
everyValueNotGeneratorfunction
someValueIsGeneratorfunction
someValueNotGeneratorfunction
isInfinity
notInfinity
everyValueIsInfinity
everyValueNotInfinity
someValueIsInfinity
someValueNotInfinity
isInt16array
notInt16array
everyValueIsInt16array
everyValueNotInt16array
someValueIsInt16array
someValueNotInt16array
isInt32array
notInt32array
everyValueIsInt32array
everyValueNotInt32array
someValueIsInt32array
someValueNotInt32array
isInt8array
notInt8array
everyValueIsInt8array
everyValueNotInt8array
someValueIsInt8array
someValueNotInt8array
isInternal
notInternal
everyValueIsInternal
everyValueNotInternal
someValueIsInternal
someValueNotInternal
isMap
notMap
everyValueIsMap
everyValueNotMap
someValueIsMap
someValueNotMap
isMapiterator
notMapiterator
everyValueIsMapiterator
everyValueNotMapiterator
someValueIsMapiterator
someValueNotMapiterator
isModule
notModule
everyValueIsModule
everyValueNotModule
someValueIsModule
someValueNotModule
isModulenamespaceobject
notModulenamespaceobject
everyValueIsModulenamespaceobject
everyValueNotModulenamespaceobject
someValueIsModulenamespaceobject
someValueNotModulenamespaceobject
isNan
notNan
everyValueIsNan
everyValueNotNan
someValueIsNan
someValueNotNan
isNull
notNull
everyValueIsNull
everyValueNotNull
someValueIsNull
someValueNotNull
isNumber
notNumber
everyValueIsNumber
everyValueNotNumber
someValueIsNumber
someValueNotNumber
isObject
notObject
everyValueIsObject
everyValueNotObject
someValueIsObject
someValueNotObject
isPromise
notPromise
everyValueIsPromise
everyValueNotPromise
someValueIsPromise
someValueNotPromise
isProxy
notProxy
everyValueIsProxy
everyValueNotProxy
someValueIsProxy
someValueNotProxy
isRegexp
notRegexp
everyValueIsRegexp
everyValueNotRegexp
someValueIsRegexp
someValueNotRegexp
isSet
notSet
everyValueIsSet
everyValueNotSet
someValueIsSet
someValueNotSet
isSetiterator
notSetiterator
everyValueIsSetiterator
everyValueNotSetiterator
someValueIsSetiterator
someValueNotSetiterator
isString
notString
everyValueIsString
everyValueNotString
someValueIsString
someValueNotString
isStringiterator
notStringiterator
everyValueIsStringiterator
everyValueNotStringiterator
someValueIsStringiterator
someValueNotStringiterator
isSymbol
notSymbol
everyValueIsSymbol
everyValueNotSymbol
someValueIsSymbol
someValueNotSymbol
isTypedarray
notTypedarray
everyValueIsTypedarray
everyValueNotTypedarray
someValueIsTypedarray
someValueNotTypedarray
isUint16array
notUint16array
everyValueIsUint16array
everyValueNotUint16array
someValueIsUint16array
someValueNotUint16array
isUint32array
notUint32array
everyValueIsUint32array
everyValueNotUint32array
someValueIsUint32array
someValueNotUint32array
isUint8array
notUint8array
everyValueIsUint8array
everyValueNotUint8array
someValueIsUint8array
someValueNotUint8array
isUint8clampedarray
notUint8clampedarray
everyValueIsUint8clampedarray
everyValueNotUint8clampedarray
someValueIsUint8clampedarray
someValueNotUint8clampedarray
isUndefined
notUndefined
everyValueIsUndefined
everyValueNotUndefined
someValueIsUndefined
someValueNotUndefined
isWeakmap
notWeakmap
everyValueIsWeakmap
everyValueNotWeakmap
someValueIsWeakmap
someValueNotWeakmap
isWeakset
notWeakset
everyValueIsWeakset
everyValueNotWeakset
someValueIsWeakset
someValueNotWeakset
isEmptyArray
notEmptyArray
everyValueIsEmptyArray
everyValueNotEmptyArray
someValueIsEmptyArray
someValueNotEmptyArray
isEmptyObject
notEmptyObject
everyValueIsEmptyObject
everyValueNotEmptyObject
someValueIsEmptyObject
someValueNotEmptyObject
isEmptyString
notEmptyString
everyValueIsEmptyString
everyValueNotEmptyString
someValueIsEmptyString
someValueNotEmptyString
isEmpty
notEmpty
everyValueIsEmpty
everyValueNotEmpty
someValueIsEmpty
someValueNotEmpty
isBooleanTrue
notBooleanTrue
everyValueIsBooleanTrue
everyValueNotBooleanTrue
someValueIsBooleanTrue
someValueNotBooleanTrue
isBooleanFalse
notBooleanFalse
everyValueIsBooleanFalse
everyValueNotBooleanFalse
someValueIsBooleanFalse
someValueNotBooleanFalse
isNumberZero
notNumberZero
everyValueIsNumberZero
everyValueNotNumberZero
someValueIsNumberZero
someValueNotNumberZero
isNumberPositive
notNumberPositive
everyValueIsNumberPositive
everyValueNotNumberPositive
someValueIsNumberPositive
someValueNotNumberPositive
isNumberNegative
notNumberNegative
everyValueIsNumberNegative
everyValueNotNumberNegative
someValueIsNumberNegative
someValueNotNumberNegative
isNumberMaxSafeInteger
notNumberMaxSafeInteger
everyValueIsNumberMaxSafeInteger
everyValueNotNumberMaxSafeInteger
someValueIsNumberMaxSafeInteger
someValueNotNumberMaxSafeInteger

 
Set and get the options for the instance.
setOptions
getOptions

Check if all values are of the specified type. Returns boolean or array of booleans.
isTypeof
notTypeof
isTypeofValues
notTypeofValues

---------------------------------------

@example
  const isString = new TypeOf(1, '2', 3).isString;
  // isString = false
```

## License

This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.

