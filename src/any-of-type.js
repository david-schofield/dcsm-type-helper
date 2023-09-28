import {
  TypeHelper,
} from "./type-of.js";

/**
 * Represents a class that checks if all values are of a specified type.
 * @class
 * @extends TypeHelper
 */
class AnyOfType extends TypeHelper {
  /**
   * Creates a new instance of the AnyOfType class.
   * @param {...*} valuesToCheck - The values to check.
   */

  #valuesToCheck;

  constructor(...valuesToCheck) {
    super(...valuesToCheck);
    this.#valuesToCheck = valuesToCheck;

    const isTypeof = (typeToCheck) => super.isTypeof(typeToCheck);
    const notTypeof = (typeToCheck) => super.notTypeof(typeToCheck);

    const types = TypeHelper.types;

    // Define the is and not properties for each type.
    types.lowercase.forEach((typeName) => {
      const type = types.type[typeName];

      Object.defineProperty(this, type.method.is, {
        get: function () {
          const typesOfValues = this.#valuesToCheck.map((value) => {
            return new TypeHelper(value).isTypeof(type.lowercase);
          });
          return typesOfValues.includes(true);
        },
      });

      Object.defineProperty(this, type.method.not, {
        get: function () {
          const typesOfValues = this.#valuesToCheck.map((value) => {
            return new TypeHelper(value).notTypeof(type.lowercase);
          });
          return typesOfValues.includes(true);
        },
      });
    });
  }

  static get availableMethods() {
    return TypeHelper.availableMethods;
  }

  // TODO: Add tests for this method.
  get isNumberMaxSafeInteger() {
    if (this.isNumber) {
      return this.#valuesToCheck.some((value) => {
        return Number.isSafeInteger(value) && value <= Number.MAX_SAFE_INTEGER;
      });
    }
    return false;
  }

  get isNumbersAreMaxSafeInteger() {
    const foundNumberMaxSafeInteger = this.#valuesToCheck.some((value) => {
      const numberMaxSafeInteger = new AnyOfType(value).isNumberMaxSafeInteger;
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
      return new AnyOfType(value).isObject && Object.keys(value).length === 0;
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
 * Returns an instance of AnyOfType class with the values to check.
 *
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {AnyOfType} An instance of AnyOfType class.
 * @example
 * const anyOfType = anyOfType(1, '2', 3);
 * const isString = anyOfType.isString;
 * // isString = false
 * const isObject = anyOfType.isObject;
 * // isObject = false
 */
function anyOfType(...valuesToCheck) {
  return new AnyOfType(...valuesToCheck);
}

const availableMethods = AnyOfType.availableMethods;

const getHelp = () => {
  const help = `
Available methods:
${availableMethods.join('\n')}

---------------------------------------

@example
  const isString = anyOfType(1, '2', 3).isString;
  // isString = true

@example
  const isNumber = anyOfType(1, '2', 3).isNumber;
  // isNumber = true

@example
  const isBoolean = anyOfType(1, 2, 3).isBoolean;
  // isBoolean = false`;
  return help;
  
}

const anyOfTypeHelp = getHelp();

export {
  AnyOfType,
  anyOfType,
  availableMethods,
  anyOfTypeHelp as help
};
export default anyOfType;