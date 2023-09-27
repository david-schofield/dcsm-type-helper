import {
  TypeHelper,
} from "./type-of.js";

/**
 * Represents a class that checks if all values are of a specified type.
 * @class
 * @extends TypeHelper
 */
class AllOfType extends TypeHelper {
  /**
   * Creates a new instance of the AllOfType class.
   * @param {...*} valuesToCheck - The values to check.
   */

  #valuesToCheck;


  constructor(...valuesToCheck) {
    super(...valuesToCheck);
    this.#valuesToCheck = valuesToCheck;
  }

  /**
   * Setter for options object.
   * @param {(arg0: object) => void} options - The options object to set.
   * @example
   * const allOfType = new AllOfType('hello', 123, true);
   * allOfType.setOptions = {
   * disableThrowErrors: true
   * };
   * const isString = allOfType.string;
   * // isString = false
   * const isObject = allOfType.object;
   * // isObject = false
   **/






  /**
   * Checks if the values to check are of the specified type.
   * @param {string} typeToCheck - The type to check.
   * @param {Object} [options={}] - The options for checking the type.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to use pretty type names is not supported for this method.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @returns {boolean|undefined} Whether the values to check are of the specified type.
   * @example
   * const allOfType = new AllOfType('hello', 123, true);
   * const isString = allOfType.string;
   * // isString = false
   * const isObject = allOfType.object;
   * // isObject = false
   * const isNumber = allOfType.number;
   * // isNumber = false
   **/


