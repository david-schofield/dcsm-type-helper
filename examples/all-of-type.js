import { Print } from "dcsm-print";
console.print = function() {
  Print(...arguments);
}
import { TypeOf } from "../index.js";




const typeOfWithOptions = new TypeOf(1, '2', 3);
typeOfWithOptions.setOptions = {
  enablePrettyTypeNames: true,
  disableThrowErrors: true,
  oops: true // This option is not valid. It will be ignored sine disableThrowErrors is true.
};
console.print(typeOfWithOptions.getOptions);
console.print(typeOfWithOptions.all.isNumber);
console.print(typeOfWithOptions.all.isString);
console.print(typeOfWithOptions.any.isNumber);
console.print(typeOfWithOptions.any.isString);
console.print(typeOfWithOptions.get);
console.print(new TypeOf(1, '2', 3).any.isNumber);
console.print(new TypeOf(1, '2', 3).any.isString);


console.print(new TypeOf(1, 2, 3).all.isNumber);
console.print(new TypeOf(1, 2, 3).all.isString);
console.print(new TypeOf(1, 2, 3).isNumber);

console.log(TypeOf.help);




