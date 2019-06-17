const enhancer = require('./enhancer.js');

describe('restores durability to 100', () => {
 describe('repair()', () =>{
it('restores durability to 100', () => {
    expect(enhancer.repair({durability: 50}).durability).toBe(100);
    expect(enhancer.repair({durability: -10}).durability).toBe(100);
    expect(enhancer.repair({durability:100}).durability).toBe(100);
    expect(enhancer.repair({durability:0})).toEqual({durability:100});
})
 })   
})