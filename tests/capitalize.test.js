import capitalize from "../js/capitalize";

describe("capitalize function", () => {
  it("should take a string and return it with the first character capitalized", () => {
    const result = capitalize("adrian");
    expect(result).toBe("Adrian");
  });
  it('should return "" for empty string', () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
  it("should return the input unchanged for numbers", () => {
    const result = capitalize(3);
    expect(result).toBe(3);
  });
});
