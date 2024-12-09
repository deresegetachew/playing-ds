export class AdjacencyMatrix {
    public adjacencyMatrix: number[][];
    public size: number;


    constructor(size: number){
        this.size = size
        this.adjacencyMatrix = Array.from({ length: size}, () => Array(size).fill(0))
    }

    addEdge(n1: number, n2: number, weight: number = 1) {
        this.adjacencyMatrix[n1][n2] = weight
        this.adjacencyMatrix[n2][n1] = weight // for undirected graph
    }

    removeAnEdge(n1: number, n2: number, weight: number = 0) {
        this.adjacencyMatrix[n1][n2] = weight
        this.adjacencyMatrix[n2][n1] = weight
    }


    getEdge(n1: number, n2: number) {
        return this.adjacencyMatrix[n1][n2]
    }
}