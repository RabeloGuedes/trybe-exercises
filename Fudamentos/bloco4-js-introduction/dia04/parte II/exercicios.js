// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(palavra) {
    let reversa = palavra.split('').reverse().join('');
    if (palavra === reversa) {
      return true;
    }
    return false;
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maior(array) {
  let maiorIndex = 0;
  let maiorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[maiorIndex] < array[index]) {
      maiorIndex = index;
      maiorNumero = array[index];
    }
  }
  return maiorIndex + ' e ' + maiorNumero;
}
console.log(maior([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menor(array) {
  let menorIndex = 0;
  let menorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[menorIndex] > array[index]) {
      menorIndex = index;
      menorNumero = array[index];
    }
  }
  return menorIndex + ' e ' + menorNumero;
}
console.log(menor([2, 4, 6, 7, 10, 0, -3]));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function longestName(array) {
  let maiorNome = '';
  for (let index in array){
      if (array[index].length > maiorNome.length) {
        maiorNome = array[index];
    }
  } 
  return maiorNome;
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostFrequently(array) {
  let countNum = 0;
  let countRepitido = 0;
  let indexNumeroRepitido = 0;
  for (let index in array) {
    let numero = array[index];
    for (let index2 in array) {
      if (numero == array[index2]) {
        countNum += 1;
      }
    }
    if (countNum > countRepitido) {
      countRepitido = countNum;
      indexNumeroRepitido = index;
    }
    countNum = 0;
  }
  return array[indexNumeroRepitido];
}

console.log(mostFrequently([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(n) {
  let total = 0;
  for (let index = 1; index <= n; index += 1) {
    total += index;
  }
  return total;
} 

console.log(somatorio(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, string) {
  let reverseString = string.split('').reverse().join('');
  let reverseWord = word.split('').reverse().join('');
  let compareWord = '';
  for (let index = 0; index < string.length; index += 1) {
    compareWord += word[index];
  }
  if (compareWord === reverseString) {
    return true;
  }
  return reverseWord;
}
console.log(verificaFimPalavra('trybe', 'be'));