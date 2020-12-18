/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.some(item => item >= target)) {
        return nums.findIndex(item => item >= target)
    }
         return nums.length 
  };