//leetcode.com

//1. Two Sum => easy

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums, target) {
  let returnArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let k = i; k < nums.length; k++) {
      if (nums[i] + nums[k] == target && i != k) {
        returnArr.push([i, k]);
      }
    }
  }

  return returnArr;
}

//9. Palindrome Number => easy
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
// Could you solve it without converting the integer to a string?

function checkPalindrome(num) {
  if (num < 0 || num % 1 != 0) return false;

  let valuableNum = num;
  let reverseNum = 0;

  while (true) {
    reverseNum = (num % 10) + reverseNum * 10;
    num = (num / 10 - (num % 10) / 10).toFixed();

    if (num < 1) {
      break;
    }
  }

  if (reverseNum == valuableNum) {
    return true;
  }

  return false;
}

//13. Roman to Integer => easy
// Input: s = "III"
// Output: 3

function romanToInt(s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  // IXLCDM

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      sum -= roman[s[i]];
    } else {
      sum += roman[s[i]];
    }
  }

  return sum;
}

//14. Longest Common Prefix => easy

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  let prefix = "";

  if (strs.length == 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    for (let k = 1; k < strs.length; k++) {
      if (strs[0][i] != strs[k][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }

  return prefix;
}

//20. Valid Parentheses => easy

// Input: s = "()[]{}"
// Output: true

function isValid(s) {
  let characters = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (characters[s[i]]) {
      stack.push(s[i]);
    } else {
      if (characters[stack.pop()] != s[i]) {
        return false;
      }
    }

  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}


//21. Merge Two Sorted Lists => easy

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

