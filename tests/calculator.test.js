import calculator from "../js/calculator";

describe("add function", () => {
  it("should add two numbers", () => {
    const result = calculator.add(1, 2);
    expect(result).toEqual(3);
  });
});

describe("subtract function", () => {
  it("should subtract two numbers", () => {
    const result = calculator.subtract(9, 1);
    expect(result).toEqual(8);
  });
});

describe("multiply function", () => {
  it("should multiply two numbers", () => {
    const result = calculator.multiply(10, 2);
    expect(result).toEqual(20);
  });
});

describe("divide function", () => {
  it("should divide two numbers", () => {
    const result = calculator.divide(44, 11);
    expect(result).toEqual(4);
  });
});
