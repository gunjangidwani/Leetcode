/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const stringArr = s.split('');
    let newStringArr = Array(stringArr.length);
    newStringArr[0] = 5;
    const max = stringArr.length - 1;
    for (let i = 0; i < stringArr.length; i++) {
        const posi = indices[i];
        newStringArr[posi] = stringArr[i];
    }
    return newStringArr.join('');
};