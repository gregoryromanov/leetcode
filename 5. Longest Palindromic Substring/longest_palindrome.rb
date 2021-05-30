def longest_palindrome(s)
  return s if s == s.reverse

  longest = s[0]

  0.upto(s.size) do |i|
    content = l_i = r_i = nil
    is_prev, is_next = (i - 1) >= 0, (i + 1 <= s.size)

    if is_next && is_prev
      prv, md, nxt = i - 1, i, i + 1

      case
      when s[prv] == s[nxt]
        content, l_i, r_i = s[prv..nxt], prv, nxt
      when s[md] == s[nxt]
        content, l_i, r_i = s[md..nxt], md, nxt  
      end
    else
      if !is_prev && is_next && s[i] == s[i + 1]
        content = s[i..i + 1]
      elsif is_prev && !is_next && s[i - 1] == s[i]
        content = s[i - 1..i]
      end
    end

    next if content.nil?

    longest = content if content.size > longest.size 

    while !r_i.nil? && r_i != s.size
      next if l_i.nil? && r_i.nil?
      
      case
      when s[l_i] == s[r_i]
        content = s[l_i..r_i] if s[l_i..r_i] == s[l_i..r_i].reverse
        l_i = l_i - 1 >= 0 ? (l_i - 1) : l_i
      when content + s[r_i] == s[r_i] + content.reverse
        content += s[r_i]
      else
        break
      end
      r_i = r_i + 1 <= s.size ? (r_i + 1) : r_i
      longest = content if content.size > longest.size
    end
  end

  longest
end

def longest_palindrome(s)
  return '' if s.nil? || s.size < 1

  start = finish = 0

  0.upto(s.size) do |i|
    len1 = expand_from_center s, i, i
    len2 = expand_from_center s, i, i + 1
    len = len1 > len2 ? len1 : len2

    if len > finish - start 
      start = i - (len - 1) / 2
      finish = i + len / 2
    end
  end

  s[start..finish]
end

def expand_from_center(s, l, r)
  left = l
  right = r

  while left >= 0 && right < s.size && s[left] == s[right]
    left -= 1
    right += 1
  end

  right - left - 1
end


def longest_palindrome(s)
  s = '#' + s.split('').join('#') + '#'
  p = [0] * s.size
  center = right = max_i = 0

  0.upto(s.size - 1) do |i|
    p[i] = [right - i, p[center * 2 - i]].min if i < right
    p[i] += 1 while s[i + 1 + p[i]] == s[i - 1 - p[i]]
    
    if i + p[i] > right
      center = i
      right = i + p[i]
      max_i = center if p[center] > p[max_i]
    end
  end

  s[max_i - p[max_i]..max_i + p[max_i]].gsub '#', ''
end

pp longest_palindrome 'bbbbbqwerty'

# #b#b#b#b#b#q#w#e#r#t#y#
# 00012343210000000000000 # using cache
# 01234543210101010101010
