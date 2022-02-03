const a = 5;
const b = 3;
const c = 7;

/* Primeiro programa */
let adicao = a + b;
let substr = a - b;
let mult = a * b;
let div = a / b;
let modulo = a % b;

/* Primeiro programa */

/* Segundo programa */

if (a > b) {
  console.log(a);
}
else if(a = b) {
  console.log(a = b);
}
else {
  console.log(b);
}

/* Segundo programa */

/* Terceiro programa */

if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else if (c > a && c > b) {
  console.log(c);
}
else {
  console.log('Erro!');
}

/* Terceiro programa */

/* Quarto programa */

const d = -23;

if (d > 0) {
  console.log('Positive');
}
else if (d < 0) {
  console.log('Negative');
}
else {
  console.log('Zero')
}

/* Quarto programa */

/* Quinto programa */

const alfa = 40;
const beta = 30;
const gama = 110;

if (alfa < 0 || beta < 0 || gama < 0) {
  if (alfa < 0) {
    console.log('Ângulo alfa menor que zero, logo é inválido.');
  }
  else if (beta < 0) {
    console.log('Ângulo beta menor que zero, logo é inválido.');
  }
  else if (gama < 0) {
    console.log('Ângulo gama menor que zero, logo é inválido.');
  }
}
else {
  if (alfa + beta + gama == 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

/* Quinto programa */

/* Sexto programa */

let entrada = 'bishop';
let peca = entrada.toLowerCase();

switch (peca) {
  case 'pawn':
    console.log('At the first move is allowed to move one or two steps, then just one step. Forward and takes digonaly.');
  break;
  case 'Rook':
    console.log('Vertically and horizontally. As many as it is possible.')
  break;
  case 'Knight':
    console.log('Two steps in one direction and one in another, it can jump over other pieces. Remebers a "L".');
  case 'bishop':
    console.log('Diagonals. As many as it is possible.');
  break;
  case 'Queen':
    console.log('Diagonally, vertically and horizontally. As many as it is possible.')
  break;
  case 'King':
    console.log('Diagonally, vertically and horizontally. One step.')
  break;
  default:
    console.log('Inválido.');
  break;  
}

/* Sexto programa */

/* Sétimo programa */

let nota = 100;
if (nota < 100 && nota > 0) {
  if (nota >= 90) {
    console.log('A');
  }
  else if (nota < 90 && nota >= 80) {
    console.log('B');
  }
  else if (nota < 80 && nota >= 70) {
    console.log('C');
  }
  else if (nota < 70 && nota >= 60) {
    console.log('D');
  }
  else if (nota < 60 && nota >= 50) {
    console.log('E');
  }
  else {
    console.log('F');
  }
}
else {
  console.log('Erro! Nota passada fora do escopo.')
}

/* Sétimo programa */

/* Oitavo programa */

const num1 = 3;
const num2 = 2;
const num3 = 5;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
}
else {
  console.log(false);
}

/* Oitavo programa */

/* Nono programa */

const num4 = 1;
const num5 = 7;
const num6 = 8;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
  console.log(true);
}
else {
  console.log(false);
}

/* Nono programa */

/* Décimo programa */

const val1 = 7;
const val2 = 10;

if (val1 < 0 || val2 < 0) {
  if(val1 < 0 && val2 >= 0) {
    console.log('Valor do Custo negativo!');
  }
  else if (val2 < 0 &&  val1 >= 0) {
    console.log('Valor da Venda negativo!');
  }
  else {
  console.log('Erro! Produto com ambos valores negativos');
  }
}

let lucroMil = (val2 - val1 * 1.2) * 1000;
console.log(lucroMil);

/* Décimo programa */

/* Décimo primeiro programa */

let salary = 3000.0;

if (salary <= 1556.94) {
  inss = salary * 0.08; 
}
else if (salary >= 1556.95 && salary <= 2594.92) {
  inss = salary * 0.09;
}  
else if (salary >= 2594.93 && salary <= 5189.82) {
  inss = salary * 0.11;
}
else if (salary > 5189.82) {
  inss = 570.88;
}

salary -= inss;

if (salary >= 1903.99 && salary <=2826.65) {
  ir = salary * 0.075 - 142.8;
}
else if (salary >= 2826.66 && salary <= 3751.05) {
  ir = salary * 0.15 - 354.8;
}
else if (salary >= 3751.06 && salary <=4664.68) {
  ir = salary * 0.225 - 636.13;
}
else if (salary > 4664.68){
  ir = salary * 0.275 - 869.36;
}

salary -= ir;


console.log(inss);
console.log(ir);
console.log(salary);

/* Décimo primeiro programa */
