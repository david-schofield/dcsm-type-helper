# An extensive list of examples for `dcsm-type-helper`

### typeOfHelp
Get the documentation for the `TypeOf` class and its methods in the console with `typeOfHelp`

In addition to the `typeOf` function and the `TypeOf` class, `dcsm-type-helper` also provides a `typeOfHelp` function. 

The `typeOfHelp` function is a utility function that console logs the help for the `TypeOf` class. The help text provides information on how to use the `TypeOf` class and its methods.

Here's an example of how to use the `typeOfHelp` function:

```javascript
import { typeOfHelp } from "dcsm-type-helper";

typeOfHelp();
```

When you run this code, you should see the help text for the `TypeOf` class logged to the console. The help text provides information on the constructor and methods of the `TypeOf` class, as well as examples of how to use them.

---

### getTypeof
The `getTypeof` function takes one or more values as arguments and returns the type of each value as a string or an array of strings. The type of a value is determined using the `TypeOf` class, which is also exported from the `index.js` file.

Here are three examples of how to use the `getTypeof` function:

```javascript
import { getTypeof } from "dcsm-type-helper";

const stringType = getTypeof("hello");
console.log(stringType); // "string"

const arrayType = getTypeof([1, 2, 3]);
console.log(arrayType); // "array"

const mixedType = getTypeof("hello", 42, true);
console.log(mixedType); // ["string", "number", "boolean"]
```

In the first example, we pass a single string value to the `getTypeof` function and it returns the string `"string"`, which is the type of the value.

In the second example, we pass an array of numbers to the `getTypeof` function and it returns the string `"array"`, which is the type of the value.

In the third example, we pass three values of different types to the `getTypeof` function and it returns an array of strings `["string", "number", "boolean"]`, which are the types of the values.

Note that the `getTypeof` function can take any number of arguments, and it will return an array of types if more than one argument is passed.

---

### setOptions
The `setOptions` method in the `TypeOf` class can be used to set the options for an instance of the class. The `setOptions` method takes an object with the same properties as the `options` object passed to the constructor. Here's a detailed explanation of how to use it:

The `options` object can have the following properties:

- `enableCapitalizedTypeNames`: A boolean value indicating whether to use capitalized type names. If `true`, the `TypeOf` class will use capitalized type names (e.g. `String` instead of `string`). If `false` (the default), the `TypeOf` class will use lowercase type names.

- `disableThrowErrors`: A boolean value indicating whether to disable throwing errors. If `true`, the `TypeOf` class will not throw errors when invalid options are provided. If `false` (the default), the `TypeOf` class will throw errors when invalid options are provided.

Here are three examples of how to use the `setOptions` method with the `getTypeof` function:

```javascript
import { getTypeof, TypeOf } from "dcsm-type-helper";

// Example 1: Using capitalized type names
const typeOfCapitalized = new TypeOf("hello", 42, true);
typeOfCapitalized.setOptions = { enableCapitalizedTypeNames: true };
const stringType = getTypeof(typeOfCapitalized, "hello");
console.log(stringType); // ["Boolean", "String"]

// Example 2: Disabling error throwing
const typeOfNoErrors = new TypeOf("hello", 42, true);
typeOfNoErrors.setOptions = { disableThrowErrors: true };
const types = getTypeof(typeOfNoErrors, "hello", 42, true);
console.log(types); // ["string", "number", "boolean"]

// Example 3: Using both capitalized type names and disabling error throwing
const typeOfCapitalizedAndNoErrors = new TypeOf("hello", 42, true);
typeOfCapitalizedAndNoErrors.setOptions = { enableCapitalizedTypeNames: true, disableThrowErrors: true };
const mixedType = getTypeof(typeOfCapitalizedAndNoErrors, "hello", 42, true);
console.log(mixedType); // ["String", "Number", "Boolean"]
```

In the first example, we create a new instance of the `TypeOf` class with several different values and then use the `setOptions` method to set the `enableCapitalizedTypeNames` option to `true`. We then pass the instance of the `TypeOf` class and a string value to the `getTypeof` function, which returns an array of types `["Boolean", "String"]`. Because we're using capitalized type names, the type names are capitalized.

In the second example, we create a new instance of the `TypeOf` class with several different values and then use the `setOptions` method to set the `disableThrowErrors` option to `true`. We then pass the instance of the `TypeOf` class and several values of different types to the `getTypeof` function, which returns an array of types `["string", "number", "boolean"]`. Because we've disabled error throwing, the function returns the types of the values instead of throwing an error.

In the third example, we create a new instance of the `TypeOf` class with several different values and then use the `setOptions` method to set both the `enableCapitalizedTypeNames` and `disableThrowErrors` options to `true`. We then pass the instance of the `TypeOf` class and several values of different types to the `getTypeof` function, which returns an array of types `["String", "Number", "Boolean"]`. Because we're using both capitalized type names and disabling error throwing, the type names are capitalized and the function returns the types of the values instead of throwing an error.

---

### isArguments
Checks if all values are `arguments` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

function exampleFunction() {
  console.log(new TypeOf(arguments).isArguments); // true
}

exampleFunction(1, 2, 3);
```

### notArguments
Checks if all values are not `arguments` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notArguments); // true
```

### everyValueIsArguments
Checks if every value is an `arguments` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

function exampleFunction() {
  console.log(new TypeOf(arguments).everyValueIsArguments); // true
}

exampleFunction(1, 2, 3);
```

### everyValueNotArguments
Checks if every value is not an `arguments` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotArguments); // true
```

### someValueIsArguments
Checks if at least one value is an `arguments` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

function exampleFunction() {
  console.log(new TypeOf(arguments, 1, 2).someValueIsArguments); // true
}

exampleFunction(1, 2, 3);
```

### someValueNotArguments
Checks if at least one value is not an `arguments` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotArguments); // true
```

### isArray
Checks if all values are arrays.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf([], [], []).isArray); // true
```

### notArray
Checks if all values are not arrays.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notArray); // true
```

### everyValueIsArray
Checks if every value is an array.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf([], [], []).everyValueIsArray); // true
```

### everyValueNotArray
Checks if every value is not an array.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotArray); // true
```

### someValueIsArray
Checks if at least one value is an array.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf([], 1, 2).someValueIsArray); // true
```

### someValueNotArray
Checks if at least one value is not an array.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotArray); // true
```

### isArraybuffer
Checks if all values are `ArrayBuffer` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new ArrayBuffer(8), new ArrayBuffer(16)).isArraybuffer); // true
```

### notArraybuffer
Checks if all values are not `ArrayBuffer` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notArraybuffer); // true
```

### everyValueIsArraybuffer
Checks if every value is an `ArrayBuffer` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new ArrayBuffer(8), new ArrayBuffer(16)).everyValueIsArraybuffer); // true
```

### everyValueNotArraybuffer
Checks if every value is not an `ArrayBuffer` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotArraybuffer); // true
```

### someValueIsArraybuffer
Checks if at least one value is an `ArrayBuffer` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new ArrayBuffer(8), 1, 2).someValueIsArraybuffer); // true
```

### someValueNotArraybuffer
Checks if at least one value is not an `ArrayBuffer` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotArraybuffer); // true
```

### isArrayiterator
Checks if all values are `ArrayIterator` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(new TypeOf(iterator).isArrayiterator); // true
```

### notArrayiterator
Checks if all values are not `ArrayIterator` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notArrayiterator); // true
```

### everyValueIsArrayiterator
Checks if every value is an `ArrayIterator` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(new TypeOf(iterator).everyValueIsArrayiterator); // true
```

### everyValueNotArrayiterator
Checks if every value is not an `ArrayIterator` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotArrayiterator); // true
```

### someValueIsArrayiterator
Checks if at least one value is an `ArrayIterator` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(new TypeOf(iterator, 1, 2).someValueIsArrayiterator); // true
```

### someValueNotArrayiterator
Checks if at least one value is not an `ArrayIterator` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotArrayiterator); // true
```

### isAsyncfunction
Checks if all values are async functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function() {}, async () => {}).isAsyncfunction); // true
```

### notAsyncfunction
Checks if all values are not async functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notAsyncfunction); // true
```

### everyValueIsAsyncfunction
Checks if every value is an async function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function() {}, async () => {}).everyValueIsAsyncfunction); // true
```

### everyValueNotAsyncfunction
Checks if every value is not an async function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotAsyncfunction); // true
```

### someValueIsAsyncfunction
Checks if at least one value is an async function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function() {}, 1, 2).someValueIsAsyncfunction); // true
```

### someValueNotAsyncfunction
Checks if at least one value is not an async function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotAsyncfunction); // true
```

### isAsyncgenerator
Checks if all values are async generators.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, async function*() {}).isAsyncgenerator); // true
```

### notAsyncgenerator
Checks if all values are not async generators.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notAsyncgenerator); // true
```

### everyValueIsAsyncgenerator
Checks if every value is an async generator.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, async function*() {}).everyValueIsAsyncgenerator); // true
```

### everyValueNotAsyncgenerator
Checks if every value is not an async generator.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotAsyncgenerator); // true
```

### someValueIsAsyncgenerator
Checks if at least one value is an async generator.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, 1, 2).someValueIsAsyncgenerator); // true
```

### someValueNotAsyncgenerator
Checks if at least one value is not an async generator.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotAsyncgenerator); // true
```

### isAsyncgeneratorfunction
Checks if all values are async generator functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, async () => {}).isAsyncgeneratorfunction); // true
```

### notAsyncgeneratorfunction
Checks if all values are not async generator functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notAsyncgeneratorfunction); // true
```

### everyValueIsAsyncgeneratorfunction
Checks if every value is an async generator function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, async () => {}).everyValueIsAsyncgeneratorfunction); // true
```

### everyValueNotAsyncgeneratorfunction
Checks if every value is not an async generator function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotAsyncgeneratorfunction); // true
```

