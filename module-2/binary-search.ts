function binarySeach(nums: number[], value: number) {
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

console.log(binarySeach([1, 2, 3, 4, 5], 7));
