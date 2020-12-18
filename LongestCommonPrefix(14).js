/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 1) {
        return "";
    } else if (strs.length == 1) {
        return strs[0];
    } else {
        let answers = "";
        for (let i = 1; i <= strs[0].length; i++) {
            let word = strs[0].slice(0, i);
            if (strs.filter(item => item.slice(0, i) == word).length == strs.length) {
                if (word.length > answers.length)
                    answers = word;
            }
        }
        if (answers.length == 0) {
            return "";
        } else {
            return answers;
        }
    }
}