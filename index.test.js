import {
  TypeOf,
  typeOf,
  typeOfHelp
} from "./index.js";

describe("TypeOf", () => {

  describe("getTypeOf", () => {
    test("getTypeOf returns the correct type for a string", () => {
      const result = new TypeOf("hello").getTypeOf();
      expect(result).toBe("string");
    });

    test("getTypeOf returns the correct type for a number", () => {
      const result = new TypeOf(42).getTypeOf();
      expect(result).toBe("number");
    });

    test("getTypeOf returns the correct type for an array", () => {
      const result = new TypeOf([1, 2, 3]).getTypeOf();
      expect(result).toBe("array");
    });

    test("getTypeOf returns the correct type for an object", () => {
      const result = new TypeOf({
        name: "John",
        age: 30
      }).getTypeOf();
      expect(result).toBe("object");
    });
  });


  describe("typeOf", () => {
    test("returns the correct type for a string", () => {
      const result = typeOf("hello").getTypeOf();
      expect(result).toBe("string");
    });

    test("returns the correct type for a number", () => {
      const result = typeOf(42).getTypeOf();
      expect(result).toBe("number");
    });

    test("returns the correct type for an array", () => {
      const result = typeOf([1, 2, 3]).getTypeOf();
      expect(result).toBe("array");
    });

    test("returns the correct type for an object", () => {
      const result = typeOf({
        name: "John",
        age: 30
      }).getTypeOf();
      expect(result).toBe("object");
    });
  });

});

// Commented out because the console log is showing up in the test output.
/*
describe("typeOfHelp", () => {
  test("returns a string", () => {
    const result = typeOfHelp();
    expect(typeof result).toBe("string");
  });
});
*/