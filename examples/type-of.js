import {
  Print
} from "dcsm-print";
console.print = function () {
  Print(...arguments);
}
import {
  TypeOf,
  typeOfHelp,
  //typeOfShorthand
} from "../index.js";
import typeOfShorthand from "../index.js";


// Example: Set option to instance
const typeOfWithOptions = new TypeOf(1, '2', 3);
typeOfWithOptions.setOptions = {
  enableCapitalizedTypeNames: true,
  disableThrowErrors: true,
  oops: true // This option is not valid. It will be ignored sine disableThrowErrors is true.
};
console.print(typeOfWithOptions.getOptions);
console.print(typeOfWithOptions.isNumber);



// Example 1
const typeOfExample1 = new TypeOf(1, '2', 3);
console.print(typeOfExample1.isNumber); // true
console.print(typeOfExample1.isString); // true
console.print(typeOfExample1.isBoolean); // false







// Example 2 
// Test error handling when disableThrowErrors is true which means no errors will be thrown and undefined will be returned.
const typeOfExample2 = new TypeOf(1, '2', 3);
try {
  typeOfExample2.setOptions = {
    disableThrowErrors: true
  };
  const badTypeName = typeOfExample2.isTypeOf(true);
  console.print(badTypeName); // undefined since disableThrowErrors is true
} catch (e) {
  // Since disableThrowErrors is true, no error will be thrown.
  console.print(e.name); // InvalidTypeToCheckError
  console.print(e.message); // Type to check must be a lowercase string!...
}

// Test error handling when disableThrowErrors is false which means errors will be thrown.
try {
  // Since disableThrowErrors is false, an error will be thrown.
  typeOfExample2.setOptions = {
    disableThrowErrors: false
  };
  const badTypeName = typeOfExample2.isTypeOf(true);
  console.print(badTypeName);
} catch (e) {
  console.print(e.name); // InvalidTypeToCheckError
  console.print(e.message); // Type to check must be a lowercase string!...
}







// Example 3
const typeOfExample3 = new TypeOf(1, '2', false, {}, [], null, undefined, new Error('test'));
typeOfExample3.setOptions = {
  enableCapitalizedTypeNames: true
};
console.print(typeOfExample3.someValueIsString); // true
console.print(typeOfExample3.getTypeOf()); // [ 'Number', 'String', 'Boolean', 'Object', 'Array', 'Null', 'Undefined', 'Error' ]








// Example 5
console.print(typeOfShorthand.isNumber(1, 2, 3)); // true
console.print(typeOfShorthand.isString(1, 2, 3)); // false
console.print(typeOfShorthand.isNumber('1', 2, '3')); // false

const availableShorthandsListForDestrcuturing = `const {\n  ${Object.keys(typeOfShorthand).join(',\n  ')}\n} = typeOfShorthand;`;
console.print('Available shorthands:');
console.log(availableShorthandsListForDestrcuturing);

