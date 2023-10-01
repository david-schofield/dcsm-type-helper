// Project: dcsm-type-helper
declare module 'dcsm-type-helper' {

  export interface TypeHelperOptions {
    /**
     * Whether to use pretty type names in the output.
     */
    //enableCapitalizedTypeNames?: boolean;

    /**
     * Whether to disable throwing errors
     */
    disableThrowErrors?: boolean;
  }

  /**
   * Returns the type of the given values as a string or an array of strings.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {(string|string[]|boolean|boolean[])}
   */
  export function getTypeof(...valuesToCheck: any[]): string | string[] | boolean | boolean[];

  /**
   * Returns the type of the given values as a string or an array of strings with the first letter capitalized.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {(string|string[]|boolean|boolean[])}
   */
  export function getTypeOfPretty(...valuesToCheck: any[]): string | string[] | boolean | boolean[];

  /**
   * Returns a TypeOf instance.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {TypeOf}
   */
  export function typeOf(...valuesToCheck: any[]): TypeOf;

  /**
   * Returns a TypeOf instance with error throwing disabled.
   * @param {...*} valuesToCheck - The values to check the type of.
   * @returns {TypeOf}
   */
  export function typeOfSilent(...valuesToCheck: any[]): TypeOf;

  export class TypeOf {
    constructor(...valuesToCheck: any[]);
    getTypeof(options?: TypeHelperOptions & { enableCapitalizedTypeNames?: boolean }): string | string[];
    isTypeof(...valuesToCheck: any[], options?: TypeHelperOptions): boolean;
    isTypeofValues(...valuesToCheck: any[], options?: TypeHelperOptions): boolean;
    notTypeof(...valuesToCheck: any[], options?: TypeHelperOptions): boolean;
    notTypeofValues(...valuesToCheck: any[], options?: TypeHelperOptions): boolean;
    getOptions(): TypeHelperOptions;
    setOptions(options?: TypeHelperOptions & { enableCapitalizedTypeNames?: boolean }): void;
    static getTypes(): object;
  }

  /**
   * Console logs the help for the TypeOf class.
   * @function
   * @returns {string}
   */
  export function typeOfHelp(): string;

  export default typeOfHelp;


}