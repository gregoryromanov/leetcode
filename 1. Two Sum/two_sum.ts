function twoSum(nums: number[], target: number): number[] {
  const indeces: number[] = [];

  for (let i: number = 0; i <= nums.length; i++) {
    for (let j: number = i; j <= nums.length; j++) {
      if (i === j) continue;

      if (target === nums[i] + nums[j]) {
        indeces.push(i, j);
        return indeces;
      }  
    }
  }

  return indeces;
}



function twoSum2(nums: number[], target: number): number[] {
  const indeces: number[] = [];
  const map = new Map<number, number>();

  nums.forEach((n, i) => map.set(n, i));

  for (let i: number = 0; i <= nums.length; i++) {
    let difference: number = target - nums[i];
    if (map.has(difference)) {
      const j: number | undefined = map.get(difference);

      if (j && i !== j) {
        indeces.push(i, j);
        break;
      }
    }
  }

  return indeces;
}

function twoSum3(nums: number[], target: number): number[] {
  const indeces: number[] = [];
  const map = new Map<number, number>();

  for (let i: number = 0; i <= nums.length; i++) {
    let difference: number = target - nums[i];
    if (map.has(difference)) {
      const j: number | undefined = map.get(difference);

      if (typeof j === "number") {
        indeces.push(i, j);
        break;
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return indeces;
}

