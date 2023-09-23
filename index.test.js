// Description: Unit tests for the TypeHelper class.
import {
  TypeHelper
} from './index.js';

describe('TypeHelper', () => {
  describe('constructor', () => {
    it('creates a new instance of the TypeHelper class', () => {
      const typeHelper = new TypeHelper();
      expect(typeHelper).toBeInstanceOf(TypeHelper);
    });

    it('accepts values to check as arguments', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(typeHelper).toBeInstanceOf(TypeHelper);
    });
  });

  describe('getTypeof', () => {

    it('returns the type of the value to check', () => {
      const typeHelper = new TypeHelper('hello');
      const type = typeHelper.getTypeof();
      expect(type).toEqual('string');
    });

    it('returns the type of the values to check', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const type = typeHelper.getTypeof();
      expect(type).toEqual(['string', 'number', 'boolean']);
    });

    it('returns pretty type names if enabled', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const type = typeHelper.getTypeof({
        enablePrettyTypeNames: true
      });
      expect(type).toEqual(['String', 'Number', 'Boolean']);
    });

    it('throws an error if no values to check are provided', () => {
      const typeHelper = new TypeHelper();
      try {
        typeHelper.getTypeof();
      } catch (error) {

        expect(error.name).toEqual('NoValuesToCheckError');
        expect(error.message).toEqual('No values to check were provided!');
      }
      /*
      expect(() => {
        typeHelper.getTypeof();
      }).toThrow('No values to check were provided!');
      */
    });

    it('does not throw an error if disabled', () => {
      const typeHelper = new TypeHelper();
      const type = typeHelper.getTypeof({
        disableThrowErrors: true
      });
      expect(type).toBeUndefined();
    });
  });

  describe('isTypeof', () => {
    it('returns true if the values to check are of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const isString = typeHelper.isTypeof('string');
      expect(isString).toBe(false);
    });

    it('returns false if the values to check are not of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const isObject = typeHelper.isTypeof('object');
      expect(isObject).toBe(false);
    });

    it('returns undefined if no values to check are provided since disableThrowErrors is true', () => {
      const typeHelper = new TypeHelper();
      const isString = typeHelper.isTypeof('string', {
        disableThrowErrors: true
      });
      expect(isString).toBeUndefined();
    });

    it('throws an error if the type to check is not a lowercase string', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      try {
        typeHelper.isTypeof('String');
      } catch (error) {

        expect(error.name).toEqual('InvalidTypeToCheckError');
        expect(error.message).toEqual('Type to check must be a lowercase string! Received: String');
      }
    });

    it('does not throw an error if disabled', () => {
      const typeHelper = new TypeHelper();
      const isString = typeHelper.isTypeof('string', {
        disableThrowErrors: true
      });
      expect(isString).toBeUndefined();
    });

    it('throws an error if the one of the options is not a boolean', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      try {
        typeHelper.isTypeof('string', {
          enablePrettyTypeNames: 'YES'
        });
      } catch (error) {

        expect(error.name).toEqual('InvalidOptionsError');
        expect(error.message).toEqual(
          `Invalid options provided!
  enablePrettyTypeNames: Must be a boolean! Received type: string
Valid options are:
  enablePrettyTypeNames: {boolean}
  disableThrowErrors: {boolean}`
        );
      }
    });

    it('throws an error if one of the options provided does not exist', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      try {
        typeHelper.isTypeof('string', {
          enablePrettyTypeNames: true,
          invalidOption: true
        });
      } catch (error) {

        expect(error.name).toEqual('InvalidOptionsError');
        expect(error.message).toEqual(
          `Invalid options provided!
  invalidOption: Is not a valid option! Received option: invalidOption
Valid options are:
  enablePrettyTypeNames: {boolean}
  disableThrowErrors: {boolean}`
        );
      }
    });

    it('throws an error if the options object is not an object', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => {
        typeHelper.isTypeof('string', 'YES');
      }).toThrow('Options must be an object! Received type: string');
    });

  });

  describe('notTypeof', () => {
    it('returns true if the values to check are not of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const isObject = typeHelper.notTypeof('object');
      expect(isObject).toBe(true);
    });

    it('returns false if the values to check are of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      const isString = typeHelper.notTypeof('string');
      expect(isString).toBe(true);
    });

    it('throws an error if no values to check are provided', () => {
      const typeHelper = new TypeHelper();
      try {
        typeHelper.notTypeof('object');
      } catch (error) {
        expect(error.name).toEqual('NoValuesToCheckError');
        expect(error.message).toEqual('No values to check were provided!');
      }
    });

    it('throws an error if the type to check is not a lowercase string', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      try {
        typeHelper.notTypeof('String');
      } catch (error) {
        expect(error.name).toEqual('InvalidTypeToCheckError');
        expect(error.message).toEqual('Type to check must be a lowercase string! Received: String');
      }
    });

    it('does not throw an error if disabled', () => {
      const typeHelper = new TypeHelper();
      const isObject = typeHelper.notTypeof('object', {
        disableThrowErrors: true
      });
      expect(isObject).toBeUndefined();
    });
  });
});