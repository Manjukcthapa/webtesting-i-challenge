const enhancer = require("./enhancer.js");

describe('"enhancer.js', () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(enhancer.repair({ durability: 50 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -30 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

  describe('succeed()', () => {
      it("add 1 to the enhancement ", () => {
          const item  = {enhancement:14};
          const actual = enhancer.succeed(item);
          expect(actual.enhancement).toBe(15);
      });

      it("enhancement equals to 20 doesn't increment", () => {
          const item = {enhancement:20};
          const actual = enhancer.succeed(item);
          expect(actual.enhancement).toBe(20);
      })
  });

});
