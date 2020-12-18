/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    let counter = 0;
    let tArray = t.split("").sort();
    let sArray = s.split("").sort();
     for (let i = 0; i < t.length; i++) {

         if (tArray[i] !== sArray[i]){
             return false;
         }
         }
         return true;
};
