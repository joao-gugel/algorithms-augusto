function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [0, 0];
}

// With hash maps
function twoSum2(nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap[complement]) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [0, 0];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
