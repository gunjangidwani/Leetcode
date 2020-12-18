/**
 * @param {string} s
 * @return {boolean}
 */
const pairCheck = function(s, e) {
    if (s === "\(" && e === "\)"){
        return true
    } else if (s === "\[" && e === "\]"){
        return true
    } else if (s === "\{" && e === "\}"){
        return true
    } else {
        return false
    }         
}
    
var isValid = function(s) {
    const arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(s.charAt(i));
    }
    console.log(arr)
    for (let k = 0; k < arr.length - 1; k++){
        if (pairCheck(arr[k], arr[k + 1])) {
            arr.splice(k, 2);
            k -= 2
        }
    }
    for (let j = 0; j < Math.floor(arr.length / 2); j++){
        if (pairCheck(arr[0], arr[arr.length])){
            arr.pop().shift();
        }
    }
    if (arr.length == 0){
        return true
    } else { 
    return false}
};
