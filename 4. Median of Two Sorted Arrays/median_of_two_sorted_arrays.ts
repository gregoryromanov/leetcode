function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let i_1: number = 0;
  let i_2: number = 0;
  let merged_nums = [];

  while (true) {
    if (i_1 < nums1.length && i_2 < nums2.length) {
      if (nums1[i_1] < nums2[i_2]) {
        merged_nums.push(nums1[i_1]);
        i_1++;
      } else if (nums2[i_2] < nums1[i_1]) {
        merged_nums.push(nums2[i_2]);
        i_2++;
      } else {
        merged_nums.push(nums1[i_1], nums2[i_2]);
        i_1++;
        i_2++;
      }
    } else {
      let [nums, i]: [number[], number] =
        i_1 < nums1.length ? [nums1, i_1] : [nums2, i_2];

      merged_nums.push(...nums.slice(i));

      break;
    }
  }

  let middle: number = Math.floor(merged_nums.length / 2);

  return merged_nums.length % 2 === 0
    ? (merged_nums[middle] + merged_nums[middle - 1]) / 2
    : merged_nums[middle];
}

console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([0], []));
