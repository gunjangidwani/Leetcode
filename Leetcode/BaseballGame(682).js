/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let sum = [];
    for (let i = 0; i < ops.length; i++){
        switch(ops[i]){
            case "C":
                sum.pop();
                break;
            case "D":
                sum.push(sum[sum.length - 1] * 2);
                break;
            case "+":
                sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
                break;
            default:
                sum.push(Number(ops[i]))
        }
        console.log(sum)
};
    return sum.reduce((a, b) => (a + b));
}