### someValueIsAsyncgeneratorfunction
Checks if at least one value is an async generator function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(async function*() {}, 1, 2).someValueIsAsyncgeneratorfunction); // true
```

### someValueNotAsyncgeneratorfunction
Checks if at least one value is not an async generator function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotAsyncgeneratorfunction); // true
```

### isBigint
Checks if all values are `bigint` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(BigInt(123), BigInt(456)).isBigint); // true
```

### notBigint
Checks if all values are not `bigint` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notBigint); // true
```

### everyValueIsBigint
Checks if every value is a `bigint` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(BigInt(123), BigInt(456)).everyValueIsBigint); // true
```

### everyValueNotBigint
Checks if every value is not a `bigint` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotBigint); // true
```

### someValueIsBigint
Checks if at least one value is a `bigint` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(BigInt(123), 1, 2).someValueIsBigint); // true
```

### someValueNotBigint
Checks if at least one value is not a `bigint` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotBigint); // true
```

### isBigint64array
Checks if all values are `BigInt64Array` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigInt64Array([1n, 2n]), new BigInt64Array([3n, 4n])).isBigint64array); // true
```

### notBigint64array
Checks if all values are not `BigInt64Array` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notBigint64array); // true
```

### everyValueIsBigint64array
Checks if every value is a `BigInt64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigInt64Array([1n, 2n]), new BigInt64Array([3n, 4n])).everyValueIsBigint64array); // true
```

### everyValueNotBigint64array
Checks if every value is not a `BigInt64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotBigint64array); // true
```

### someValueIsBigint64array
Checks if at least one value is a `BigInt64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigInt64Array([1n, 2n]), 1, 2).someValueIsBigint64array); // true
```

### someValueNotBigint64array
Checks if at least one value is not a `BigInt64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotBigint64array); // true
```

### isBiguint64array
Checks if all values are `BigUint64Array` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigUint64Array([1n, 2n]), new BigUint64Array([3n, 4n])).isBiguint64array); // true
```

### notBiguint64array
Checks if all values are not `BigUint64Array` objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notBiguint64array); // true
```

### everyValueIsBiguint64array
Checks if every value is a `BigUint64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigUint64Array([1n, 2n]), new BigUint64Array([3n, 4n])).everyValueIsBiguint64array); // true
```

### everyValueNotBiguint64array
Checks if every value is not a `BigUint64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotBiguint64array); // true
```

### someValueIsBiguint64array
Checks if at least one value is a `BigUint64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new BigUint64Array([1n, 2n]), 1, 2).someValueIsBiguint64array); // true
```

### someValueNotBiguint64array
Checks if at least one value is not a `BigUint64Array` object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotBiguint64array); // true
```

### isBoolean
Checks if all values are boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(true, false, true).isBoolean); // true
console.log(new TypeOf(true, false, 1).isBoolean); // false
```

### notBoolean
Checks if all values are not boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notBoolean); // true
console.log(new TypeOf(true, false, 1).notBoolean); // false
```

### everyValueIsBoolean
Checks if every value is a boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(true, false, true).everyValueIsBoolean); // true
console.log(new TypeOf(true, false, 1).everyValueIsBoolean); // false
```

### everyValueNotBoolean
Checks if every value is not a boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotBoolean); // true
console.log(new TypeOf(true, false, 1).everyValueNotBoolean); // false
```

### someValueIsBoolean
Checks if at least one value is a boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(true, false, 1).someValueIsBoolean); // true
console.log(new TypeOf(1, 2, 3).someValueIsBoolean); // false
```

### someValueNotBoolean
Checks if at least one value is not a boolean.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotBoolean); // true
console.log(new TypeOf(true, false, 1).someValueNotBoolean); // false
```

### isDataview
Checks if all values are DataView objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new DataView(new ArrayBuffer(8))).isDataview); // true
console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new ArrayBuffer(8)).isDataview); // false
```

### notDataview
Checks if all values are not DataView objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notDataview); // true
console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new ArrayBuffer(8)).notDataview); // false
```

### everyValueIsDataview
Checks if every value is a DataView object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new DataView(new ArrayBuffer(8))).everyValueIsDataview); // true
console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new ArrayBuffer(8)).everyValueIsDataview); // false
```

### everyValueNotDataview
Checks if every value is not a DataView object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotDataview); // true
console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new ArrayBuffer(8)).everyValueNotDataview); // false
```

### someValueIsDataview
Checks if at least one value is a DataView object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new DataView(new ArrayBuffer(8)), 1, 2).someValueIsDataview); // true
console.log(new TypeOf(1, 2, 3).someValueIsDataview); // false
```

### someValueNotDataview
Checks if at least one value is not a DataView object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotDataview); // true
console.log(new TypeOf(new DataView(new ArrayBuffer(8)), new ArrayBuffer(8)).someValueNotDataview); // false
```

### isDate
Checks if all values are Date objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Date(), new Date()).isDate); // true
console.log(new TypeOf(new Date(), 1).isDate); // false
```

### notDate
Checks if all values are not Date objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notDate); // true
console.log(new TypeOf(new Date(), 1).notDate); // false
```

### everyValueIsDate
Checks if every value is a Date object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Date(), new Date()).everyValueIsDate); // true
console.log(new TypeOf(new Date(), 1).everyValueIsDate); // false
```

### everyValueNotDate
Checks if every value is not a Date object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotDate); // true
console.log(new TypeOf(new Date(), 1).everyValueNotDate); // false
```

### someValueIsDate
Checks if at least one value is a Date object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Date(), 1, 2).someValueIsDate); // true
console.log(new TypeOf(1, 2, 3).someValueIsDate); // false
```

### someValueNotDate
Checks if at least one value is not a Date object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotDate); // true
console.log(new TypeOf(new Date(), 1).someValueNotDate); // false
```

### isError
Checks if all values are Error objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Error(), new Error()).isError); // true
console.log(new TypeOf(new Error(), 1).isError); // false
```

### notError
Checks if all values are not Error objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notError); // true
console.log(new TypeOf(new Error(), 1).notError); // false
```

### everyValueIsError
Checks if every value is an Error object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Error(), new Error()).everyValueIsError); // true
console.log(new TypeOf(new Error(), 1).everyValueIsError); // false
```

### everyValueNotError
Checks if every value is not an Error object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotError); // true
console.log(new TypeOf(new Error(), 1).everyValueNotError); // false
```

### someValueIsError
Checks if at least one value is an Error object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Error(), 1, 2).someValueIsError); // true
console.log(new TypeOf(1, 2, 3).someValueIsError); // false
```

### someValueNotError
Checks if at least one value is not an Error object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotError); // true
console.log(new TypeOf(new Error(), 1).someValueNotError); // false
```

### isFloat32array
Checks if all values are Float32Array objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float32Array([1, 2]), new Float32Array([3, 4])).isFloat32array); // true
console.log(new TypeOf(new Float32Array([1, 2]), 1).isFloat32array); // false
```

### notFloat32array
Checks if all values are not Float32Array objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notFloat32array); // true
console.log(new TypeOf(new Float32Array([1, 2]), 1).notFloat32array); // false
```

### everyValueIsFloat32array
Checks if every value is a Float32Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float32Array([1, 2]), new Float32Array([3, 4])).everyValueIsFloat32array); // true
console.log(new TypeOf(new Float32Array([1, 2]), 1).everyValueIsFloat32array); // false
```

### everyValueNotFloat32array
Checks if every value is not a Float32Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotFloat32array); // true
console.log(new TypeOf(new Float32Array([1, 2]), 1).everyValueNotFloat32array); // false
```

### someValueIsFloat32array
Checks if at least one value is a Float32Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float32Array([1, 2]), 1, 2).someValueIsFloat32array); // true
console.log(new TypeOf(1, 2, 3).someValueIsFloat32array); // false
```

### someValueNotFloat32array
Checks if at least one value is not a Float32Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotFloat32array); // true
console.log(new TypeOf(new Float32Array([1, 2]), new Float32Array([3, 4])).someValueNotFloat32array); // false
```

### isFloat64array
Checks if all values are Float64Array objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float64Array([1, 2]), new Float64Array([3, 4])).isFloat64array); // true
console.log(new TypeOf(new Float64Array([1, 2]), 1).isFloat64array); // false
```

### notFloat64array
Checks if all values are not Float64Array objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notFloat64array); // true
console.log(new TypeOf(new Float64Array([1, 2]), 1).notFloat64array); // false
```

### everyValueIsFloat64array
Checks if every value is a Float64Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float64Array([1, 2]), new Float64Array([3, 4])).everyValueIsFloat64array); // true
console.log(new TypeOf(new Float64Array([1, 2]), 1).everyValueIsFloat64array); // false
```

### everyValueNotFloat64array
Checks if every value is not a Float64Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotFloat64array); // true
console.log(new TypeOf(new Float64Array([1, 2]), 1).everyValueNotFloat64array); // false
```

### someValueIsFloat64array
Checks if at least one value is a Float64Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(new Float64Array([1, 2]), 1, 2).someValueIsFloat64array); // true
console.log(new TypeOf(1, 2, 3).someValueIsFloat64array); // false
```

### someValueNotFloat64array
Checks if at least one value is not a Float64Array object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotFloat64array); // true
console.log(new TypeOf(new Float64Array([1, 2]), new Float64Array([3, 4])).someValueNotFloat64array); // false
```

### isFunction
Checks if all values are functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(() => {}, function() {}, () => {}).isFunction); // true
console.log(new TypeOf(() => {}, 1, 2).isFunction); // false
```

### notFunction
Checks if all values are not functions.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notFunction); // true
console.log(new TypeOf(() => {}, 1, 2).notFunction); // false
```

### everyValueIsFunction
Checks if every value is a function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(() => {}, function() {}, () => {}).everyValueIsFunction); // true
console.log(new TypeOf(() => {}, 1, 2).everyValueIsFunction); // false
```

### everyValueNotFunction
Checks if every value is not a function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotFunction); // true
console.log(new TypeOf(() => {}, 1, 2).everyValueNotFunction); // false
```

### someValueIsFunction
Checks if at least one value is a function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(() => {}, 1, 2).someValueIsFunction); // true
console.log(new TypeOf(1, 2, 3).someValueIsFunction); // false
```

