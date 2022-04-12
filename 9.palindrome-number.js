/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// string solution.
// const isPalindrome = function(x) {
//   const xReversed = Number(x.toString().split('').reverse().join(''));
//   console.log(xReversed)
//   if (x === xReversed) return true;
//   else return false;
// };


const isPalindrome = function(x) {
  // if the input number is negative, it isn't a palindrome. 
  if (x < 0) return false
  // store digits in array for checking.
  const digits = [];
  // isolate digits
  while (x > 0) {
    let isolate = x % 10;
    console.log(isolate)
    digits.push(isolate);
    x = Math.floor(x / 10);
    // isolate = x % 10;
  }
  // check for symmetry. 
  while (digits.length) {
    if (digits[0] !== digits[digits.length - 1]) return false
    digits.shift();
    digits.pop();
  }

  return true;
}

console.log(isPalindrome(123))

// 1000030001
// @lc code=end

