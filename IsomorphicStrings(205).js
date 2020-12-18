/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return helper(s) == helper(t)
};

const helper = (str) => {
    const strArr = str.split('');
    const arr = Array(str.length);
    const map = {}
    let count = 1    
        for (let i = 0; i < str.length; i++) {
        if (!map[strArr[i]]) {
            map[strArr[i]] = count;
            count += 1
        }   
            arr[i] = map[strArr[i]]
    }
    return arr.join('')
}