### someValueNotFunction
Checks if at least one value is not a function.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotFunction); // true
console.log(new TypeOf(() => {}, function() {}, () => {}).someValueNotFunction); // false
```

### isGenerator
Checks if all values are generator objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), generator()).isGenerator); // true
console.log(new TypeOf(generator(), 1).isGenerator); // false
```

### notGenerator
Checks if all values are not generator objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).notGenerator); // true

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), 1).notGenerator); // false
```

### everyValueIsGenerator
Checks if every value is a generator object.

```javascript
import { TypeOf } from "dcsm-type-helper";

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), generator()).everyValueIsGenerator); // true
console.log(new TypeOf(generator(), 1).everyValueIsGenerator); // false
```

### everyValueNotGenerator
Checks if every value is not a generator object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).everyValueNotGenerator); // true

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), 1).everyValueNotGenerator); // false
```

### someValueIsGenerator
Checks if at least one value is a generator object.

```javascript
import { TypeOf } from "dcsm-type-helper";

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), 1, 2).someValueIsGenerator); // true
console.log(new TypeOf(1, 2, 3).someValueIsGenerator); // false
```

### someValueNotGenerator
Checks if at least one value is not a generator object.

```javascript
import { TypeOf } from "dcsm-type-helper";

console.log(new TypeOf(1, 2, 3).someValueNotGenerator); // true

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator(), 1).someValueNotGenerator); // false
```

### isGeneratorfunction
Checks if all values are generator function objects.

```javascript
import { TypeOf } from "dcsm-type-helper";

function* generator() {
  yield 1;
  yield 2;
}

console.log(new TypeOf(generator, function*() {}, generator).isGeneratorfunction); // true
```




----





- `isArguments`: Returns true if all values are arguments objects.
- `notArguments`: Returns true if none of the values are arguments objects.
- `everyValueIsArguments`: Returns true if every value is an arguments object.
- `everyValueNotArguments`: Returns true if every value is not an arguments object.
- `someValueIsArguments`: Returns true if at least one value is an arguments object.
- `someValueNotArguments`: Returns true if at least one value is not an arguments object.

```javascript
import { TypeOf } from "dcsm-type-helper";

function exampleFunction() {
  console.log(new TypeOf(arguments).isArguments); // true
  console.log(new TypeOf(1, 2, 3).notArguments); // true
  console.log(new TypeOf(arguments, 'no', arguments).everyValueIsArguments); // false
  console.log(new TypeOf(arguments, 4, 5).everyValueNotArguments); // false
  console.log(new TypeOf(arguments, 4, 5).someValueIsArguments); // true
  console.log(new TypeOf(1, arguments, 3).someValueNotArguments); // true
}

exampleFunction("hello", "world");
```

These methods can be useful when you need to check if a value is an arguments object.

- `isArray`: Returns true if all values are arrays.
- `notArray`: Returns true if none of the values are arrays.
- `everyValueIsArray`: Returns true if every value is an array.
- `everyValueNotArray`: Returns true if every value is not an array.
- `someValueIsArray`: Returns true if at least one value is an array.
- `someValueNotArray`: Returns true if at least one value is not an array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleArray = [1, 2, 3];

console.log(new TypeOf(exampleArray).isArray); // true
console.log(new TypeOf(1, 2, 3).notArray); // true
console.log(new TypeOf(exampleArray, [4, 5, 6]).everyValueIsArray); // true
console.log(new TypeOf(exampleArray, 4, 5).everyValueNotArray); // false
console.log(new TypeOf(exampleArray, 4, 5).someValueIsArray); // true
console.log(new TypeOf(1, 2, 3).someValueNotArray); // true
```

These methods can be useful when you need to check if a value is an array.

- `isArraybuffer`: Returns true if all values are array buffers.
- `notArraybuffer`: Returns true if none of the values are array buffers.
- `everyValueIsArraybuffer`: Returns true if every value is an array buffer.
- `everyValueNotArraybuffer`: Returns true if every value is not an array buffer.
- `someValueIsArraybuffer`: Returns true if at least one value is an array buffer.
- `someValueNotArraybuffer`: Returns true if at least one value is not an array buffer.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleArrayBuffer = new ArrayBuffer(8);

console.log(new TypeOf(exampleArrayBuffer).isArraybuffer); // true
console.log(new TypeOf(1, 2, 3).notArraybuffer); // true
console.log(new TypeOf(exampleArrayBuffer, new ArrayBuffer(8)).everyValueIsArraybuffer); // true
console.log(new TypeOf(exampleArrayBuffer, 4, 5).everyValueNotArraybuffer); // false
console.log(new TypeOf(exampleArrayBuffer, 4, 5).someValueIsArraybuffer); // true
console.log(new TypeOf(1, 2, 3).someValueNotArraybuffer); // true
```

These methods can be useful when you need to check if a value is an array buffer.

- `isArrayiterator`: Returns true if all values are array iterators.
- `notArrayiterator`: Returns true if none of the values are array iterators.
- `everyValueIsArrayiterator`: Returns true if every value is an array iterator.
- `everyValueNotArrayiterator`: Returns true if every value is not an array iterator.
- `someValueIsArrayiterator`: Returns true if at least one value is an array iterator.
- `someValueNotArrayiterator`: Returns true if at least one value is not an array iterator.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleArray = [1, 2, 3];
const exampleArrayIterator = exampleArray.entries();

console.log(new TypeOf(exampleArrayIterator).isArrayiterator); // true
console.log(new TypeOf(1, 2, 3).notArrayiterator); // true
console.log(new TypeOf(exampleArrayIterator, exampleArray.entries()).everyValueIsArrayiterator); // true
console.log(new TypeOf(exampleArrayIterator, 4, 5).everyValueNotArrayiterator); // false
console.log(new TypeOf(exampleArrayIterator, 4, 5).someValueIsArrayiterator); // true
console.log(new TypeOf(1, 2, 3).someValueNotArrayiterator); // true
```

These methods can be useful when you need to check if a value is an array iterator.

- `isAsyncfunction`: Returns true if all values are async functions.
- `notAsyncfunction`: Returns true if none of the values are async functions.
- `everyValueIsAsyncfunction`: Returns true if every value is an async function.
- `everyValueNotAsyncfunction`: Returns true if every value is not an async function.
- `someValueIsAsyncfunction`: Returns true if at least one value is an async function.
- `someValueNotAsyncfunction`: Returns true if at least one value is not an async function.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleAsyncFunction = async function() {
  console.log("Hello, world!");
};

console.log(new TypeOf(exampleAsyncFunction).isAsyncfunction); // true
console.log(new TypeOf(1, 2, 3).notAsyncfunction); // true
console.log(new TypeOf(exampleAsyncFunction, async function() {}, async function() {}).everyValueIsAsyncfunction); // true
console.log(new TypeOf(exampleAsyncFunction, 4, 5).everyValueNotAsyncfunction); // false
console.log(new TypeOf(exampleAsyncFunction, 4, 5).someValueIsAsyncfunction); // true
console.log(new TypeOf(1, 2, 3).someValueNotAsyncfunction); // true
```

These methods can be useful when you need to check if a value is an async function.

- `isAsyncgenerator`: Returns true if all values are async generators.
- `notAsyncgenerator`: Returns true if none of the values are async generators.
- `everyValueIsAsyncgenerator`: Returns true if every value is an async generator.
- `everyValueNotAsyncgenerator`: Returns true if every value is not an async generator.
- `someValueIsAsyncgenerator`: Returns true if at least one value is an async generator.
- `someValueNotAsyncgenerator`: Returns true if at least one value is not an async generator.

```javascript
import { TypeOf } from "dcsm-type-helper";

async function* exampleAsyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(new TypeOf(exampleAsyncGenerator()).isAsyncgenerator); // true
console.log(new TypeOf(1, 2, 3).notAsyncgenerator); // true
console.log(new TypeOf(exampleAsyncGenerator(), async function*() {}, async function*() {}).everyValueIsAsyncgenerator); // true
console.log(new TypeOf(exampleAsyncGenerator(), 4, 5).everyValueNotAsyncgenerator); // false
console.log(new TypeOf(exampleAsyncGenerator(), 4, 5).someValueIsAsyncgenerator); // true
console.log(new TypeOf(1, 2, 3).someValueNotAsyncgenerator); // true
```

These methods can be useful when you need to check if a value is an async generator.

- `isAsyncgeneratorfunction`: Returns true if all values are async generator functions.
- `notAsyncgeneratorfunction`: Returns true if none of the values are async generator functions.
- `everyValueIsAsyncgeneratorfunction`: Returns true if every value is an async generator function.
- `everyValueNotAsyncgeneratorfunction`: Returns true if every value is not an async generator function.
- `someValueIsAsyncgeneratorfunction`: Returns true if at least one value is an async generator function.
- `someValueNotAsyncgeneratorfunction`: Returns true if at least one value is not an async generator function.

```javascript
import { TypeOf } from "dcsm-type-helper";

async function* exampleAsyncGeneratorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(new TypeOf(exampleAsyncGeneratorFunction).isAsyncgeneratorfunction); // true
console.log(new TypeOf(1, 2, 3).notAsyncgeneratorfunction); // true
console.log(new TypeOf(exampleAsyncGeneratorFunction, async function*() {}, async function*() {}).everyValueIsAsyncgeneratorfunction); // true
console.log(new TypeOf(exampleAsyncGeneratorFunction, 4, 5).everyValueNotAsyncgeneratorfunction); // false
console.log(new TypeOf(exampleAsyncGeneratorFunction, 4, 5).someValueIsAsyncgeneratorfunction); // true
console.log(new TypeOf(1, 2, 3).someValueNotAsyncgeneratorfunction); // true
```

These methods can be useful when you need to check if a value is an async generator function.

