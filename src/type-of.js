/**
 * @file type-of.js
 * @module type-of
 * @description A class to check the type of a value.
 * @version 1.0.0
 * @since 1.0.0
 * 
 * @exports typeOf
 * @exports typeIs
 * @exports default Type
 * 
 * @method typeOf
 * @param {any} valueToCheck The value to check the type of.
 * @returns {string} The type of the value provided as a lowercase string.
 * 
 * @method typeIs
 * @param {any} valueToCheck The value to check the type of.
 * @returns {object} An object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.
 * 
 * @example
 * import {
 *  typeOf,
 *  typeIs
 * } from 'dcsm-type-helper';
 * typeOf(1); // number
 * typeIs(1); // { array: false, date: false, nan: false, number: true, function: false, regexp: false, boolean: false, null: false, undefined: false, object: false, string: false, symbol: false, bigint: false }
 * typeIs(1).number; // true
 * 
 **/
class Type {

  /**
   * Private properties and methods are indicated by a # at the beginning of their name.
   **/

  // The value to check the type of
  #valueToCheck;
  // List of possible types to check for as an array of strings
  static #typeList = 'array, date, nan, number, function, regexp, boolean, null, undefined, object, string, symbol, bigint, arguments, error, map, weakmap, set, weakset, arraybuffer, sharedarraybuffer'.split(', ');
  // Error messages used by the class
  #errorMessages = {
    unspecified: `Invalid arguments provided! \nOR\nNo arguments were provided to the execute the function! \nOnly one argument can be provided!\n `,
    type: {
      names: `"${Type.#typeList.join('"\n"')}"\n\n`,
      is: {
        not: {
          string: 'The type to check must be a string',
          valid: 'The type to check is not valid'
        }
      }
    }
  };

  /**
   * @constructor
   * @description Creates an instance of the Type class.
   * @param {any} typeOfValue The value to check the type of.
   * @returns {void}
   * @example
   * const type = new Type(1);
   * console.log(type.value); // number
   * console.log(type.is); // { array: false, date: false, nan: false, number: true, function: false, regexp: false, boolean: false, null: false, undefined: false, object: false, string: false, symbol: false, bigint: false }
   * console.log(type.is.string); // false
   * console.log(type.is.object); // false
   **/
  constructor(valueToCheck) {
    this.#verifyArguments(arguments); // Verify the arguments provided to the function
    this.#valueToCheck = valueToCheck; // Set the value to check
  }

  /**
   * @method #verifyArguments // # is used to indicate a private method
   * @description Verifies the arguments provided to the function and throws an error if no or more than one argument is provided.
   * @param {any} args The arguments provided to the function.
   * @returns {void}
   * @example
   * this.#verifyArguments(arguments);
   **/
  #verifyArguments(args) {
    // Verify the arguments provided to the function
    if (args.length === 0) throw new Error(this.#errorMessages.unspecified);
    if (args.length > 1) throw new Error('Only one argument can be provided to check the type of!');
  }

  /**
   * @method #typeOf // # is used to indicate a private method
   * @description Returns the type of the value provided.
   * @param {any} The value to check the type of.
   * @returns {string} The type of the value provided as a lowercase string.
   **/
  #typeOf(valueToCheck) {
    this.#verifyArguments(arguments); // Verify the arguments provided to the function

    // Regex to get the type of the value provided from the string returned by Object.prototype.toString.call(valueToCheck)
    // Default to an empty object if the regex fails to match
    const typeMatch = Object.prototype.toString.call(valueToCheck).match(/^\[object (?<type>[A-Z][a-zA-Z0-9]+)\]$/) ?? {};
    //console.dir(typeMatch);
    //console.dir(Object.prototype.toString.call(valueToCheck));
    // Throw an error if the type of the value could not be determined. This should never happen.
    // group.type is undefined if the regex fails to match
    if (typeMatch.groups?.type === undefined) throw new Error(`The type of the value could not be determined!\n${this.#errorMessages.type.names}`);

    // Get the type of the value provided as a lowercase string
    let foundTypeOfValue = typeMatch.groups.type.toLowerCase();

    // Check if the value is NaN since the type of NaN is also a number
    if (
      foundTypeOfValue === 'number' &&
      Number.isNaN(valueToCheck) === true
    ) {
      foundTypeOfValue = 'nan';
    }

    // Check if the found type is one of the valid types. If not, throw an error.
    //if (Type.#typeList.includes(foundTypeOfValue) === false) foundTypeOfValue = 'unknown'; // This is used to catch any unknown types
    //if (Type.#typeList.includes(foundTypeOfValue) === false) throw new Error(`The type "${foundTypeOfValue}" is not amongst the list of types!\n${this.#errorMessages.type.names}`);

    // Return the type of the value provided as a lowercase string
    return foundTypeOfValue;
  }

  /**
   * @method is
   * @description Returns an object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.
   * @param {any} The value to check the type of.
   * @returns {object} An object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.
   * @example
   * const type = new Type(1);
   * console.log(type.is); // { array: false, date: false, nan: false, number: true, function: false, regexp: false, boolean: false, null: false, undefined: false, object: false, string: false, symbol: false, bigint: false }  
   * console.log(type.is.string); // false
   **/
  get is() {
    let typeOfValue = this.value;
    // this.#valueToCheck should be set in the constructor when the class is instantiated
    if (typeOfValue === undefined) throw new Error(this.#errorMessages.unspecified);
    // Check if the type of the value provided is a string. If not, throw an error.
    if (typeof typeOfValue !== 'string') throw new Error(this.#errorMessages.type.is.not.string);
    // Check if the type is once of the valid types. If not, throw an error.
    //if (Type.#typeList.includes(typeOfValue) === false) throw new Error(`"${typeOfValue}" ${this.#errorMessages.type.is.not.valid}`);
    if (Type.#typeList.includes(typeOfValue) === false) typeOfValue = 'unknown'; // This is used to catch any unknown types

    // Return an object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.
    return {
      array: typeOfValue === 'array',
      date: typeOfValue === 'date',
      nan: typeOfValue === 'nan',
      number: typeOfValue === 'number',
      function: typeOfValue === 'function',
      regexp: typeOfValue === 'regexp',
      boolean: typeOfValue === 'boolean',
      null: typeOfValue === 'null',
      undefined: typeOfValue === 'undefined',
      object: typeOfValue === 'object',
      string: typeOfValue === 'string',
      symbol: typeOfValue === 'symbol',
      bigint: typeOfValue === 'bigint',
      arguments: typeOfValue === 'arguments',
      error: typeOfValue === 'error',
      map: typeOfValue === 'map',
      weakmap: typeOfValue === 'weakmap',
      set: typeOfValue === 'set',
      weakset: typeOfValue === 'weakset',
      arraybuffer: typeOfValue === 'arraybuffer',
      sharedarraybuffer: typeOfValue === 'sharedarraybuffer',
      unknown: typeOfValue === 'unknown'
    }
  }

  /**
   * @method value
   * @description Returns the type of the value provided as a lowercase string.
   * @param {any} The value to check the type of.
   * @returns {string} The type of the value provided as a lowercase string.  
   * 
   **/
  get value() {
    // this.#valueToCheck should be set in the constructor when the class is instantiated
    return this.#typeOf(this.#valueToCheck);
  }

  /**
   * @method help
   * @description Returns a string containing help information for the Type class.
   * @returns {string} A string containing help information for the Type class.
   **/
  static get help() {
    return `Possible types valid types are:\n` +
      `"${Type.#typeList.join('"\n"')}"\n\n` +
      `Available exported methods are:\n` +
      ` - "typeIs" // Returns an object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.\n` +
      ` - "typeOf" // Returns the type of the value provided as a lowercase string.\n\n`;
  }
}

function typeIs(valueToCheck) {
  // Create a new instance of the Type class and return the is property
  return new Type(valueToCheck).is;
}

function typeOf(valueToCheck) {
  // Create a new instance of the Type class and return the value property
  return new Type(valueToCheck).value;
}

function logTypeHelp() {
  // Log the help information for the Type class
  console.log(Type.help);
}

// Export the typeOf, typeIs function as a named export
export {
  typeOf,
  typeIs
};
// Export the Type class as the default export
export default logTypeHelp;