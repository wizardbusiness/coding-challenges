/*
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/


// create subarrays.
// for each number, create a subarray with progressively more numbers from array.
// remove the previous numbers from the array.

// problems: didn't work for sets of purely negative numbers. fixed by setting
// lgstSum to negative infinity.

// ran out of memory on leetcode test.
// tried to fix by switching subarray creation from recursive to iterative.
// next step: integrate subarray creation and sum test so that subarrays are
// discarded if their sum is smaller than the current value of lgstSum.

// const makeSubarrays = (nums, index = 0, arrOfArrs = []) => {
//   while (nums.length > 0) {
//   // if (nums.length === 0) return arrOfArrs;
//   nums.forEach((num) => {
//     const subarr = nums.slice(0, index + 1)
//     index++
//     arrOfArrs.push(subarr)
//   });
//   nums.shift();
//   index = 0
//   // return makeSubarrays(nums, index = 0, arrOfArrs)
//   }
//   return arrOfArrs
// }
//
// const maxSubarray = (nums) => {
//   if (nums.length === 1) return nums[0];
//   // cache largest total
//   let lgstSum= -Infinity
//   const subarrays = makeSubarrays(nums)
//
//   // loop through subarrays
//   for (let i = 0; i < subarrays.length; i++) {
//     const subarray = subarrays[i]
//     // console.log(subarray)
//     if (subarray.length === 1 && subarray[0] > lgstSum) lgstSum = subarray[0];
//     else if (subarray.length > 1) {
//       const subsum = subarray.reduce((sum, num) => {
//         sum += num;
//         return sum;
//       })
//       if (subsum > lgstSum) lgstSum = subsum;
//     }
//   }
//   return lgstSum
// }

// console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))

const maxSubArrays = (nums, index = 0, arrOfArrs = []) => {
  if (nums.length === 1) return nums[0];
  // cache largest total (so far). Set so that any number will replace initial val.
  let lgstSum= -Infinity;
  while (nums.length > 0) {
    nums.forEach((num) => {
      const subarray = nums.slice(0, index + 1)
        if (subarray.length === 1 && subarray[0] > lgstSum) lgstSum = subarray[0];
        else if (subarray.length > 1) {
          const subsum = subarray.reduce((sum, num) => {
            sum += num;
            return sum;
          })
          if (subsum > lgstSum) lgstSum = subsum;
        }
      index++;
    });
    nums.shift();
    index = 0
  // return makeSubarrays(nums, index = 0, arrOfArrs)
  }
  return lgstSum
}

console.log(maxSubArrays([1,2, 3]))
