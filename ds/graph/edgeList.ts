type TEdge ={from: string, to: string, weight: number}

export class EdgeList {
    public edges: Set<string>;

    constructor(){
        this.edges = new Set();
    }

    addEdge(from: string, to: string, weight?: number) {
        const edgeKey = `${from}->${to}:${weight ?? 0}`
        this.edges.add(edgeKey)
    }

    removeEdge(from: string, to: string, weight?: number){
        const edgeKey = `${from}->${to}:${weight ?? 0}`
        this.edges.delete(edgeKey)
    }

    getEdges(): TEdge[] {
        return Array.from(this.edges).map((edge) => {
            const [edgePart, weightPart] = edge.split(":");
            const [from, to]  = edgePart.split("->")

            return {from, to, weight: parseFloat(weightPart)}
        })
    }

    hasEdge(from: string, to: string, weight: number){
        return this.edges.has(`${from}->${to}:${weight}`)
    }

    traverseUsingDFS(node:string, visited = new Set<string>()){
        visited.add(node)
        console.log("visiting", node)

        for (const element of this.edges) {
            const [edgePart, _weightPart] = element.split(":");
            const [from, to]  = edgePart.split("->")

            if(from === node && !visited.has(to)){
                this.traverseUsingDFS(to, visited)
            }
        }
    }

    traverseUsingBFS(node:string){
        const visited = new Set<string>()
        const queue = [node]

        while(queue.length > 0){
            const node = queue.shift()!
            if(!visited.has(node)){

                visited.add(node)
                console.log("Visiting", node)

                for (const edge of this.edges) {
                    const [edgePart, _weightPart] = edge.split(":")
                    const [from, to] = edgePart.split("->")

                    if(from === node && !visited.has(to)){
                        queue.push(to)
                    }
                }
            }
        }
    }

}
// or


// type Edge = [string, string];

// export class GraphEdgeList2 {
//   private edges: Set<string>;

//   constructor() {
//     this.edges = new Set();
//   }

//   addEdge(edge: Edge) {
//     const edgeKey = JSON.stringify(edge); // Serialize tuple to ensure content-based uniqueness
//     this.edges.add(edgeKey);
//   }

//   hasEdge(edge: Edge): boolean {
//     const edgeKey = JSON.stringify(edge);
//     return this.edges.has(edgeKey);
//   }

//   getEdges(): Edge[] {
//     return Array.from(this.edges).map((edge) => JSON.parse(edge) as Edge);
//   }
// }

// or


// export class GraphEdgeList {
//     edges: { from: string; to: string; weight?: number }[];
  
//     constructor() {
//       this.edges = [];
//     }
  
//     addEdge(from: string, to: string, weight?: number) {
//       const exists = this.edges.some(
//         (edge) => edge.from === from && edge.to === to && edge.weight === weight
//       );
//       if (!exists) {
//         this.edges.push({ from, to, weight });
//       }
//     }
  
//     getEdges(): { from: string; to: string; weight?: number }[] {
//       return this.edges;
//     }
//   }


const edgeList = new EdgeList()
edgeList.addEdge('A', 'B')
edgeList.addEdge('A', 'C')
edgeList.addEdge('B', 'D')
edgeList.addEdge('C', 'E')
edgeList.addEdge('E', 'B')

console.log(edgeList.getEdges())

// edgeList.traverseUsingDFS('A')

edgeList.traverseUsingBFS("A")