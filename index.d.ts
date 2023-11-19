// Project: dcsm-type-helper
declare module 'dcsm-type-helper' {

  interface TypeHelperOptions {
    /**
     * Whether to use pretty type names in the output.
     */
    //enableCapitalizedTypeNames?: boolean;

    /**
     * Whether to disable throwing errors
     */
    disableThrowErrors?: boolean;
  }

  /**
   * Returns the type of the given values as a string or an array of strings.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {(string|string[])}
   */
  export function getTypeOf(...valuesToCheck: any[]): string | string[];

  /**
   * Returns the type of the given values as a string or an array of strings with the first letter capitalized.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {(string|string[])}
   */
  export function getTypeOfPretty(...valuesToCheck: any[]): string | string[];

  /**
   * Returns a TypeOf instance.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {TypeOf}
   */
  export function typeOf(...valuesToCheck: any[]): TypeOf;

  /**
   * Returns a TypeOf instance with error throwing disabled.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {(TypeOf|undefined)}
   */
  export function typeOfSilent(...valuesToCheck: any[]): TypeOf | undefined;


  export class TypeOf {
    constructor(...valuesToCheck: any[]); // The constructor is overloaded to allow for no arguments to be passed.
    getTypeOf(options?: TypeHelperOptions & { enableCapitalizedTypeNames?: boolean }): string | string[] | undefined;
    isTypeOf(typeToCheck: string, options?: TypeHelperOptions): boolean | undefined;
    isTypeOfValues(typeToCheck: string, options?: TypeHelperOptions): boolean[] | undefined;
    notTypeOf(typeToCheck: string, options?: TypeHelperOptions): boolean | undefined;
    notTypeOfValues(typeToCheck: string, options?: TypeHelperOptions): boolean[] | undefined;
    get getOptions(): TypeHelperOptions & { enableCapitalizedTypeNames?: boolean };
    set setOptions(options: TypeHelperOptions & { enableCapitalizedTypeNames?: boolean });
    static get getTypes(): object;
  }