  #isAllOfType(typeToCheck) {
    return this.#valuesToCheck.every((valueToCheck) => {
      return new AllOfType(valueToCheck).isTypeof(typeToCheck);
    });
  }

  #notAllOfType(typeToCheck) {
    return this.#valuesToCheck.every((valueToCheck) => {
      return new AllOfType(valueToCheck).notTypeof(typeToCheck);
    });
  }

  get isString() {
    return this.#isAllOfType('string');
  }

  get notString() {
    return this.#notAllOfType('string');
  }

  get isObject() {
    return this.#isAllOfType('object');
  }

  get notObject() {
    return this.#notAllOfType('object');
  }

  get isNumber() {
    return this.#isAllOfType('number');
  }

  get notNumber() {
    return this.#notAllOfType('number');
  }

  get isNumberMaxSafeInteger() {
    if (this.number) {
      return this.#valuesToCheck.every((value) => {
        return Number.isSafeInteger(value) && value <= Number.MAX_SAFE_INTEGER;
      });
    }
    return false;
  }

  get notNumberMaxSafeInteger() {
    return !this.numberMaxSafeInteger;
  }

  get isBoolean() {
    return this.#isAllOfType('boolean');
  }

  get notBoolean() {
    return this.#notAllOfType('boolean');
  }

  get function() {
    return this.#isAllOfType('function');
  }

  get notFunction() {
    return this.#notAllOfType('function');
  }

  get symbol() {
    return this.#isAllOfType('symbol');
  }

  get notSymbol() {
    return this.#notAllOfType('symbol');
  }

  get undefined() {
    return this.#isAllOfType('undefined');
  }

  get notUndefined() {
    return this.#notAllOfType('undefined');
  }

  get null() {
    return this.#isAllOfType('null');
  }

  get notNull() {
    return this.#notAllOfType('null');
  }

  get array() {
    return this.#isAllOfType('array');
  }

  get notArray() {
    return this.#notAllOfType('array');
  }

  get bigint() {
    return this.#isAllOfType('bigint');
  }

  get notBigint() {
    return this.#notAllOfType('bigint');
  }

  get date() {
    return this.#isAllOfType('date');
  }

  get notDate() {
    return this.#notAllOfType('date');
  }

  get regexp() {
    return this.#isAllOfType('regexp');
  }

  get notRegexp() {
    return this.#notAllOfType('regexp');
  }

  get error() {
    return this.#isAllOfType('error');
  }

  get notError() {
    return this.#notAllOfType('error');
  }

  get map() {
    return this.#isAllOfType('map');
  }

  get notMap() {
    return this.#notAllOfType('map');
  }

  get set() {
    return this.#isAllOfType('set');
  }

  get notSet() {
    return this.#notAllOfType('set');
  }

  get weakmap() {
    return this.#isAllOfType('weakmap');
  }

  get notWeakmap() {
    return this.#notAllOfType('weakmap');
  }

  get weakset() {
    return this.#isAllOfType('weakset');
  }

  get notWeakset() {
    return this.#notAllOfType('weakset');
  }

  get int8array() {
    return this.#isAllOfType('int8array');
  }

  get notInt8array() {
    return this.#notAllOfType('int8array');
  }

  get uint8array() {
    return this.#isAllOfType('uint8array');
  }

  get notUint8array() {
    return this.#notAllOfType('uint8array');
  }


  get int16array() {
    return this.#isAllOfType('int16array');
  }

  get notInt16array() {
    return this.#notAllOfType('int16array');
  }

  get uint16array() {
    return this.#isAllOfType('uint16array');
  }

  get notUint16array() {
    return this.#notAllOfType('uint16array');
  }

  get int32array() {
    return this.#isAllOfType('int32array');
  }

  get notInt32array() {
    return this.#notAllOfType('int32array');
  }

  get uint32array() {
    return this.#isAllOfType('uint32array');
  }

  get notUint32array() {
    return this.#notAllOfType('uint32array');
  }

  get isUint32array() {
    return this.#isAllOfType('uint32array');
  }

  get isFloat32array() {
    return this.#isAllOfType('float32array');
  }

  get notFloat32array() {
    return this.#notAllOfType('float32array');
  }

  get isFloat64array() {
    return this.#isAllOfType('float64array');
  }

  get notFloat64array() {
    return this.#notAllOfType('float64array');
  }

  get isBigint64array() {
    return this.#isAllOfType('bigint64array');
  }

  get notBigint64array() {
    return this.#notAllOfType('bigint64array');
  }

  get isBiguint64array() {
    return this.#isAllOfType('biguint64array');
  }

  get notBiguint64array() {
    return this.#notAllOfType('biguint64array');
  }

  get isArraybuffer() {
    return this.#isAllOfType('arraybuffer');
  }

  get notArraybuffer() {
    return this.#notAllOfType('arraybuffer');
  }

  get isNan() {
    return this.#isAllOfType('nan');
  }

  get notNan() {
    return this.#notAllOfType('nan');
  }

  get isInfinity() {
    return this.#isAllOfType('infinity');
  }

  get notInfinity() {
    return this.#notAllOfType('infinity');
  }

  get isMapiterator() {
    return this.#isAllOfType('mapiterator');
  }

  get notMapiterator() {
    return this.#notAllOfType('mapiterator');
  }

  get isSetiterator() {
    return this.#isAllOfType('setiterator');
  }

  get notSetiterator() {
    return this.#notAllOfType('setiterator');
  }

  get isStringiterator() {
    return this.#isAllOfType('stringiterator');
  }

  get notStringiterator() {
    return this.#notAllOfType('stringiterator');
  }

  get isArrayiterator() {
    return this.#isAllOfType('arrayiterator');
  }

  get notArrayiterator() {
    return this.#notAllOfType('arrayiterator');
  }

  get isFunction() {
    return this.#isAllOfType('function');
  }

  get notFunction() {
    return this.#notAllOfType('function');
  }

  get isGeneratorfunction() {
    return this.#isAllOfType('generatorfunction');
  }

  get notGeneratorfunction() {
    return this.#notAllOfType('generatorfunction');
  }

  get isAsyncfunction() {
    return this.#isAllOfType('asyncfunction');
  }

  get notAsyncfunction() {
    return this.#notAllOfType('asyncfunction');
  }

  get isAsyncgeneratorfunction() {
    return this.#isAllOfType('asyncgeneratorfunction');
  }

  get notAsyncgeneratorfunction() {
    return this.#notAllOfType('asyncgeneratorfunction');
  }

  get isProxy() {
    return this.#isAllOfType('proxy');
  }

  get notProxy() {
    return this.#notAllOfType('proxy');
  }

  get isArguments() {
    return this.#isAllOfType('arguments');
  }

  get notArguments() {
    return this.#notAllOfType('arguments');
  }

  // TODO: Add tests for these
  get isNumbersAreMaxSafeInteger() {
    const foundNumberMaxSafeInteger = this.#valuesToCheck.every((value) => {
      const numberMaxSafeInteger = new AllOfType(value).numberMaxSafeInteger;
      const isValueNumber = new TypeHelper(value).isTypeof('number');
      if (isValueNumber) {
        return numberMaxSafeInteger;
      } else {
        return true;
      }
    });
    return foundNumberMaxSafeInteger;
  }

  // TODO: Add tests for these
  get numbersAreNotMaxSafeInteger() {
    return !this.numbersAreMaxSafeInteger;
  }

  get isEmptyArray() {
    const foundEmptyArray = this.#valuesToCheck.every((value) => {
      return Array.isArray(value) && value.length === 0;
    });
    return foundEmptyArray;
  }

  get notEmptyArray() {
    /*
    const foundEmptyArray = this.#valuesToCheck.every((value) => {
      return Array.isArray(value) && value.length > 0;
    });
    return foundEmptyArray;
    */
    return !this.isEmptyArray;
  }

  get isEmptyObject() {
    const foundEmptyObject = this.#valuesToCheck.every((value) => {
      return new AllOfType(value).isObject && Object.keys(value).length === 0;
    });
    return foundEmptyObject;
  }

  get notEmptyObject() {
    return !this.isEmptyObject;
  }


  get isEmptyString() {
    const foundEmptyString = this.#valuesToCheck.every((value) => {
      return typeof value === 'string' && value.length === 0;
    });
    return foundEmptyString;
  }

  get notEmptyString() {
    return !this.isEmptyString;
  }

  get isBooleanTrue() {
    const foundBooleanTrue = this.#valuesToCheck.every((value) => {
      return typeof value === 'boolean' && value === true;
    });
    return foundBooleanTrue;
  }

  get isBooleanFalse() {
    const foundBooleanFalse = this.#valuesToCheck.every((value) => {
      return typeof value === 'boolean' && value === false;
    });
    return foundBooleanFalse;
  }

  get isNumberZero() {
    const foundNumberZero = this.#valuesToCheck.every((value) => {
      return typeof value === 'number' && value === 0;
    });
    return foundNumberZero;
  }

  get notNumberZero() {
    return !this.isNumberZero;
  }

  get isNumberPositive() {
    const foundNumberPositive = this.#valuesToCheck.every((value) => {
      return typeof value === 'number' && value > 0;
    });
    return foundNumberPositive;
  }

  get isNumberNegative() {
    const foundNumberNegative = this.#valuesToCheck.every((value) => {
      return typeof value === 'number' && value < 0;
    });
    return foundNumberNegative;
  }
}

/**
 * Returns an instance of AllOfType class with the values to check.
 *
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {AllOfType} An instance of AllOfType class.
 * @example
 * const allOfType = allOfType(1, '2', 3);
 * const isString = allOfType.isString;
 * // isString = false
 * const isObject = allOfType.isObject;
 * // isObject = false
 */
function allOfType(...valuesToCheck) {
  return new AllOfType(...valuesToCheck);
}

export {
  AllOfType,
  allOfType,
};
export default allOfType;