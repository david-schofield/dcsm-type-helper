import { TypeOf, typeOf, typeOfHelp } from "./index.js";

describe("TypeOf", () => {
  test("getTypeof returns the correct type for a string", () => {
    const result = new TypeOf("hello").getTypeof();
    expect(result).toBe("string");
  });

  test("getTypeof returns the correct type for a number", () => {
    const result = new TypeOf(42).getTypeof();
    expect(result).toBe("number");
  });

  test("getTypeof returns the correct type for an array", () => {
    const result = new TypeOf([1, 2, 3]).getTypeof();
    expect(result).toBe("array");
  });

  test("getTypeof returns the correct type for an object", () => {
    const result = new TypeOf({ name: "John", age: 30 }).getTypeof();
    expect(result).toBe("object");
  });
});

describe("typeOf", () => {
  test("returns the correct type for a string", () => {
    const result = typeOf("hello");
    expect(result).toBe("string");
  });

  test("returns the correct type for a number", () => {
    const result = typeOf(42);
    expect(result).toBe("number");
  });

  test("returns the correct type for an array", () => {
    const result = typeOf([1, 2, 3]);
    expect(result).toBe("array");
  });

  test("returns the correct type for an object", () => {
    const result = typeOf({ name: "John", age: 30 });
    expect(result).toBe("object");
  });
});

describe("typeOfHelp", () => {
  test("returns a string", () => {
    const result = typeOfHelp();
    expect(typeof result).toBe("string");
  });
});