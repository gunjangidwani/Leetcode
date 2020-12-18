/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vo = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    let vowels = []
    for (let i = 0; i < s.length; i++) {
        if (vo.indexOf(s[i]) !== -1) {
            vowels.push(s[i])
            }
        }
    
    const newStr = s.split('').map((item) => {
        if (vo.indexOf(item) !== -1) {
            return vowels.pop();
        } else {
            return item;
        }
    }).join('')
    return newStr
    
};