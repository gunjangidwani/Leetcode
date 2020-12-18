/**
 * @param {number} num
 * @return {number}
 */

var helper = function (num, arr) {
    arr.push(num)
    if (num <= 1){
        return
    }else{
    if (num % 2 === 0){
    return  helper(Math.floor(num / 2), arr)
        } else {
    return helper(num - 1, arr)
        }
    }
};
        
var numberOfSteps  = function(num) {    
    if(num == 0) {
        return 0;
    }
    let list = [];
    helper(num, list)
    return list.length
};

