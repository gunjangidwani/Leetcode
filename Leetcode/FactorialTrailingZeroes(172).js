/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    if (n < 5) {return 0}
    return Math.floor(n / 5) + trailingZeroes(n / 5);
};