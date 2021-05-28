function longestPalindrome(s: string): string {
  if (!s) return s;
  let start: number = 0;
  let finish: number = 0;

  for (let i = 0; i < s.length; i++) {
    let len1: number = expandFromCenter(s, i, i);
    let len2: number = expandFromCenter(s, i, i + 1);
    let len: number = len1 > len2 ? len1 : len2;
    
    if (len > finish - start) {
      start = i - (len / 2) + 1;
      finish = i + len / 2;
    }
  }

  return s.slice(start, finish + 1);
}

function expandFromCenter(s: string, l: number, r: number): number {
  let left: number = l;
  let right: number = r;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
