function triangle(a, b, c) {
  if(a < 0 || b < 0 || c < 0) {
    return 'Erro, ângulo negativo!';
  }
  else {
    if(a + b + c == 180) {
      return true;
    }
    return false;
  }
}

console.log(triangle(30, 60, 90));
console.log(triangle(29, 60, 90));
console.log(triangle(31, 60, 90));
console.log(triangle(-90, 40, 50));
console.log(triangle(-90, -40, 50));
console.log(triangle(-90, -40, -50));
console.log(triangle(90, -40, -50));
console.log(triangle(90, 40, -50));
console.log(triangle(-90, 40, -50));

