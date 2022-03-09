// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const signUpEmployee = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto: nomeCompleto, email: `${email}@trybe.com`}
};

const newEmployees = () => {
  const employees = {
    id1: signUpEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: signUpEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: signUpEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const check = (Number1, Number2) => {
  return Number1 === Number2
};

const randomNumber = (chosenNumber, func) => {
  let Number1;
  let Number2;
  Number1 = Math.ceil(Math.random() * 5);
  Number2 = chosenNumber;
  if (check(Number1, Number2)) {
    return `Parabéns você ganhou. Números: sorteado ${Number1} e escolhido ${Number2}`;
  } return `Tente novamente. Números: sorteado ${Number1} e escolhido ${Number2}`;
};

console.log(randomNumber(3, check));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (array1, array2) => {
  let totalPoints = 0;
  let rightAnswersCounter = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      totalPoints += 1;
      rightAnswersCounter += 1;
    } else if (array2[index] === 'N.A') {
      totalPoints += 0;
    } else {
      totalPoints -= 0.5;
    }
  }
  return rightAnswersCounter;
};

const finalNote = (array1, array2, func) => `${func(array1, array2)} questoes corretas.`;

console.log(finalNote(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));