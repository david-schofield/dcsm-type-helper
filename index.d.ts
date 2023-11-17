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
  export function typeOfSilent(...valuesToCheck: any[] | void): TypeOf | undefined;


  export class TypeOf {
    constructor(...valuesToCheck: any[] | void); // The constructor is overloaded to allow for no arguments to be passed.
    getTypeOf(options?: TypeHelperOptions & { enableCapitalizedTypeNames?: boolean }): string | string[] | undefined;
    isTypeOf(...valuesToCheck: any[], options?: TypeHelperOptions): boolean | undefined;
    isTypeOfValues(...valuesToCheck: any[], options?: TypeHelperOptions): boolean[] | undefined;
    notTypeOf(...valuesToCheck: any[], options?: TypeHelperOptions): boolean | undefined;
    notTypeOfValues(...valuesToCheck: any[], options?: TypeHelperOptions): boolean[] | undefined;
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
    isArguments(...valuesToCheck: any[] | void): boolean | undefined;
    notArguments(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsArguments(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotArguments(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsArguments(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotArguments(...valuesToCheck: any[] | void): boolean | undefined;
    isArray(...valuesToCheck: any[] | void): boolean | undefined;
    notArray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsArray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotArray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsArray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotArray(...valuesToCheck: any[] | void): boolean | undefined;
    isArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    notArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotArraybuffer(...valuesToCheck: any[] | void): boolean | undefined;
    isArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    notArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotArrayiterator(...valuesToCheck: any[] | void): boolean | undefined;
    isAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    notAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotAsyncfunction(...valuesToCheck: any[] | void): boolean | undefined;
    isAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    notAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotAsyncgenerator(...valuesToCheck: any[] | void): boolean | undefined;
    isAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    notAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotAsyncgeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    isBigint(...valuesToCheck: any[] | void): boolean | undefined;
    notBigint(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBigint(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBigint(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBigint(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBigint(...valuesToCheck: any[] | void): boolean | undefined;
    isBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    notBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBigint64array(...valuesToCheck: any[] | void): boolean | undefined;
    isBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    notBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBiguint64array(...valuesToCheck: any[] | void): boolean | undefined;
    isBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    notBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBoolean(...valuesToCheck: any[] | void): boolean | undefined;
    isDataview(...valuesToCheck: any[] | void): boolean | undefined;
    notDataview(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsDataview(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotDataview(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsDataview(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotDataview(...valuesToCheck: any[] | void): boolean | undefined;
    isDate(...valuesToCheck: any[] | void): boolean | undefined;
    notDate(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsDate(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotDate(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsDate(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotDate(...valuesToCheck: any[] | void): boolean | undefined;
    isError(...valuesToCheck: any[] | void): boolean | undefined;
    notError(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsError(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotError(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsError(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotError(...valuesToCheck: any[] | void): boolean | undefined;
    isFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    notFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotFloat32array(...valuesToCheck: any[] | void): boolean | undefined;
    isFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    notFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotFloat64array(...valuesToCheck: any[] | void): boolean | undefined;
    isFunction(...valuesToCheck: any[] | void): boolean | undefined;
    notFunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsFunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotFunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsFunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotFunction(...valuesToCheck: any[] | void): boolean | undefined;
    isGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    notGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotGenerator(...valuesToCheck: any[] | void): boolean | undefined;
    isGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    notGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotGeneratorfunction(...valuesToCheck: any[] | void): boolean | undefined;
    isInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    notInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotInfinity(...valuesToCheck: any[] | void): boolean | undefined;
    isInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    notInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotInt16array(...valuesToCheck: any[] | void): boolean | undefined;
    isInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    notInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotInt32array(...valuesToCheck: any[] | void): boolean | undefined;
    isInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    notInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotInt8array(...valuesToCheck: any[] | void): boolean | undefined;
    isInternal(...valuesToCheck: any[] | void): boolean | undefined;
    notInternal(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsInternal(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotInternal(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsInternal(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotInternal(...valuesToCheck: any[] | void): boolean | undefined;
    isMap(...valuesToCheck: any[] | void): boolean | undefined;
    notMap(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsMap(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotMap(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsMap(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotMap(...valuesToCheck: any[] | void): boolean | undefined;
    isMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    notMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotMapiterator(...valuesToCheck: any[] | void): boolean | undefined;
    isModule(...valuesToCheck: any[] | void): boolean | undefined;
    notModule(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsModule(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotModule(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsModule(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotModule(...valuesToCheck: any[] | void): boolean | undefined;
    isModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    notModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotModulenamespaceobject(...valuesToCheck: any[] | void): boolean | undefined;
    isNan(...valuesToCheck: any[] | void): boolean | undefined;
    notNan(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNan(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNan(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNan(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNan(...valuesToCheck: any[] | void): boolean | undefined;
    isNull(...valuesToCheck: any[] | void): boolean | undefined;
    notNull(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNull(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNull(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNull(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNull(...valuesToCheck: any[] | void): boolean | undefined;
    isNumber(...valuesToCheck: any[] | void): boolean | undefined;
    notNumber(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNumber(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNumber(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNumber(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNumber(...valuesToCheck: any[] | void): boolean | undefined;
    isObject(...valuesToCheck: any[] | void): boolean | undefined;
    notObject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsObject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotObject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsObject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotObject(...valuesToCheck: any[] | void): boolean | undefined;
    isPromise(...valuesToCheck: any[] | void): boolean | undefined;
    notPromise(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsPromise(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotPromise(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsPromise(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotPromise(...valuesToCheck: any[] | void): boolean | undefined;
    isProxy(...valuesToCheck: any[] | void): boolean | undefined;
    notProxy(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsProxy(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotProxy(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsProxy(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotProxy(...valuesToCheck: any[] | void): boolean | undefined;
    isRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    notRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotRegexp(...valuesToCheck: any[] | void): boolean | undefined;
    isSet(...valuesToCheck: any[] | void): boolean | undefined;
    notSet(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsSet(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotSet(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsSet(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotSet(...valuesToCheck: any[] | void): boolean | undefined;
    isSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    notSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotSetiterator(...valuesToCheck: any[] | void): boolean | undefined;
    isString(...valuesToCheck: any[] | void): boolean | undefined;
    notString(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsString(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotString(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsString(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotString(...valuesToCheck: any[] | void): boolean | undefined;
    isStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    notStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotStringiterator(...valuesToCheck: any[] | void): boolean | undefined;
    isSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    notSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotSymbol(...valuesToCheck: any[] | void): boolean | undefined;
    isTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    notTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotTypedarray(...valuesToCheck: any[] | void): boolean | undefined;
    isUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    notUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotUint16array(...valuesToCheck: any[] | void): boolean | undefined;
    isUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    notUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotUint32array(...valuesToCheck: any[] | void): boolean | undefined;
    isUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    notUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotUint8array(...valuesToCheck: any[] | void): boolean | undefined;
    isUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    notUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotUint8clampedarray(...valuesToCheck: any[] | void): boolean | undefined;
    isUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    notUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotUndefined(...valuesToCheck: any[] | void): boolean | undefined;
    isWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    notWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotWeakmap(...valuesToCheck: any[] | void): boolean | undefined;
    isWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    notWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotWeakset(...valuesToCheck: any[] | void): boolean | undefined;
    isEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    notEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotEmptyArray(...valuesToCheck: any[] | void): boolean | undefined;
    isEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    notEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotEmptyObject(...valuesToCheck: any[] | void): boolean | undefined;
    isEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    notEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotEmptyString(...valuesToCheck: any[] | void): boolean | undefined;
    isEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    notEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotEmpty(...valuesToCheck: any[] | void): boolean | undefined;
    isBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    notBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBooleanTrue(...valuesToCheck: any[] | void): boolean | undefined;
    isBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    notBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotBooleanFalse(...valuesToCheck: any[] | void): boolean | undefined;
    isNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    notNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNumberZero(...valuesToCheck: any[] | void): boolean | undefined;
    isNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    notNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNumberPositive(...valuesToCheck: any[] | void): boolean | undefined;
    isNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    notNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNumberNegative(...valuesToCheck: any[] | void): boolean | undefined;
    isNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
    notNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueIsNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
    everyValueNotNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
    someValueIsNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
    someValueNotNumberMaxSafeInteger(...valuesToCheck: any[] | void): boolean | undefined;
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