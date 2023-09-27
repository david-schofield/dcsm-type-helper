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
  #typeNames = ['string', 'object', 'number', 'boolean', 'symbol', 'undefined', 'null', 'array', 'bigint', 'date', 'regexp', 'error', 'map', 'set', 'weakmap', 'weakset', 'int8array', 'uint8array', 'int16array', 'uint16array', 'int32array', 'uint32array', 'float32array', 'float64array', 'bigint64array', 'biguint64array', 'arraybuffer', 'nan', 'infinity', 'mapiterator', 'setiterator', 'stringiterator', 'arrayiterator', 'function', 'generatorfunction', 'asyncfunction', 'asyncgeneratorfunction', 'proxy', 'arguments'];
  #countDuplicateTypeNames = this.#countDuplicates(this.#typeNames);

  constructor(...valuesToCheck) {
    super(...valuesToCheck);
    this.#valuesToCheck = valuesToCheck;

    const isTypeof = (typeToCheck) => super.isTypeof(typeToCheck);
    const notTypeof = (typeToCheck) => super.notTypeof(typeToCheck);
    
    this.#typeNames.forEach((typeName) => {
      const prettyTypeName = typeName.charAt(0).toUpperCase() + typeName.slice(1);

      Object.defineProperty(this, `is${prettyTypeName}`, {
        get: function () {
          return this.#valuesToCheck.every(() => notTypeof(typeName));
        },
      });

      Object.defineProperty(this, `not${prettyTypeName}`, {
        get: function () {
          return this.#valuesToCheck.every(() => isTypeof(typeName));
        },
      });
    });
  }

  #countDuplicates(array) {
    const counts = {};
    array.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
    return counts;
  }

  get isNumberMaxSafeInteger() {
    if (this.number) {
      return this.#valuesToCheck.every((value) => {
        return Number.isSafeInteger(value) && value <= Number.MAX_SAFE_INTEGER;
      });
    }
    return false;
  }

  get isNumbersAreMaxSafeInteger() {
    const foundNumberMaxSafeInteger = this.#valuesToCheck.every((value) => {
      const numberMaxSafeInteger = new AllOfType(value).isNumberMaxSafeInteger;
      const isValueNumber = new TypeHelper(value).isTypeof('number');
      if (isValueNumber) {
        return numberMaxSafeInteger;
      } else {
        return true;
      }
    });
    return foundNumberMaxSafeInteger;
  }

  get numbersAreNotMaxSafeInteger() {
    return !this.isNumbersAreMaxSafeInteger;
  }

  get isEmptyArray() {
    const foundEmptyArray = this.#valuesToCheck.every((value) => {
      return Array.isArray(value) && value.length === 0;
    });
    return foundEmptyArray;
  }

  get notEmptyArray() {
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