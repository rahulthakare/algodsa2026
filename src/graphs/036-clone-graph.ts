/**
 * 133. Clone Graph (Medium)
 * 
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 * 
 * Each node contains a value and a list of its neighbors.
 * 
 * Example 1:
 *   1 --- 2
 *   |     |
 *   4 --- 3
 *   Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 *   Output: [[2,4],[1,3],[2,4],[1,3]]
 * 
 * Example 2:
 *   Input: adjList = [[]]
 *   Output: [[]] (single node with no neighbors)
 * 
 * Example 3:
 *   Input: adjList = []
 *   Output: [] (empty graph)
 * 
 * Time Complexity Goal: O(V + E)
 * Space Complexity Goal: O(V)
 */

// Graph Node definition
class GraphNode {
    val: number;
    neighbors: GraphNode[];

    constructor(val: number = 0, neighbors: GraphNode[] = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
    // Your solution here
    return null;
}

// Helper to create graph from adjacency list
function createGraph(adjList: number[][]): GraphNode | null {
    if (adjList.length === 0) return null;

    const nodes: GraphNode[] = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new GraphNode(i + 1));
    }

    for (let i = 0; i < adjList.length; i++) {
        for (const neighborIdx of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighborIdx - 1]);
        }
    }

    return nodes[0];
}

// Helper to convert graph to adjacency list
function graphToAdjList(node: GraphNode | null): number[][] {
    if (node === null) return [];

    const result: Map<number, number[]> = new Map();
    const visited = new Set<GraphNode>();
    const queue: GraphNode[] = [node];
    visited.add(node);

    while (queue.length > 0) {
        const curr = queue.shift()!;
        result.set(curr.val, curr.neighbors.map(n => n.val));

        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    // Convert to array sorted by node value
    const maxVal = Math.max(...result.keys());
    const adjList: number[][] = [];
    for (let i = 1; i <= maxVal; i++) {
        adjList.push(result.get(i) || []);
    }
    return adjList;
}

// Test cases
console.log("Test 1:", graphToAdjList(cloneGraph(createGraph([[2,4],[1,3],[2,4],[1,3]]))));
// Expected: [[2,4],[1,3],[2,4],[1,3]]

console.log("Test 2:", graphToAdjList(cloneGraph(createGraph([[]]))));
// Expected: [[]]

console.log("Test 3:", graphToAdjList(cloneGraph(createGraph([]))));
// Expected: []

const original = createGraph([[2],[1]]);
const cloned = cloneGraph(original);
console.log("Test 4 (is deep copy):", original !== cloned);
// Expected: true (different objects)

