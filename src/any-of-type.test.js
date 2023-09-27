import { AnyOfType } from '../src/any-of-type';

describe('AnyOfType', () => {
  describe('isEmptyArray', () => {
    it('should return true if any of the values to check is an empty array', () => {
      const anyOfType = new AnyOfType([], [1, 2, 3]);
      expect(anyOfType.isEmptyArray).toBe(true);
    });

    it('should return false if none of the values to check is an empty array', () => {
      const anyOfType = new AnyOfType([1], [2], [3]);
      expect(anyOfType.isEmptyArray).toBe(false);
    });
  });

  describe('notEmptyArray', () => {
    it('should return true if none of the values to check is an empty array', () => {
      const anyOfType = new AnyOfType([1], [2], [3]);
      expect(anyOfType.notEmptyArray).toBe(true);
    });

    it('should return false if any of the values to check is an empty array', () => {
      const anyOfType = new AnyOfType([], [1, 2, 3]);
      expect(anyOfType.notEmptyArray).toBe(false);
    });
  });

  describe('isEmptyObject', () => {
    it('should return true if any of the values to check is an empty object', () => {
      const anyOfType = new AnyOfType({}, { a: 1, b: 2 });
      expect(anyOfType.isEmptyObject).toBe(true);
    });

    it('should return false if none of the values to check is an empty object', () => {
      const anyOfType = new AnyOfType({ a: 1 }, { b: 2 }, { c: 3 });
      expect(anyOfType.isEmptyObject).toBe(false);
    });
  });

  describe('notEmptyObject', () => {
    it('should return true if none of the values to check is an empty object', () => {
      const anyOfType = new AnyOfType({ a: 1 }, { b: 2 }, { c: 3 });
      expect(anyOfType.notEmptyObject).toBe(true);
    });

    it('should return false if any of the values to check is an empty object', () => {
      const anyOfType = new AnyOfType({}, { a: 1, b: 2 });
      expect(anyOfType.notEmptyObject).toBe(false);
    });
  });

  describe('isEmptyString', () => {
    it('should return true if any of the values to check is an empty string', () => {
      const anyOfType = new AnyOfType('', 'abc');
      expect(anyOfType.isEmptyString).toBe(true);
    });

    it('should return false if none of the values to check is an empty string', () => {
      const anyOfType = new AnyOfType('abc', 'def', 'ghi');
      expect(anyOfType.isEmptyString).toBe(false);
    });
  });

  describe('notEmptyString', () => {
    it('should return true if none of the values to check is an empty string', () => {
      const anyOfType = new AnyOfType('abc', 'def', 'ghi');
      expect(anyOfType.notEmptyString).toBe(true);
    });

    it('should return false if any of the values to check is an empty string', () => {
      const anyOfType = new AnyOfType('', 'abc');
      expect(anyOfType.notEmptyString).toBe(false);
    });
  });

  describe('isBooleanTrue', () => {
    it('should return true if any of the values to check is true', () => {
      const anyOfType = new AnyOfType(false, true);
      expect(anyOfType.isBooleanTrue).toBe(true);
    });

    it('should return false if none of the values to check is true', () => {
      const anyOfType = new AnyOfType(false, false);
      expect(anyOfType.isBooleanTrue).toBe(false);
    });
  });

  describe('isBooleanFalse', () => {
    it('should return true if any of the values to check is false', () => {
      const anyOfType = new AnyOfType(true, false);
      expect(anyOfType.isBooleanFalse).toBe(true);
    });

    it('should return false if none of the values to check is false', () => {
      const anyOfType = new AnyOfType(true, true);
      expect(anyOfType.isBooleanFalse).toBe(false);
    });
  });

  describe('isNumberZero', () => {
    it('should return true if any of the values to check is 0', () => {
      const anyOfType = new AnyOfType(1, 0, -1);
      expect(anyOfType.isNumberZero).toBe(true);
    });

    it('should return false if none of the values to check is 0', () => {
      const anyOfType = new AnyOfType(1, 2, 3);
      expect(anyOfType.isNumberZero).toBe(false);
    });
  });

  describe('notNumberZero', () => {
    it('should return true if none of the values to check is 0', () => {
      const anyOfType = new AnyOfType(1, 2, 3);
      expect(anyOfType.notNumberZero).toBe(true);
    });

    it('should return false if any of the values to check is 0', () => {
      const anyOfType = new AnyOfType(1, 0, -1);
      expect(anyOfType.notNumberZero).toBe(false);
    });
  });

  describe('isNumberPositive', () => {
    it('should return true if any of the values to check is positive', () => {
      const anyOfType = new AnyOfType(-1, 0, 1);
      expect(anyOfType.isNumberPositive).toBe(true);
    });

    it('should return false if none of the values to check is positive', () => {
      const anyOfType = new AnyOfType(-1, -2, -3);
      expect(anyOfType.isNumberPositive).toBe(false);
    });
  });

  describe('isNumberNegative', () => {
    it('should return true if any of the values to check is negative', () => {
      const anyOfType = new AnyOfType(-1, 0, 1);
      expect(anyOfType.isNumberNegative).toBe(true);
    });

    it('should return false if none of the values to check is negative', () => {
      const anyOfType = new AnyOfType(1, 2, 3);
      expect(anyOfType.isNumberNegative).toBe(false);
    });
  });
});