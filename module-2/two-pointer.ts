// My solution

function reverseWords(s: string): string {
  const words = s.split(" ");

  let finalString = "";

  words.forEach((word) => {
    for (let i = word.length - 1; i >= 0; i--) {
      finalString += word[i];
    }
    finalString += " ";
  });

  return finalString.trim();
}

console.log(reverseWords("Let's take a break"));

// Augusto Solution -> Two pointers
function reverseWords2(s: string): string {
  let res = "";

  let right = 0;
  let left = 0;

  while (right <= s.length) {
    if (s[right] !== " ") {
      right++;
    } else {
      res += s
        .slice(left, right + 1)
        .split("")
        .reverse()
        .join("");
      right++;
      left = right;
    }
  }

  res += " ";
  res += s.slice(left, right + 2);

  return res.trim();
}

console.log(reverseWords2("Let's take a break"));
