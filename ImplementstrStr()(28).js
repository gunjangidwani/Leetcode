/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let answer = haystack.indexOf(needle)
    if(answer >= 0){
      return answer
    }
    return -1
};