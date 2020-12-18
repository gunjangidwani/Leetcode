/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ").filter(item => item.length > 0);
    if (arr.length === 0){
      return ""
    }  
    return arr[arr.length - 1].length
  };