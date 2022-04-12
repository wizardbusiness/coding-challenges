/*
Write a function 'subsetSum' that is given an array of integers and a target number. It should return
true if there is a subset of the array that sums up to the target and return false otherwise.
A subset can be any size and the elements do not have to appear consecutively in the array.

Examples:
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
subsetSum([1, 2], 1)         -> true
subsetSum([1], 2) -> false
*/

// overall problem: combination problem. Find if any combinations of numbers equals the target. numbers do not need to be next to each other.
// simplest cases:
// if array has 1 number, and that number equals the target, return true.

// depending on the number of elements in the array, there will be different patterns
// for adding different combinations. find what those patterns have in common.

// [1, 2] -> [1], [2], [1 + 2]
// patterns:
// -single elements.
// -all elements added together.

// [1, 2, 3] -> [1 + 2], [1 + 3], [2 + 3]
// new patterns:
// - 1st two elements added together.
// - 1st and last elements added together.
// - 2nd and last elements added together.

// [3, 7, 4, 2] -> [3 + 4], [7 + 2]
// new patterns:
// -1st and 3rd elements added together.
// -2nd and 3rd elements added together.
// -all but 1st elements added together.
// -all but 2nd elements added together.
// -all but 3rd elements added together.
// -all but 4th elements added together.




// all patterns for [1, 2, 3, 4];
// -single elements: 1,2,3,4

// -1st 2 elements added together: 1+2
// -1st and 3rd elements added together: 1+3
// -1st and last elements added together: 1+4
// -2nd and 3rd elements added together: 2+3
// -2nd and last elements added together: 2+4
// -3rd and 4th elements added together: 3+4

// -all but 1st elements added together: 2+3+4
// -all but 2nd elements added together: 1+3+4
// -all but 3rd elements added together: 1+2+4
// -all but 4th elements added together: 1+2+3

// -all elements added together: 1+2+3+4

// each element is combod:
// 1st: 8
// 2nd: 8
// 3rd: 8
// 4th: 8
// 15 total combos

// patterns w/ 1st element. '*'denotes shared combo
// [1, 2, 3, 4]
// iterating through single elements.
// 1*
// adding 2 elements together. skipping one more element between elements per iteration.
// 1+2*
// 1+3
// 1+4
// adding 3 elements together. skipping one more element per iteration.
// 1+2+3*
// 1+2+4
// 1+3+4
// add additional element to each sum per iteration. skipping no elements per iteration.
// 1*
// 1+2*
// 1+2+3*
// 1+2+3+4

// combos not obtainable with 'add aditional element per iteration' method.
// 1+3
// 1+4
// 1+2+4
// 1+3+4

// model: skip process.
// hold current element(1).
// skip all other elements -> 1
// skip elements except 2nd -> 1+2
// skip elements except 3rd -> 1+3
// skip elements except 4th -> 1+4
// generalized -> skip all but one element.
// skip elements except 2nd and 3rd -> 1+2+3
// skip elements except 3rd and 4th-> 1+3+4
// generalized -> skip all but two elements.
// !! skip elements except 2nd and 4th-> 1+2+4 !!
// skip elements except 2nd 3rd and 4th-> 1+2+3+4


// skip model generalized, with narrowing band widths. :
// hold current element. create a band with a width of length of the array.
// when band width covers all elements, start over. create a new band with a width of one.

// n chooose n and then solve for each result. aaaaah!


// keep every element
// skip process evaluation:
// models all elements.
// does creating progressively narrower bands and iterating through all combos.
// hurdles:
// -hold one element static, iterate through rest.
// -skip all elements but one while iterating.
// -skip all elements but two while iterating.
// -skip all elements but three while iterating.
// -skip alternate elements.
// -skip oddly patterned elements.
// how is addition of elements NOT being skipped modeled?

function subsetSumSkip(arr, target) {
  let sumCache = [];
  // iterate through input array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) sumCache.push(arr[0] + arr[i]);
  }
  return sumCache
}

console.log(subsetSumSkip([1, 2, 3]));
