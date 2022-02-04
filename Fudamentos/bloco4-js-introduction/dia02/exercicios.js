let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Primeiro programa*/

 for (num of numbers) {
   console.log(num);
 }

/* Primeiro programa*/

/* Segundo programa*/

 sum = 0;
 for(num of numbers) {
   sum += num;
 }
  console.log(sum);

/* Segundo programa*/

/* Terceiro programa*/
media = sum / numbers.length;
console.log(media);

/* Terceiro programa*/


/* Quarto programa*/

 if(media > 20) {
   console.log('Valor maior que 20.');
 }
 else {
   console.log('Valor menor que 20.');
 }

/* Quarto programa*/

/* Quinto programa*/

 maior = 0;
 for(let index = 0; index < numbers.length; index += 1) {
   if(index == 0) {
     maior = numbers[index];
   }
   else {
     if(numbers[index] > maior) {
       maior = numbers[index];
     }
   }
 }
 console.log('O maior número é: ',maior);

/* Quinto programa*/

/* Sexto programa*/

 num_odds = 0;
 for(num of numbers) {
   if(num % 2 != 0) {
     num_odds += 1;
   }
 }
 if(num_odds != 0) {
   console.log(num_odds, 'números ímpares.');
 }
 else {
   console.log('Nenhum valor ímpar encontrado!');
 }

/* Sexto programa*/

/* Sétimo programa*/

  menor = 0;
  for(let index = 0; index < numbers.length; index += 1) {
    if(index == 0) {
      menor = numbers[index];
    }
    else {
      if(numbers[index] < menor) {
        menor = numbers[index];
      }
   }
 }
 console.log('O menor número é: ',menor)

/* Sétimo programa*/

/* Oitavo programa*/

let numeros = []; 
for(let index = 0; index < 25; index += 1)  {
  numeros.push(index + 1);
}

 console.log(numeros);

/* Oitavo programa*/

/* Nono programa*/

for(num of numeros) {
  console.log(num / 2);
}

/* Nono programa*/

/* Bônus - 1 */

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

/* Bônus - 1 */

/* Bônus - 2 */

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

/* Bônus - 2 */

/* Bônus - 3 */

let newNumbers = [];
for (let index = 0; index <= numbers.length; index += 1) {
  if(index < numbers.length - 1) {
    let antecesor = numbers[index];
    let sucessor = numbers[index + 1];
    let novo = antecesor * sucessor;
    newNumbers.push(novo);
  }
  else if (index == numbers.length) {
    let antecesor = numbers[index - 1];
    let novo = antecesor * 2;
    newNumbers.push(novo);
  }
}

console.log(newNumbers);

/* Bônus - 3 */