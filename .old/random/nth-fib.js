const dp = new Map();
dp.set(1, 1);
dp.set(2, 1);
function nthFib(n) {
    if (dp.has(n)) return dp.get(n);
    const nth = nthFib(n - 1) + nthFib(n - 2);
    dp.set(n, nth);
    return nth;

}

// for (let i = 1; i < 1000; i++) {
const i = 2 ** 12;
const before = Date.now();
const temp = nthFib(i);
const after = Date.now()
console.log(`Number: ${i}, Value: ${temp} Time : ${after - before}`);
// }

/*
When we are repeating same sub problems again and again we memoize it
*/