/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // [1,2,0,3,4]
    // let lProduct = Array(nums.length)
    // let rProduct = Array(nums.length)
    // for(let i=0; i<nums.length; i++){
    //     if(i==0){
    //         lProduct[i] = 1
    //     } else {
    //         lProduct[i] = lProduct[i-1] * nums[i-1]
    //     }
    //     var revI = nums.length - i - 1
    //     if(revI == nums.length - 1){
    //         rProduct[revI] = 1
    //     } else {
    //         rProduct[revI] = rProduct[revI + 1] * nums[revI+1]
    //     }
    // }
    // let res = [];
    // for(let i=0; i<lProduct.length && i<rProduct.length; i++){
    //     res.push(lProduct[i]*rProduct[i])
    // }
    // return res

    let prefix = 1, postFix = 1, res=[];
    for(let i=0; i<nums.length; i++){
        res.push(prefix);
        prefix *= nums[i];
    }
    for(let i=nums.length-1; i>-1; i--){
        res[i]*=postFix;
        postFix*=nums[i]
    }
    return res;
};

console.log(productExceptSelf([1,2,0,3,4]))