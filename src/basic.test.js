import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum, factorialNum } from "./basic";

describe("sumAndPlusTen", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    // AAA Patern
    // Arrange - Setup the test
    const a = 5;
    const b = 10;
    // Act - Execute the test
    const result = sumAndPlusTen(a, b);

    // Assert - Check the result
    expect(result).toBe(25);
  });

  it("should return nan when a is integer and b is undefined", () => {
    const a = 5;
    const b = undefined;
    const result = sumAndPlusTen(a, b);
    expect(result).toBeNaN();
  });
});

describe("maxNum", () => {
  // Existing test case
  it("should return the second argument when the first argument is less than the second argument", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  // New test case
  it("should return the first argument when the first argument is greater than the second argument", () => {
    expect(maxNum(10, 5)).toBe(10);
  });

  // New test case
  it("should return the first argument when the first argument is equal to the second argument", () => {
    expect(maxNum(10, 10)).toBe(10);
  });

  // New test case
  it("should throw an error if the first argument is not a number", () => {
    expect(() => maxNum("5", 10)).toThrowError(
      "All of the arguments must be a number!"
    );
  });
});

describe("factorialNum", () => {
  it("should return 1 when the input is 0", () => {
    expect(factorialNum(0)).toBe(1);
  });

  it("should return 1 when the input is 1", () => {
    expect(factorialNum(1)).toBe(1);
  });

  it("should return 120 when the input is 5", () => {
    expect(factorialNum(5)).toBe(120);
  });

  it("should throw an error if the input is not a number", () => {
    expect(() => factorialNum("5")).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is not a number", () => {
    expect(() => factorialNum({})).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is not a number", () => {
    expect(() => factorialNum([])).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is float", () => {
    expect(() => factorialNum(5.5)).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is undefined", () => {
    expect(() => factorialNum(undefined)).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is null", () => {
    expect(() => factorialNum(null)).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is infinity", () => {
    expect(() => factorialNum(Infinity)).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is boolean", () => {
    expect(() => factorialNum(true)).toThrowError(
      "All of the arguments must be a number!"
    );
  });

  it("should throw an error if the input is greater than 170", () => {
    expect(() => factorialNum(10000)).toThrowError("The number is too big!");
  });
});

// describe("sumAndPlusTen", () => {
//   // Existing test case
//   it("should return the sum of a + b + 10 when a, b is integer", () => {
//     const a = 5;
//     const b = 10;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBe(25);
//   });

//   // Existing test case
//   it("should return NaN when a is integer and b is undefined", () => {
//     const a = 5;
//     const b = 5;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBeNaN();
//   });

//   // New test case
//   it("should return the sum of a + b + 10 when a is negative and b is positive", () => {
//     const a = -5;
//     const b = 10;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBe(15);
//   });

//   // New test case
//   it("should return the sum of a + b + 10 when a is positive and b is negative", () => {
//     const a = 5;
//     const b = -10;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBe(-5);
//   });

//   // New test case
//   it("should return the sum of a + b + 10 when a and b are both negative", () => {
//     const a = -5;
//     const b = -10;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBe(-5);
//   });

//   // New test case
//   it("should return the sum of a + b + 10 when a and b are both positive", () => {
//     const a = 5;
//     const b = 10;
//     const result = sumAndPlusTen(a, b);
//     expect(result).toBe(25);
//   });
// });
