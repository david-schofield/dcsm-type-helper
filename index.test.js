import {TypeOf, TypeHelper} from './index.js';
describe('TypeOf', () => {
  describe('constructor', () => {
    it('should create a new instance of TypeOf', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      expect(typeOfInstance).toBeInstanceOf(TypeOf);
    });
  });

  describe('setOptions', () => {
    it('should set the options property', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      typeOfInstance.setOptions = {
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      };
      expect(typeOfInstance.getOptions).toEqual({
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      });
    });
  });

  describe('getOptions', () => {
    it('should get the options property', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      typeOfInstance.setOptions = {
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      };
      expect(typeOfInstance.getOptions).toEqual({
        enablePrettyTypeNames: true,
        disableThrowErrors: true,
      });
    });
  });

  describe('all', () => {
    it('should return an object with all type check methods', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      const availableMethods = ['help', ...TypeHelper.availableMethods];
      const typeOfKeys = Object.keys(typeOfInstance.all);
      expect(typeOfKeys).toEqual(availableMethods);
    });
  });

  describe('any', () => {
    it('should return an object with any type check methods', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      const availableMethods = ['help', ...TypeHelper.availableMethods];
      //console.log(availableMethods);
      const typeOfKeys = Object.keys(typeOfInstance.any);
      //console.log(typeOfKeys);
      expect(typeOfKeys).toEqual(availableMethods);
    });
  });

  describe('get', () => {
    it('should return an array of types', () => {
      const typeOfInstance = new TypeOf(1, '2', 3);
      typeOfInstance.setOptions = {
        enablePrettyTypeNames: true
      };
      expect(typeOfInstance.get).toEqual(['Number', 'String', 'Number']);
    });
  });

  describe('help', () => {
    it('should return a string with all available methods and examples', () => {
      const typeOfHelp = TypeOf.help;
      //console.log(typeOfHelp);
      //expect(typeOfHelp).toEqual(expect.any(String));
    });
  });

  describe('isNumber', () => {
    it('should return true if all values are numbers', () => {
      const result = new TypeOf(1, 2, 3).isNumber;
      expect(result).toBe(true);
    });

    it('should return false if any value is not a number', () => {
      const result = new TypeOf(1, '2', 3).isNumber;
      expect(result).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true if all values are strings', () => {
      const result = new TypeOf('hello', 'world').isString;
      expect(result).toBe(true);
    });

    it('should return false if any value is not a string', () => {
      const result = new TypeOf('hello', 123, 'world').isString;
      expect(result).toBe(false);
    });
  });

});

