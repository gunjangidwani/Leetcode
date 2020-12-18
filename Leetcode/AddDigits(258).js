/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let kari = num.toString().split("").reduce((a,b) => Number(a) + Number(b));;
  let digi1 = Math.floor(kari / 10) + (kari % 10);
  if (digi1 < 10){
    return digi1
    }   else {
        let kari = Number(digi1.toString().split("").reduce((a,b) => a + b));
        console.log(Math.floor(kari / 10) + (kari % 10))
    return Math.floor(kari / 10) + (kari % 10);
}
};
