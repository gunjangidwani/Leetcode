/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let kari1 = s.split("").reverse().join("").split(" ").reverse()
    let reverse = []
    while (kari1.length > 1) {
        reverse.push(kari1.shift() + " ");
    }
    reverse.push(kari1)
    return reverse.join("")
};
