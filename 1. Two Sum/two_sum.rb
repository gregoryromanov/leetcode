def two_sum(nums, target)
  indeces = []
  step = 0

  while indeces.empty? && step != nums.size
    nums[(step + 1)..-1].each_with_index do |num, i|
 
      if target == (nums[step] + num)
       indeces << step << (i + step + 1)
      end
    end

    step += 1
  end

  indeces
end


def two_sum(nums, target)
  nums.each_with_index do |x, i|
    nums.each_with_index do |y, j|
      next if i == j

      return [i, j] if target == x + y
    end
  end
end

def two_sum(nums, target)
  hash = Hash.new
  
  nums.each_with_index &-> n, i { hash[n] = i }

  nums.each_with_index do |n, i|
    difference = target - n

    return [i, hash[difference]] if hash.include?(difference) && i != hash[difference]
  end
end

def two_sum(nums, target)
  hash = Hash.new

  nums.each_with_index do |n, i|
    difference = target - n

    return [i, hash[difference]] if hash.include? difference

    hash[n] = i
  end
end
