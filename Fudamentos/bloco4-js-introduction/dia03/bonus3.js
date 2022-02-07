let n = 8;
let position = n;
let asterisk = '*';
let line = '';


for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < position) {
      line = line + ' ';
    } else {
      line = line + asterisk;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};