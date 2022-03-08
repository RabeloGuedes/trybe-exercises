// Requisito 1

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Requisito 1

// Requisito 2

const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Requisito 2

// Requisito 3

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

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

// Requisito 5

// Requisito 6

const hydrate = (string) => { 
  let numbers = string.match(/\d+/g);
  let total = 0;
  for (let number of numbers) {
    total += parseInt(number, 10);
  }
  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
}

// Requisito 6


module.exports = {
  hydrate,
  techList,
  encode,
  decode,
  myFizzBuzz,
  myRemove,
  sum
};