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
