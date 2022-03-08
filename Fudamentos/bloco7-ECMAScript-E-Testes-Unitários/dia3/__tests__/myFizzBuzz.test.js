// Teste do 3° requisito

const {myFizzBuzz} = require('../script.js');

describe('Requisito 3', () => {
  test('Divides 15 by 3 and 5 returns fizzbuzz.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Divides 9 by 3 and 5 returns fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('Divides 25 by 3 and 5 returns buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  test('Divides by 7 and 5 returns 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('Try to divide by a not number', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});

// Teste do 3° requisito