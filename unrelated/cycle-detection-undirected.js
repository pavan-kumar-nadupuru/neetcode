function detectCycleDfs(graph) {
    const visit = new Set();
    function dfs(node, parent) {
        visit.add(node);
        for (let nei of graph.get(node)) {
            if (nei == parent) continue;
            if (visit.has(nei)) return true;
            if (dfs(nei, node)) return true;
        }
        return false;
    }
    for (let [node, _] of graph) {
        if (!visit.has(node) && dfs(node, null)) return true;
    }
    return false;
}

function detectCycleBfs(graph) {
    const visit = new Set();
    function bfs(node) {
        let q = [];
        q.push([node, null]);
        visit.add(node);
        while (q.length) {
            let [cur, parent] = q.shift();
            for (let nei of graph.get(cur)) {
                if (nei == parent) continue;
                if (visit.has(nei)) return true;
                q.push([nei, cur]);
                visit.add(nei);
            }
        }
        return false;
    }
    for (let [node, _] of graph) {
        if (!visit.has(node) && bfs(node)) return true;
    }
    return false;
}


function makeAdjList(nodes, edges) {
    const adj = new Map();
    nodes.map(node => {
        adj.set(node, []);
    })
    for (let [s, d] of edges) {
        adj.get(s).push(d);
        adj.get(d).push(s);
    }
    return adj;
}

// Construct adjacency list
const nodes = [0, 1, 2, 3, 4, 5, 6]
const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    // [2, 4],
    [3, 4],
    // [3, 5],
    [4, 5],
    [5, 6],
    // [6, 2],
];
const adjList = makeAdjList(nodes, edges);
console.log(adjList);
console.log(detectCycleDfs(adjList));
console.log(detectCycleBfs(adjList));