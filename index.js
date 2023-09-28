/**
 * @file The main entry point for the dcsm-type-helper module. 
 * @module dcsm-type-helper
 */

/**
 * The TypeHelper class.
 * @class
 */
import {
  TypeHelper,
  default as typeHelper
} from "./src/type-of.js";

/**
 * The AllOfType class.
 * @class
 */
import {
  AllOfType,
  help as allOfTypeHelp
} from "./src/all-of-type.js";


/**
 * The AnyOfType class.
 * @class
 * @extends AllOfType
 * @example
 * const anyOfType = new AnyOfType([1], [2], [3]);
 * console.log(anyOfType.notEmptyArray); // true
 * console.log(anyOfType.notEmptyObject); // false
 * console.log(anyOfType.notEmptyString); // false
 * console.log(anyOfType.notEmptyArray); // true
 * 
 */
import {
  AnyOfType,
  help as anyOfTypeHelp
} from "./src/any-of-type.js";



/**
 * TypeOf class extends TypeHelper class and provides methods to check the type of values.
 * @extends TypeHelper
 * @class
 * @property {Object} #typeOfMethods - An object containing all and any methods.
 * @method setOptions - Setter for options property.
 * @method getOptions - Getter for options property.
 * @method get - Getter for get property.
 * @method all - Getter for all property.
 * @method any - Getter for any property.
 * @static
 * @property {string} help - A string containing all the available methods and examples for the TypeOf class.
 * @example
 * const isString = new TypeOf(1, '2', 3).isString;
 * // isString = false
 *
 * // The following are equivalent:
 * const areAllValuesNumber = new TypeOf(1, 2, 3).all.isNumber;
 * const isNumber = new TypeOf(1, 2, 3).isNumber;
 * // isNumber = true
 * // areAllValuesNumber = true
 *
 * const isAnyValueString = new TypeOf(1, '2', 3).any.isString;
 * // isAnyValuesString = true
 *
 * const typeOfWithOptions = new TypeOf(1, '2', 3);
 * typeOfWithOptions.setOptions = {
 *   enablePrettyTypeNames: true,
 *   disableThrowErrors: true
 * };
 * console.log(typeOfWithOptions.getOptions);
 * // Logs the enabled options for the TypeOf instance.
 * const getPrettyTypeNames = typeOfWithOptions.get;
 * console.log(getPrettyTypeNames);
 * // [ 'Number', 'String', 'Number']
 *
 * console.log(TypeOf.help);
 * // Logs all the available methods and examples for the TypeOf class.
 */
class TypeOf extends TypeHelper {
  /**
 * TODO: 
 * TypeOf(values).isString
    TypeOf(values).notString

    TypeOf(values).someValueIsString
    TypeOf(values).someValueNotString

    TypeOf(values).everyValueIsString
    TypeOf(values).everyValueNotString
**/

  // The #typeOfMethods property is used to store the all and any methods.
  #typeOfMethods = {};
  #availableMethods = [];
  constructor(...values) {
    super(...values);
    const availableMethods = TypeHelper.availableMethods;
    const methodsObject = TypeHelper.types.methodsObject;
    const allOfTypeInstance = new AllOfType(...values);
    const anyOfTypeInstance = new AnyOfType(...values);

    const typeOfMethods = {
      all: {
        help: allOfTypeHelp
      },
      any: {
        help: anyOfTypeHelp
      }
    };

    // Add all the available methods to the TypeOf class.
    availableMethods.forEach((method) => {
      this.#availableMethods.push(method);
      this.#availableMethods.push(`everyValue${methodsObject[method].capitalized}`);
      this.#availableMethods.push(`someValue${methodsObject[method].capitalized}`);
      Object.defineProperty(this, method, {
        get: function () {
          return allOfTypeInstance[method];
        }
      });
      Object.defineProperty(this, `everyValue${methodsObject[method].capitalized}`, {
        get: function () {
          return allOfTypeInstance[method];
        }
      });
      Object.defineProperty(this, `someValue${methodsObject[method].capitalized}`, {
        get: function () {
          return anyOfTypeInstance[method];
        }
      });
      typeOfMethods.all[method] = allOfTypeInstance[method];
      typeOfMethods.any[method] = anyOfTypeInstance[method];
    });
    this.#typeOfMethods = typeOfMethods;
  }

