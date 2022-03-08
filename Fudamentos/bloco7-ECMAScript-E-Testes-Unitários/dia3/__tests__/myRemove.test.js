// Teste do 2° requisito

const {myRemove} = require('../script.js');

describe('Requisito 2', () => {
  test('Remove an item from an array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });
  test(`Not return the array [1, 2, 3, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Return the exepected array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Teste do 2° requisito