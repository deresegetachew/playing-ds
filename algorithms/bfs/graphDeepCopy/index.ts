export class Graph {
    constructor(private readonly graph: Map<number, number[]>){
    }

    // make a copy of a node and all its neighbors

    deepCopy(): Map<number, number[]> | undefined {
        const firstNodeInGraph = this.graph.keys().next().value
        if(this.graph.size)
            return this.traverseAndMakeDeepCopy(this.graph, firstNodeInGraph)
    }

    private traverseAndMakeDeepCopy(original_graph: Map<number, number[]>,node: number, ): Map<number, number[]> {
       
        const cloned_graph = new Map<number, number[]>()
        const queue: number[] = [node]

        while(queue.length > 0){
            const n = queue.shift()!

            if(!cloned_graph.has(n)){
                cloned_graph.set(n,[])
             
                for(const neighbor of original_graph.get(n) || []){
                    
                    cloned_graph.get(n)?.push(neighbor)

                    if(!cloned_graph.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
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
