const math = require("./math");

describe("Math Module Tests", () => {
  // Test for add function
  test("add function should return the sum of two numbers", () => {
    expect(math.add(2, 3)).toBe(5);
    expect(math.add(-1, 1)).toBe(0);
  });

  //Test for subtract function
  test("subtract function should return the difference of two numbers", () => {
    expect(math.subtract(5, 3)).toBe(2);
    expect(math.subtract(0, 5)).toBe(-5);
  });

  //Test for multiply function
  test("multiply function should return the product of two numbers", () => {
    expect(math.multiply(2, 3)).toBe(6);
    expect(math.multiply(0, 5)).toBe(0);
  });

  //Test for divide function
  test("divide function should return the quotient of two numbers", () => {
    expect(math.divide(6, 3)).toBe(2);
    expect(math.divide(5, 2)).toBe(2.5);
  });

  test("divide function should throw an error when dividing by zero", () => {
    expect(() => math.divide(5, 0)).toThrow("Cannot divide by zero");
  });

  //Test for max function
  test("max function should return the maximum value of two numbers", () => {
    expect(math.max(10, 5)).toBe(10);
    expect(math.max(-5, -10)).toBe(-5);
  });
});
