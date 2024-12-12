const graph = new Map<string, string[]>([
    ["A", ["B", "C"]],
    ["B", ["D"]],
    ["C", ["E"]],
    ["D", []],
    ["E", ["B"]],
  ]);
  
  function dfs(graph: Map<string, string[]>, start: string, visited = new Set<string>()) {
    visited.add(start);
    console.log("Visiting:", start); // Process the node
    
    for (const neighbor of graph.get(start) || []) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited); // Explore deeper
      }
    }
  }
  
//   dfs(graph, "B");



function bfs(graph: Map<string, string[]>, start: string) {
    const visited = new Set<string>();
    const queue: string[] = [start];
  
    while (queue.length > 0) {
      const node = queue.shift()!;
      if (!visited.has(node)) {
        visited.add(node);
        console.log("Visiting:", node); // Process the node
  
        for (const neighbor of graph.get(node) || []) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor); // Add neighbors to the queue
            console.log("queue", queue)
          }
        }
      }
    }
  }
  
//   bfs(graph, "A");

const adjMatrix: number[][]  = Array.from({length: 5}, () => Array(5).fill(0))
adjMatrix[0][3] = 1
adjMatrix[4][0] = 1

function adjMatrixDFS(matrix: number[][], node: number, visited = new Set<number>() ){
    visited.add(node)
    console.log("visiting", node)

    for(let i = 0; i < matrix.length; i++){
        if(matrix[node][i] === 1 && !visited.has(i)){
            adjMatrixDFS(matrix, i, visited)
        }
    }
}

function adjMatrixBFS(matrix: number[][], node: number) {
    const visited = new Set<number>();
    const queue: number[] = [node];

    while(queue.length > 0){
        const node = queue.shift()!;

        if(!visited.has(node)){
            visited.add(node)
            console.log("visiting", node)

            for(let i = 0; i < matrix[node].length; i++){
                if(matrix[node][i] === 1 && !visited.has(i))
                    queue.push(i) // add neighbor to the queue
            }
        }
    }
}


// console.log(adjMatrix)
// adjMatrixDFS(adjMatrix, 0)

// adjMatrixBFS(adjMatrix, 4)

