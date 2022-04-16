/*
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/


// create subArrays.
// for each number, create a subarray with progressively more numbers from array.
// remove the previous numbers from the array.

// problem: didn't work for sets of purely negative numbers.
// solution: fixed by setting lgstSum to negative infinity.

// problem: ran out of memory on leetcode test on 1k digits array.
// tried: switching subarray creation from recursive to iterative.
// result: didn't speed up algorithm solve time.

// tried: integrating subarray creation and sum test so that subarrays are
// not cached before testing.
// result: optimized runtime for 1k digit array from 3.3 seconds to .572 seconds.
// Ran out of time on leetcode tst on 10k digit array. took 3 mins 35 secs

// tried: ommitting subarrays beginning and ending with a negative number from reduce process.
// result: 10k digit array took 2 mins 54 secs.

// tried: going back to caching arrays, but only ones that
// don't start or end with negative values.
// result: didn't work, ran out of memory again on 10k digit array.

// tried: during while loop, don't use shift to shorten the array, instead keep
// array intact and use indexOf to keep track of subarray position.
// result: took 61 seconds on 10k digit array.


// tried: taking reduce out of while loop, accomplished by making function recursive.
// result: call stack exceeded on 10k digit array. tons of empty subarrays from smaller inputs.

// tried: optimizing subarray creation to not create empty subarrays.
// result: call stack exceeded on 10k digit array.


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
//
// // console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))
//
// const maxSubArray = (nums, index = 0) => {
//   if (nums.length === 1) return nums[0];
//   // cache largest total (so far). Set so that any number will replace initial val.
//   let lgstSum= -Infinity;
//   while (nums.length > 0) {
//     nums.forEach((num) => {
//       const subArray = nums.slice(0, index + 1)
//       console.log(subArray)
//         if (subArray.length === 1 && subArray[0] > lgstSum) lgstSum = subArray[0];
//         else if (subArray.length > 1 &&
//                  subArray[subArray.length - 1] > 0 &&
//                   subArray[0] > 0) {
//           const subSum = subArray.reduce((sum, num) => {
//             sum += num;
//             return sum;
//           })
//           if (subSum > lgstSum) lgstSum = subSum;
//         }
//       index++;
//     });
//     nums.shift();
//     index = 0
//   }
//   return lgstSum
// }
// console.log(maxSubArray([1, 2, 3, 4]))

const maxSubArray = (nums, index = 0, subIndex = 0, currentSubArray = [], lgstSum = -Infinity) => {
  // console.log(lgstSum)
  if (nums.length === 1) return nums[0];
  if (index === nums.length) return lgstSum
  // cache largest total (so far). Set so that any number will replace initial val.
  if (currentSubArray.length === 1 && currentSubArray[0] > lgstSum) lgstSum = currentSubArray[0];
  if (currentSubArray.length > 1 &&
      currentSubArray[currentSubArray.length - 1] > 0 &&
      currentSubArray[0] > 0) {
    const subSum = currentSubArray.reduce((sum, num) => {
      sum += num;
      return sum;
    });
    if (subSum > lgstSum) lgstSum = subSum;

  }
    nums.forEach((num) => {
      console.log(currentSubArray);
      currentSubArray = nums.slice(index, index + subIndex + 1);
      if (index + subIndex + 1 < nums.length) subIndex++;
      else subIndex = 0;
      // console.log(index)
      // console.log(subIndex)
    });
    // subIndex = 0;
  return maxSubArray(nums, index + 1, subIndex, currentSubArray, lgstSum)
}

// console.log(maxSubArray([1, 22, -3, 4]))

// create an array of n random numbers, including negative numbers.

const constructArray = (arrayLength) => {
    const output = [];
    while (arrayLength > 0) {
      let rndNum;
      if (Math.random() < .5) {
        rndNum = Math.floor(Math.random() * 100);
        output.push(rndNum);
      } else if (Math.random() > .5) {
        rndNum = Math.floor(Math.random() * -100);
        output.push(rndNum);
      }
      arrayLength--;
    }
    return output;
  }

const arr100 = constructArray(100);
// const arr1000 = constructArray(1000);
// const arr10000 = constructArray(10000);

// console.log(arr100)
const arr = [1, 2, 3];
// console.log(maxSubArray(arr))
console.log(maxSubArray(arr100))
// console.log(maxSubArray(arr1000))
// console.log(maxSubArray(arr10000))
