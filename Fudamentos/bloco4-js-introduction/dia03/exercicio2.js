let word = 'trybe';
let size = word.length - 1;
let nova = ''; 
for (index = size ; index >= 0; index -= 1) {
  nova += word[index];
}

console.log(nova);
