const enhancer = require("./enhancer.js");

describe('"enhancer.js', () => {

describe("repair() method", () => {
    it("sets the durability to 100", () => {
      const item = { durability: 20 };
      const actual = enhancer.repair(item);

      expect(actual.durability).toBe(100);
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

  describe('fail()', () => {
      it("decrease durability by 5", () => {
          const item = {enhancement:10, durability:60};
          const actual = enhancer .fail(item);
          expect(actual.durability).toBe(55);
         
      })

     it("decrease durability by 10" , () => {
         const item = {enhancement:18, durability :80};
         const actual = enhancer .fail(item);
         expect(actual.durability).toBe(70);
     })

     it("decrease durability by 1" , () => {
        const item = {enhancement:18};
        const actual = enhancer .fail(item);
        expect(actual.enhancement).toBe(17);
    })

     
  })

});
