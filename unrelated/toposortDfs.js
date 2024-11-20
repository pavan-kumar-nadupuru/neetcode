function topoSortDfs(graph) {
    const visit = new Set();
    const path = new Set();
    const ans = [];
    function dfs(node) {
        visit.add(node);
        path.add(node);
        for (let nei of graph.get(node)) {
            if (path.has(nei)) return true;
            if (visit.has(nei)) continue;
            if (dfs(nei)) return true;
        }
        path.delete(node);
        ans.unshift(node);
        return false;
    }
    for (let [node, _] of graph) {
        if (!visit.has(node)) {
            if (dfs(node)) {
                return [];
            }
        }
    }
    return ans;
}

function makeAdjList(nodes, edges) {
    const adj = new Map();
    for (let node of nodes) {
        adj.set(node, []);
    }
    for (let [s, d] of edges) {
        adj.get(s).push(d);
    }
    return adj;
}
const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [3, 7],
    [4, 5],
    [7, 5],
    [5, 6],
    [8, 2],
    [8, 9],
    [9, 10],
    // [10, 8]
]

const graph = makeAdjList(nodes, edges);
console.log(topoSortDfs(graph));
