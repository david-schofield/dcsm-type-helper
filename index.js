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
function getTypeof(...valuesToCheck) {
  return new TypeOf(...valuesToCheck).getTypeof();
}

/**
 * Returns the type of the given values as a string or an array of strings with the first letter capitalized.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {(string|string[]|boolean|boolean[])}
 */

function getTypeofPretty(...valuesToCheck) {
  const typeOfInstance = new TypeOf(...valuesToCheck);
  typeOfInstance.setOptions = {
    enableCapitalizedTypeNames: true
  };
  return typeOfInstance.getTypeof();
}

/**
 * Returns a TypeOf instance.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {TypeOf}
 */
function typeOf(...valuesToCheck) {
  return new TypeOf(...valuesToCheck);
}

/**
 * Returns a TypeOf instance with the setOptions.disableThrowErrors property set to true.
 * @param {...*} valuesToCheck - The values to check the type of.
 * @returns {TypeOf}
 */
function typeOfSilent(...valuesToCheck) {
  const typeOfInstance = new TypeOf(...valuesToCheck);
  typeOfInstance.setOptions = {
    disableThrowErrors: false
  };
  return typeOfInstance;
}

export {
  TypeOf,
  getTypeof,
  getTypeofPretty,
  typeOf,
  typeOfSilent,
  /**
   * Console logs the help for the TypeOf class.
   * @function
   * @returns {string}
   */
  typeOfHelp
};

export default getTypeof;