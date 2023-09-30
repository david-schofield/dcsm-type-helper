import {
  TypeOfHelper
} from '../src/type-of-helper.js';

describe('TypeOfHelper', () => {

  describe('constructor', () => {
    it('should create an instance of TypeOfHelper with the given values to check', () => {
      const helper = new TypeOfHelper('hello', 123, true);
      expect(helper).toBeInstanceOf(TypeOfHelper);
    });
  });


  describe('setOptions', () => {
    // TODO: Create a function that returns a InvalidOptionsError string identical to the one in the TypeOfHelper class.
    it('should throw an InvalidOptionError if one of the options provided does not exist', () => {
      expect.assertions(3);
      const typeOfHelper = new TypeOfHelper();
      try {
        typeOfHelper.setOptions = {
          invalidOption: true
        };
      } catch (error) {
        expect(error).toHaveProperty('message');
        expect(/Invalid options provided!/gmi.test(error.message)).toBe(true);
        expect(error).toHaveProperty('name', 'InvalidOptionsError');
      }
    });
  });


  describe('getOptions', () => {
    it('should return the options object', () => {
      const helper = new TypeOfHelper();
      expect(helper.getOptions).toEqual({
        enableCapitalizedTypeNames: false,
        disableThrowErrors: false,
      });
    });
  });


  describe('getTypeof', () => {
    it('should return the type of the values to check', () => {
      const helper = new TypeOfHelper('hello', 123, true);
      expect(helper.getTypeof()).toEqual(['string', 'number', 'boolean']);
    });

    it('should return capitalized type names if enablePrettyTypeNames is true', () => {
      const helper = new TypeOfHelper('hello', 123, true);
      expect(helper.getTypeof({
        enableCapitalizedTypeNames: true
      })).toEqual(['String', 'Number', 'Boolean']);
    });

    it('should throw an error if there are no values to check', () => {
      const helper = new TypeOfHelper();
      expect(() => helper.getTypeof()).toThrow('No values to check were provided!');
    });

    it('should not throw an error if disableThrowErrors is true', () => {
      const helper = new TypeOfHelper(() => {});
      expect(helper.getTypeof({
        disableThrowErrors: true
      })).toEqual('function');
    });

    it('should return the type of the value', () => {
      const helper = new TypeOfHelper('test');
      expect(helper.getTypeof()).toEqual('string');
    });

    it('should throw a NoValuesToCheckError if there are no values to check', () => {
      const helper = new TypeOfHelper();
      expect(() => helper.getTypeof()).toThrowError('No values to check were provided!');
    });

  });


  describe('isTypeofValues', () => {
    it('should return an array of booleans indicating whether each value in the valuesToCheck array matches the given typeToCheck', () => {
      const helper = new TypeOfHelper('test', 123, true);
      expect(helper.isTypeofValues('string')).toEqual([true, false, false]);
    });
  });


  describe('isTypeof', () => {
    it('should return true if the value matches the type', () => {
      const helper = new TypeOfHelper('test');
      expect(helper.isTypeof('string')).toBe(true);
    });

    it('should return false if the value does not match the type', () => {
      const helper = new TypeOfHelper(123);
      expect(helper.isTypeof('string')).toBe(false);
    });
  });


  describe('notTypeofValues', () => {
    it('should return an array of booleans indicating whether the values in the instance are not of the specified type', () => {
      const helper = new TypeOfHelper('test', 123, true);
      expect(helper.notTypeofValues('string')).toEqual([false, true, true]);
    });
  });


  describe('notTypeof', () => {
    it('should return true if the type of the value is not equal to the specified type', () => {
      const helper = new TypeOfHelper(123);
      expect(helper.notTypeof('string')).toBe(true);
    });

    it('should return false if the type of the value is equal to the specified type', () => {
      const helper = new TypeOfHelper('test');
      expect(helper.notTypeof('string')).toBe(false);
    });

    it('should return undefined if the value is undefined or null', () => {
      const helper = new TypeOfHelper(undefined);
      expect(helper.notTypeof('string')).toBe(true);
    });
  });

});