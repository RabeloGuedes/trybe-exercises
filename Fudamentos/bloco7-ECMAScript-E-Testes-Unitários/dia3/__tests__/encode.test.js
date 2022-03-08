const {encode} = require('../script.js');

describe('Requisito 4.1 Encode', () => {
  test('Converter "a" em 1', () => {
    expect(encode('a')).toBe('1');
  });
  test('Converter "e" em 2', () => {
    expect(encode('e')).toBe('2');
  });
  test('Converter "i" em 3', () => {
    expect(encode('i')).toBe('3');
  });
  test('Converter "o" em 4', () => {
    expect(encode('o')).toBe('4');
  });
  test('Converter "u" em 5', () => {
    expect(encode('u')).toBe('5');
  });
});