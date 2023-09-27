import allOfType, { AllOfType } from './all-of-type';

describe('AllOfType', () => {
  it('should correctly identify an empty array', () => {
    const allOfTypeInstance = new AllOfType([]);
    expect(allOfTypeInstance.isEmptyArray).toBe(true);
    expect(allOfTypeInstance.notEmptyArray).toBe(false);
  });

  it('should correctly identify a non-empty array', () => {
    const allOfTypeInstance = new AllOfType([1, 2, 3]);
    expect(allOfTypeInstance.isEmptyArray).toBe(false);
    expect(allOfTypeInstance.notEmptyArray).toBe(true);
  });

  it('should correctly identify an empty object', () => {
    const allOfTypeInstance = new AllOfType({});
    expect(allOfTypeInstance.isEmptyObject).toBe(true);
    expect(allOfTypeInstance.notEmptyObject).toBe(false);
  });

  it('should correctly identify a non-empty object', () => {
    const allOfTypeInstance = new AllOfType({ a: 1, b: 2 });
    expect(allOfTypeInstance.isEmptyObject).toBe(false);
    expect(allOfTypeInstance.notEmptyObject).toBe(true);
  });

  it('should correctly identify an empty string', () => {
    const allOfTypeInstance = new AllOfType('');
    expect(allOfTypeInstance.isEmptyString).toBe(true);
    expect(allOfTypeInstance.notEmptyString).toBe(false);
  });

  it('should correctly identify a non-empty string', () => {
    const allOfTypeInstance = new AllOfType('hello');
    expect(allOfTypeInstance.isEmptyString).toBe(false);
    expect(allOfTypeInstance.notEmptyString).toBe(true);
  });

  it('should correctly identify a boolean true value', () => {
    const allOfTypeInstance = new AllOfType(true);
    expect(allOfTypeInstance.isBooleanTrue).toBe(true);
    expect(allOfTypeInstance.isBooleanFalse).toBe(false);
  });

  it('should correctly identify a boolean false value', () => {
    const allOfTypeInstance = new AllOfType(false);
    expect(allOfTypeInstance.isBooleanTrue).toBe(false);
    expect(allOfTypeInstance.isBooleanFalse).toBe(true);
  });

  it('should correctly identify a zero number', () => {
    const allOfTypeInstance = new AllOfType(0);
    expect(allOfTypeInstance.isNumberZero).toBe(true);
    expect(allOfTypeInstance.notNumberZero).toBe(false);
  });

  it('should correctly identify a non-zero number', () => {
    const allOfTypeInstance = new AllOfType(1);
    expect(allOfTypeInstance.isNumberZero).toBe(false);
    expect(allOfTypeInstance.notNumberZero).toBe(true);
  });

  it('should correctly identify a positive number', () => {
    const allOfTypeInstance = new AllOfType(1);
    expect(allOfTypeInstance.isNumberPositive).toBe(true);
    expect(allOfTypeInstance.isNumberNegative).toBe(false);
  });

  it('should correctly identify a negative number', () => {
    const allOfTypeInstance = new AllOfType(-1);
    expect(allOfTypeInstance.isNumberPositive).toBe(false);
    expect(allOfTypeInstance.isNumberNegative).toBe(true);
  });
});

describe('allOfType', () => {
  it('should return an instance of AllOfType', () => {
    const allOfTypeInstance = allOfType();
    expect(allOfTypeInstance).toBeInstanceOf(AllOfType);
  });

  it('should correctly pass values to AllOfType', () => {
    const allOfTypeInstance = allOfType(1, '2', {});
    expect(allOfTypeInstance.isNumberZero).toBe(false);
    expect(allOfTypeInstance.notEmptyString).toBe(true);
    expect(allOfTypeInstance.isEmptyArray).toBe(false);
    expect(allOfTypeInstance.isEmptyObject).toBe(false);
  });
});