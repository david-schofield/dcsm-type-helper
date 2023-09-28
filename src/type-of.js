/**
 * A helper class for checking the types of values.
 */
class TypeHelper {
  #valuesToCheck;
  #options = {
    enablePrettyTypeNames: false,
    disableThrowErrors: false,
  };
  #errorMessages = {
    invalidValuesToCheck: 'One or more values to check must be provided!',
    invalidTypesToCheck: 'One or more types to check must be provided!',
    invalidTypeToCheck: 'Type to check must be a lowercase string!',
    noValuesToCheck: 'No values to check were provided!',
  };
  /**
   * Creates a new instance of the TypeHelper class.
   * @param {...*} valuesToCheck - The values to check.
   */
  constructor(...valuesToCheck) {
    if (valuesToCheck.length === 0) {
      valuesToCheck = [];
    }
    this.#valuesToCheck = valuesToCheck;
  }

  get getOptions() {
    return this.#options;
  }

  /**
   * Get the type names.
   * @returns [{lowercaseTypeNames: string[], prettyTypeNames: string[], methodNames: string[]}] The type names.
   * @example
   * const typeNames = TypeHelper.typeNames;
   */
  static get types() {
    const lowercaseTypeNames = [...new Set(['string', 'object', 'number', 'boolean', 'symbol', 'undefined', 'null', 'array', 'bigint', 'date', 'regexp', 'error', 'map', 'set', 'weakmap', 'weakset', 'int8array', 'uint8array', 'int16array', 'uint16array', 'int32array', 'uint32array', 'float32array', 'float64array', 'bigint64array', 'biguint64array', 'arraybuffer', 'nan', 'infinity', 'mapiterator', 'setiterator', 'stringiterator', 'arrayiterator', 'function', 'generatorfunction', 'asyncfunction', 'asyncgeneratorfunction', 'proxy', 'arguments', 'generator', 'asyncgenerator', 'promise', 'dataview', 'typedarray', 'uint8clampedarray', 'internal', 'module', 'modulenamespaceobject'])];
    const capitalizedTypeNames = [...new Set(lowercaseTypeNames.map((typeName) => typeName.charAt(0).toUpperCase() + typeName.slice(1)))];
    let methods = ['isNumberMaxSafeInteger', 'isNumbersAreMaxSafeInteger', 'isEmptyArray', 'notEmptyArray', 'isEmptyObject', 'notEmptyObject', 'isEmptyString', 'notEmptyString', 'isBooleanTrue', 'isBooleanFalse', 'isNumberZero', 'notNumberZero', 'isNumberPositive', 'isNumberNegative'];

    lowercaseTypeNames.forEach((typeName) => {
      methods.push(`is${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`);
      methods.push(`not${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`);
    });

    methods = [...new Set(methods)].sort();

    function methodObject(typeName) {
      return {
        capitalized: typeName.charAt(0).toUpperCase() + typeName.slice(1),
        camelCase: typeName.charAt(0).toLowerCase() + typeName.slice(1),
        lowercase: typeName.toLowerCase()
      };
    }

    const methodsObject = {};

    methods.forEach((method) => {
      methodsObject[method] = methodObject(method);
    });

    const type = {};

    function typeMethodObject(typeName) {
      return {
        capitalized: typeName.charAt(0).toUpperCase() + typeName.slice(1),
        camelCase: typeName.charAt(0).toLowerCase() + typeName.slice(1),
        lowercase: typeName.toLowerCase(),
        pretty: typeName.charAt(0).toUpperCase() + typeName.slice(1),
        method: {
          is: `is${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`,
          not: `not${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`,
          Is: `Is${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`,
          Not: `Not${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`
        }
      };
    }

    lowercaseTypeNames.forEach((typeName) => {
      type[typeName] = typeMethodObject(typeName);
    });

    return {
      typeNamesLowerCase: lowercaseTypeNames,
      lowercase: lowercaseTypeNames, // For backwards compatibility.
      typeNamesCapitalized: capitalizedTypeNames,
      pretty: capitalizedTypeNames, // For backwards compatibility.
      type,
      methodsArray: methods,
      methodNames: methods, // For backwards compatibility.
      methodsObject
    };


    /*
    lowercaseTypeNames.forEach((typeName) => {
      const prettyTypeName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
      prettyTypeNames.push(prettyTypeName);
      methodNames.push(`is${prettyTypeName}`);
      methodNames.push(`not${prettyTypeName}`);
      type[typeName] = {
        pretty: prettyTypeName,
        lowercase: typeName,
        method: {
          is: `is${prettyTypeName}`,
          not: `not${prettyTypeName}`,
          Is: `Is${prettyTypeName}`,
          Not: `Not${prettyTypeName}`,
        },
      };
    });


    const types = {
      lowercase: lowercaseTypeNames,
      pretty: prettyTypeNames,
      methodNames: methodNames.sort(),
      type,
    };
    return types;
    */
  }

  /**
   * Gets the available methods.
   * @returns {string[]} The available methods.
   * @example
   * const availableMethods = TypeHelper.availableMethods;
   */
  static get availableMethods() {
    const types = TypeHelper.types;
    const methodsArray = types.methodsArray;
    return [...new Set(methodsArray)].sort();
  }

  /**
   * Gets the type of the values to check.
   * @param {Object} [options={}] - The options for getting the type.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to return pretty type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @returns {string|string[]} The type of the values to check.
   */
  getTypeof(options = {}) {
    this.#validateOptions(options);
    if (this.#valuesToCheck.length === 0) {
      this.#handleError(this.#errorMessages.noValuesToCheck, 'NoValuesToCheckError');
      return undefined;
    }

    const typeOfValues = Array.from(this.#valuesToCheck, (valueToCheck) => {
      if (options.enablePrettyTypeNames === true) {
        return this.#typeOfValue(valueToCheck);
      }
      return this.#typeOfValue(valueToCheck).toLowerCase();
    });

    if ((typeOfValues.includes('unknown') || typeOfValues.includes('Unknown')) === true) {
      this.#handleError(`Unknown type detected! Received: ${JSON.stringify(typeOfValues, null, 2)}`, 'UnknownTypeError');
      return undefined;
    }
    return typeOfValues.length === 1 ? typeOfValues[0] : typeOfValues;
  }

  /**
   * Checks if the values to check are of the specified type.
   * @param {string} typeToCheck - The type to check.
   * @param {Object} [options={}] - The options for checking the type.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to use pretty type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @returns {boolean|undefined} Whether the values to check are of the specified type.
   */
  isTypeof(typeToCheck, options = {}) {
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
    if (typeOfValues === undefined) {
      return undefined;
    }
    return Array.isArray(typeOfValues) ? typeOfValues.every((type) => type.toLowerCase() === typeToCheck) : typeOfValues.toLowerCase() === typeToCheck;
  }

  /**
   * Checks if the values to check are not of the specified type.
   * @param {string} typeToCheck - The type to check.
   * @param {Object} [options={}] - The options for checking the type.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to use pretty type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @returns {boolean|undefined} Whether the values to check are not of the specified type.
   */
  notTypeof(typeToCheck, options = {}) {
    this.#validateOptions(options);
    if (this.#valuesToCheck.length === 0) {
      this.#handleError(this.#errorMessages.noValuesToCheck, 'NoValuesToCheckError');
      return undefined;
    }
    const isTypeof = this.isTypeof(typeToCheck, options);
    if (isTypeof === undefined) {
      return undefined;
    }
    return !isTypeof;
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
        enablePrettyTypeNames: 'boolean',
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
   * Sets the options.
   * @param {Object} [options={}] - The options to set.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to use pretty type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @throws {InvalidOptionsError} - If the options provided are invalid.
   * @throws {InvalidOptionsTypeError} - If the options provided are not an object.
   * @throws {InvalidOptionError} - If one of the options provided does not exist.
   * @throws {InvalidOptionTypeError} - If one of the options provided is not of the correct type.
   * @throws {InvalidOptionValueError} - If one of the options provided is not a valid value.
   * @throws {InvalidOptionValueTypeError} - If one of the options provided is not of the correct type.
   * @example
   * const typeHelper = new TypeHelper('hello', 123, true);
   * typeHelper.setOptions({
   *  enablePrettyTypeNames: true,
   * disableThrowErrors: true
   * });
   * const isString = typeHelper.isTypeof('string');
   * // isString = 'String'
   * const isNumber = typeHelper.isTypeof('number');
   * // isNumber = 'Number'
   * const isBoolean = typeHelper.isTypeof('boolean');
   * // isBoolean = 'Boolean'
   */
  set setOptions(options = {}) {
    this.#validateOptions(options);
  }

  /**
   * Handles an error.
   * @param {string} [errorMessage='An error occurred!'] - The error message.
   * @param {string} [errorName='Error'] - The error name.
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

function typeHelper(...valuesToCheck) {
  return new TypeHelper(...valuesToCheck);
}

export {
  TypeHelper,
  TypeHelper as TypeOf,
  typeHelper,
};
export default typeHelper;