const {
  isArguments,
  notArguments,
  everyValueIsArguments,
  everyValueNotArguments,
  someValueIsArguments,
  someValueNotArguments,
  isArray,
  notArray,
  everyValueIsArray,
  everyValueNotArray,
  someValueIsArray,
  someValueNotArray,
  isArraybuffer,
  notArraybuffer,
  everyValueIsArraybuffer,
  everyValueNotArraybuffer,
  someValueIsArraybuffer,
  someValueNotArraybuffer,
  isArrayiterator,
  notArrayiterator,
  everyValueIsArrayiterator,
  everyValueNotArrayiterator,
  someValueIsArrayiterator,
  someValueNotArrayiterator,
  isAsyncfunction,
  notAsyncfunction,
  everyValueIsAsyncfunction,
  everyValueNotAsyncfunction,
  someValueIsAsyncfunction,
  someValueNotAsyncfunction,
  isAsyncgenerator,
  notAsyncgenerator,
  everyValueIsAsyncgenerator,
  everyValueNotAsyncgenerator,
  someValueIsAsyncgenerator,
  someValueNotAsyncgenerator,
  isAsyncgeneratorfunction,
  notAsyncgeneratorfunction,
  everyValueIsAsyncgeneratorfunction,
  everyValueNotAsyncgeneratorfunction,
  someValueIsAsyncgeneratorfunction,
  someValueNotAsyncgeneratorfunction,
  isBigint,
  notBigint,
  everyValueIsBigint,
  everyValueNotBigint,
  someValueIsBigint,
  someValueNotBigint,
  isBigint64array,
  notBigint64array,
  everyValueIsBigint64array,
  everyValueNotBigint64array,
  someValueIsBigint64array,
  someValueNotBigint64array,
  isBiguint64array,
  notBiguint64array,
  everyValueIsBiguint64array,
  everyValueNotBiguint64array,
  someValueIsBiguint64array,
  someValueNotBiguint64array,
  isBoolean,
  notBoolean,
  everyValueIsBoolean,
  everyValueNotBoolean,
  someValueIsBoolean,
  someValueNotBoolean,
  isDataview,
  notDataview,
  everyValueIsDataview,
  everyValueNotDataview,
  someValueIsDataview,
  someValueNotDataview,
  isDate,
  notDate,
  everyValueIsDate,
  everyValueNotDate,
  someValueIsDate,
  someValueNotDate,
  isError,
  notError,
  everyValueIsError,
  everyValueNotError,
  someValueIsError,
  someValueNotError,
  isFloat32array,
  notFloat32array,
  everyValueIsFloat32array,
  everyValueNotFloat32array,
  someValueIsFloat32array,
  someValueNotFloat32array,
  isFloat64array,
  notFloat64array,
  everyValueIsFloat64array,
  everyValueNotFloat64array,
  someValueIsFloat64array,
  someValueNotFloat64array,
  isFunction,
  notFunction,
  everyValueIsFunction,
  everyValueNotFunction,
  someValueIsFunction,
  someValueNotFunction,
  isGenerator,
  notGenerator,
  everyValueIsGenerator,
  everyValueNotGenerator,
  someValueIsGenerator,
  someValueNotGenerator,
  isGeneratorfunction,
  notGeneratorfunction,
  everyValueIsGeneratorfunction,
  everyValueNotGeneratorfunction,
  someValueIsGeneratorfunction,
  someValueNotGeneratorfunction,
  isInfinity,
  notInfinity,
  everyValueIsInfinity,
  everyValueNotInfinity,
  someValueIsInfinity,
  someValueNotInfinity,
  isInt16array,
  notInt16array,
  everyValueIsInt16array,
  everyValueNotInt16array,
  someValueIsInt16array,
  someValueNotInt16array,
  isInt32array,
  notInt32array,
  everyValueIsInt32array,
  everyValueNotInt32array,
  someValueIsInt32array,
  someValueNotInt32array,
  isInt8array,
  notInt8array,
  everyValueIsInt8array,
  everyValueNotInt8array,
  someValueIsInt8array,
  someValueNotInt8array,
  isInternal,
  notInternal,
  everyValueIsInternal,
  everyValueNotInternal,
  someValueIsInternal,
  someValueNotInternal,
  isMap,
  notMap,
  everyValueIsMap,
  everyValueNotMap,
  someValueIsMap,
  someValueNotMap,
  isMapiterator,
  notMapiterator,
  everyValueIsMapiterator,
  everyValueNotMapiterator,
  someValueIsMapiterator,
  someValueNotMapiterator,
  isModule,
  notModule,
  everyValueIsModule,
  everyValueNotModule,
  someValueIsModule,
  someValueNotModule,
  isModulenamespaceobject,
  notModulenamespaceobject,
  everyValueIsModulenamespaceobject,
  everyValueNotModulenamespaceobject,
  someValueIsModulenamespaceobject,
  someValueNotModulenamespaceobject,
  isNan,
  notNan,
  everyValueIsNan,
  everyValueNotNan,
  someValueIsNan,
  someValueNotNan,
  isNull,
  notNull,
  everyValueIsNull,
  everyValueNotNull,
  someValueIsNull,
  someValueNotNull,
  isNumber,
  notNumber,
  everyValueIsNumber,
  everyValueNotNumber,
  someValueIsNumber,
  someValueNotNumber,
  isObject,
  notObject,
  everyValueIsObject,
  everyValueNotObject,
  someValueIsObject,
  someValueNotObject,
  isPromise,
  notPromise,
  everyValueIsPromise,
  everyValueNotPromise,
  someValueIsPromise,
  someValueNotPromise,
  isProxy,
  notProxy,
  everyValueIsProxy,
  everyValueNotProxy,
  someValueIsProxy,
  someValueNotProxy,
  isRegexp,
  notRegexp,
  everyValueIsRegexp,
  everyValueNotRegexp,
  someValueIsRegexp,
  someValueNotRegexp,
  isSet,
  notSet,
  everyValueIsSet,
  everyValueNotSet,
  someValueIsSet,
  someValueNotSet,
  isSetiterator,
  notSetiterator,
  everyValueIsSetiterator,
  everyValueNotSetiterator,
  someValueIsSetiterator,
  someValueNotSetiterator,
  isString,
  notString,
  everyValueIsString,
  everyValueNotString,
  someValueIsString,
  someValueNotString,
  isStringiterator,
  notStringiterator,
  everyValueIsStringiterator,
  everyValueNotStringiterator,
  someValueIsStringiterator,
  someValueNotStringiterator,
  isSymbol,
  notSymbol,
  everyValueIsSymbol,
  everyValueNotSymbol,
  someValueIsSymbol,
  someValueNotSymbol,
  isTypedarray,
  notTypedarray,
  everyValueIsTypedarray,
  everyValueNotTypedarray,
  someValueIsTypedarray,
  someValueNotTypedarray,
  isUint16array,
  notUint16array,
  everyValueIsUint16array,
  everyValueNotUint16array,
  someValueIsUint16array,
  someValueNotUint16array,
  isUint32array,
  notUint32array,
  everyValueIsUint32array,
  everyValueNotUint32array,
  someValueIsUint32array,
  someValueNotUint32array,
  isUint8array,
  notUint8array,
  everyValueIsUint8array,
  everyValueNotUint8array,
  someValueIsUint8array,
  someValueNotUint8array,
  isUint8clampedarray,
  notUint8clampedarray,
  everyValueIsUint8clampedarray,
  everyValueNotUint8clampedarray,
  someValueIsUint8clampedarray,
  someValueNotUint8clampedarray,
  isUndefined,
  notUndefined,
  everyValueIsUndefined,
  everyValueNotUndefined,
  someValueIsUndefined,
  someValueNotUndefined,
  isWeakmap,
  notWeakmap,
  everyValueIsWeakmap,
  everyValueNotWeakmap,
  someValueIsWeakmap,
  someValueNotWeakmap,
  isWeakset,
  notWeakset,
  everyValueIsWeakset,
  everyValueNotWeakset,
  someValueIsWeakset,
  someValueNotWeakset,
  isEmptyArray,
  notEmptyArray,
  everyValueIsEmptyArray,
  everyValueNotEmptyArray,
  someValueIsEmptyArray,
  someValueNotEmptyArray,
  isEmptyObject,
  notEmptyObject,
  everyValueIsEmptyObject,
  everyValueNotEmptyObject,
  someValueIsEmptyObject,
  someValueNotEmptyObject,
  isEmptyString,
  notEmptyString,
  everyValueIsEmptyString,
  everyValueNotEmptyString,
  someValueIsEmptyString,
  someValueNotEmptyString,
  isEmpty,
  notEmpty,
  everyValueIsEmpty,
  everyValueNotEmpty,
  someValueIsEmpty,
  someValueNotEmpty,
  isBooleanTrue,
  notBooleanTrue,
  everyValueIsBooleanTrue,
  everyValueNotBooleanTrue,
  someValueIsBooleanTrue,
  someValueNotBooleanTrue,
  isBooleanFalse,
  notBooleanFalse,
  everyValueIsBooleanFalse,
  everyValueNotBooleanFalse,
  someValueIsBooleanFalse,
  someValueNotBooleanFalse,
  isNumberZero,
  notNumberZero,
  everyValueIsNumberZero,
  everyValueNotNumberZero,
  someValueIsNumberZero,
  someValueNotNumberZero,
  isNumberPositive,
  notNumberPositive,
  everyValueIsNumberPositive,
  everyValueNotNumberPositive,
  someValueIsNumberPositive,
  someValueNotNumberPositive,
  isNumberNegative,
  notNumberNegative,
  everyValueIsNumberNegative,
  everyValueNotNumberNegative,
  someValueIsNumberNegative,
  someValueNotNumberNegative,
  isNumberMaxSafeInteger,
  notNumberMaxSafeInteger,
  everyValueIsNumberMaxSafeInteger,
  everyValueNotNumberMaxSafeInteger,
  someValueIsNumberMaxSafeInteger,
  someValueNotNumberMaxSafeInteger
} = typeOfShorthand;

console.print(isNumber(1, 2, 3)); // true
console.print(isString(1, 2, 3)); // false
console.print(isNumber('1', 2, '3')); // false
console.print(isNumber(1, 2, 3)); // true
console.print(isRegexp(/test/)); // true
console.print(someValueIsRegexp(/test/, 1, 2, 3)); // true
console.print(everyValueIsRegexp()); // undefined since no values were passed to check



// Example: Logs help documentation to the console.
typeOfHelp();