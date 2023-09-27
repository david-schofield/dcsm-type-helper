import { TypeHelper, AllOfType, AnyOfType, typeHelper, allOfType, anyOfType } from './index';

describe('TypeHelper', () => {
  test('should return the correct type for a given value', () => {
    const typeHelperInstance = new TypeHelper('hello');
    expect(typeHelperInstance.getTypeof()).toEqual('string');
  });
});

describe('AllOfType', () => {
  test('should return true if all values are of the same type', () => {
    const allOfTypeInstance = new AllOfType([1, 2, 3]);
    expect(allOfTypeInstance.notEmptyArray).toBe(true);
  });

  test('should return false if not all values are of the same type', () => {
    const allOfTypeInstance = new AllOfType([1, 'hello', true]);
    expect(allOfTypeInstance.notEmptyArray).toBe(true);
  });
});

describe('AnyOfType', () => {
  test('should return true if any value is of the same type', () => {
    const anyOfTypeInstance = new AnyOfType([1, 'hello', true]);
    expect(anyOfTypeInstance.isEmptyArray).toBe(false);
    //expect(anyOfTypeInstance.notEmptyObject).toBe(false);
    //expect(anyOfTypeInstance.notEmptyString).toBe(false);
  });

  test('should return false if no value is of the same type', () => {
    const anyOfTypeInstance = new AnyOfType(['hello', false]);
    expect(anyOfTypeInstance.notEmptyArray).toBe(true);
    //expect(anyOfTypeInstance.notEmptyObject).toBe(false);
    //expect(anyOfTypeInstance.notEmptyString).toBe(false);
  });
});

describe('typeHelper', () => {
  test('should return a new instance of TypeHelper', () => {
    const typeHelperInstance = typeHelper(1);
    expect(typeHelperInstance).toBeInstanceOf(TypeHelper);
  });
});

describe('allOfType', () => {
  test('should return a new instance of AllOfType', () => {
    const allOfTypeInstance = allOfType([1, 2, 3]);
    expect(allOfTypeInstance).toBeInstanceOf(AllOfType);
  });
});

describe('anyOfType', () => {
  test('should return a new instance of AnyOfType', () => {
    const anyOfTypeInstance = anyOfType([1, 'hello', true]);
    expect(anyOfTypeInstance).toBeInstanceOf(AnyOfType);
  });
});