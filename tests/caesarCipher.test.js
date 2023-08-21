import caesar from "../js/caesarCipher";

describe("caesarCipher function", () => {});

describe("caesar cipher", () => {
  it("works with single letters", () => {
    expect(caesar("A", 1)).toBe("B");
  });

  it("works with words", () => {
    expect(caesar("Aaa", 1)).toBe("Bbb");
  });

  it("works with phrases", () => {
    expect(caesar("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  it("works with negative shift", () => {
    expect(caesar("Mjqqt, Btwqi!", -5)).toBe("Hello, World!");
  });

  it("wraps", () => {
    expect(caesar("Z", 1)).toBe("A");
  });

  it("works with large shift factors", () => {
    expect(caesar("Hello, World!", 75)).toBe("Ebiil, Tloia!");
  });

  it("works with large negative shift factors", () => {
    expect(caesar("Hello, World!", -29)).toBe("Ebiil, Tloia!");
  });
});
