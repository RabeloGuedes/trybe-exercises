// Teste do 4° requisito

const {decode} = require('../script.js');

describe('Requisito 4.2 Decode', () => {
  test('Converter 1 em "a"', () => {
    expect(decode('1')).toBe('a');
  });
  test('Converter 2 em "e"', () => {
    expect(decode('2')).toBe('e');
  });
  test('Converter 3 em "i', () => {
    expect(decode('3')).toBe('i');
  });
  test('Converter 4 em "o', () => {
    expect(decode('4')).toBe('o');
  });
  test('Converter 5 em "u', () => {
    expect(decode('5')).toBe('u');
  });
});

// Teste do 4° requisito