- `isBigint`: Returns true if all values are bigints.
- `notBigint`: Returns true if none of the values are bigints.
- `everyValueIsBigint`: Returns true if every value is a bigint.
- `everyValueNotBigint`: Returns true if every value is not a bigint.
- `someValueIsBigint`: Returns true if at least one value is a bigint.
- `someValueNotBigint`: Returns true if at least one value is not a bigint.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleBigint = BigInt(123);

console.log(new TypeOf(exampleBigint).isBigint); // true
console.log(new TypeOf(1, 2, 3).notBigint); // true
console.log(new TypeOf(exampleBigint, BigInt(456), BigInt(789)).everyValueIsBigint); // true
console.log(new TypeOf(exampleBigint, 4, 5).everyValueNotBigint); // false
console.log(new TypeOf(exampleBigint, 4, 5).someValueIsBigint); // true
console.log(new TypeOf(1, 2, 3).someValueNotBigint); // true
```

These methods can be useful when you need to check if a value is a bigint.

- `isBigint64array`: Returns true if all values are bigint64arrays.
- `notBigint64array`: Returns true if none of the values are bigint64arrays.
- `everyValueIsBigint64array`: Returns true if every value is a bigint64array.
- `everyValueNotBigint64array`: Returns true if every value is not a bigint64array.
- `someValueIsBigint64array`: Returns true if at least one value is a bigint64array.
- `someValueNotBigint64array`: Returns true if at least one value is not a bigint64array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleBigint64Array = new BigInt64Array([1n, 2n, 3n]);

console.log(new TypeOf(exampleBigint64Array).isBigint64array); // true
console.log(new TypeOf(1, 2, 3).notBigint64array); // true
console.log(new TypeOf(exampleBigint64Array, new BigInt64Array([4n, 5n, 6n]), new BigInt64Array([7n, 8n, 9n])).everyValueIsBigint64array); // true
console.log(new TypeOf(exampleBigint64Array, 4, 5).everyValueNotBigint64array); // false
console.log(new TypeOf(exampleBigint64Array, 4, 5).someValueIsBigint64array); // true
console.log(new TypeOf(1, 2, 3).someValueNotBigint64array); // true
```

These methods can be useful when you need to check if a value is a bigint64array.

- `isBiguint64array`: Returns true if all values are biguint64arrays.
- `notBiguint64array`: Returns true if none of the values are biguint64arrays.
- `everyValueIsBiguint64array`: Returns true if every value is a biguint64array.
- `everyValueNotBiguint64array`: Returns true if every value is not a biguint64array.
- `someValueIsBiguint64array`: Returns true if at least one value is a biguint64array.
- `someValueNotBiguint64array`: Returns true if at least one value is not a biguint64array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const exampleBiguint64Array = new BigUint64Array([1n, 2n, 3n]);

console.log(new TypeOf(exampleBiguint64Array).isBiguint64array); // true
console.log(new TypeOf(1, 2, 3).notBiguint64array); // true
console.log(new TypeOf(exampleBiguint64Array, new BigUint64Array([4n, 5n, 6n]), new BigUint64Array([7n, 8n, 9n])).everyValueIsBiguint64array); // true
console.log(new TypeOf(exampleBiguint64Array, 4, 5).everyValueNotBiguint64array); // false
console.log(new TypeOf(exampleBiguint64Array, 4, 5).someValueIsBiguint64array); // true
console.log(new TypeOf(1, 2, 3).someValueNotBiguint64array); // true
```


- `isInfinity`: Returns true if all values are positive or negative infinity.
- `notInfinity`: Returns true if none of the values are positive or negative infinity.
- `everyValueIsInfinity`: Returns true if every value is positive or negative infinity.
- `everyValueNotInfinity`: Returns true if every value is not positive or negative infinity.
- `someValueIsInfinity`: Returns true if at least one value is positive or negative infinity.
- `someValueNotInfinity`: Returns true if at least one value is not positive or negative infinity.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInfinity = new TypeOf(Infinity, -Infinity, 42);

console.log(typeOfInfinity.isInfinity); // true
console.log(typeOfInfinity.notInfinity); // false
console.log(typeOfInfinity.everyValueIsInfinity); // false
console.log(typeOfInfinity.everyValueNotInfinity); // false
console.log(typeOfInfinity.someValueIsInfinity); // true
console.log(typeOfInfinity.someValueNotInfinity); // true
```

- `isInt16array`: Returns true if all values are Int16Arrays.
- `notInt16array`: Returns true if none of the values are Int16Arrays.
- `everyValueIsInt16array`: Returns true if every value is an Int16Array.
- `everyValueNotInt16array`: Returns true if every value is not an Int16Array.
- `someValueIsInt16array`: Returns true if at least one value is an Int16Array.
- `someValueNotInt16array`: Returns true if at least one value is not an Int16Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInt16Array = new TypeOf(new Int16Array(2), new Int16Array(4), []);

console.log(typeOfInt16Array.isInt16array); // true
console.log(typeOfInt16Array.notInt16array); // false
console.log(typeOfInt16Array.everyValueIsInt16array); // false
console.log(typeOfInt16Array.everyValueNotInt16array); // false
console.log(typeOfInt16Array.someValueIsInt16array); // true
console.log(typeOfInt16Array.someValueNotInt16array); // true
```

- `isInt32array`: Returns true if all values are Int32Arrays.
- `notInt32array`: Returns true if none of the values are Int32Arrays.
- `everyValueIsInt32array`: Returns true if every value is an Int32Array.
- `everyValueNotInt32array`: Returns true if every value is not an Int32Array.
- `someValueIsInt32array`: Returns true if at least one value is an Int32Array.
- `someValueNotInt32array`: Returns true if at least one value is not an Int32Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInt32Array = new TypeOf(new Int32Array(2), new Int32Array(4), []);

console.log(typeOfInt32Array.isInt32array); // true
console.log(typeOfInt32Array.notInt32array); // false
console.log(typeOfInt32Array.everyValueIsInt32array); // false
console.log(typeOfInt32Array.everyValueNotInt32array); // false
console.log(typeOfInt32Array.someValueIsInt32array); // true
console.log(typeOfInt32Array.someValueNotInt32array); // true
```

- `isInt8array`: Returns true if all values are Int8Arrays.
- `notInt8array`: Returns true if none of the values are Int8Arrays.
- `everyValueIsInt8array`: Returns true if every value is an Int8Array.
- `everyValueNotInt8array`: Returns true if every value is not an Int8Array.
- `someValueIsInt8array`: Returns true if at least one value is an Int8Array.
- `someValueNotInt8array`: Returns true if at least one value is not an Int8Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInt8Array = new TypeOf(new Int8Array(2), new Int8Array(4), []);

console.log(typeOfInt8Array.isInt8array); // true
console.log(typeOfInt8Array.notInt8array); // false
console.log(typeOfInt8Array.everyValueIsInt8array); // false
console.log(typeOfInt8Array.everyValueNotInt8array); // false
console.log(typeOfInt8Array.someValueIsInt8array); // true
console.log(typeOfInt8Array.someValueNotInt8array); // true
```

- `isInternal`: Returns true if all values are internal objects.
- `notInternal`: Returns true if none of the values are internal objects.
- `everyValueIsInternal`: Returns true if every value is an internal object.
- `everyValueNotInternal`: Returns true if every value is not an internal object.
- `someValueIsInternal`: Returns true if at least one value is an internal object.
- `someValueNotInternal`: Returns true if at least one value is not an internal object.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfInternal = new TypeOf(new Map(), new Set(), []);

console.log(typeOfInternal.isInternal); // true
console.log(typeOfInternal.notInternal); // false
console.log(typeOfInternal.everyValueIsInternal); // false
console.log(typeOfInternal.everyValueNotInternal); // false
console.log(typeOfInternal.someValueIsInternal); // true
console.log(typeOfInternal.someValueNotInternal); // true
```

- `isMap`: Returns true if all values are Maps.
- `notMap`: Returns true if none of the values are Maps.
- `everyValueIsMap`: Returns true if every value is a Map.
- `everyValueNotMap`: Returns true if every value is not a Map.
- `someValueIsMap`: Returns true if at least one value is a Map.
- `someValueNotMap`: Returns true if at least one value is not a Map.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfMap = new TypeOf(new Map(), new Map(), []);

console.log(typeOfMap.isMap); // true
console.log(typeOfMap.notMap); // false
console.log(typeOfMap.everyValueIsMap); // false
console.log(typeOfMap.everyValueNotMap); // false
console.log(typeOfMap.someValueIsMap); // true
console.log(typeOfMap.someValueNotMap); // true
```

- `isMapiterator`: Returns true if all values are Map iterators.
- `notMapiterator`: Returns true if none of the values are Map iterators.
- `everyValueIsMapiterator`: Returns true if every value is a Map iterator.
- `everyValueNotMapiterator`: Returns true if every value is not a Map iterator.
- `someValueIsMapiterator`: Returns true if at least one value is a Map iterator.
- `someValueNotMapiterator`: Returns true if at least one value is not a Map iterator.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfMapIterator = new TypeOf(new Map().entries(), new Map().keys(), []);

console.log(typeOfMapIterator.isMapiterator); // true
console.log(typeOfMapIterator.notMapiterator); // false
console.log(typeOfMapIterator.everyValueIsMapiterator); // false
console.log(typeOfMapIterator.everyValueNotMapiterator); // false
console.log(typeOfMapIterator.someValueIsMapiterator); // true
console.log(typeOfMapIterator.someValueNotMapiterator); // true
```

- `isModule`: Returns true if all values are modules.
- `notModule`: Returns true if none of the values are modules.
- `everyValueIsModule`: Returns true if every value is a module.
- `everyValueNotModule`: Returns true if every value is not a module.
- `someValueIsModule`: Returns true if at least one value is a module.
- `someValueNotModule`: Returns true if at least one value is not a module.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfModule = new TypeOf(module, module, []);

