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
              return typeOfHelper.isTypeOf(type);
            },
            enumerable: true,
            configurable: false
          });
        }
        if (['not', 'everyValueNot'].includes(useCase)) {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.notTypeOf(type);
            },
            enumerable: true,
            configurable: false
          });
        }
        if (useCase === 'someValueIs') {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.isTypeOfValues(type).includes(true);
            },
            enumerable: true,
            configurable: false
          });
        }
        if (useCase === 'someValueNot') {
          Object.defineProperty(this, `${useCase}${capitalized}`, {
            get() {
              return typeOfHelper.notTypeOfValues(type).includes(true);
            },
            enumerable: true,
            configurable: false
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
    Object.keys(helperMethods).forEach((method) => {
      useCases.forEach((useCase) => {
        Object.defineProperty(this, `${useCase}${method}`, {
          get() {
            return helperMethods[method](useCase);
          },
          enumerable: true,
          configurable: false
        });
      });
    });
  }



  /**
   * Returns an object containing arrays of method names for various use cases, helper names, type names, and combined type and helper names.
   * @returns {{useCases: string[], typeNames: string[], helperNames: string[], typeAndHelperNames: string[], methodNames: string[]}} An object containing arrays of method names for various use cases, helper names, type names, and combined type and helper names.
   */
  static get getMethodNames() {

    const useCases = ['is', 'not', 'everyValueIs', 'everyValueNot', 'someValueIs', 'someValueNot'];
    const helperNames = [
      'EmptyArray',
      'EmptyObject',
      'EmptyString',
      'Empty',
      'BooleanTrue',
      'BooleanFalse',
      'NumberZero',
      'NumberPositive',
      'NumberNegative',
      'NumberMaxSafeInteger'
    ];
    const typeNames = TypeOfHelper.getTypes.capitalized;

    const typeAndHelperNames = [
      ...typeNames,
      ...helperNames
    ];

    const methodNames = [];
    typeAndHelperNames.forEach((method) => {
      useCases.forEach((useCase) => {
        methodNames.push(`${useCase}${method}`);
      });
    });

    return {
      useCases,
      typeNames,
      helperNames,
      typeAndHelperNames,
      methodNames
    };
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

  const {
    methodNames,
    useCases,
    typeNames,
    helperNames,
    typeAndHelperNames: availableMethods
  } = TypeOfMethods.getMethodNames;


  const help = `

The name of each type and helper method is a combination of a 'use case' name and a 'type/helper' name.
For instance, the method 'isString' which checks if one or all values are a string is a combination of the 'use case' name 'is' and the 'type/helper' name 'String'.

The 'use case' names are:
is            // checks if all values are of the specified 'type/helper'
not           // checks if all values are not of the specified 'type/helper'
everyValueIs  // same as the 'is' 'use case'
everyValueNot // same as the 'not' 'use case'
someValueIs   // checks if at least one value is of the specified 'type/helper'
someValueNot  // checks if at least one value is not of the specified 'type/helper'

The 'type/helper' names are:
${availableMethods.join('\n')}

`;
  console.log(help);
  return help;
}

export {
  TypeOfMethods,
  help
};