function myAtoi(s: string): number {
  let result: string | number = '';
  let nums: RegExp = /[0-9]/;
  let allow_chars: RegExp = /[+-]/;

  for (let i = 0; i < s.length; i++) {
    if (result.length === 0 && s[i] === " ") continue;
    else if (
      result.length === 0 &&
      s[i].search(allow_chars) === 0 &&
      s[i + 1]?.search(nums) === 0
    ) {
      result += s[i];
    } else if (s[i].search(nums) === 0) result += s[i];
    else break;
  }

  result = Number(result);

  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
  else if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return result;
}


function myAtoi2(s: string): number {
  let result: number = parseInt(s);
  
  if (isNaN(result)) return 0;

  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
  else if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return result;
};

console.log(myAtoi('21474836460'));
console.log(myAtoi('+'));
console.log(myAtoi('  +  42'));
console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('91283472332'));
