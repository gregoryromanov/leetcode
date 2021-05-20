def find_median_sorted_arrays(nums1, nums2)
  i_1 = 0
  i_2 = 0
  merged_nums = []
  median = nil

  while true
    if i_1 < nums1.size && i_2 < nums2.size
      if nums1[i_1] < nums2[i_2]
        merged_nums << nums1[i_1]
        i_1 += 1
      elsif nums2[i_2] < nums1[i_1]
        merged_nums << nums2[i_2]
        i_2 += 1
      else
        merged_nums << nums1[i_1] << nums2[i_2]
        i_1 += 1; i_2 += 1 
      end
    else
      nums, i = (i_1 != nums1.size) ? [nums1, i_1] : [nums2, i_2]
      merged_nums = merged_nums + nums[i..-1]

      break 
    end
  end

  middle = merged_nums.size / 2

  if merged_nums.size % 2 == 0
    median = (merged_nums[middle].to_f + merged_nums[middle - 1].to_f) / 2
  else
    median = merged_nums[middle].to_f
  end

  median
end

pp find_median_sorted_arrays [1, 3], [2, 4]
pp find_median_sorted_arrays [1, 3], [2]
pp find_median_sorted_arrays [1], []
pp find_median_sorted_arrays [0], []
pp find_median_sorted_arrays [1, 3], [22, 55]


