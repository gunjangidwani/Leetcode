/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort();
  let mostNum = { num: nums[0], count: 0 };
  let currentNum = { num: nums[0], count: 0 };
  for (let i = 0; i < nums.length; i++) {
    if (currentNum.num == nums[i]) {
      currentNum.count += 1;
    } else {
      if (mostNum.count < currentNum.count) {
        mostNum = { ...currentNum };
      }
      currentNum.num = nums[i];
      currentNum.count = 1;
    }
  }
  if (mostNum.count < currentNum.count) {
    return currentNum.num;
  } else {
    return mostNum.num;
  }
};

console.log(majorityElement([3, 2, 3]));
