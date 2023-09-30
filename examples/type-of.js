import {
  Print
} from "dcsm-print";
console.print = function () {
  Print(...arguments);
}
import {
  TypeOf,
  typeOfHelp
} from "../index.js";


try {
  const testErrors = new TypeOfHelper(new Error('test'));
  testErrors.setOptions = {
    enableCapitalizedTypeNames: 'true'
  };
  testErrors.getOptions;
} catch (e) {
  //console.log(e);
  console.log(e.name);
  console.log(e.message);
  //console.log(e.stack);
  console.log('----------------');
  console.log(e.toString());
}

const typeOfWithOptions = new TypeOf(1, '2', 3);
typeOfWithOptions.setOptions = {
  enablePrettyTypeNames: true,
  disableThrowErrors: true,
  oops: true // This option is not valid. It will be ignored sine disableThrowErrors is true.
};
console.print(typeOfWithOptions.getOptions);
console.print(typeOfWithOptions.isNumber);
console.print(typeOfWithOptions.isString);
console.print(typeOfWithOptions.isNumber);
console.print(typeOfWithOptions.isString);

console.print(new TypeOf(1, 2, 3).isNumber);
console.print(new TypeOf(1, 2, 3).isString);
console.print(new TypeOf(1, 2, 3).isNumber);

typeOfHelp();