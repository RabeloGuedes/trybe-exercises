const sum = require('./script.js')

describe('Requisito 1', () => {
  test('Sums two numbers.', () => {
    expect(sum(2, 3)).toBe(5);
  });
  test('Try to sum a number and a string.', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});