def convert(s, num_rows)
  return s if num_rows == 1

  rows = [''] * num_rows
  row = 0
  up = true

  s.each_char do |char|
    rows[row] += char
    row = up ? row + 1 : row - 1
    up = false if  row == num_rows - 1
    up = true if row == 0
  end

  rows.join ''  
end

pp convert 'PAYPALISHIRING', 3 # PAHNAPLSIIGYIR
pp convert 'PAYPALISHIRING', 4 # PINALSIGYAHRPI

