let n = 7;
let center = (n + 1) / 2;
let right = center;
let left = center;
let asterisk = '*';


for (let x = 1; x <= center; x += 1) {
  let line = '';
  for (let y = 1; y <= n; y += 1) {
    if (y == right || y == left || x == center) {
      line += asterisk;
    } else {
      line += ' ';
    }
  }
  right += 1;
  left -= 1;
  console.log(line);
};