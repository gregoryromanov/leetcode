def longest_palindrome(s)
  longest = s[0]

  return s if s == s.reverse

  s.each_char.with_index do |char, i|
    content = repeat = l_i = r_i = nil
    count = 0

    is_next = (i + 1 <= s.size)
    is_prev = (i - 1) >= 0

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

    longest = content if !content.nil? && content.size >  longest.size 

    next if content.nil?

    while count < 2
  
      count += 1 if repeat == content
      repeat = content

      case
        when !l_i.nil? && !r_i.nil? && s[l_i] == s[r_i]
          content = s[l_i..r_i] if s[l_i..r_i] == s[l_i..r_i].reverse
          longest = content if content.size >  longest.size
          l_i = (l_i - 1 >= 0) ? (l_i - 1) : l_i
          r_i = (r_i + 1 <= s.size) ? (r_i + 1) : r_i

        when !l_i.nil? && !r_i.nil? && s[l_i]  && s[l_i] != s[r_i]
          if content == (s[l_i] + content).reverse
            content = (s[l_i] + content)
            longest = content if content.size >  longest.size
            l_i = (l_i - 1 >= 0) ? (l_i - 1) : l_i
          else
            if "#{content}#{s[r_i]}" == "#{content}#{s[r_i]}".reverse
              content = "#{content}#{s[r_i]}" 
              longest = content if content.size >  longest.size
              r_i = (r_i + 1 <= s.size) ? (r_i + 1) : r_i
            end
          end
        else
          break
        end

        break if l_i == 0 && r_i == s.size
    end
  end

  longest
end
