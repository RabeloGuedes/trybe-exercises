let n = 8;
let asterisk = '* ';
let line = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  line = line + asterisk;
}

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(line);
}