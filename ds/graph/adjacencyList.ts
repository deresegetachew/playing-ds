export class AdjacencyList {
    public adjacencyList: Map<string, string[]>;
    public undirectedPath: boolean = false

    constructor(){
        this.adjacencyList = new Map()
    }

    addNode(node: string) {
        if(!this.adjacencyList.has(node)){
            this.adjacencyList.set(node, [])
        }
    }

    removeNode(node: string) {
        this.adjacencyList.delete(node)
        this.adjacencyList.forEach((value, key) => {
            this.adjacencyList.set(key, value.filter((v) => v !== node))
        })
    }

    addEdge(n1: string, n2: string) {
        this.adjacencyList.get(n1)?.push(n2)
        this.undirectedPath && this.adjacencyList.get(n2)?.push(n1) // for undirected paths
    }

    removeEdge(n1: string, n2: string) {
        this.adjacencyList.set(
            n1,
            this.adjacencyList.get(n1)?.filter((neighbor) => neighbor !== n2) || []
          );
          this.adjacencyList.set(
            n2,
            this.adjacencyList.get(n2)?.filter((neighbor) => neighbor !== n1) || []
          );
    }

    getNeighbors(node: string) {
        this.adjacencyList.get(node) || []
    }

    traverseUsingDfs(node: string, visited = new Set<string>()) {
        visited.add(node)
        console.log("visiting:", node)

        for (const neighbor of this.adjacencyList.get(node) || []) {
            if(!visited.has(neighbor)){
                this.traverseUsingDfs(neighbor, visited)
            }
        }
    }

    traverseUsingBFS(node: string){
        const visited = new Set<string>()
        const queue: string[] = [node];

        while(queue.length > 0){
            const n = queue.shift()!
            if(!visited.has(n)){
                visited.add(n)
                console.log("visiting:", n)

                for (const neighbor of this.adjacencyList.get(n) || []) {
                    if(!visited.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
            }
        }
    }
}


const graph = new AdjacencyList()
graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addNode("D")

graph.addEdge("A", "B")
graph.addEdge("A", "C")

graph.addEdge("B", "D")
graph.addEdge("C", "E")

graph.addEdge("E", "B")

console.log("====== Graph ======")
console.log(graph.adjacencyList)
console.log("====== DFS ======")
graph.traverseUsingBFS('B')
console.log("====== BFS ======")
graph.traverseUsingBFS('B')


