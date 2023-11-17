/**
 * @file The main entry point for the dcsm-type-helper module. 
 * @module dcsm-type-helper
 */
import {
  TypeOfMethods as TypeOf,
  help as typeOfHelp
} from "./src/type-of-methods.js";

import {
  typeOfShorthand
} from "./src/type-of-shorthand.js";

/**
 * Returns the type of the given values as a string or an array of strings.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {(string|string[])} The type of the given values as a string or an array of strings.
 */
function getTypeOf(...valuesToCheck) {
  return new TypeOf(...valuesToCheck).getTypeOf();
}

/**
 * Returns the type of the given values as a string or an array of strings with the first letter capitalized.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {(string|string[])} The type of the given values as a string or an array of strings with the first letter capitalized.
 */

function getTypeOfPretty(...valuesToCheck) {
  const typeOfInstance = new TypeOf(...valuesToCheck);
  typeOfInstance.setOptions = {
    enableCapitalizedTypeNames: true
  };
  return typeOfInstance.getTypeOf();
}

/**
 * Returns a TypeOf instance.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {TypeOf} A TypeOf instance.
 */
function typeOf(...valuesToCheck) {
  return new TypeOf(...valuesToCheck);
}

/**
 * Returns a TypeOf instance with the setOptions.disableThrowErrors property set to true.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {(TypeOf | undefined)} A TypeOf instance.
 */
function typeOfSilent(...valuesToCheck) {
  const typeOfInstance = new TypeOf(...valuesToCheck);
  typeOfInstance.setOptions = {
    disableThrowErrors: true
  };
  return typeOfInstance;
}

export {
  TypeOf,
  getTypeOf,
  getTypeOfPretty,
  typeOf,
  typeOfSilent,
  typeOfShorthand,
  /**
   * Console logs the help for the TypeOf class.
   * @function
   * @returns {string}
   */
  typeOfHelp
};

export default typeOfShorthand;