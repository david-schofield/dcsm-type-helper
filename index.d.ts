declare module 'dcsm-type-helper' {
  export function typeOf(value: any): string: 'array' | 'date' | 'nan' | 'number' | 'function' | 'regexp' | 'boolean' | 'null' | 'undefined' | 'object' | 'string' | 'symbol' | 'bigint' | 'arguments' | 'error' | 'map' | 'weakmap' | 'set' | 'weakset' | 'arraybuffer' | 'sharedarraybuffer' | 'unknown';
  export function typeIs(value: any): {
    array: boolean;
    date: boolean;
    nan: boolean;
    number: boolean;
    function: boolean;
    regexp: boolean;
    boolean: boolean;
    null: boolean;
    undefined: boolean;
    object: boolean;
    string: boolean;
    symbol: boolean;
    bigint: boolean;
    arguments: boolean;
    error: boolean;
    map: boolean;
    weakmap: boolean;
    set: boolean;
    weakset: boolean;
    arraybuffer: boolean;
    sharedarraybuffer: boolean;
    unknown: boolean;
  };
  export default Type(): void; 
}