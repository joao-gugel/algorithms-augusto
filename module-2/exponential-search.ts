// Time complexity -> O(log n)
// Space complexity -> O(1)

function binarySearch2(nums: number[], value: number) {
  let lower = 0;
  let higher = nums.length;

  while (lower < higher) {
    let middle = Math.floor((lower + higher) / 2);

    if (nums[middle] === value) {
      return middle;
    } else if (nums[middle] < value) {
      lower = middle + 1;
    } else {
      higher = middle - 1;
    }
  }
  return -1;
}

function exponentialSearch(nums: number[], target: number) {
  if (nums[0] === target) return 0;

  let n = nums.length;
  let i = 1;

  while (i < n && nums[i] < target) {
    i *= 2;
  }

  if (nums[i] === target) return i;

  return binarySearch2(nums.slice(i / 2, Math.min(i, n)), target) + i / 2;
}

console.log(
  exponentialSearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    17
  )
);
