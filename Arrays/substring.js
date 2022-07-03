// generate all substrings of a string
function substrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log(substrings('abc'));

// longest substring without repeating characters
function longestSubstring(str) {
  let longest = 0;
  let current = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      current = i - start;
      if (current > longest) {
        longest = current;
      }
      start = seen[char] + 1;
    }
    seen[char] = i;
  }
  current = str.length - start;
  return current > longest ? current : longest;
}
console.log(longestSubstring('abcabcbb'));
