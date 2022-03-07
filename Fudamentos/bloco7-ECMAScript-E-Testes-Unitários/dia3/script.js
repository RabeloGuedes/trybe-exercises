function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;


function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

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

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

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