  /**
   * Setter for options property.
   * @param {Object} [options={}] - The options to set.
   * @param {boolean} [options.enablePrettyTypeNames=false] - Whether to enable pretty type names.
   * @param {boolean} [options.disableThrowErrors=false] - Whether to disable throwing errors.
   * @example
   * const typeOfWithOptions = new TypeOf(1, '2', 3);
   * typeOfWithOptions.setOptions = {
   *  enablePrettyTypeNames: true,
   *  disableThrowErrors: true
   * };
   * console.log(typeOfWithOptions.getOptions);
   * // Logs the enabled options for the TypeOf instance.
   * const getPrettyTypeNames = typeOfWithOptions.get;
   * console.log(getPrettyTypeNames);
   * // [ 'Number', 'String', 'Number']
   */
  set setOptions(options) {
    super.setOptions = options;
  }

  get getOptions() {
    return super.getOptions;
  }

  get all() {
    return this.#typeOfMethods.all;
  }

  get any() {
    return this.#typeOfMethods.any;
  }

  /**
   * Getter for get property.
   * @returns {Array[string]|string} The array of types or the string of types.
   */
  get get() {
    return this.getTypeof(this.getOptions)
  }


  static get help() {
    const availableMethods = [];
    const methodsObject = TypeHelper.types.methodsObject;
    TypeHelper.availableMethods.forEach((method) => {
      availableMethods.push(method);
      availableMethods.push(`everyValue${methodsObject[method].capitalized}`);
      availableMethods.push(`someValue${methodsObject[method].capitalized}`);
    });
    const help = `

Avaliable methods for TypeOf class:

@method [\n${availableMethods.join(',\n')}] \n- Returns true if all values are of the specified type.

@method setOptions

@method getOptions

@method get

@method all [${availableMethods[0]}, ${availableMethods[1]}, ...] - Returns true if all values are of the specified type.

@method any [${availableMethods[0]}, ${availableMethods[1]}, ...] - Returns true if any value is of the specified type.


---------------------------------------

@example
  const isString = new TypeOf(1, '2', 3).isString;
  // isString = false

@example
  // The following are equivalent:
  const areAllValuesNumber = new TypeOf(1, 2, 3).all.isNumber;
  const isNumber = new TypeOf(1, 2, 3).isNumber;
  // isNumber = true
  // areAllValuesNumber = true

@example
  const isAnyValueString = new TypeOf(1, '2', 3).any.isString;
  // isAnyValuesString = true

@example
  const typeOfWithOptions = new TypeOf(1, '2', 3);
  typeOfWithOptions.setOptions = {
    enablePrettyTypeNames: true,
    disableThrowErrors: true
  };
  console.log(typeOfWithOptions.getOptions);
  // Logs the enabled options for the TypeOf instance.
  const getPrettyTypeNames = typeOfWithOptions.get;
  console.log(getPrettyTypeNames);
  // [ 'Number', 'String', 'Number']

@example 
  console.log(TypeOf.help);
  // Logs all the available methods and examples for the TypeOf class.
  `;
    return help;
  }
}

/**
 * Returns a new instance of TypeOf class with the given values.
 * @param {...*} values - The values to be checked.
 * @returns {TypeOf} A new instance of TypeOf class.
 */
function typeOf(...values) {
  return new TypeOf(...values);
}


export {
  TypeHelper, // The TypeHelper class.
  typeHelper, // The default wrapper function for the TypeHelper class.
  TypeOf, // The TypeHelper class.
  typeOf // The wrapper function for the TypeHelper class.
};


export default typeOf; // The wrapper function for the TypeOf class.