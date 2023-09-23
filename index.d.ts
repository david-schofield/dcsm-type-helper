// Project: dcsm-type-helper
declare module 'dcsm-type-helper' {
  /**
   * Options for configuring the behavior of the TypeHelper class.
   */
  interface TypeHelperOptions {
    /**
     * Whether to use pretty type names in the output.
     */
    usePrettyTypeNames?: boolean;

    /**
     * Whether to disable throwing errors when checking types.
     */
    disableErrorThrowing?: boolean;
  }

  /**
   * A utility class for checking the types of values.
   */
  declare class TypeHelper {
    /**
     * Creates a new instance of the TypeHelper class.
     * @param values - The values to check the types of.
     */
    constructor(...values: unknown[]);

    /**
     * Gets the type of the values passed to the constructor.
     * @param options - Options for configuring the output.
     * @returns The type of the values, or an array of types if multiple values were passed.
     */
    getType(options?: TypeHelperOptions): string | string[];

    /**
     * Checks whether the type of the values matches the specified type.
     * @param type - The type to check against.
     * @param options - Options for configuring the type checking.
     * @returns True if the type matches, false otherwise.
     */
    isType(type: string, options?: TypeHelperOptions): boolean | undefined;

    /**
     * Checks whether the type of the values does not match the specified type.
     * @param type - The type to check against.
     * @param options - Options for configuring the type checking.
     * @returns True if the type does not match, false otherwise.
     */
    isNotType(type: string, options?: TypeHelperOptions): boolean | undefined;
  }

  /**
   * Creates a new instance of the TypeHelper class.
   * @param values - The values to check the types of.
   * @returns A new instance of the TypeHelper class.
   */
  declare function typeHelper(...values: unknown[]): TypeHelper;


  export class TypeHelper {
    constructor(...values: unknown[]);
    getType(options?: TypeHelperOptions): string | string[];
    isType(type: string, options?: TypeHelperOptions): boolean | undefined;
    isNotType(type: string, options?: TypeHelperOptions): boolean | undefined;
  }
  export default typeHelper;
}