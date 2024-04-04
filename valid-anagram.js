/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // let sArr = s.split("");
    // for (let element of t) {
    //     if (sArr.indexOf(element) == -1) {
    //         return false;
    //     }
    //     sArr.splice(sArr.indexOf(element), 1)
    // }
    // return sArr.length === 0;
    // return s.split('').sort().join('') == t.split('').sort().join('')
    let map = new Map()
    for(let ele of s){
        if(map.has(ele)){
            map.set(ele, map.get(ele)+1)
        } else {
            map.set(ele, 1)
        }
    }
    for(let ele of t){
        if(!map.has(ele) || map.get(ele)==0){
            return false
        }
        map.set(ele, map.get(ele)-1)
    }
    for(val of map){
        if(val[1]){
            return false;
        }
    }
    return true;
};


console.log(isAnagram('art', 'rat'))