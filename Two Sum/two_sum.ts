function twoSum(nums: number[], target: number): number[] {
  const indeces: number[] = [];

  for (let i: number = 0; i <= nums.length; i++) {
    for (let j: number = i; j <= nums.length; j++) {
      if (i === j) continue;

      if (target === nums[i] + nums[j]) indeces.push(i, j);
      
    }
  }

  return indeces;
}
