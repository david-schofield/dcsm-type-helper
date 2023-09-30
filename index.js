/**
 * @file The main entry point for the dcsm-type-helper module. 
 * @module dcsm-type-helper
 */
import {
  TypeOfMethods as TypeOf,
  help as typeOfHelp,
} from "./src/type-of-methods.js";

/**
 * Returns the type of the given values as a string or an array of strings.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {(string|string[]|boolean|boolean[])}
 */
function typeOf(...valuesToCheck) {
  return new TypeOf(...valuesToCheck).getTypeof();
}

export {
  TypeOf,
  typeOf,
  /**
   * Console logs the help for the TypeOf class.
   * @function
   * @returns {string}
   */
  typeOfHelp
};

export default typeOf;