// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => {
  let result;
  list = array.reduce((acc, curr) => `${acc}, ${curr}`,);
  result = `[${list}]`;
  return result;
}

console.log(flatten(arrays));