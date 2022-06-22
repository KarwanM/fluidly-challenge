const { assertEquals, assertNotEquals } = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are the same number", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(1, 1)).not.toThrow();
    });
  });

  describe("when expected and actual are the same array", () => {
    it("returns without throwing an error", () => {
      expect(() =>
        assertNotEquals(["a", "b", "c"], ["a", "b", "c"])
      ).not.toThrow();
    });
  });
});

describe("assertNotEquals", () => {
  describe("when expected and actual are different strings", () => {
    it("returns with throwing an error", () => {
      expect(() => assertNotEquals("abcef", "abc")).toThrow();
    });
  });

  describe("when expected and actual are different numbers", () => {
    it("returns with throwing an error", () => {
      expect(() => assertNotEquals(1, 2)).toThrow();
    });
  });

  describe("when expected and actual are different array same length", () => {
    it("returns with throwing an error", () => {
      expect(() => assertNotEquals(["a", "b"], ["a", "d"])).toThrow();
    });
  });

  describe("when expected and actual are different arrays different lengths", () => {
    it("returns with throwing an error", () => {
      expect(() => assertNotEquals(["a", "b"], ["a", "b", "c"])).toThrow();
    });
  });

  describe("when expected and actual are different types", () => {
    it("returns with throwing an error", () => {
      expect(() => assertNotEquals(1, "1")).toThrow();
    });
  });
});
