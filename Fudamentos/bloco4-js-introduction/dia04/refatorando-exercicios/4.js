function positiveNegative(a) {
  if (a > 0) {
    return 'positive';
  }
  else if (a < 0) {
    return 'negative';
  }
}

console.log(positiveNegative(10));
console.log(positiveNegative(-7));