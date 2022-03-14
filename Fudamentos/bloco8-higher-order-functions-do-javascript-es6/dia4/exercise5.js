// 5 - Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  const string = array.reduce((acc, curr) => acc + curr);
  total = 0;
  for (let letter of string) {
    (letter === 'A' || letter === 'a') ? total += 1 : total += 0
  }
  return total
}

console.log(containsA(names));