import {
  TypeOfHelper
} from './type-of-helper';

describe('TypeOfHelper', () => {
  describe('getTypeof', () => {
    it('should return the type of the value', () => {
      const helper = new TypeOfHelper('test');
      expect(helper.getTypeof()).toEqual('string');
    });
    /*
        it('should return undefined if there are no values to check', () => {
          const helper = new TypeOfHelper();
          expect(helper.getTypeof()).toBeUndefined();
        });

        it('should throw a NoValuesToCheckError if there are no values to check', () => {
          const helper = new TypeOfHelper();
          expect(() => helper.getTypeof()).toThrowError('No values to check!');
        });

        it('should throw an UnknownTypeError if an unknown type is detected', () => {
          const helper = new TypeOfHelper(Symbol('test'));
          expect(() => helper.getTypeof()).toThrowError('Unknown type detected!');
        });

        it('should return pretty type names if enablePrettyTypeNames is true', () => {
          const helper = new TypeOfHelper('test');
          expect(helper.getTypeof({ enablePrettyTypeNames: true })).toEqual('String');
        });
        */
  });

  describe('isTypeofValues', () => {
    it('should return an array of booleans indicating whether each value in the valuesToCheck array matches the given typeToCheck', () => {
      const helper = new TypeOfHelper('test', 123, true);
      expect(helper.isTypeofValues('string')).toEqual([true, false, false]);
    });

    /*
    it('should return undefined if an error occurred', () => {
      const helper = new TypeOfHelper();
      expect(helper.isTypeofValues('string')).toBeUndefined();
    });
    */
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

    /*
    it('should return undefined if the value is undefined', () => {
      const helper = new TypeOfHelper(undefined);
      expect(helper.isTypeof('string')).toBeUndefined();
    });
    */
    /*

     it('should allow undefined values if allowUndefined is true', () => {
       const helper = new TypeOfHelper(undefined);
       expect(helper.isTypeof('string', { allowUndefined: true })).toBe(false);
     });

     it('should allow null values if allowNull is true', () => {
       const helper = new TypeOfHelper(null);
       expect(helper.isTypeof('object', { allowNull: true })).toBe(true);
     });
     */
  });

  describe('notTypeofValues', () => {
    it('should return an array of booleans indicating whether the values in the instance are not of the specified type', () => {
      const helper = new TypeOfHelper('test', 123, true);
      expect(helper.notTypeofValues('string')).toEqual([false, true, true]);
    });
    /*
        it('should return undefined if there are no values to check or the type to check is invalid', () => {
          const helper = new TypeOfHelper();
          expect(helper.notTypeofValues('string')).toBeUndefined();
        });
        */
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