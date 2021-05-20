function lengthOfLongestSubstring(s: string): number {
  let streak: number = 0;
  let i = 0;
  let map = new Map<string, number>();

  for (let char of s) {
    if (map.has(char)) {
      let char_i: number | undefined = map.get(char);
      if (char_i) {
        for (let [k, v] of map.entries()) {
          if (v < char_i) map.delete(k);
        }
      }
    }

    map.set(char, i);
    if (streak < map.size) streak = map.size;
    i++;
  }

  return streak;
};

const s1: string = "abcabcbb";
const s2: string = "bbbbb";
const s3: string = "pwwkew";
const s4: string = "";
const s5: string = "dvdf";

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
console.log(lengthOfLongestSubstring(s5));
