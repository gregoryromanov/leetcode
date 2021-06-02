def reverse(x)
  x = x < 0 ? ('-' + x.to_s[1..-1].reverse).to_i : x.to_s.reverse.to_i

  (x < -2**31 || x > 2**31 - 1 ) ? 0 : x
end

pp reverse 123
pp reverse -123
pp reverse 120
pp reverse 1534236469
