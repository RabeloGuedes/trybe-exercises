function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  else if (b > a && b > c) {
    return b;
  }
  return c;
}

console.log(maior(3, 5, 7));
console.log(maior(6, 3, 2));
console.log(maior(2, 4, 1));