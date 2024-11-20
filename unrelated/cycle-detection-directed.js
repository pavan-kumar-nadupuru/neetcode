function detectCycleDfs(graph) {
    const visit = new Set();
    const path = new Set();
    function dfs(node) {
        visit.add(node);
        path.add(node);
        for (let nei of graph.get(node)) {
            if (visit.has(nei)) {
                if (path.has(nei)) {
                    return true;
                }
            } else {
                if (dfs(nei)) {
                    return true;
                }
            }
        }
        path.delete(node);
        return false;
    }
    for (let [node, _] of graph) {
        if (!visit.has(node) && dfs(node)) {
            return true;
        }
    }
    return false;
}

function detectCycleBfs(graph) {
    const visit = new Set();
    function bfs(node) {
        const q = [];
        q.push(node);
        visit.add(node);
        while (q.length) {
            let cur = q.shift();
            for (let nei of graph.get(cur)) {
                if (visit.has(nei)) return true;
                q.push(nei);
                visit.add(nei);
            }
        }
        return false;
    }
    for (let [node, _] of graph) {
        if (!visit.has(node) && bfs(node)) {
            return true;
        }
    }
    return false;
}


function toppoSort(graph) {

}







function makeAdjList(nodes, edges) {
    let adjList = new Map();
    for (let node of nodes) {
        adjList.set(node, []);
    }
    for (let [s, d] of edges) {
        adjList.get(s).push(d);
    }
    return adjList;
}


// const nodes = [0, 1, 2, 3, 4, 5, 6]
// const edges = [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [2, 4],
//     [3, 4],
//     [3, 5],
//     [4, 5],
//     [5, 6],
//     // [6, 2],
// ];
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
]
const graph = makeAdjList(nodes, edges);
console.log(graph);
console.log(detectCycleDfs(graph));
console.log(detectCycleBfs(graph));