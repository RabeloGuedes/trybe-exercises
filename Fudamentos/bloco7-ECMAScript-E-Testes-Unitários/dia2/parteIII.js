const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const modifier = (objeto, chave, valor) => {
  objeto[chave] = valor;
  console.log(objeto);
}

modifier(lesson2, 'turno', 'noite');

//2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const allKeys = (object) => {
  console.log(Object.keys(object));
}

allKeys(lesson1);

//3. Crie uma função para mostrar o tamanho de um objeto.
const size = (object) => {
  console.log(Object.keys(object).length);
}

size(lesson3);

//4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const allValues = (object) => {
  console.log(Object.values(object));
}

allValues(lesson1);

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// const allLessons = Object.assign({}, lesson1);

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
console.log(allLessons);

//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = (object) => {
  console.log(`O número total de estudantes é ${object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes} !`);
}

allStudents(allLessons);

//7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const finder = (object, index) => {
  console.log(`${Object.values(object)[index]}`);
}

finder(lesson1, 0);

//8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const isThere = (object, key, value) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  console.log(keys.includes(key) && values.includes(value));
};

isThere(lesson1, 'materia', 'Matemática');

//Bônus:
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const subject = Object.values(allLessons);

const isMath = (array) => {
  let total = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index].materia === 'Matemática') {
      total += array[index].numeroEstudantes;
    }
  }
  return `O total de alunos que tem matemática é ${total}.`;
}

console.log(isMath(subject));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

const createReport = (array, teacher) => {
  let aulas = [];
  let estudantes = 0;
  let report = {};
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].professor === teacher) {
      aulas.push(array[index].materia);
      estudantes += array[index].numeroEstudantes;
    }
  }
  report.professor = teacher;
  report.aulas = aulas;
  report.estudantes = estudantes;
  console.log(report);
}

createReport(subject, 'Maria Clara');
