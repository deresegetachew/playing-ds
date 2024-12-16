export class Graph {
    constructor(private readonly graph: Map<number, number[]>){
    }

    // make a copy of a node and all its neighbors

    deepCopy(): Map<number, number[]> | undefined {
        const firstNodeInGraph = this.graph.keys().next().value
        if(this.graph.size)
            return this.traverseAndMakeDeepCopy(this.graph, firstNodeInGraph , new Map<number, number[]>())
    }

    private traverseAndMakeDeepCopy(original_graph: Map<number, number[]>,node: number, cloned_graph: Map<number, number[]>): Map<number, number[]> {
        // if it is not already in cloned_graph add it

        if(!cloned_graph.has(node)){
            cloned_graph.set(node, [])
            const neighbors = original_graph.get(node)

            for (const neighbor of neighbors || [])
                  {
                cloned_graph.get(node)?.push(neighbor)
                this.traverseAndMakeDeepCopy(original_graph, neighbor, cloned_graph)
            }
        }

        return cloned_graph
    }
   
}




const graph = new Map<number, number[]>()

graph.set(0,[1,2])
graph.set(1,[0,2])
graph.set(2,[0,1,3])
graph.set(3,[2])

const g = new Graph(graph)
const g_copy = g.deepCopy()


console.log("graph copy", g_copy)
console.log("original graph", graph)


g_copy!.set(1, [])
g_copy!.set(0,[])
g_copy!.set(2, [])

console.log("====Modifying graph copy=====")



console.log("graph copy", g_copy)
console.log("original graph", graph)
