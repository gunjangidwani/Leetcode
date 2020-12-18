/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leng = s.length - 1
    for (let i = 0; i < Number(leng/ 2); i++ ) {
        let front = s[i].charCodeAt(0)
        let back = s[leng - i ].charCodeAt(0)
        let dif = front - back
        s[i] = String.fromCharCode(front - dif)
        s[leng - i] = String.fromCharCode(back + dif)
    }         
    return s
};
