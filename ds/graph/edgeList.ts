type TEdge ={from: string, to: string, weight: number}

export class EdgeList {
    public edges: Set<string>;

    constructor(){
        this.edges = new Set();
    }

    addEdge(from: string, to: string, weight?: number) {
        const edgeKey = `${from} -> ${to}:${weight ?? 0}`
        this.edges.add(edgeKey)
    }

    remvoeEdge(from: string, to: string){
        
    }

    getEdges(): TEdge[] {
        return Array.from(this.edges).map((edge) => {
            const [edgePart, weightPart] = edge.split(":");
            const [from, to]  = edgePart.split("->")

            return {from, to, weight: parseFloat(weightPart)}
        })
    }
}
// or


type Edge = [string, string];

export class GraphEdgeList2 {
  private edges: Set<string>;

  constructor() {
    this.edges = new Set();
  }

  addEdge(edge: Edge) {
    const edgeKey = JSON.stringify(edge); // Serialize tuple to ensure content-based uniqueness
    this.edges.add(edgeKey);
  }

  hasEdge(edge: Edge): boolean {
    const edgeKey = JSON.stringify(edge);
    return this.edges.has(edgeKey);
  }

  getEdges(): Edge[] {
    return Array.from(this.edges).map((edge) => JSON.parse(edge) as Edge);
  }
}

// or


export class GraphEdgeList {
    edges: { from: string; to: string; weight?: number }[];
  
    constructor() {
      this.edges = [];
    }
  
    addEdge(from: string, to: string, weight?: number) {
      const exists = this.edges.some(
        (edge) => edge.from === from && edge.to === to && edge.weight === weight
      );
      if (!exists) {
        this.edges.push({ from, to, weight });
      }
    }
  
    getEdges(): { from: string; to: string; weight?: number }[] {
      return this.edges;
    }
  }