console.log(typeOfModule.isModule); // true
console.log(typeOfModule.notModule); // false
console.log(typeOfModule.everyValueIsModule); // false
console.log(typeOfModule.everyValueNotModule); // false
console.log(typeOfModule.someValueIsModule); // true
console.log(typeOfModule.someValueNotModule); // true
```

- `isModulenamespaceobject`: Returns true if all values are module namespace objects.
- `notModulenamespaceobject`: Returns true if none of the values are module namespace objects.
- `everyValueIsModulenamespaceobject`: Returns true if every value is a module namespace object.
- `everyValueNotModulenamespaceobject`: Returns true if every value is not a module namespace object.
- `someValueIsModulenamespaceobject`: Returns true if at least one value is a module namespace object.
- `someValueNotModulenamespaceobject`: Returns true if at least one value is not a module namespace object.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfModuleNamespaceObject = new TypeOf(import.meta, import.meta, []);

console.log(typeOfModuleNamespaceObject.isModulenamespaceobject); // true
console.log(typeOfModuleNamespaceObject.notModulenamespaceobject); // false
console.log(typeOfModuleNamespaceObject.everyValueIsModulenamespaceobject); // false
console.log(typeOfModuleNamespaceObject.everyValueNotModulenamespaceobject); // false
console.log(typeOfModuleNamespaceObject.someValueIsModulenamespaceobject); // true
console.log(typeOfModuleNamespaceObject.someValueNotModulenamespaceobject); // true
```

These methods can be useful when you need to check the type of values in your code, especially when working with specific types like typed arrays, maps, and modules.








---








- `isNan`: Returns true if all values are NaN.
- `notNan`: Returns true if none of the values are NaN.
- `everyValueIsNan`: Returns true if every value is NaN.
- `everyValueNotNan`: Returns true if every value is not NaN.
- `someValueIsNan`: Returns true if at least one value is NaN.
- `someValueNotNan`: Returns true if at least one value is not NaN.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfNan = new TypeOf(NaN, NaN, NaN);

console.log(typeOfNan.isNan); // true
console.log(typeOfNan.notNan); // false
console.log(typeOfNan.everyValueIsNan); // true
console.log(typeOfNan.everyValueNotNan); // false
console.log(typeOfNan.someValueIsNan); // true
console.log(typeOfNan.someValueNotNan); // false
```

These methods can be useful when you need to check if a value is NaN.

- `isNull`: Returns true if all values are null.
- `notNull`: Returns true if none of the values are null.
- `everyValueIsNull`: Returns true if every value is null.
- `everyValueNotNull`: Returns true if every value is not null.
- `someValueIsNull`: Returns true if at least one value is null.
- `someValueNotNull`: Returns true if at least one value is not null.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfNull = new TypeOf(null, null, null);

console.log(typeOfNull.isNull); // true
console.log(typeOfNull.notNull); // false
console.log(typeOfNull.everyValueIsNull); // true
console.log(typeOfNull.everyValueNotNull); // false
console.log(typeOfNull.someValueIsNull); // true
console.log(typeOfNull.someValueNotNull); // false
```

These methods can be useful when you need to check if a value is null.

- `isNumber`: Returns true if all values are numbers.
- `notNumber`: Returns true if none of the values are numbers.
- `everyValueIsNumber`: Returns true if every value is a number.
- `everyValueNotNumber`: Returns true if every value is not a number.
- `someValueIsNumber`: Returns true if at least one value is a number.
- `someValueNotNumber`: Returns true if at least one value is not a number.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfNumber = new TypeOf(42, 3.14, -1);

console.log(typeOfNumber.isNumber); // true
console.log(typeOfNumber.notNumber); // false
console.log(typeOfNumber.everyValueIsNumber); // true
console.log(typeOfNumber.everyValueNotNumber); // false
console.log(typeOfNumber.someValueIsNumber); // true
console.log(typeOfNumber.someValueNotNumber); // false
```

These methods can be useful when you need to check if a value is a number.

- `isObject`: Returns true if all values are objects.
- `notObject`: Returns true if none of the values are objects.
- `everyValueIsObject`: Returns true if every value is an object.
- `everyValueNotObject`: Returns true if every value is not an object.
- `someValueIsObject`: Returns true if at least one value is an object.
- `someValueNotObject`: Returns true if at least one value is not an object.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfObject = new TypeOf({}, { a: 1 }, new Date());

console.log(typeOfObject.isObject); // true
console.log(typeOfObject.notObject); // false
console.log(typeOfObject.everyValueIsObject); // true
console.log(typeOfObject.everyValueNotObject); // false
console.log(typeOfObject.someValueIsObject); // true
console.log(typeOfObject.someValueNotObject); // false
```

These methods can be useful when you need to check if a value is an object.

- `isPromise`: Returns true if all values are promises.
- `notPromise`: Returns true if none of the values are promises.
- `everyValueIsPromise`: Returns true if every value is a promise.
- `everyValueNotPromise`: Returns true if every value is not a promise.
- `someValueIsPromise`: Returns true if at least one value is a promise.
- `someValueNotPromise`: Returns true if at least one value is not a promise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfPromise = new TypeOf(Promise.resolve(), Promise.reject(), new Promise(() => {}));

console.log(typeOfPromise.isPromise); // true
console.log(typeOfPromise.notPromise); // false
console.log(typeOfPromise.everyValueIsPromise); // true
console.log(typeOfPromise.everyValueNotPromise); // false
console.log(typeOfPromise.someValueIsPromise); // true
console.log(typeOfPromise.someValueNotPromise); // false
```

These methods can be useful when you need to check if a value is a promise.

- `isProxy`: Returns true if all values are proxies.
- `notProxy`: Returns true if none of the values are proxies.
- `everyValueIsProxy`: Returns true if every value is a proxy.
- `everyValueNotProxy`: Returns true if every value is not a proxy.
- `someValueIsProxy`: Returns true if at least one value is a proxy.
- `someValueNotProxy`: Returns true if at least one value is not a proxy.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfProxy = new TypeOf(new Proxy({}, {}), new Proxy({}, {}), new Proxy({}, {}));

console.log(typeOfProxy.isProxy); // true
console.log(typeOfProxy.notProxy); // false
console.log(typeOfProxy.everyValueIsProxy); // true
console.log(typeOfProxy.everyValueNotProxy); // false
console.log(typeOfProxy.someValueIsProxy); // true
console.log(typeOfProxy.someValueNotProxy); // false
```

These methods can be useful when you need to check if a value is a proxy.

- `isRegexp`: Returns true if all values are regular expressions.
- `notRegexp`: Returns true if none of the values are regular expressions.
- `everyValueIsRegexp`: Returns true if every value is a regular expression.
- `everyValueNotRegexp`: Returns true if every value is not a regular expression.
- `someValueIsRegexp`: Returns true if at least one value is a regular expression.
- `someValueNotRegexp`: Returns true if at least one value is not a regular expression.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfRegexp = new TypeOf(/hello/, /world/, /^$/);

console.log(typeOfRegexp.isRegexp); // true
console.log(typeOfRegexp.notRegexp); // false
console.log(typeOfRegexp.everyValueIsRegexp); // true
console.log(typeOfRegexp.everyValueNotRegexp); // false
console.log(typeOfRegexp.someValueIsRegexp); // true
console.log(typeOfRegexp.someValueNotRegexp); // false
```

These methods can be useful when you need to check if a value is a regular expression.

- `isSet`: Returns true if all values are sets.
- `notSet`: Returns true if none of the values are sets.
- `everyValueIsSet`: Returns true if every value is a set.
- `everyValueNotSet`: Returns true if every value is not a set.
- `someValueIsSet`: Returns true if at least one value is a set.
- `someValueNotSet`: Returns true if at least one value is not a set.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfSet = new TypeOf(new Set(), new Set([1, 2, 3]), new Set(["hello", "world"]));

console.log(typeOfSet.isSet); // true
console.log(typeOfSet.notSet); // false
console.log(typeOfSet.everyValueIsSet); // true
console.log(typeOfSet.everyValueNotSet); // false
console.log(typeOfSet.someValueIsSet); // true
console.log(typeOfSet.someValueNotSet); // false
```

These methods can be useful when you need to check if a value is a set.

- `isSetiterator`: Returns true if all values are set iterators.
- `notSetiterator`: Returns true if none of the values are set iterators.
- `everyValueIsSetiterator`: Returns true if every value is a set iterator.
- `everyValueNotSetiterator`: Returns true if every value is not a set iterator.
- `someValueIsSetiterator`: Returns true if at least one value is a set iterator.
- `someValueNotSetiterator`: Returns true if at least one value is not a set iterator.

```javascript
import { TypeOf } from "dcsm-type-helper";

const set = new Set([1, 2, 3]);
const setIterator = set.values();

const typeOfSetIterator = new TypeOf(setIterator, setIterator, setIterator);

console.log(typeOfSetIterator.isSetiterator); // true
console.log(typeOfSetIterator.notSetiterator); // false
console.log(typeOfSetIterator.everyValueIsSetiterator); // true
console.log(typeOfSetIterator.everyValueNotSetiterator); // false
console.log(typeOfSetIterator.someValueIsSetiterator); // true
console.log(typeOfSetIterator.someValueNotSetiterator); // false
```




----
















- `isString`: Returns true if all values are strings.
- `notString`: Returns true if none of the values are strings.
- `everyValueIsString`: Returns true if every value is a string.
- `everyValueNotString`: Returns true if every value is not a string.
- `someValueIsString`: Returns true if at least one value is a string.
- `someValueNotString`: Returns true if at least one value is not a string.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfString = new TypeOf("hello", "world", "42");

console.log(typeOfString.isString); // true
console.log(typeOfString.notString); // false
console.log(typeOfString.everyValueIsString); // true
console.log(typeOfString.everyValueNotString); // false
console.log(typeOfString.someValueIsString); // true
console.log(typeOfString.someValueNotString); // false
```

These methods can be useful when you need to check if a value is a string.

- `isStringiterator`: Returns true if all values are string iterators.
- `notStringiterator`: Returns true if none of the values are string iterators.
- `everyValueIsStringiterator`: Returns true if every value is a string iterator.
- `everyValueNotStringiterator`: Returns true if every value is not a string iterator.
- `someValueIsStringiterator`: Returns true if at least one value is a string iterator.
- `someValueNotStringiterator`: Returns true if at least one value is not a string iterator.

```javascript
import { TypeOf } from "dcsm-type-helper";

