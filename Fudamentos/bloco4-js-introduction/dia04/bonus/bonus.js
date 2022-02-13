let numerals = [{
  symbol: 'I',
  value: 1
},
  {
    symbol: 'V',
    value: 5
  },
  {
    symbol: 'X',
    value: 10
  },
  {
    symbol: 'L',
    value: 50
  },
  {
    symbol: 'C',
    value: 100
  },
  {
    symbol: 'D',
    value: 500
  },
  {
    symbol: 'M',
    value: 1000
  }
]

function convertion(string) {
  let numbers = [];
  for (let letter in string) {
    for (let numeral in numerals) {
      if (numerals[numeral]['symbol'] === string[letter]) {
        numbers.push(numerals[numeral]['value']);
      }
    }
  }
  return numbers;
}

function calculate(numbers) {
  let total = 0;
  let atual = 0;
  let proximo = 0;
  for (let number in numbers) {
    atual = numbers[number];
    proximo = numbers[parseInt(number) + 1];
    if (numbers[parseInt(number)] < numbers[parseInt(number) + 1] && number !== numbers.lenght - 1) {
      total += numbers[parseInt(number) + 1] - numbers[parseInt(number)];
    } 
    if (number == numbers.length - 1) {
      total += numbers[parseInt(number)];
    } else {
      total += numbers[parseInt(number)];
    }
  }
  return total;
}

// console.log(calculate(convertion('XXVVI')));
console.log(calculate(convertion('XIX')));

// for (let numeral in numerals) {
//   console.log(numerals[numeral]['symbol'] + ' -> ' + numerals[numeral]['value']);
// }