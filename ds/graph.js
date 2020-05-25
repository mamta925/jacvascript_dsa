class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    let vertexes = this.AdjList.keys();
    for (let vertex of vertexes) {
      let adj_list = this.AdjList.get(vertex);
      let conc = "";
      for (var adjVertex of adj_list) conc += adjVertex + " ";
      console.log(vertex + " -> " + conc);
    }
  }
  bfs(startingNode) {
    let visited = {};
    let q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);
    while (!q.isEmpty()) {
      let currentVertex = q.dequeue();
      console.log(currentVertex);
      let adjListOfCurrentNode = this.AdjList.get(currentVertex);
      for (let adjVertex in adjListOfCurrentNode) {
        var node = adjListOfCurrentNode[adjVertex];
        if (!visited[node]) {
          visited[node] = true;
          q.enqueue(node);
        }
      }
    }
  }
  dfs(startingNode) {
    let visited = {};
    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(currentNode, visited) {
    visited[currentNode] = true;
    console.log(currentNode);

    var adjListOfCurrentNode = this.AdjList.get(currentNode);

    for (let vertex in adjListOfCurrentNode) {
      let node = adjListOfCurrentNode[vertex];
      if (!visited[node]) {
        this.DFSUtil(node, visited);
      }
    }
  }
}

let makeGraph = new Graph(6);
let vertices = ["A", "B", "C", "D", "E", "F"];
for (let vertex = 0; vertex < vertices.length; vertex++) {
  makeGraph.addVertex(vertices[vertex]);
}
makeGraph.addEdge("A", "B");
makeGraph.addEdge("A", "D");
makeGraph.addEdge("A", "E");
makeGraph.addEdge("B", "C");
makeGraph.addEdge("D", "E");
makeGraph.addEdge("A", "F");
makeGraph.addEdge("E", "C");
makeGraph.printGraph();
// prints
// BFS
// A B D E C F
console.log("BFS");
makeGraph.dfs("A");
