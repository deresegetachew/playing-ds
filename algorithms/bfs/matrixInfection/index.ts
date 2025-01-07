
type TCell = {
    row: number,
    col: number
}


export class MatrixInfection {

    private infectedCellQueue: TCell[] = []
    private unInfectedCells: TCell[] = [] 

    constructor(private readonly matrix: number[][]){
    }

    timeToInfectUninfectedCells(): number {

        if(this.matrix.length === 0 || this.matrix.find((m) => m.length === 0))
            return -1
        else{

           const rowLength = this.matrix.length
           const colLength = this.matrix[0].length
           
          

           let secondCount = 0;


           for(let row=0; row < rowLength; row++){
            for(let col=0; col < colLength; col++){
                if(this.isCellInfected(row, col)){
                    this.infectedCellQueue.push({row,col})
                }
                if(this.isCellUnInfected(row, col)) {
                    this.unInfectedCells.push({row, col})
                }
            }
           }

           while(this.infectedCellQueue.length  > 0 && this.unInfectedCells.length > 0){
            // number of nodes at this level, this is how we do level order traversal
            // we are taking a snapshot of the queue size at this point in time and thats how we do level order traversal
            const size = this.infectedCellQueue.length 

            secondCount++;

            // we are not even using index anywhere
            for (let index = 0; index < size; index++) {
                const {row, col} = this.infectedCellQueue.shift()!;

                this.infectAdjCells(row, col)
            }
           }
          
           if(this.unInfectedCells.length > 0) return -1
           else return secondCount
           
        }
    }

    private infectAdjCells(row: number, col: number){
        const adjCells = {
            up: {x: row, y: col-1},
            down: {x: row, y: col+1},
            left: {x: row-1, y: col},
            right: {x: row+1, y: col}
        }

            for(const [_, values] of Object.entries(adjCells)){
                if(this.isWithInMatrixBound(values.x, values.y)){
                    if(this.unInfectedCells.find((c) => c.row === values.x && c.col === values.y)){
                            this.infectedCellQueue.push({row: values.x, col: values.y})
                            this.unInfectedCells = this.unInfectedCells.filter((c) => !(c.row === values.x && c.col === values.y))
                    }
                }
            }
    }

    private isCellInfected(x: number, y: number){
        return this.matrix[x][y] === 2
    }

    private isCellUnInfected(x: number, y: number){
        return this.matrix[x][y] === 1
    }

    private isWithInMatrixBound(x: number, y: number){
        if(x < 0 || x >= this.matrix.length || y < 0 || y >  this.matrix[0].length)
            return false
        return true
    }
}