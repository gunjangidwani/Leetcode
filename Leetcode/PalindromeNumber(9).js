/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    var num = String(x)
    var len = num.length
    var mid = Math.floor(len / 2)
        for(let i = 0; i < mid; i ++){
            if (num.slice(i, i + 1) != num.slice(len-i-1, len-i)){
                return false
            }
    }
    return true
    };
        
    // if(len === 1){
    //     return true
    // }
    // else{
    //     if(num.slice(0,1) === num.slice(len-1, len)){
    //         return isPalindrome(num.slice(1,len-1))
    //     }else{return false
    //     }
    // }