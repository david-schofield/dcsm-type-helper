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
  default as allOfType
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
  default as anyOfType
} from "./src/any-of-type.js";

export {
  TypeHelper, // The TypeHelper class.
  AllOfType, // The AllOfType class.
  AnyOfType, // The AnyOfType class.
  typeHelper, // The default wrapper function for the TypeHelper class.
  allOfType, // The default wrapper function for the AllOfType class.
  anyOfType, // The default wrapper function for the AnyOfType class.
};
/**
 * The default wrapper function.
 * @param {...*} valuesToCheck - The values to check.
 * @returns {TypeHelper} A new instance of the TypeHelper class.
 */
export default typeHelper; // The default wrapper function for the TypeHelper class.