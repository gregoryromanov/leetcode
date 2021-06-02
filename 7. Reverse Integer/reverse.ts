function reverse(x: number): number {
  x = (x < 0) ? toNumber(`${x}`.slice(1), '-') : toNumber(`${x}`, '')
  
  return (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) ? 0 : x;
};

function toNumber(s: string, cb: string): number {
  return Number(Array.prototype.reduceRight.call(s, (acc, n) => acc + n, cb));
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));


function reverse2(x: number): number {
  if (x < 0) {
    x = Number('-' + String(x).split('').slice(1).reverse().join(''))
  } else {
    x = Number(String(x).split('').reverse().join(''))
  }
  
  return (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) ? 0 : x;
};