const string = "hello";
const stringIterator = string[Symbol.iterator]();

const typeOfStringIterator = new TypeOf(stringIterator, stringIterator, stringIterator);

console.log(typeOfStringIterator.isStringiterator); // true
console.log(typeOfStringIterator.notStringiterator); // false
console.log(typeOfStringIterator.everyValueIsStringiterator); // true
console.log(typeOfStringIterator.everyValueNotStringiterator); // false
console.log(typeOfStringIterator.someValueIsStringiterator); // true
console.log(typeOfStringIterator.someValueNotStringiterator); // false
```

These methods can be useful when you need to check if a value is a string iterator.

- `isSymbol`: Returns true if all values are symbols.
- `notSymbol`: Returns true if none of the values are symbols.
- `everyValueIsSymbol`: Returns true if every value is a symbol.
- `everyValueNotSymbol`: Returns true if every value is not a symbol.
- `someValueIsSymbol`: Returns true if at least one value is a symbol.
- `someValueNotSymbol`: Returns true if at least one value is not a symbol.

```javascript
import { TypeOf } from "dcsm-type-helper";

const symbol1 = Symbol("hello");
const symbol2 = Symbol("world");
const symbol3 = Symbol(42);

const typeOfSymbol = new TypeOf(symbol1, symbol2, symbol3);

console.log(typeOfSymbol.isSymbol); // true
console.log(typeOfSymbol.notSymbol); // false
console.log(typeOfSymbol.everyValueIsSymbol); // true
console.log(typeOfSymbol.everyValueNotSymbol); // false
console.log(typeOfSymbol.someValueIsSymbol); // true
console.log(typeOfSymbol.someValueNotSymbol); // false
```

These methods can be useful when you need to check if a value is a symbol.

- `isTypedarray`: Returns true if all values are typed arrays.
- `notTypedarray`: Returns true if none of the values are typed arrays.
- `everyValueIsTypedarray`: Returns true if every value is a typed array.
- `everyValueNotTypedarray`: Returns true if every value is not a typed array.
- `someValueIsTypedarray`: Returns true if at least one value is a typed array.
- `someValueNotTypedarray`: Returns true if at least one value is not a typed array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typedArray = new Int32Array([1, 2, 3]);
const typedArray2 = new Uint8Array([1, 2, 3]);
const typedArray3 = new Float64Array([1.1, 2.2, 3.3]);

const typeOfTypedArray = new TypeOf(typedArray, typedArray2, typedArray3);

console.log(typeOfTypedArray.isTypedarray); // true
console.log(typeOfTypedArray.notTypedarray); // false
console.log(typeOfTypedArray.everyValueIsTypedarray); // true
console.log(typeOfTypedArray.everyValueNotTypedarray); // false
console.log(typeOfTypedArray.someValueIsTypedarray); // true
console.log(typeOfTypedArray.someValueNotTypedarray); // false
```

These methods can be useful when you need to check if a value is a typed array.

- `isUint16array`: Returns true if all values are Uint16Arrays.
- `notUint16array`: Returns true if none of the values are Uint16Arrays.
- `everyValueIsUint16array`: Returns true if every value is a Uint16Array.
- `everyValueNotUint16array`: Returns true if every value is not a Uint16Array.
- `someValueIsUint16array`: Returns true if at least one value is a Uint16Array.
- `someValueNotUint16array`: Returns true if at least one value is not a Uint16Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint16Array = new Uint16Array([1, 2, 3]);
const uint16Array2 = new Uint16Array([4, 5, 6]);
const uint16Array3 = new Uint16Array([7, 8, 9]);

const typeOfUint16Array = new TypeOf(uint16Array, uint16Array2, uint16Array3);

console.log(typeOfUint16Array.isUint16array); // true
console.log(typeOfUint16Array.notUint16array); // false
console.log(typeOfUint16Array.everyValueIsUint16array); // true
console.log(typeOfUint16Array.everyValueNotUint16array); // false
console.log(typeOfUint16Array.someValueIsUint16array); // true
console.log(typeOfUint16Array.someValueNotUint16array); // false
```

These methods can be useful when you need to check if a value is a Uint16Array.

- `isUint32array`: Returns true if all values are Uint32Arrays.
- `notUint32array`: Returns true if none of the values are Uint32Arrays.
- `everyValueIsUint32array`: Returns true if every value is a Uint32Array.
- `everyValueNotUint32array`: Returns true if every value is not a Uint32Array.
- `someValueIsUint32array`: Returns true if at least one value is a Uint32Array.
- `someValueNotUint32array`: Returns true if at least one value is not a Uint32Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint32Array = new Uint32Array([1, 2, 3]);
const uint32Array2 = new Uint32Array([4, 5, 6]);
const uint32Array3 = new Uint32Array([7, 8, 9]);

const typeOfUint32Array = new TypeOf(uint32Array, uint32Array2, uint32Array3);

console.log(typeOfUint32Array.isUint32array); // true
console.log(typeOfUint32Array.notUint32array); // false
console.log(typeOfUint32Array.everyValueIsUint32array); // true
console.log(typeOfUint32Array.everyValueNotUint32array); // false
console.log(typeOfUint32Array.someValueIsUint32array); // true
console.log(typeOfUint32Array.someValueNotUint32array); // false
```

These methods can be useful when you need to check if a value is a Uint32Array.

- `isUint8array`: Returns true if all values are Uint8Arrays.
- `notUint8array`: Returns true if none of the values are Uint8Arrays.
- `everyValueIsUint8array`: Returns true if every value is a Uint8Array.
- `everyValueNotUint8array`: Returns true if every value is not a Uint8Array.
- `someValueIsUint8array`: Returns true if at least one value is a Uint8Array.
- `someValueNotUint8array`: Returns true if at least one value is not a Uint8Array.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint8Array = new Uint8Array([1, 2, 3]);
const uint8Array2 = new Uint8Array([4, 5, 6]);
const uint8Array3 = new Uint8Array([7, 8, 9]);

const typeOfUint8Array = new TypeOf(uint8Array, uint8Array2, uint8Array3);

console.log(typeOfUint8Array.isUint8array); // true
console.log(typeOfUint8Array.notUint8array); // false
console.log(typeOfUint8Array.everyValueIsUint8array); // true
console.log(typeOfUint8Array.everyValueNotUint8array); // false
console.log(typeOfUint8Array.someValueIsUint8array); // true
console.log(typeOfUint8Array.someValueNotUint8array); // false
```

These methods can be useful when you need to check if a value is a Uint8Array.

- `isUint8clampedarray`: Returns true if all values are Uint8ClampedArrays.
- `notUint8clampedarray`: Returns true if none of the values are Uint8ClampedArrays.
- `everyValueIsUint8clampedarray`: Returns true if every value is a Uint8ClampedArray.
- `everyValueNotUint8clampedarray`: Returns true if every value is not a Uint8ClampedArray.
- `someValueIsUint8clampedarray`: Returns true if at least one value is a Uint8ClampedArray.
- `someValueNotUint8clampedarray`: Returns true if at least one value is not a Uint8ClampedArray.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint8ClampedArray = new Uint8ClampedArray([1, 2, 3]);
const uint8ClampedArray2 = new Uint8ClampedArray([4, 5, 6]);
const uint8ClampedArray3 = new Uint8ClampedArray([7, 8, 9]);

const typeOfUint8ClampedArray = new TypeOf(uint8ClampedArray, uint8ClampedArray2, uint8ClampedArray3);

console.log(typeOfUint8ClampedArray.isUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.notUint8clampedarray); // false
console.log(typeOfUint8ClampedArray.everyValueIsUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.everyValueNotUint8clampedarray); // false
console.log(typeOfUint8ClampedArray.someValueIsUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.someValueNotUint8clampedarray); // false
```

These methods can be useful when you need to check if a value is a Uint8ClampedArray.

- `isUndefined`: Returns true if all values are undefined.
- `notUndefined`: Returns true if none of the values are undefined.
- `everyValueIsUndefined`: Returns true if every value is undefined.
- `everyValueNotUndefined`: Returns true if every value is not undefined.
- `someValueIsUndefined`: Returns true if at least one value is undefined.
- `someValueNotUndefined`: Returns true if at least one value is not undefined.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfUndefined = new TypeOf(undefined, undefined, undefined);

console.log(typeOfUndefined.isUndefined); // true
console.log(typeOfUndefined.notUndefined); // false
console.log(typeOfUndefined.everyValueIsUndefined); // true
console.log(typeOfUndefined.everyValueNotUndefined); // false
console.log(typeOfUndefined.someValueIsUndefined); // true
console.log(typeOfUndefined.someValueNotUndefined); // false
```




----










- `isEmpty`: Returns true if all values are empty.
- `notEmpty`: Returns true if none of the values are empty.
- `everyValueIsEmpty`: Returns true if every value is empty.
- `everyValueNotEmpty`: Returns true if every value is not empty.
- `someValueIsEmpty`: Returns true if at least one value is empty.
- `someValueNotEmpty`: Returns true if at least one value is not empty.

```javascript
import { TypeOf } from "dcsm-type-helper";

const emptyString = "";
const emptyArray = [];
const emptyObject = {};

const typeOfEmpty = new TypeOf(emptyString, emptyArray, emptyObject);

