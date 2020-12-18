/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     nums = nums.filter(num => num !== val)
//     return nums
// };


var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            let kari = nums[0];
            nums[0] == nums[i];
            nums[i] = kari;
            nums.shift();
            i--
        }
    }
    return nums.length
}