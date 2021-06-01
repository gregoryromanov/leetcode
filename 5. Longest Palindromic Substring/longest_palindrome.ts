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


function longestPalindrome2(s: string): string {
  s = '#' + s.split('').join('#') + '#';
  const p: number[] = [];

  let center: number = 0;
  let right: number = 0;
  let max_i: number = 0;

  for (let i: number = 0; i < s.length; i++) {
     p[i] = (i < right) ? Math.min(p[center * 2 - i], right - i) : 0;

    let l: number =  i - 1 - p[i];
    let r: number = i + 1 + p[i];

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      p[i]++;
      l--;
      r++;
    }

    if (p[i] + i > right) {
      center = i;
      right = p[i] + i;
      if (p[center] > p[max_i]) max_i = center;
    }
  }

  return (s.slice(max_i - p[max_i], max_i + p[max_i] + 1)).replace(/#/g, '');
}