console.log(typeOfEmpty.isEmpty); // true
console.log(typeOfEmpty.notEmpty); // false
console.log(typeOfEmpty.everyValueIsEmpty); // true
console.log(typeOfEmpty.everyValueNotEmpty); // false
console.log(typeOfEmpty.someValueIsEmpty); // true
console.log(typeOfEmpty.someValueNotEmpty); // false
```

These methods can be useful when you need to check if a value is empty.

- `isBooleanTrue`: Returns true if all values are true.
- `notBooleanTrue`: Returns true if none of the values are true.
- `everyValueIsBooleanTrue`: Returns true if every value is true.
- `everyValueNotBooleanTrue`: Returns true if every value is not true.
- `someValueIsBooleanTrue`: Returns true if at least one value is true.
- `someValueNotBooleanTrue`: Returns true if at least one value is not true.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfTrue = new TypeOf(true, true, true);

console.log(typeOfTrue.isBooleanTrue); // true
console.log(typeOfTrue.notBooleanTrue); // false
console.log(typeOfTrue.everyValueIsBooleanTrue); // true
console.log(typeOfTrue.everyValueNotBooleanTrue); // false
console.log(typeOfTrue.someValueIsBooleanTrue); // true
console.log(typeOfTrue.someValueNotBooleanTrue); // false
```

These methods can be useful when you need to check if a value is true.

- `isBooleanFalse`: Returns true if all values are false.
- `notBooleanFalse`: Returns true if none of the values are false.
- `everyValueIsBooleanFalse`: Returns true if every value is false.
- `everyValueNotBooleanFalse`: Returns true if every value is not false.
- `someValueIsBooleanFalse`: Returns true if at least one value is false.
- `someValueNotBooleanFalse`: Returns true if at least one value is not false.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfFalse = new TypeOf(false, false, false);

console.log(typeOfFalse.isBooleanFalse); // true
console.log(typeOfFalse.notBooleanFalse); // false
console.log(typeOfFalse.everyValueIsBooleanFalse); // true
console.log(typeOfFalse.everyValueNotBooleanFalse); // false
console.log(typeOfFalse.someValueIsBooleanFalse); // true
console.log(typeOfFalse.someValueNotBooleanFalse); // false
```

These methods can be useful when you need to check if a value is false.

- `isNumberZero`: Returns true if all values are zero.
- `notNumberZero`: Returns true if none of the values are zero.
- `everyValueIsNumberZero`: Returns true if every value is zero.
- `everyValueNotNumberZero`: Returns true if every value is not zero.
- `someValueIsNumberZero`: Returns true if at least one value is zero.
- `someValueNotNumberZero`: Returns true if at least one value is not zero.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfZero = new TypeOf(0, 0, 0);

console.log(typeOfZero.isNumberZero); // true
console.log(typeOfZero.notNumberZero); // false
console.log(typeOfZero.everyValueIsNumberZero); // true
console.log(typeOfZero.everyValueNotNumberZero); // false
console.log(typeOfZero.someValueIsNumberZero); // true
console.log(typeOfZero.someValueNotNumberZero); // false
```

These methods can be useful when you need to check if a value is zero.

- `isNumberPositive`: Returns true if all values are positive.
- `notNumberPositive`: Returns true if none of the values are positive.
- `everyValueIsNumberPositive`: Returns true if every value is positive.
- `everyValueNotNumberPositive`: Returns true if every value is not positive.
- `someValueIsNumberPositive`: Returns true if at least one value is positive.
- `someValueNotNumberPositive`: Returns true if at least one value is not positive.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfPositive = new TypeOf(1, 2, 3);

console.log(typeOfPositive.isNumberPositive); // true
console.log(typeOfPositive.notNumberPositive); // false
console.log(typeOfPositive.everyValueIsNumberPositive); // true
console.log(typeOfPositive.everyValueNotNumberPositive); // false
console.log(typeOfPositive.someValueIsNumberPositive); // true
console.log(typeOfPositive.someValueNotNumberPositive); // false
```

These methods can be useful when you need to check if a value is positive.

- `isNumberNegative`: Returns true if all values are negative.
- `notNumberNegative`: Returns true if none of the values are negative.
- `everyValueIsNumberNegative`: Returns true if every value is negative.
- `everyValueNotNumberNegative`: Returns true if every value is not negative.
- `someValueIsNumberNegative`: Returns true if at least one value is negative.
- `someValueNotNumberNegative`: Returns true if at least one value is not negative.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfNegative = new TypeOf(-1, -2, -3);

console.log(typeOfNegative.isNumberNegative); // true
console.log(typeOfNegative.notNumberNegative); // false
console.log(typeOfNegative.everyValueIsNumberNegative); // true
console.log(typeOfNegative.everyValueNotNumberNegative); // false
console.log(typeOfNegative.someValueIsNumberNegative); // true
console.log(typeOfNegative.someValueNotNumberNegative); // false
```

These methods can be useful when you need to check if a value is negative.