  /**
   * An object containing shorthand methods for checking the types of values.
   * @type {object}
   */
  const typeOfShorthand: {
    // Returns undefined if no values are passed. Returns true if all values are of type for the shorthand method. Returns false if any value is not of type for the shorthand method.
    isArguments(...valuesToCheck: any[]): boolean | undefined;
    notArguments(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsArguments(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotArguments(...valuesToCheck: any[]): boolean | undefined;
    someValueIsArguments(...valuesToCheck: any[]): boolean | undefined;
    someValueNotArguments(...valuesToCheck: any[]): boolean | undefined;
    isArray(...valuesToCheck: any[]): boolean | undefined;
    notArray(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsArray(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotArray(...valuesToCheck: any[]): boolean | undefined;
    someValueIsArray(...valuesToCheck: any[]): boolean | undefined;
    someValueNotArray(...valuesToCheck: any[]): boolean | undefined;
    isArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    notArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    someValueIsArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    someValueNotArraybuffer(...valuesToCheck: any[]): boolean | undefined;
    isArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    notArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotArrayiterator(...valuesToCheck: any[]): boolean | undefined;
    isAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    notAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueIsAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueNotAsyncfunction(...valuesToCheck: any[]): boolean | undefined;
    isAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    notAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotAsyncgenerator(...valuesToCheck: any[]): boolean | undefined;
    isAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    notAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueIsAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueNotAsyncgeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    isBigint(...valuesToCheck: any[]): boolean | undefined;
    notBigint(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBigint(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBigint(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBigint(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBigint(...valuesToCheck: any[]): boolean | undefined;
    isBigint64array(...valuesToCheck: any[]): boolean | undefined;
    notBigint64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBigint64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBigint64array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBigint64array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBigint64array(...valuesToCheck: any[]): boolean | undefined;
    isBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    notBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBiguint64array(...valuesToCheck: any[]): boolean | undefined;
    isBoolean(...valuesToCheck: any[]): boolean | undefined;
    notBoolean(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBoolean(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBoolean(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBoolean(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBoolean(...valuesToCheck: any[]): boolean | undefined;
    isDataview(...valuesToCheck: any[]): boolean | undefined;
    notDataview(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsDataview(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotDataview(...valuesToCheck: any[]): boolean | undefined;
    someValueIsDataview(...valuesToCheck: any[]): boolean | undefined;
    someValueNotDataview(...valuesToCheck: any[]): boolean | undefined;
    isDate(...valuesToCheck: any[]): boolean | undefined;
    notDate(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsDate(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotDate(...valuesToCheck: any[]): boolean | undefined;
    someValueIsDate(...valuesToCheck: any[]): boolean | undefined;
    someValueNotDate(...valuesToCheck: any[]): boolean | undefined;
    isError(...valuesToCheck: any[]): boolean | undefined;
    notError(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsError(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotError(...valuesToCheck: any[]): boolean | undefined;
    someValueIsError(...valuesToCheck: any[]): boolean | undefined;
    someValueNotError(...valuesToCheck: any[]): boolean | undefined;
    isFloat32array(...valuesToCheck: any[]): boolean | undefined;
    notFloat32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsFloat32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotFloat32array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsFloat32array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotFloat32array(...valuesToCheck: any[]): boolean | undefined;
    isFloat64array(...valuesToCheck: any[]): boolean | undefined;
    notFloat64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsFloat64array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotFloat64array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsFloat64array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotFloat64array(...valuesToCheck: any[]): boolean | undefined;
    isFunction(...valuesToCheck: any[]): boolean | undefined;
    notFunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsFunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotFunction(...valuesToCheck: any[]): boolean | undefined;
    someValueIsFunction(...valuesToCheck: any[]): boolean | undefined;
    someValueNotFunction(...valuesToCheck: any[]): boolean | undefined;
    isGenerator(...valuesToCheck: any[]): boolean | undefined;
    notGenerator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsGenerator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotGenerator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsGenerator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotGenerator(...valuesToCheck: any[]): boolean | undefined;
    isGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    notGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueIsGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    someValueNotGeneratorfunction(...valuesToCheck: any[]): boolean | undefined;
    isInfinity(...valuesToCheck: any[]): boolean | undefined;
    notInfinity(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsInfinity(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotInfinity(...valuesToCheck: any[]): boolean | undefined;
    someValueIsInfinity(...valuesToCheck: any[]): boolean | undefined;
    someValueNotInfinity(...valuesToCheck: any[]): boolean | undefined;
    isInt16array(...valuesToCheck: any[]): boolean | undefined;
    notInt16array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsInt16array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotInt16array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsInt16array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotInt16array(...valuesToCheck: any[]): boolean | undefined;
    isInt32array(...valuesToCheck: any[]): boolean | undefined;
    notInt32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsInt32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotInt32array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsInt32array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotInt32array(...valuesToCheck: any[]): boolean | undefined;
    isInt8array(...valuesToCheck: any[]): boolean | undefined;
    notInt8array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsInt8array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotInt8array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsInt8array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotInt8array(...valuesToCheck: any[]): boolean | undefined;
    isInternal(...valuesToCheck: any[]): boolean | undefined;
    notInternal(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsInternal(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotInternal(...valuesToCheck: any[]): boolean | undefined;
    someValueIsInternal(...valuesToCheck: any[]): boolean | undefined;
    someValueNotInternal(...valuesToCheck: any[]): boolean | undefined;
    isMap(...valuesToCheck: any[]): boolean | undefined;
    notMap(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsMap(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotMap(...valuesToCheck: any[]): boolean | undefined;
    someValueIsMap(...valuesToCheck: any[]): boolean | undefined;
    someValueNotMap(...valuesToCheck: any[]): boolean | undefined;
    isMapiterator(...valuesToCheck: any[]): boolean | undefined;
    notMapiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsMapiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotMapiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsMapiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotMapiterator(...valuesToCheck: any[]): boolean | undefined;
    isModule(...valuesToCheck: any[]): boolean | undefined;
    notModule(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsModule(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotModule(...valuesToCheck: any[]): boolean | undefined;
    someValueIsModule(...valuesToCheck: any[]): boolean | undefined;
    someValueNotModule(...valuesToCheck: any[]): boolean | undefined;
    isModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    notModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    someValueIsModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    someValueNotModulenamespaceobject(...valuesToCheck: any[]): boolean | undefined;
    isNan(...valuesToCheck: any[]): boolean | undefined;
    notNan(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNan(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNan(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNan(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNan(...valuesToCheck: any[]): boolean | undefined;
    isNull(...valuesToCheck: any[]): boolean | undefined;
    notNull(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNull(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNull(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNull(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNull(...valuesToCheck: any[]): boolean | undefined;
    isNumber(...valuesToCheck: any[]): boolean | undefined;
    notNumber(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNumber(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNumber(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNumber(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNumber(...valuesToCheck: any[]): boolean | undefined;
    isObject(...valuesToCheck: any[]): boolean | undefined;
    notObject(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsObject(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotObject(...valuesToCheck: any[]): boolean | undefined;
    someValueIsObject(...valuesToCheck: any[]): boolean | undefined;
    someValueNotObject(...valuesToCheck: any[]): boolean | undefined;
    isPromise(...valuesToCheck: any[]): boolean | undefined;
    notPromise(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsPromise(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotPromise(...valuesToCheck: any[]): boolean | undefined;
    someValueIsPromise(...valuesToCheck: any[]): boolean | undefined;
    someValueNotPromise(...valuesToCheck: any[]): boolean | undefined;
    isProxy(...valuesToCheck: any[]): boolean | undefined;
    notProxy(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsProxy(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotProxy(...valuesToCheck: any[]): boolean | undefined;
    someValueIsProxy(...valuesToCheck: any[]): boolean | undefined;
    someValueNotProxy(...valuesToCheck: any[]): boolean | undefined;
    isRegexp(...valuesToCheck: any[]): boolean | undefined;
    notRegexp(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsRegexp(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotRegexp(...valuesToCheck: any[]): boolean | undefined;
    someValueIsRegexp(...valuesToCheck: any[]): boolean | undefined;
    someValueNotRegexp(...valuesToCheck: any[]): boolean | undefined;
    isSet(...valuesToCheck: any[]): boolean | undefined;
    notSet(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsSet(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotSet(...valuesToCheck: any[]): boolean | undefined;
    someValueIsSet(...valuesToCheck: any[]): boolean | undefined;
    someValueNotSet(...valuesToCheck: any[]): boolean | undefined;
    isSetiterator(...valuesToCheck: any[]): boolean | undefined;
    notSetiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsSetiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotSetiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsSetiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotSetiterator(...valuesToCheck: any[]): boolean | undefined;
    isString(...valuesToCheck: any[]): boolean | undefined;
    notString(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsString(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotString(...valuesToCheck: any[]): boolean | undefined;
    someValueIsString(...valuesToCheck: any[]): boolean | undefined;
    someValueNotString(...valuesToCheck: any[]): boolean | undefined;
    isStringiterator(...valuesToCheck: any[]): boolean | undefined;
    notStringiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsStringiterator(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotStringiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueIsStringiterator(...valuesToCheck: any[]): boolean | undefined;
    someValueNotStringiterator(...valuesToCheck: any[]): boolean | undefined;
    isSymbol(...valuesToCheck: any[]): boolean | undefined;
    notSymbol(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsSymbol(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotSymbol(...valuesToCheck: any[]): boolean | undefined;
    someValueIsSymbol(...valuesToCheck: any[]): boolean | undefined;
    someValueNotSymbol(...valuesToCheck: any[]): boolean | undefined;
    isTypedarray(...valuesToCheck: any[]): boolean | undefined;
    notTypedarray(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsTypedarray(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotTypedarray(...valuesToCheck: any[]): boolean | undefined;
    someValueIsTypedarray(...valuesToCheck: any[]): boolean | undefined;
    someValueNotTypedarray(...valuesToCheck: any[]): boolean | undefined;
    isUint16array(...valuesToCheck: any[]): boolean | undefined;
    notUint16array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsUint16array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotUint16array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsUint16array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotUint16array(...valuesToCheck: any[]): boolean | undefined;
    isUint32array(...valuesToCheck: any[]): boolean | undefined;
    notUint32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsUint32array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotUint32array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsUint32array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotUint32array(...valuesToCheck: any[]): boolean | undefined;
    isUint8array(...valuesToCheck: any[]): boolean | undefined;
    notUint8array(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsUint8array(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotUint8array(...valuesToCheck: any[]): boolean | undefined;
    someValueIsUint8array(...valuesToCheck: any[]): boolean | undefined;
    someValueNotUint8array(...valuesToCheck: any[]): boolean | undefined;
    isUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    notUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    someValueIsUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    someValueNotUint8clampedarray(...valuesToCheck: any[]): boolean | undefined;
    isUndefined(...valuesToCheck: any[]): boolean | undefined;
    notUndefined(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsUndefined(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotUndefined(...valuesToCheck: any[]): boolean | undefined;
    someValueIsUndefined(...valuesToCheck: any[]): boolean | undefined;
    someValueNotUndefined(...valuesToCheck: any[]): boolean | undefined;
    isWeakmap(...valuesToCheck: any[]): boolean | undefined;
    notWeakmap(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsWeakmap(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotWeakmap(...valuesToCheck: any[]): boolean | undefined;
    someValueIsWeakmap(...valuesToCheck: any[]): boolean | undefined;
    someValueNotWeakmap(...valuesToCheck: any[]): boolean | undefined;
    isWeakset(...valuesToCheck: any[]): boolean | undefined;
    notWeakset(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsWeakset(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotWeakset(...valuesToCheck: any[]): boolean | undefined;
    someValueIsWeakset(...valuesToCheck: any[]): boolean | undefined;
    someValueNotWeakset(...valuesToCheck: any[]): boolean | undefined;
    isEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    notEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    someValueIsEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    someValueNotEmptyArray(...valuesToCheck: any[]): boolean | undefined;
    isEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    notEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    someValueIsEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    someValueNotEmptyObject(...valuesToCheck: any[]): boolean | undefined;
    isEmptyString(...valuesToCheck: any[]): boolean | undefined;
    notEmptyString(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsEmptyString(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotEmptyString(...valuesToCheck: any[]): boolean | undefined;
    someValueIsEmptyString(...valuesToCheck: any[]): boolean | undefined;
    someValueNotEmptyString(...valuesToCheck: any[]): boolean | undefined;
    isEmpty(...valuesToCheck: any[]): boolean | undefined;
    notEmpty(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsEmpty(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotEmpty(...valuesToCheck: any[]): boolean | undefined;
    someValueIsEmpty(...valuesToCheck: any[]): boolean | undefined;
    someValueNotEmpty(...valuesToCheck: any[]): boolean | undefined;
    isBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    notBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBooleanTrue(...valuesToCheck: any[]): boolean | undefined;
    isBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    notBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    someValueIsBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    someValueNotBooleanFalse(...valuesToCheck: any[]): boolean | undefined;
    isNumberZero(...valuesToCheck: any[]): boolean | undefined;
    notNumberZero(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNumberZero(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNumberZero(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNumberZero(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNumberZero(...valuesToCheck: any[]): boolean | undefined;
    isNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    notNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNumberPositive(...valuesToCheck: any[]): boolean | undefined;
    isNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    notNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNumberNegative(...valuesToCheck: any[]): boolean | undefined;
    isNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
    notNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
    everyValueIsNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
    everyValueNotNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
    someValueIsNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
    someValueNotNumberMaxSafeInteger(...valuesToCheck: any[]): boolean | undefined;
  };


  /**
   * Console logs the help for the TypeOf class.
   * @function
   * @returns {void}
   */
  function typeOfHelp(): void;


  export {
    typeOfHelp,
    typeOfShorthand
  };


  export default typeOfShorthand;

}