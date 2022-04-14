/*
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/
// total each subarray
// cache the total. each time a subarray is totaled, compare it to the cache.
//if the new total is greater, replace the cache.

// console.log(maxSubarray([[-2, 1], [-3], [-4], [-1, 2, 1], [-5, 4]]))

// create subarrays.
// for each number, create a subarray with progressively more numbers from array.
// remove the previous numbers from the array.
const makeSubarrays = (nums, index = 0, arrOfArrs = []) => {
  if (nums.length === 0) return arrOfArrs;
  nums.forEach((num) => {
    const subarr = nums.slice(0, index + 1)
    index++
    arrOfArrs.push(subarr)
  });
  nums.shift();
  return makeSubarrays(nums, index = 0, arrOfArrs)
}

const maxSubarray = (nums) => {
  if (nums.length === 1) return nums[0];
  // cache largest total
  let lg = 0;

  const makeSubarrays = (nums, index = 0, arrOfArrs = []) => {
    if (nums.length === 0) return arrOfArrs;
    nums.forEach((num) => {
      const subarr = nums.slice(0, index + 1)
      index++
      arrOfArrs.push(subarr)
    });
    nums.shift();
    return makeSubarrays(nums, index = 0, arrOfArrs)
  }
  const subarrays = makeSubarrays(nums)

  // loop through subarrays
  for (let i = 0; i < subarrays.length; i++) {
    const subarray = subarrays[i]
    // console.log(subarray)
    if (subarray.length === 1 && subarray[0] > lg) lg = subarray[0];
    else if (subarray.length > 1) {
      const subsum = subarray.reduce((sum, num) => {
        sum += num;
        return sum;
      })
      if (subsum > lg) lg = subsum;
    }
  }
  return lg
}
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))

// demonstrate how reduce works.

// const arr = []
// const test = [1, 2, 3, 4].reduce((total, num) => {
//   total += num
//   // will push EACH total for EACH iteration, not just the final one.
//   arr.push(total)
//   return total;
// }, 0);

// console.log(test) // 110
// console.log(arr) // [10]
