import TypeHelper from './type-of.js';
describe('TypeHelper', () => {
  describe('isTypeof', () => {
    it('should return true if the value is of the specified type', () => {
      const typeHelper = new TypeHelper('hello');
      expect(typeHelper.isTypeof('string')).toBe(true);
      expect(typeHelper.isTypeof('number')).toBe(false);
      expect(typeHelper.isTypeof('boolean')).toBe(false);
    });

    it('should return false if the value is not of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(typeHelper.isTypeof('number')).toBe(false);
      expect(typeHelper.isTypeof('boolean')).toBe(false);
      expect(typeHelper.isTypeof('object')).toBe(false);
    });

    it('should throw an error if the type to check is not a string', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.isTypeof(123)).toThrow();
      expect(() => typeHelper.isTypeof(true)).toThrow();
      expect(() => typeHelper.isTypeof({})).toThrow();
    });
  });

  describe('notTypeof', () => {
    it('should return true if the value is not of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(typeHelper.notTypeof('number')).toBe(true);
      expect(typeHelper.notTypeof('boolean')).toBe(true);
      expect(typeHelper.notTypeof('object')).toBe(true);
    });

    it('should return false if the value is of the specified type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(typeHelper.notTypeof('string')).toBe(true);
      expect(typeHelper.notTypeof('number')).toBe(true);
      expect(typeHelper.notTypeof('boolean')).toBe(true);
    });

    it('should throw an error if the type to check is not a string', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.notTypeof(123)).toThrow();
      expect(() => typeHelper.notTypeof(true)).toThrow();
      expect(() => typeHelper.notTypeof({})).toThrow();
    });
  });

  describe('setOptions', () => {
    it('should set the options', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      typeHelper.setOptions = {
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      };
      expect(typeHelper.getOptions).toEqual({
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      });
    });

    it('should throw an error if the options provided are invalid', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.setOptions({ invalidOption: true })).toThrow();
    });

    it('should throw an error if the options provided are not an object', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      typeHelper.setOptions = {
        enablePrettyTypeNames: true
      };
      expect(() => typeHelper.setOptions('invalid options')).toThrow();
    });

    it('should throw an error if one of the options provided does not exist', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.setOptions({ invalidOption: true })).toThrow();
    });

    it('should throw an error if one of the options provided is not of the correct type', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.setOptions({ enablePrettyTypeNames: 'invalid' })).toThrow();
    });

    it('should throw an error if one of the options provided is not a valid value', () => {
      const typeHelper = new TypeHelper('hello', 123, true);
      expect(() => typeHelper.setOptions({ disableThrowErrors: 'invalid' })).toThrow();
    });
  });
});