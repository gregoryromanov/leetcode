function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed_number: number = 0;

  while (x > reversed_number) {
    reversed_number = reversed_number * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversed_number || x === Math.floor(reversed_number / 10);
}


function isPalindrome2(x: number): boolean {
  let s: string = `${x}`;
  let start: number = 0;
  let finish: number = s.length - 1;

  while(start !== finish && start < finish) {
    if (s[start] === s[finish]) {
      start++;
      finish--;
    } else {
      return false
    }
  }
  return true;
};

function isPalindrome3(x: number): boolean {
  let s: string = `${x}`;
  return s === s.split('').reverse().join('')
};


function isPalindrome4(x: number): boolean {
  let s: string = `${x}`;
  let s2: string = '';
  for (let char of s) s2 = char + s2;

  return s === s2;
};


function isPalindrome5(x: number): boolean {
  let s: string = `${x}`;
  
  return s === Array.prototype.reduceRight.call(s, (acc, n) => acc + n, '')
};


console.log(isPalindrome(1111));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
