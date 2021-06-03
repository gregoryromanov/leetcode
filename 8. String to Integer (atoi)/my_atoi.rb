def my_atoi(s)
  allow_chars = /[+-]/
  nums = /[0-9]/

  result = s.enum_for(:each_char).with_index.inject('') do |acc, (n, i)|
    case
    when acc.empty? && n == ' '; acc  
    when acc.empty? && n =~ allow_chars && s[i + 1] =~ nums; acc += n
    when n =~ nums; acc += n
    else break acc
    end
  end.to_i

  case 
  when result < -2 ** 31; -2 ** 31
  when result > 2 ** 31 - 1; 2 ** 31 - 1
  else result 
  end
end

def my_atoi(s)
  result = s.to_i

  case 
  when result < -2 ** 31; -2 ** 31
  when result > 2 ** 31 - 1; 2 ** 31 - 1
  else result 
  end
end

pp my_atoi '42'
pp my_atoi '   -42ww 32'
pp my_atoi '-w'
pp my_atoi '4193 with words'
pp my_atoi 'words and 987'
pp my_atoi '-91283472332'
pp my_atoi '91283472332'
pp my_atoi '21474836460'
