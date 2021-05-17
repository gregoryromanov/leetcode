s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
s4 = " ad"

def length_of_longest_substring(s)
  streak = 0
  hash = Hash.new
  i = 0

  s.each_char do |char|
    hash = hash.select &-> k,v { v > hash[char] } if hash.include?(char)
    hash[char] = i
    streak = hash.size if hash.size > streak
    i += 1
  end
  
  streak
end

pp length_of_longest_substring s1
pp length_of_longest_substring s2
pp length_of_longest_substring s3
pp length_of_longest_substring s4


