import reverseString from "../js/reverseString";

describe("reverseString function", () => {
  it("should reverse a string", () => {
    const result = reverseString("adrian");
    expect(result).toBe("nairda");
  });
  it('should return "" for empty string', () => {
    const result = reverseString("");
    expect(result).toBe("");
  });
  it("should return the input unchanged for numbers", () => {
    const result = reverseString(3);
    expect(result).toBe(3);
  });
});
