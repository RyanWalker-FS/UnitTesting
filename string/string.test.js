const { upperCase, lowerCase } = require("./string");

describe("string", () => {
  test("upperCase", () => {
    expect(upperCase("hello")).toBe("HELLO");
  });
  test("lowerCase", () => {
    expect(lowerCase("HELLO")).toBe("hello");
  });
});