- `isNumberMaxSafeInteger`: Returns true if all values are the maximum safe integer.
- `notNumberMaxSafeInteger`: Returns true if none of the values are the maximum safe integer.
- `everyValueIsNumberMaxSafeInteger`: Returns true if every value is the maximum safe integer.
- `everyValueNotNumberMaxSafeInteger`: Returns true if every value is not the maximum safe integer.
- `someValueIsNumberMaxSafeInteger`: Returns true if at least one value is the maximum safe integer.
- `someValueNotNumberMaxSafeInteger`: Returns true if at least one value is not the maximum safe integer.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfMaxSafeInteger = new TypeOf(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

console.log(typeOfMaxSafeInteger.isNumberMaxSafeInteger); // true
console.log(typeOfMaxSafeInteger.notNumberMaxSafeInteger); // false
console.log(typeOfMaxSafeInteger.everyValueIsNumberMaxSafeInteger); // true
console.log(typeOfMaxSafeInteger.everyValueNotNumberMaxSafeInteger); // false
console.log(typeOfMaxSafeInteger.someValueIsNumberMaxSafeInteger); // true
console.log(typeOfMaxSafeInteger.someValueNotNumberMaxSafeInteger); // false
```








----












- `isRegexp`: Returns true if all values are regular expressions, false otherwise.
- `notRegexp`: Returns true if none of the values are regular expressions, false otherwise.
- `everyValueIsRegexp`: Returns true if every value is a regular expression, false otherwise.
- `everyValueNotRegexp`: Returns true if every value is not a regular expression, false otherwise.
- `someValueIsRegexp`: Returns true if at least one value is a regular expression, false otherwise.
- `someValueNotRegexp`: Returns true if at least one value is not a regular expression, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfRegexp = new TypeOf(/hello/, /world/);

console.log(typeOfRegexp.isRegexp); // true
console.log(typeOfRegexp.notRegexp); // false
console.log(typeOfRegexp.everyValueIsRegexp); // true
console.log(typeOfRegexp.everyValueNotRegexp); // false
console.log(typeOfRegexp.someValueIsRegexp); // true
console.log(typeOfRegexp.someValueNotRegexp); // false
```

In this example, we create a new instance of the `TypeOf` class with two regular expressions. We then use the methods for checking regular expressions to check the type of the values.

- `isSet`: Returns true if all values are sets, false otherwise.
- `notSet`: Returns true if none of the values are sets, false otherwise.
- `everyValueIsSet`: Returns true if every value is a set, false otherwise.
- `everyValueNotSet`: Returns true if every value is not a set, false otherwise.
- `someValueIsSet`: Returns true if at least one value is a set, false otherwise.
- `someValueNotSet`: Returns true if at least one value is not a set, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfSet = new TypeOf(new Set([1, 2, 3]), new Set([4, 5, 6]));

console.log(typeOfSet.isSet); // true
console.log(typeOfSet.notSet); // false
console.log(typeOfSet.everyValueIsSet); // true
console.log(typeOfSet.everyValueNotSet); // false
console.log(typeOfSet.someValueIsSet); // true
console.log(typeOfSet.someValueNotSet); // false
```

In this example, we create a new instance of the `TypeOf` class with two sets. We then use the methods for checking sets to check the type of the values.

- `isSetiterator`: Returns true if all values are set iterators, false otherwise.
- `notSetiterator`: Returns true if none of the values are set iterators, false otherwise.
- `everyValueIsSetiterator`: Returns true if every value is a set iterator, false otherwise.
- `everyValueNotSetiterator`: Returns true if every value is not a set iterator, false otherwise.
- `someValueIsSetiterator`: Returns true if at least one value is a set iterator, false otherwise.
- `someValueNotSetiterator`: Returns true if at least one value is not a set iterator, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const set = new Set([1, 2, 3]);
const setIterator = set.values();
const typeOfSetIterator = new TypeOf(setIterator);

console.log(typeOfSetIterator.isSetiterator); // true
console.log(typeOfSetIterator.notSetiterator); // false
console.log(typeOfSetIterator.everyValueIsSetiterator); // true
console.log(typeOfSetIterator.everyValueNotSetiterator); // false
console.log(typeOfSetIterator.someValueIsSetiterator); // true
console.log(typeOfSetIterator.someValueNotSetiterator); // false
```

In this example, we create a new instance of the `TypeOf` class with a set iterator. We then use the methods for checking set iterators to check the type of the values.

- `isString`: Returns true if all values are strings, false otherwise.
- `notString`: Returns true if none of the values are strings, false otherwise.
- `everyValueIsString`: Returns true if every value is a string, false otherwise.
- `everyValueNotString`: Returns true if every value is not a string, false otherwise.
- `someValueIsString`: Returns true if at least one value is a string, false otherwise.
- `someValueNotString`: Returns true if at least one value is not a string, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfString = new TypeOf("hello", "world");

console.log(typeOfString.isString); // true
console.log(typeOfString.notString); // false
console.log(typeOfString.everyValueIsString); // true
console.log(typeOfString.everyValueNotString); // false
console.log(typeOfString.someValueIsString); // true
console.log(typeOfString.someValueNotString); // false
```

In this example, we create a new instance of the `TypeOf` class with two strings. We then use the methods for checking strings to check the type of the values.

- `isStringiterator`: Returns true if all values are string iterators, false otherwise.
- `notStringiterator`: Returns true if none of the values are string iterators, false otherwise.
- `everyValueIsStringiterator`: Returns true if every value is a string iterator, false otherwise.
- `everyValueNotStringiterator`: Returns true if every value is not a string iterator, false otherwise.
- `someValueIsStringiterator`: Returns true if at least one value is a string iterator, false otherwise.
- `someValueNotStringiterator`: Returns true if at least one value is not a string iterator, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const string = "hello";
const stringIterator = string[Symbol.iterator]();
const typeOfStringIterator = new TypeOf(stringIterator);

console.log(typeOfStringIterator.isStringiterator); // true
console.log(typeOfStringIterator.notStringiterator); // false
console.log(typeOfStringIterator.everyValueIsStringiterator); // true
console.log(typeOfStringIterator.everyValueNotStringiterator); // false
console.log(typeOfStringIterator.someValueIsStringiterator); // true
console.log(typeOfStringIterator.someValueNotStringiterator); // false
```

In this example, we create a new instance of the `TypeOf` class with a string iterator. We then use the methods for checking string iterators to check the type of the values.

- `isSymbol`: Returns true if all values are symbols, false otherwise.
- `notSymbol`: Returns true if none of the values are symbols, false otherwise.
- `everyValueIsSymbol`: Returns true if every value is a symbol, false otherwise.
- `everyValueNotSymbol`: Returns true if every value is not a symbol, false otherwise.
- `someValueIsSymbol`: Returns true if at least one value is a symbol, false otherwise.
- `someValueNotSymbol`: Returns true if at least one value is not a symbol, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const symbol1 = Symbol("hello");
const symbol2 = Symbol("world");
const typeOfSymbol = new TypeOf(symbol1, symbol2);

console.log(typeOfSymbol.isSymbol); // true
console.log(typeOfSymbol.notSymbol); // false
console.log(typeOfSymbol.everyValueIsSymbol); // true
console.log(typeOfSymbol.everyValueNotSymbol); // false
console.log(typeOfSymbol.someValueIsSymbol); // true
console.log(typeOfSymbol.someValueNotSymbol); // false
```

In this example, we create a new instance of the `TypeOf` class with two symbols. We then use the methods for checking symbols to check the type of the values.

- `isTypedarray`: Returns true if all values are typed arrays, false otherwise.
- `notTypedarray`: Returns true if none of the values are typed arrays, false otherwise.
- `everyValueIsTypedarray`: Returns true if every value is a typed array, false otherwise.
- `everyValueNotTypedarray`: Returns true if every value is not a typed array, false otherwise.
- `someValueIsTypedarray`: Returns true if at least one value is a typed array, false otherwise.
- `someValueNotTypedarray`: Returns true if at least one value is not a typed array, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typedArray = new Int32Array([1, 2, 3]);
const typeOfTypedArray = new TypeOf(typedArray);

console.log(typeOfTypedArray.isTypedarray); // true
console.log(typeOfTypedArray.notTypedarray); // false
console.log(typeOfTypedArray.everyValueIsTypedarray); // true
console.log(typeOfTypedArray.everyValueNotTypedarray); // false
console.log(typeOfTypedArray.someValueIsTypedarray); // true
console.log(typeOfTypedArray.someValueNotTypedarray); // false
```

In this example, we create a new instance of the `TypeOf` class with a typed array. We then use the methods for checking typed arrays to check the type of the values.

- `isUint16array`: Returns true if all values are Uint16Arrays, false otherwise.
- `notUint16array`: Returns true if none of the values are Uint16Arrays, false otherwise.
- `everyValueIsUint16array`: Returns true if every value is a Uint16Array, false otherwise.
- `everyValueNotUint16array`: Returns true if every value is not a Uint16Array, false otherwise.
- `someValueIsUint16array`: Returns true if at least one value is a Uint16Array, false otherwise.
- `someValueNotUint16array`: Returns true if at least one value is not a Uint16Array, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint16Array = new Uint16Array([1, 2, 3]);
const typeOfUint16Array = new TypeOf(uint16Array);

console.log(typeOfUint16Array.isUint16array); // true
console.log(typeOfUint16Array.notUint16array); // false
console.log(typeOfUint16Array.everyValueIsUint16array); // true
console.log(typeOfUint16Array.everyValueNotUint16array); // false
console.log(typeOfUint16Array.someValueIsUint16array); // true
console.log(typeOfUint16Array.someValueNotUint16array); // false
```

In this example, we create a new instance of the `TypeOf` class with a Uint16Array. We then use the methods for checking Uint16Arrays to check the type of the values.

- `isUint32array`: Returns true if all values are Uint32Arrays, false otherwise.
- `notUint32array`: Returns true if none of the values are Uint32Arrays, false otherwise.
- `everyValueIsUint32array`: Returns true if every value is a Uint32Array, false otherwise.
- `everyValueNotUint32array`: Returns true if every value is not a Uint32Array, false otherwise.
- `someValueIsUint32array`: Returns true if at least one value is a Uint32Array, false otherwise.
- `someValueNotUint32array`: Returns true if at least one value is not a Uint32Array, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint32Array = new Uint32Array([1, 2, 3]);
const typeOfUint32Array = new TypeOf(uint32Array);

console.log(typeOfUint32Array.isUint32array); // true
console.log(typeOfUint32Array.notUint32array); // false
console.log(typeOfUint32Array.everyValueIsUint32array); // true
console.log(typeOfUint32Array.everyValueNotUint32array); // false
console.log(typeOfUint32Array.someValueIsUint32array); // true
console.log(typeOfUint32Array.someValueNotUint32array); // false
```

In this example, we create a new instance of the `TypeOf` class with a Uint32Array. We then use the methods for checking Uint32Arrays to check the type of the values.

- `isUint8array`: Returns true if all values are Uint8Arrays, false otherwise.
- `notUint8array`: Returns true if none of the values are Uint8Arrays, false otherwise.
- `everyValueIsUint8array`: Returns true if every value is a Uint8Array, false otherwise.
- `everyValueNotUint8array`: Returns true if every value is not a Uint8Array, false otherwise.
- `someValueIsUint8array`: Returns true if at least one value is a Uint8Array, false otherwise.
- `someValueNotUint8array`: Returns true if at least one value is not a Uint8Array, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint8Array = new Uint8Array([1, 2, 3]);
const typeOfUint8Array = new TypeOf(uint8Array);

console.log(typeOfUint8Array.isUint8array); // true
console.log(typeOfUint8Array.notUint8array); // false
console.log(typeOfUint8Array.everyValueIsUint8array); // true
console.log(typeOfUint8Array.everyValueNotUint8array); // false
console.log(typeOfUint8Array.someValueIsUint8array); // true
console.log(typeOfUint8Array.someValueNotUint8array); // false
```

In this example, we create a new instance of the `TypeOf` class with a Uint8Array. We then use the methods for checking Uint8Arrays to check the type of the values.

- `isUint8clampedarray`: Returns true if all values are Uint8ClampedArrays, false otherwise.
- `notUint8clampedarray`: Returns true if none of the values are Uint8ClampedArrays, false otherwise.
- `everyValueIsUint8clampedarray`: Returns true if every value is a Uint8ClampedArray, false otherwise.
- `everyValueNotUint8clampedarray`: Returns true if every value is not a Uint8ClampedArray, false otherwise.
- `someValueIsUint8clampedarray`: Returns true if at least one value is a Uint8ClampedArray, false otherwise.
- `someValueNotUint8clampedarray`: Returns true if at least one value is not a Uint8ClampedArray, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const uint8ClampedArray = new Uint8ClampedArray([1, 2, 3]);
const typeOfUint8ClampedArray = new TypeOf(uint8ClampedArray);

console.log(typeOfUint8ClampedArray.isUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.notUint8clampedarray); // false
console.log(typeOfUint8ClampedArray.everyValueIsUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.everyValueNotUint8clampedarray); // false
console.log(typeOfUint8ClampedArray.someValueIsUint8clampedarray); // true
console.log(typeOfUint8ClampedArray.someValueNotUint8clampedarray); // false
```

In this example, we create a new instance of the `TypeOf` class with a Uint8ClampedArray. We then use the methods for checking Uint8ClampedArrays to check the type of the values.

- `isUndefined`: Returns true if all values are undefined, false otherwise.
- `notUndefined`: Returns true if none of the values are undefined, false otherwise.
- `everyValueIsUndefined`: Returns true if every value is undefined, false otherwise.
- `everyValueNotUndefined`: Returns true if every value is not undefined, false otherwise.
- `someValueIsUndefined`: Returns true if at least one value is undefined, false otherwise.
- `someValueNotUndefined`: Returns true if at least one value is not undefined, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const typeOfUndefined = new TypeOf(undefined, undefined);

console.log(typeOfUndefined.isUndefined); // true
console.log(typeOfUndefined.notUndefined); // false
console.log(typeOfUndefined.everyValueIsUndefined); // true
console.log(typeOfUndefined.everyValueNotUndefined); // false
console.log(typeOfUndefined.someValueIsUndefined); // true
console.log(typeOfUndefined.someValueNotUndefined); // false
```





In this example, we create a new instance of the `TypeOf` class with two undefined values. We then use the methods for checking undefined values to check the type of the values.

- `isWeakmap`: Returns true if all values are weak maps, false otherwise.
- `notWeakmap`: Returns true if none of the values are weak maps, false otherwise.
- `everyValueIsWeakmap`: Returns true if every value is a weak map, false otherwise.
- `everyValueNotWeakmap`: Returns true if every value is not a weak map, false otherwise.
- `someValueIsWeakmap`: Returns true if at least one value is a weak map, false otherwise.
- `someValueNotWeakmap`: Returns true if at least one value is not a weak map, false otherwise.

```javascript
import { TypeOf } from "dcsm-type-helper";

const weakMap = new WeakMap();
const typeOfWeakMap = new TypeOf(weakMap);

console.log(typeOfWeakMap.isWeakmap); // true
console.log(typeOfWeakMap.notWeakmap); // false
console.log(typeOfWeakMap.everyValueIsWeakmap); // true
console.log(typeOfWeakMap.everyValueNotWeakmap); // false
```



