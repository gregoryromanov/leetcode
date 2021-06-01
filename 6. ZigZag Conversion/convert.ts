function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let rows: string[] = new Array(numRows).fill('');
  let row: number = 0;
  let up: boolean = true;

  for (let char of s) {
    rows[row] += char;
    row = up ? row + 1 : row - 1;
    if (row === 0) up = true;
    if (row === numRows - 1) up = false;
  }

  return rows.join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 1));
console.log(convert('PAYPALISHIRING', 4));
