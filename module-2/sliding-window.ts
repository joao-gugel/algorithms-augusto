// It works, but it is not the best solution O(n²)

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) return true;
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([99, 99], 2));

// Augusto Solution

function maximumLengthSubstring(s: string) {
  let l = 0;
  let r = 0;
  let max = 1;

  let counter = {};
  counter[s[0]] = 1;

  while (r < s.length - 1) {
    r++;
    if (counter[s[r]]) counter[s[r]] += 1;
    else counter[s[r]] = 1;

    while (counter[s[r]] === 3) {
      counter[s[l]] -= 1;
      l++;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
}

console.log(maximumLengthSubstring("abbcdeeb"));
