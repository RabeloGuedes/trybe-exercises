let maiorPrimo = 0;

for (var index = 0; index <= 50; index += 1) {
  let primo = true;
  for (var index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 == 0) {
      primo = false;
    }
  }
  if(primo && index != 0 && index != 1) {
    maiorPrimo = index;
  }
}
console.log(maiorPrimo);