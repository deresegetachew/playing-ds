export class AdjacencyMatrix {
    public adjacencyMatrix: number[][];
    public size: number;
    private undirectedPath: boolean = false


    constructor(size: number){
        this.size = size
        this.adjacencyMatrix = Array.from({ length: size}, () => Array(size).fill(0))
    }

    addEdge(n1: number, n2: number, weight: number = 1) {
        this.adjacencyMatrix[n1][n2] = weight
        if(!this.undirectedPath) this.adjacencyMatrix[n2][n1] = weight // for undirected graph
    }

    removeAnEdge(n1: number, n2: number, weight: number = 0) {
        this.adjacencyMatrix[n1][n2] = weight
        this.adjacencyMatrix[n2][n1] = weight
    }


    getEdge(n1: number, n2: number) {
        return this.adjacencyMatrix[n1][n2]
    }

    traverseUsingDfs(node: number, visited = new Set<number>) {
        visited.add(node)
        console.log("visiting", node)

        for(let i = 0; i < this.adjacencyMatrix.length; i++){
            if(this.adjacencyMatrix[node][i] === 1 && !visited.has(i)){
                this.traverseUsingDfs(i, visited)
            }
        }
    }

    traverseUsingBfs(node: number) {
        const visited = new Set<number>()
        const queue: number[] = [node]

        while(queue.length > 1){
            const node = queue.shift()!

            if(!visited.has(node)){
                visited.add(node)
                console.log("visiting", node)

                for(let i = 0; i < this.adjacencyMatrix[node].length; i++){
                    if(this.adjacencyMatrix[node][i] === 1 && !visited.has(i))
                        queue.push(i) // add neighbor to the queue
                }
            }
        }
    }
}


const graph = new AdjacencyMatrix(5)

graph.addEdge(0,4,1)

console.log(graph.adjacencyMatrix)