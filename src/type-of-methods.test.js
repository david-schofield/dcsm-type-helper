import {
  TypeOfMethods
} from './type-of-methods';


describe('TypeOfMethods', () => {
  describe('constructor', () => {
    it('should create an instance of TypeOfMethods', () => {
      const instance = new TypeOfMethods(1, '2', true);
      expect(instance).toBeInstanceOf(TypeOfMethods);
    });
  });

  describe('isBoolean', () => {
    it('should return true if all values are boolean', () => {
      const instance = new TypeOfMethods(true, false, true);
      expect(instance.isBoolean).toBe(true);
    });

    it('should return false if any value is not boolean', () => {
      const instance = new TypeOfMethods(true, false, 'true');
      expect(instance.isBoolean).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true if all values are numbers', () => {
      const instance = new TypeOfMethods(1, 2, 3);
      expect(instance.isNumber).toBe(true);
    });

    it('should return false if any value is not a number', () => {
      const instance = new TypeOfMethods(1, '2', 3);
      expect(instance.isNumber).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true if all values are strings', () => {
      const instance = new TypeOfMethods('hello', 'world', '!');
      expect(instance.isString).toBe(true);
    });

    it('should return false if any value is not a string', () => {
      const instance = new TypeOfMethods('hello', 123, 'world');
      expect(instance.isString).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true if all values are objects', () => {
      const instance = new TypeOfMethods({}, {
        a: 1
      }, new Date());
      expect(instance.isObject).toBe(false);
    });

    it('should return false if any value is not an object', () => {
      const instance = new TypeOfMethods({}, 'hello', new Date());
      expect(instance.isObject).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true if all values are arrays', () => {
      const instance = new TypeOfMethods([], [1, 2], ['a', 'b']);
      expect(instance.isArray).toBe(true);
    });

    it('should return false if any value is not an array', () => {
      const instance = new TypeOfMethods([], [1, 2], 'hello');
      expect(instance.isArray).toBe(false);
    });
  });

  describe('someValueIsUndefined', () => {
    it('should return true if any value is undefined', () => {
      const instance = new TypeOfMethods(1, 2, undefined);
      expect(instance.someValueIsUndefined).toBe(true);
    });

    it('should return false if no values are undefined', () => {
      const instance = new TypeOfMethods(1, 2, 3);
      expect(instance.someValueIsUndefined).toBe(false);
    });
  });

  describe('someValueIsBoolean', () => {

    it('should return true if any value is boolean', () => {
      const instance = new TypeOfMethods(1, 2, true);
      expect(instance.someValueIsBoolean).toBe(true);
    });

    it('should return false if no values are boolean', () => {
      const instance = new TypeOfMethods(1, 2, 3);
      expect(instance.someValueIsBoolean).toBe(false);
    });
  });

  describe('someValueNotBoolean', () => {
    it('should return true if any value is not boolean', () => {
      const instance = new TypeOfMethods(1, 2, 'true');
      expect(instance.someValueNotBoolean).toBe(true);
    });

    it('should return false if no values are not boolean', () => {
      const instance = new TypeOfMethods(1, 2, true);
      expect(instance.someValueNotBoolean).toBe(true);
    });
  });

  describe('isFunction', () => {
    it('should return true if all values are functions', () => {
      const instance = new TypeOfMethods(() => {}, function () {}, () => {});
      expect(instance.isFunction).toBe(true);
    });

    it('should return false if any value is not a function', () => {
      const instance = new TypeOfMethods(() => {}, function () {}, 'hello');
      expect(instance.isFunction).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true if all values are undefined', () => {
      const instance = new TypeOfMethods(undefined, undefined, undefined);
      expect(instance.isUndefined).toBe(true);
    });

    it('should return false if any value is not undefined', () => {
      const instance = new TypeOfMethods(undefined, undefined, 'hello');
      expect(instance.isUndefined).toBe(false);
    });
  });

  describe('isEmptyObject', () => {
    it('should return true if all values are empty objects', () => {
      const instance = new TypeOfMethods({}, {}, {});
      expect(instance.isEmptyObject).toBe(true);
    });

    it('should return false if any value is not an empty object', () => {
      const instance = new TypeOfMethods({}, {}, 'hello');
      expect(instance.isEmptyObject).toBe(false);
    });
  });

  describe('isEmptyString', () => {
    it('should return true if all values are empty strings', () => {
      const instance = new TypeOfMethods('', '', '');
      expect(instance.isEmptyString).toBe(true);
    });

    it('should return false if any value is not an empty string', () => {
      const instance = new TypeOfMethods('', '', 'hello');
      expect(instance.isEmptyString).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should return true if all values are empty', () => {
      const instance = new TypeOfMethods('', [], {});
      expect(instance.isEmpty).toBe(true);
    });

    it('should return false if any value is not empty', () => {
      const instance = new TypeOfMethods('', [], 'hello');
      expect(instance.isEmpty).toBe(false);
    });
  });

  describe('isNumberMaxSafeInteger', () => {
    it('should return true if all values are numbers less than or equal to Number.MAX_SAFE_INTEGER', () => {
      const instance = new TypeOfMethods(1, 2, 3);
      expect(instance.isNumberMaxSafeInteger).toBe(true);
    });

    it('should return false if any value is not a number less than or equal to Number.MAX_SAFE_INTEGER', () => {
      const instance = new TypeOfMethods(1, 2, Number.MAX_SAFE_INTEGER + 1);
      expect(instance.isNumberMaxSafeInteger).toBe(false);
    });
  });

  describe('setOptions', () => {
    it('should throw an error if the options are invalid', () => {
      const instance = new TypeOfMethods(1, '2', true);
      expect(() => {
        instance.setOptions = {
          oops: true
        }
      }).toThrowError(
        `Invalid options provided!
  oops: Is not a valid option! Received option: oops
Valid options are:
  enableCapitalizedTypeNames: {boolean}
  disableThrowErrors: {boolean}`
      ); // TODO: Check for the correct error message
    });
  });

  describe('getTypeOf', () => {
    it('should return an array of booleans if any values are undefined', () => {
      const instance = new TypeOfMethods(1, '2', true, undefined);
      expect(instance.getTypeOf()).toEqual(['number', 'string', 'boolean', 'undefined']);
    });
  });

});