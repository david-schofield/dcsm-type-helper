/**
 * A class that provides helper methods for checking the type of values.
 * @class
 * The `TypeOfHelper` class contains the following private variables:
 * - `#valuesToCheck`: An array of values to check the type of.
 * - `#options`: An object containing options to configure the behavior of the class.
 * - `#errorMessages`: An object containing error messages used by the class.
 * These variables are not accessible from outside the class.
 */

class TypeOfHelper {
  #valuesToCheck; // The values to check the type of. This is a private variable.
  /**
   * Object containing options to configure the behavior of the class.
   * @private
   * @type {Object}
   * @property {boolean} enableCapitalizedTypeNames - Whether to use capitalized type names.
   * @property {boolean} disableThrowErrors - Whether to disable throwing errors.
   */
  #options = {
    enableCapitalizedTypeNames: false,
    disableThrowErrors: false,
  };
  /**
   * Object containing error messages used in the typeOf function.
   * @private
   * @type {Object}
   * @property {string} invalidValuesToCheck - Error message when no values to check are provided.
   * @property {string} invalidTypesToCheck - Error message when no types to check are provided.
   * @property {string} invalidTypeToCheck - Error message when the type to check is not a lowercase string.
   * @property {string} noValuesToCheck - Error message when no values to check are provided.
   */
  #errorMessages = {
    invalidValuesToCheck: 'One or more values to check must be provided!',
    invalidTypesToCheck: 'One or more types to check must be provided!',
    invalidTypeToCheck: 'Type to check must be a lowercase string!',
    noValuesToCheck: 'No values to check were provided!',
  };

  /**
   * Creates a new instance of TypeOfHelper with the given values to check.
   * @constructor
   * @param {...*} valuesToCheck - The values to check the type of.
   */
  constructor(...valuesToCheck) {
    if (arguments.length === 0) {
      valuesToCheck = [];
    }
    this.#valuesToCheck = valuesToCheck;
  }

  /**
   * Returns the options of the TypeOfHelper instance.
   * @returns {Object} The options object.
   */
  get getOptions() {
    return this.#options;
  }

  /**
   * Sets the options.
   * @param {Object} [options={}] - The options to set.
   * @param {boolean} [options.enableCapitalizedTypeNames=false] - Whether to use capitalized type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @throws {InvalidOptionsError} - If the options provided are invalid.
   * @throws {InvalidOptionsTypeError} - If the options provided are not an object.
   * @throws {InvalidOptionError} - If one of the options provided does not exist.
   * @throws {InvalidOptionTypeError} - If one of the options provided is not of the correct type.
   * @throws {InvalidOptionValueError} - If one of the options provided is not a valid value.
   * @throws {InvalidOptionValueTypeError} - If one of the options provided is not of the correct type.
   */
  set setOptions(options = {}) {
    this.#validateOptions(options);
  }

  /**
   * A static getter that returns an object containing information about JavaScript data types.
   * @returns {{types: Object.<string, {lowercase: string, capitalized: string}>, lowercase: string[], capitalized: string[]}} An object containing information about JavaScript data types.
   */
  static get getTypes() {
    const lowercaseTypeNames = [...new Set(['string', 'object', 'number', 'boolean', 'symbol', 'undefined', 'null', 'array', 'bigint', 'date', 'regexp', 'error', 'map', 'set', 'weakmap', 'weakset', 'int8array', 'uint8array', 'int16array', 'uint16array', 'int32array', 'uint32array', 'float32array', 'float64array', 'bigint64array', 'biguint64array', 'arraybuffer', 'nan', 'infinity', 'mapiterator', 'setiterator', 'stringiterator', 'arrayiterator', 'function', 'generatorfunction', 'asyncfunction', 'asyncgeneratorfunction', 'proxy', 'arguments', 'generator', 'asyncgenerator', 'promise', 'dataview', 'typedarray', 'uint8clampedarray', 'internal', 'module', 'modulenamespaceobject'])].sort();
    const capitalizedTypeNames = lowercaseTypeNames.map((typeName) => typeName.charAt(0).toUpperCase() + typeName.slice(1));

    const types = {};
    lowercaseTypeNames.forEach((lowercaseTypeName, index) => {
      types[lowercaseTypeName] = {
        lowercase: lowercaseTypeName,
        capitalized: capitalizedTypeNames[index]
      };
    });

    return {
      types,
      lowercase: lowercaseTypeNames,
      capitalized: capitalizedTypeNames
    };
  }




  /**
   * Returns the type of the values to check.
   * @param {Object} options - The options object.
   * @param {boolean} options.enableCapitalizedTypeNames - Whether to return capitalized type names.
   * @returns {(string|string[]|undefined)} - The type of the values to check, or undefined if an error occurred.
   * @throws {NoValuesToCheckError} - If there are no values to check.
   * @throws {UnknownTypeError} - If an unknown type is detected.
   */
  getTypeof(options = {}) {
    this.#validateOptions(options);
    if (this.#valuesToCheck.length === 0) {
      this.#handleError(this.#errorMessages.noValuesToCheck, 'NoValuesToCheckError');
      return undefined;
    }

    const typeOfValues = [];
    this.#valuesToCheck.forEach((valueToCheck) => {
      if (this.#options.enableCapitalizedTypeNames === true) {
        typeOfValues.push(this.#typeOfValue(valueToCheck));
      } else {
        typeOfValues.push(this.#typeOfValue(valueToCheck).toLowerCase());
      }
    });

    if ((typeOfValues.includes('unknown') || typeOfValues.includes('Unknown')) === true) {
      this.#handleError(`Unknown type detected! Received: ${JSON.stringify(typeOfValues, null, 2)}`, 'UnknownTypeError');
      return undefined;
    }
    return typeOfValues.length === 1 ? typeOfValues[0] : typeOfValues;
  }


  /**
   * Checks if the given typeToCheck matches the type of values in the valuesToCheck array.
   * @param {string} typeToCheck - The type to check against the values in the valuesToCheck array.
   * @param {Object} [options={}] - An optional object containing options to configure the behavior of the function.
   * @returns {(boolean[]|undefined)} - An array of booleans indicating whether each value in the valuesToCheck array matches the given typeToCheck, or undefined if an error occurred.
   */
  isTypeofValues(typeToCheck, options = {}) {
    this.#validateOptions(options);
    if (this.#valuesToCheck.length === 0) {
      this.#handleError(this.#errorMessages.noValuesToCheck, 'NoValuesToCheckError');
      return undefined;
    }
    if (/^[a-zA-Z0-9]+$/.test(`${typeToCheck}`) === false || typeof typeToCheck !== 'string') {
      this.#handleError(`${this.#errorMessages.invalidTypeToCheck} Received: ${typeToCheck}`, 'InvalidTypeToCheckError');
      return undefined;
    }

    typeToCheck = typeToCheck.toLowerCase();

    const typeOfValues = this.getTypeof(options);
    const isValuesResult = [];
    if (typeOfValues === undefined) {
      return undefined;
    }
    //return Array.isArray(typeOfValues) ? typeOfValues.every((type) => type.toLowerCase() === typeToCheck) : typeOfValues.toLowerCase() === typeToCheck;
    if (typeof typeOfValues === 'string') {
      // A concice way of doing this it just to return [typeOfValues.toLowerCase() === typeToCheck].
      isValuesResult.push(typeOfValues.toLowerCase() === typeToCheck);
      return isValuesResult
    }

    typeOfValues.forEach((typeOfValue) => {
      isValuesResult.push(typeOfValue.toLowerCase() === typeToCheck);
    });

    return isValuesResult;
  }

  /**
   * Checks if the given value matches the specified type.
   *
   * @param {string} typeToCheck - The type to check against.
   * @param {Object} [options={}] - Optional parameters.
   * @param {boolean} [options.allowUndefined=false] - Whether to allow undefined values.
   * @param {boolean} [options.allowNull=false] - Whether to allow null values.
   * @returns {boolean|undefined} - Returns true if the value matches the type, false otherwise. If the value is undefined, returns undefined.
   */
  isTypeof(typeToCheck, options = {}) {
    const isTypeofValues = this.isTypeofValues(typeToCheck, options);
    if (isTypeofValues === undefined) {
      return undefined;
    }
    return isTypeofValues.every((isType) => isType === true);
  }



  /**
   * Returns an array of booleans indicating whether the values in the instance are not of the specified type.
   * @param {string} typeToCheck - The type to check against.
   * @param {Object} [options={}] - Optional configuration options.
   * @returns {Array<boolean>|undefined} - An array of booleans indicating whether the values in the instance are not of the specified type, or undefined if there are no values to check or the type to check is invalid.
   */
  notTypeofValues(typeToCheck, options = {}) {
    this.#validateOptions(options);
    if (this.#valuesToCheck.length === 0) {
      this.#handleError(this.#errorMessages.noValuesToCheck, 'NoValuesToCheckError');
      return undefined;
    }
    const isTypeofValues = this.isTypeofValues(typeToCheck, options);
    if (isTypeofValues === undefined) {
      return undefined;
    }
    // map over the array of booleans and return the opposite.
    return isTypeofValues.map((isType) => !isType);
  }


  /**
   * Checks if the type of a value is not equal to the specified type.
   * @param {string} typeToCheck - The type to check against.
   * @param {Object} [options={}] - Optional parameters.
   * @returns {boolean|undefined} - Returns true if the type of the value is not equal to the specified type, false otherwise. Returns undefined if the value is undefined or null.
   */
  notTypeof(typeToCheck, options = {}) {
    const notTypeofValues = this.notTypeofValues(typeToCheck, options);
    if (notTypeofValues === undefined) {
      return undefined;
    }
    return notTypeofValues.every((notType) => notType === true);
  }



  /**
   * Validates the options object.
   * @param {Object} [options={}] - The options to validate.
   */
  #validateOptions(options = {}) {
    const typeOfOptions = this.#typeOfValue(options).toLowerCase();
    const invalidOptions = {};
    if (typeOfOptions === 'object') {
      const validOptions = {
        enableCapitalizedTypeNames: 'boolean',
        disableThrowErrors: 'boolean',
      };
      for (const [option, value] of Object.entries(options)) {
        if (validOptions[option] === undefined) {
          invalidOptions[option] = `Is not a valid option! Received option: ${option}`;
        } else if (typeof value !== validOptions[option]) {
          invalidOptions[option] = `Must be a ${validOptions[option]}! Received type: ${this.#typeOfValue(value).toLowerCase()}`;
        } else {
          this.#options[option] = value;
        }
      }
      if (Object.keys(invalidOptions).length !== 0) {
        const invalidOptionsString = Object.entries(invalidOptions).map(([option, message]) => `${option}: ${message}`).join('\n  ');
        const validOptionsString = Object.entries(validOptions).map(([option, type]) => `${option}: {${type}}`).join('\n  ');
        this.#handleError(`Invalid options provided!\n  ${invalidOptionsString}\nValid options are:\n  ${validOptionsString}`, 'InvalidOptionsError');
      }
    } else {
      this.#handleError(`Options must be an object! Received type: ${typeOfOptions}`, 'InvalidOptionsTypeError');
    }
  }


  /**
   * Handles an error.
   * @param {string} [errorMessage='An error occurred!'] - The error message.
   * @param {string} [errorName='Error'] - The error name.
   * @throws {Error} - Throws an error if disableThrowErrors is false.
   * @private
   * @returns {undefined}
   */
  #handleError(errorMessage = 'An error occurred!', errorName = 'Error') {
    if (this.#options.disableThrowErrors === false) {
      const e = new Error(errorMessage);
      e.name = errorName;
      throw e;
    }
  }

  /**
   * Gets the type of a value.
   * @param {*} valueToCheck - The value to check.
   * @returns {string} The type of the value.
   */
  #typeOfValue(valueToCheck) {
    if (Number.isNaN(valueToCheck) === true) {
      return 'NaN';
    }
    const {
      groups: {
        type: identifiedType,
      },
    } = Object.prototype.toString.call(valueToCheck).match(/^\[object (?<type>[A-Z][a-zA-Z0-9]+)\]$/) ?? {
      groups: {
        type: 'Unknown',
      },
    };
    return identifiedType;
  }
}


export {
  TypeOfHelper
};