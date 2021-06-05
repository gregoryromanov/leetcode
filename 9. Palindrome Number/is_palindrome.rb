def is_palindrome(x)
  "#{x}" == "#{x}".reverse
end

def is_palindrome(x)
  s = "#{x}"
  start = 0
  finish = s.size - 1

  while start != finish && start < finish
    if s[start] == s[finish]
      start += 1
      finish -= 1
    else return false
    end
  end
  
  true
end

pp is_palindrome 121
pp is_palindrome 11111
pp is_palindrome -121
pp is_palindrome 10
pp is_palindrome -101


