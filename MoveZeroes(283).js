/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[counter++] = nums[i]
        }
    }
    for (let k = counter; k < nums.length; k++) {
        nums[k] = 0;
    }
    return nums;
};
