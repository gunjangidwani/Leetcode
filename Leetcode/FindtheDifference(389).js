/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const helperFindTheDifference = (s, t) => {
    if (t.length == 1) {
        return t
    }
    if (s.length == 1 && t.length == 2) {
        return t[0] == s ? t[1] : t[0]
    }
    const halfLength = Math.floor(s.length / 2) 
    const beforeS = s.slice(0, halfLength)
    const beforeT = t.slice(0, halfLength)
    const afterS = s.slice(halfLength)
    const afterT = t.slice(halfLength)

    if (beforeS == beforeT) {
        console.log("after is different")
        console.log(afterS, afterT)
        return helperFindTheDifference(afterS, afterT)
    } else {
        console.log("before is different")
        console.log(beforeS, beforeT)
        return helperFindTheDifference(beforeS, beforeT)
    }
}

var findTheDifference = function(s, t) {
    const sortedS = s.split("").sort().join('')
    const sortedT = t.split("").sort().join('')

    return helperFindTheDifference(sortedS, sortedT)
};
