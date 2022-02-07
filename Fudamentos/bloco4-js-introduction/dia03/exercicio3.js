let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';
for (let index = 0; index < array.length; index += 1) {
    if (index == 0) {
      menor = array[index];
      maior = array[index];
    }
    else if (index != 0) {
      if (array[index].length > maior.length) {
        maior = array[index];
      }
      else if (array[index].length < menor.length) {
        menor = array[index];
      }
  }
}

console.log(menor, maior);