import {
  TypeHelper,
} from "./type-of.js";

/**
 * Represents a class that checks if any values are of a specified type.
 * @class
 * @extends TypeHelper
 */
class AnyOfType extends TypeHelper {

  #valuesToCheck;

  /**
   * Creates a new instance of the AnyOfType class.
   * @param {...*} valuesToCheck - The values to check.
   */
  constructor(...valuesToCheck) {
    super(...valuesToCheck);
    this.#valuesToCheck = valuesToCheck;
  }

  /**
   * Checks if any of the values in the array are of the specified type.
   * @param {string} typeToCheck - The type to check against.
   * @returns {boolean} - Returns true if any of the values in the array are of the specified type, false otherwise.
   */
  #isAnyOfType(typeToCheck) {
    return this.#valuesToCheck.some((valueToCheck) => {
      return new TypeHelper(valueToCheck).isTypeof(typeToCheck);
    });
  }

  /**
   * Checks if any of the values to check are not of the specified type.
   * @param {string} typeToCheck - The type to check against.
   * @returns {boolean} - Returns true if any of the values to check are not of the specified type, otherwise returns false.
   */
  #notAnyOfType(typeToCheck) {
    return this.#valuesToCheck.some((valueToCheck) => {
      return new TypeHelper(valueToCheck).notTypeof(typeToCheck);
    });
  }


  /**
   * Checks if the current value is a string.
   * @returns {boolean} True if the current value is a string, false otherwise.
   */
  get isString() {
    this.#isAnyOfType('string');
  }

  /**
   * Returns a boolean indicating whether the current value is not a string.
   * @returns {boolean} - true if the current value is not a string, false otherwise.
   */
  get notString() {
    return this.#notAnyOfType('string');
  }

  get isObject() {
    this.#isAnyOfType('object');
  }

  get notObject() {
    return this.#notAnyOfType('object');
  }

  get isNumber() {
    this.#isAnyOfType('number');
  }

  get notNumber() {
    return this.#notAnyOfType('number');
  }

  get isNumberMaxSafeInteger() {
    if (this.number) {
      return this.#valuesToCheck.some((value) => {
        return Number.isSafeInteger(value) && value <= Number.MAX_SAFE_INTEGER;
      });
    }
    return false;
  }

  get notNumberMaxSafeInteger() {
    return !this.numberMaxSafeInteger;
  }

  get isBoolean() {
    this.#isAnyOfType('boolean');
  }

  get notBoolean() {
    return this.#notAnyOfType('boolean');
  }

  get function() {
    this.#isAnyOfType('function');
  }

  get notFunction() {
    return this.#notAnyOfType('function');
  }

  get symbol() {
    this.#isAnyOfType('symbol');
  }

  get notSymbol() {
    return this.#notAnyOfType('symbol');
  }

  get undefined() {
    this.#isAnyOfType('undefined');
  }

  get notUndefined() {
    return this.#notAnyOfType('undefined');
  }

  get null() {
    this.#isAnyOfType('null');
  }

  get notNull() {
    return this.#notAnyOfType('null');
  }

  get array() {
    this.#isAnyOfType('array');
  }

  get notArray() {
    return this.#notAnyOfType('array');
  }

  get bigint() {
    this.#isAnyOfType('bigint');
  }

  get notBigint() {
    return this.#notAnyOfType('bigint');
  }

  get date() {
    this.#isAnyOfType('date');
  }

  get notDate() {
    return this.#notAnyOfType('date');
  }

  get regexp() {
    this.#isAnyOfType('regexp');
  }

  get notRegexp() {
    return this.#notAnyOfType('regexp');
  }

  get error() {
    this.#isAnyOfType('error');
  }

  get notError() {
    return this.#notAnyOfType('error');
  }

  get map() {
    this.#isAnyOfType('map');
  }

  get notMap() {
    return this.#notAnyOfType('map');
  }

  get set() {
    this.#isAnyOfType('set');
  }

  get notSet() {
    return this.#notAnyOfType('set');
  }

  get weakmap() {
    this.#isAnyOfType('weakmap');
  }

  get notWeakmap() {
    return this.#notAnyOfType('weakmap');
  }

  get weakset() {
    this.#isAnyOfType('weakset');
  }

  get notWeakset() {
    return this.#notAnyOfType('weakset');
  }

  get int8array() {
    this.#isAnyOfType('int8array');
  }

  get notInt8array() {
    return this.#notAnyOfType('int8array');
  }

  get uint8array() {
    this.#isAnyOfType('uint8array');
  }

  get notUint8array() {
    return this.#notAnyOfType('uint8array');
  }


  get int16array() {
    this.#isAnyOfType('int16array');
  }

  get notInt16array() {
    return this.#notAnyOfType('int16array');
  }

  get uint16array() {
    this.#isAnyOfType('uint16array');
  }

  get notUint16array() {
    return this.#notAnyOfType('uint16array');
  }

  get int32array() {
    this.#isAnyOfType('int32array');
  }

  get notInt32array() {
    return this.#notAnyOfType('int32array');
  }

  get uint32array() {
    this.#isAnyOfType('uint32array');
  }

  get notUint32array() {
    return this.#notAnyOfType('uint32array');
  }

  get isUint32array() {
    this.#isAnyOfType('uint32array');
  }

  get isFloat32array() {
    this.#isAnyOfType('float32array');
  }

  get notFloat32array() {
    return this.#notAnyOfType('float32array');
  }

  get isFloat64array() {
    this.#isAnyOfType('float64array');
  }

  get notFloat64array() {
    return this.#notAnyOfType('float64array');
  }

  get isBigint64array() {
    this.#isAnyOfType('bigint64array');
  }

  get notBigint64array() {
    return this.#notAnyOfType('bigint64array');
  }

  get isBiguint64array() {
    this.#isAnyOfType('biguint64array');
  }

  get notBiguint64array() {
    return this.#notAnyOfType('biguint64array');
  }

  get isArraybuffer() {
    this.#isAnyOfType('arraybuffer');
  }

  get notArraybuffer() {
    return this.#notAnyOfType('arraybuffer');
  }

  get isNan() {
    this.#isAnyOfType('nan');
  }

  get notNan() {
    return this.#notAnyOfType('nan');
  }

  get isInfinity() {
    this.#isAnyOfType('infinity');
  }

  get notInfinity() {
    return this.#notAnyOfType('infinity');
  }

  get isMapiterator() {
    this.#isAnyOfType('mapiterator');
  }

  get notMapiterator() {
    return this.#notAnyOfType('mapiterator');
  }

  get isSetiterator() {
    this.#isAnyOfType('setiterator');
  }

  get notSetiterator() {
    return this.#notAnyOfType('setiterator');
  }

  get isStringiterator() {
    this.#isAnyOfType('stringiterator');
  }

  get notStringiterator() {
    return this.#notAnyOfType('stringiterator');
  }

  get isArrayiterator() {
    this.#isAnyOfType('arrayiterator');
  }

  get notArrayiterator() {
    return this.#notAnyOfType('arrayiterator');
  }

  get isFunction() {
    this.#isAnyOfType('function');
  }

  get notFunction() {
    return this.#notAnyOfType('function');
  }

  get isGeneratorfunction() {
    this.#isAnyOfType('generatorfunction');
  }

  get notGeneratorfunction() {
    return this.#notAnyOfType('generatorfunction');
  }

  get isAsyncfunction() {
    this.#isAnyOfType('asyncfunction');
  }

  get notAsyncfunction() {
    return this.#notAnyOfType('asyncfunction');
  }

  get isAsyncgeneratorfunction() {
    this.#isAnyOfType('asyncgeneratorfunction');
  }

  get notAsyncgeneratorfunction() {
    return this.#notAnyOfType('asyncgeneratorfunction');
  }

  get isProxy() {
    this.#isAnyOfType('proxy');
  }

  get notProxy() {
    return this.#notAnyOfType('proxy');
  }

  get isArguments() {
    this.#isAnyOfType('arguments');
  }

  get notArguments() {
    return this.#notAnyOfType('arguments');
  }

  // TODO: Add tests for these
  get isNumbersAreMaxSafeInteger() {
    const foundNumberMaxSafeInteger = this.#valuesToCheck.some((value) => {
      const numberMaxSafeInteger = new AnyOfType(value).numberMaxSafeInteger;
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

  /**
   * Checks if any of the values to check is an empty array.
   * @returns {boolean} Returns true if any of the values to check is an empty array, otherwise false.
   */
  get isEmptyArray() {
    const foundEmptyArray = this.#valuesToCheck.some((value) => {
      return Array.isArray(value) && value.length === 0;
    });
    return foundEmptyArray;
  }

  get notEmptyArray() {
    return !this.isEmptyArray;
  }

  get isEmptyObject() {
    const foundEmptyObject = this.#valuesToCheck.some((value) => {
      return new TypeHelper(value).isTypeof('object') && Object.keys(value).length === 0;
    });
    return foundEmptyObject;
  }

  get notEmptyObject() {
    return !this.isEmptyObject;
  }


  get isEmptyString() {
    const foundEmptyString = this.#valuesToCheck.some((value) => {
      return typeof value === 'string' && value.length === 0;
    });
    return foundEmptyString;
  }

  get notEmptyString() {
    return !this.isEmptyString;
  }

  get isBooleanTrue() {
    const foundBooleanTrue = this.#valuesToCheck.some((value) => {
      return typeof value === 'boolean' && value === true;
    });
    return foundBooleanTrue;
  }

  get isBooleanFalse() {
    const foundBooleanFalse = this.#valuesToCheck.some((value) => {
      return typeof value === 'boolean' && value === false;
    });
    return foundBooleanFalse;
  }

  get isNumberZero() {
    const foundNumberZero = this.#valuesToCheck.some((value) => {
      return typeof value === 'number' && value === 0;
    });
    return foundNumberZero;
  }

  get notNumberZero() {
    return !this.isNumberZero;
  }

  get isNumberPositive() {
    const foundNumberPositive = this.#valuesToCheck.some((value) => {
      return typeof value === 'number' && value > 0;
    });
    return foundNumberPositive;
  }

  get isNumberNegative() {
    const foundNumberNegative = this.#valuesToCheck.some((value) => {
      return typeof value === 'number' && value < 0;
    });
    return foundNumberNegative;
  }
}

/**
 * Returns a new instance of AnyOfType with the given values to check.
 * @param {...*} valuesToCheck - The values to check against.
 * @returns {AnyOfType} A new instance of AnyOfType.
 */
function anyOfType(...valuesToCheck) {
  return new AnyOfType(...valuesToCheck);
}

export {
  AnyOfType,
  anyOfType,
};
export default anyOfType;
