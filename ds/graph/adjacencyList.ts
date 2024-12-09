export class AdjacencyList {
    public adjacencyList: Map<string, string[]>;

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
        this.adjacencyList.get(n2)?.push(n1) // for undirected paths
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
}