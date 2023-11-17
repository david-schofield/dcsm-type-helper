import {
  TypeOfMethods
} from "./type-of-methods.js";

const {
  methodNames,
  //useCases,
  //typeNames,
  //helperNames,
  //typeAndHelperNames
} = TypeOfMethods.getMethodNames;

/**
 * An object containing shorthand methods for checking the types of values.
 * @typedef {Object} typeOfShorthand
 */
const typeOfShorthand = Object.freeze(methodNames.reduce((acc, method) => {
  acc[method] = function (...valuesToCheck) {
    const typeOfInstance = new TypeOfMethods(...valuesToCheck);
    typeOfInstance.setOptions = {
      disableThrowErrors: true
    };
    return typeOfInstance[method];
  };
  return acc;
}, {}));

export {
  typeOfShorthand
};