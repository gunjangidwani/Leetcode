/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [];
  function checkIfSelf(num) {
    return String(num)
      .split("")
      .every(item => num % Number(item) == 0);
  }
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      result.push(i);
    } else if (checkIfSelf(i)) {
      result.push(i);
    }
  }

  return result;
};
