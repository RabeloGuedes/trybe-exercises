// Parte I
// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
testingScope(false);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
{/* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */}
{/* Copie o código abaixo. */}


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenate = (array) => array.sort((a, b) => a - b);

console.log(`Os números ${ordenate(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
//1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
//2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

const factorial = (number) => {
  let total = 1;
  for (let index = 1; index <= number; index += 1) {
    total *= index;
  }
  return total;
}

console.log(factorial(6));

const longestWord = (string) => {
  let longest = '';
  const array = string.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    array[index].length > longest.length ? longest = array[index]: '';
    }
    return `A maior palavra encontrada é '${longest}'.`;
  }

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('button');
let clickCount = 0;
const paragraph = document.querySelector('p');
document.body.appendChild(paragraph);

button.addEventListener('click', () => {
  clickCount += 1;
  paragraph.innerText = `Número de cliques: ${clickCount}`;
});

// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const changeX = (string) => {
  const phrase = 'Bora Trybers, x';
  const array = phrase.split(' ');
  let newPhrase = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] !== 'x') {
      newPhrase += `${array[index]} `;
    } else {
      newPhrase += string;
    }
  }
  return newPhrase;
}

const firstFunctionResult = changeX('VQV');

const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'Terminal'];

const secondFunction = (result) => {
  console.log(`${firstFunctionResult}! Minhas cinco principais habilidades são:`);
  for (let index = 0; index < skills.length; index += 1) {
    console.log(skills[index]);
  }
}

secondFunction(firstFunctionResult);