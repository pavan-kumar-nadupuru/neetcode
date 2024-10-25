/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    console.log(n)
    let total = 0;
    let root = n**0.5;
    if(root * root == n){
        total += 1
    } else {
        total = total + 1 + numSquares(n - Math.floor(root)**2)
    }
    return total
};


console.log(numSquares(12))


List<int> list = new List<int> {1, 2, 3, 4, 5};
int[] array = list.ToArray();