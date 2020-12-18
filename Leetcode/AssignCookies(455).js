/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let counter = 0;
  let start = 0;
  s.sort((a, b) => {return a - b;});
  g.sort((a, b) => {return a - b;}).forEach(itemS => {
    for (let i = start; i < s.length; i++) {
      if (itemS <= s[i]) {
        counter++;
        start = i + 1;
        break;
      }
    }
  });
  return counter;
};
