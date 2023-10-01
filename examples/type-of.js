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





// Example: Logs help documentation to the console.
typeOfHelp();





// Example: Set option to instance
const typeOfWithOptions = new TypeOf(1, '2', 3);
typeOfWithOptions.setOptions = {
  enableCapitalizedTypeNames: true,
  disableThrowErrors: true,
  oops: true // This option is not valid. It will be ignored sine disableThrowErrors is true.
};
console.print(typeOfWithOptions.getOptions);
console.print(typeOfWithOptions.isNumber);





// Example: Use new TypeOf() directly
console.print(new TypeOf(1, 2, 3).isNumber);





// Example 1
const typeOfExample1 = new TypeOf(1, '2', 3);
console.print(typeOfExample1.isNumber); // true
console.print(typeOfExample1.isString); // true
console.print(typeOfExample1.isBoolean); // false




// Example 2 
// Test error handling when disableThrowErrors is true which means no errors will be thrown and undefined will be returned.
const typeOfExample2 = new TypeOf(1, '2', 3);
try {
  typeOfExample2.setOptions = {
    disableThrowErrors: true
  };
  const badTypeName = typeOfExample2.isTypeof(true);
  console.print(badTypeName); // undefined since disableThrowErrors is true
} catch (e) {
  // Since disableThrowErrors is true, no error will be thrown.
  console.print(e.name); // InvalidTypeToCheckError
  console.print(e.message); // Type to check must be a lowercase string!...
}

// Test error handling when disableThrowErrors is false which means errors will be thrown.
try {
  // Since disableThrowErrors is false, an error will be thrown.
  typeOfExample2.setOptions = {
    disableThrowErrors: false
  };
  const badTypeName = typeOfExample2.isTypeof(true);
  console.print(badTypeName);
} catch (e) {
  console.print(e.name); // InvalidTypeToCheckError
  console.print(e.message); // Type to check must be a lowercase string!...
}






// Example 3
const typeOfExample3 = new TypeOf(1, '2', false, {}, [], null, undefined, new Error('test'));
typeOfExample3.setOptions = {
  enableCapitalizedTypeNames: true
};
console.print(typeOfExample3.someValueIsString); // true
console.print(typeOfExample3.getTypeof()); // [ 'Number', 'String', 'Boolean', 'Object', 'Array', 'Null', 'Undefined', 'Error' ]