/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Map();
    const indegree = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
        indegree.set(i, 0);
    }
    for (let [d, s] of prerequisites) {
        indegree.set(d, indegree.get(d) + 1);
        graph.get(s).push(d);
    }
    const q = [];
    const ans = [];
    for (let [node, deg] of indegree) {
        if (deg == 0) {
            q.push(node);
        }
    }
    while (q.length) {
        let cur = q.shift();
        ans.push(cur);
        let neig = graph.get(cur);
        for (let n of neig) {
            let newIn = indegree.get(n) - 1;
            indegree.set(n, newIn);
            if (newIn == 0) {
                q.push(n);
            }
        }
    }
    if (ans.length !== numCourses) {
        return [];
    }
    return ans;
};
// @lc code=end


console.log(findOrder(2, [[1, 0]]));

