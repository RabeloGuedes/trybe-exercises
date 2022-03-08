// Requisito 1

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;

// Requisito 1

// Requisito 2

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

// Requisito 2

// Requisito 3

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

// Requisito 3

// Requisito 4

const checkVowels = (letter) => {
  let result;
  if (letter === 'a') {
    result = 1;
  } else if (letter === 'e') {
    result = 2;
  } else if (letter === 'i') {
    result = 3;
  } else if (letter === 'o') {
    result = 4;
  } else if (letter === 'u') {
    result = 5;
  }
  return result;
}

const checkNumbers = (number) => {
  let result;
  if (number === '1') {
    result = 'a';
  } else if (number === '2') {
    result = 'e';
  } else if (number === '3') {
    result = 'i';
  } else if (number === '4') {
    result = 'o';
  } else if (number === '5') {
    result = 'u';
  }
  return result;
}

const encode = (code) => {
  let secret = '';
  let letra = '';
  for (let index = 0; index < code.length; index += 1) {
    letra = code[index];
    secret += checkVowels(letra);
  }
  return secret;
}

const decode = (code) => {
  let secret = '';
  let number = '';
  for (let index = 0; index < code.length; index += 1) {
    number = code[index];
    secret += checkNumbers(number);
  }
  return secret;
}

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


// Requisito 4

// Requisito 5

const techList = (array, name) => { 
  let finalArray = [];
  let nome = name;
  let ordernado = array.sort(); 
  if (array.length !== 0) { 
    for (let index = 0; index < ordernado.length; index += 1) { 
      finalArray.push({ tech: ordernado[index], name: nome }); 
    }
    return finalArray;
  } return 'Vazio!'; 
}

describe('Requisito 5', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Requisito 5