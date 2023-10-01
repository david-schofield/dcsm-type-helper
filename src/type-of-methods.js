import {
  TypeOfHelper,
} from "./type-of-helper.js";

/**
 * TypeOfMethods class extends TypeOfHelper and provides methods to check the type of values and other helper methods.
 * @extends TypeOfHelper
 * @class
 */
class TypeOfMethods extends TypeOfHelper {

  /**
   * Creates an instance of TypeOfMethods.
   * @param {...*} valuesToCheck - The values to check the type of and other helper methods.
   */
  constructor(...valuesToCheck) {
    const typeOfHelper = super(...valuesToCheck);
    const useCases = ['is', 'not', 'everyValueIs', 'everyValueNot', 'someValueIs', 'someValueNot'];
    const types = TypeOfHelper.getTypes.types;

    /**
     * Defines the methods for the types. The methods are defined as getters. 
     * @example
     * const typeOf = new TypeOf(1, '2', 3);
     * const isString = typeOf.isString;
     * // isString = false
     */
    Object.entries(types).forEach(([type, {
      capitalized
    }]) => {
      useCases.forEach((useCase) => {
        if (['is', 'everyValueIs'].includes(useCase)) {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.isTypeof(type);
            }
          });
        }
        if (['not', 'everyValueNot'].includes(useCase)) {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.notTypeof(type);
            }
          });
        }
        if (useCase === 'someValueIs') {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.isTypeofValues(type).includes(true);
            }
          });
        }
        if (useCase === 'someValueNot') {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.notTypeofValues(type).includes(true);
            }
          });
        }
      });
    });


    /**
     * Checks the values of an array based on a given use case and check function.
     *
     * @param {string} useCase - The use case to apply to the values. Must be one of 'is', 'everyValueIs', 'someValueIs', 'someValueNot'.
     * @param {function} checkFn - The function to use to check the values.
     * @returns {boolean} - Returns true if all values pass the check, or if at least one value passes the check for 'someValueIs' and 'someValueNot' use cases.
     * @throws {Error} - Throws an error if the useCase argument is not one of the allowed values.
     */
    function checkValues(useCase, checkFn) {
      if (!useCases.includes(useCase)) {
        throw new Error(`The useCase argument must be one of the following: ${useCases.join(', ')}.`);
      }
      const caseIs = ['is', 'everyValueIs', 'someValueIs'].includes(useCase);
      const caseSome = ['someValueIs', 'someValueNot'].includes(useCase);
      const checkedValues = valuesToCheck.map(checkValue => {
        if (caseIs) {
          return checkFn(checkValue);
        } else {
          return !checkFn(checkValue);
        }
      });
      if (caseSome) {
        return checkedValues.includes(true);
      } else {
        return checkedValues.every((value) => value === true);
      }
    };

    /**
     * Other helper methods that are not types but are useful to have. The methods are defined as getters.
     */
    const helperMethods = {
      EmptyArray: (useCase = 'is') => {
        return checkValues(useCase, (value) => Array.isArray(value) && value.length === 0);
      },
      EmptyObject: (useCase = 'is') => {
        return checkValues(useCase, (value) => new TypeOfMethods(value).isObject && Object.keys(value).length === 0);
      },
      EmptyString: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'string' && value.length === 0);
      },
      Empty: (useCase = 'is') => {
        return checkValues(useCase, (value) => (typeof value === 'string' && value.length === 0) || (Array.isArray(value) && value.length === 0) || (new TypeOfMethods(value).isObject && Object.keys(value).length === 0));
      },
      BooleanTrue: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'boolean' && value === true);
      },
      BooleanFalse: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'boolean' && value === false);
      },
      NumberZero: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'number' && value === 0);
      },
      NumberPositive: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'number' && value > 0);
      },
      NumberNegative: (useCase = 'is') => {
        return checkValues(useCase, (value) => typeof value === 'number' && value < 0);
      },
      NumberMaxSafeInteger: (useCase = 'is') => {
        return checkValues(useCase, (value) => Number.isSafeInteger(value) && value <= Number.MAX_SAFE_INTEGER);
      }
    };

    /**
     * Defines the methods for the other helper methods. The methods are defined as getters.
     */
    this.helperMethodsList = Object.keys(helperMethods);
    this.helperMethodsList.forEach((method) => {
      useCases.forEach((useCase) => {
        Object.defineProperty(this, `${useCase}${method}`, {
          get() {
            return helperMethods[method](useCase);
          }
        });
      });
    });
  }

}

/**
 * Returns a string with available methods and their descriptions.
 * @returns {string} A string with available methods and their descriptions.
 * @example
 * const helpString = help();
 * console.log(helpString);
 * @example
 * help();
 */
function help() {
  //const availableMethods = Object.getOwnPropertyNames(new TypeOfMethods(1, 2, 3)).filter((prop) => typeof new TypeOfMethods(1, 2, 3)[prop] === 'boolean');
  const availableMethods = [
    ...TypeOfHelper.getTypes.capitalized,
    ...Object.values(new TypeOfMethods(2).helperMethodsList)
  ];
  const useCases = ['is', 'not', 'everyValueIs', 'everyValueNot', 'someValueIs', 'someValueNot'];
  const help = `


These are the available getter methods that return a boolean value for the given use case for the given type.
Each method name has a corresponding method for each use case as a prefix to the method name.
The use cases are: ${useCases.join(', ')}.
 \n${availableMethods.join('\n')}

@examples
// For the method name 'String' the following methods are available:
// isString, notString, everyValueIsString, everyValueNotString, someValueIsString, someValueNotString
const typeOf = new TypeOf(1, '2', 3);
console.log(
  typeOf.isString,            // false  - because not all values are strings
  typeOf.notString,           // true   - because not all values are strings. Same as !typeOf.isString
  typeOf.everyValueIsString,  // false  - same as typeOf.isString
  typeOf.everyValueNotString, // true   - same as typeOf.notString
  typeOf.someValueIsString,   // true   - because at least one value is a string
  typeOf.someValueNotString); // true   - because at least one value is a string. Same as !typeOf.someValueIsString

---------------------------------------
 
Set and get the options for the instance.
setOptions
getOptions

---------------------------------------

Check if all values are of the specified type. Returns boolean or array of booleans.
${['isTypeof', 'notTypeof', 'isTypeofValues', 'notTypeofValues'].join('\n')}

---------------------------------------

Get the type of the values as a string or an array of strings.
getTypeof(options); 
// options is an optional object with the following properties:
// enableCapitalizedTypeNames: boolean - If true, the first letter of the type name will be capitalized.
// disableThrowErrors: boolean - If true, errors will not be thrown.

@examples
const typeOf = new TypeOf(1, '2', {}, [], new RegExp());
const options = {enableCapitalizedTypeNames: true, disableThrowErrors: true};
typeOf.getTypeof(options); // ['Number', 'String', 'Object', 'Array', 'RegExp']

`;
  console.log(help);
  return help;
}

export {
  TypeOfMethods,
  help
};