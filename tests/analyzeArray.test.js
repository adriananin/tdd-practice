import analyzeArray from "../js/analyzeArray";

describe("analyzeArray", () => {
  it("should return null for an empty array", () => {
    const result = analyzeArray([]);
    expect(result).toBe(null);
  });

  it("should return null for non-array input", () => {
    const result = analyzeArray("not an array");
    expect(result).toBe(null);
  });

  it("should calculate the correct properties for a valid array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
