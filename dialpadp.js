const dialpad = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
  0: " ",
};
function getMessage(str) {
  let ans = "";
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      if (str[i] == 7 || (str[i] == 9 && count < 3)) {
        count++;
      } else if (count < 2) {
        count++;
      } else {
        if (str[i - 1] in dialpad) {
          if (str[i - 1] == 0) {
            for (let i = 0; i < count; i++) {
              ans += " ";
            }
            count = 0;
          } else {
            const char = dialpad[str[i - 1]];
            ans += char[count];
            count = 0;
          }
        }
      }
    } else {
      if (str[i - 1] in dialpad) {
        if (str[i - 1] == 0) {
          for (let i = 0; i < count; i++) {
            ans += " ";
          }
          count = 0;
        } else {
          const char = dialpad[str[i - 1]];
          ans += char[count];
          count = 0;
        }
      }
    }
  }
  if (count > 0) {
    if (str[str.length - 1] == 0) {
      for (let i = 0; i < count; i++) {
        ans += " ";
      }
    } else {
      const char = dialpad[str[str.length - 1]];
      ans += char[count];
    }
  }
  console.log(ans);
}

getMessage("00400004111133555500005566600");
