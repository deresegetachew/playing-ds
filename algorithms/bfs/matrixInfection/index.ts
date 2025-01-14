
type TCell = {row:number, col: number}
type TAdjCells = {
    top:TCell
    right:TCell
    bottom: TCell
    left: TCell
}

export class MatrixInfection {

    private  colCount: number = 0;
    private  rowCount: number = 0;
    private secondCount: number = 0

    private infectedCellsQueue: TCell[] = []
    private unInfectedCells: TCell[] = []



    constructor(private readonly matrix: number[][]){
    }

    timeToInfectUninfectedCells(){
        if(this.matrix.length === 0 || this.matrix.find((m) => m.length === 0))
            return -1

        this.rowCount = this.matrix.length
        this.colCount = this.matrix[0].length


        for(let i=0; i<this.rowCount; i++){
            for(let j=0; j < this.colCount; j++){
                const cell = {row:i,col:j}
                if(this.isCellInfected(cell))
                    this.infectedCellsQueue.push(cell)

                if(this.isCellUninfected(cell))
                    this.unInfectedCells.push(cell)
            }
        }


        while(this.infectedCellsQueue.length > 0 && this.unInfectedCells.length > 0){

            //for how many nodes are we gone do bfs
            // number of nodes at this level, this is how we do level order traversal
            // we are taking a snapshot of the queue size at this point in time and thats how we do level order traversal
            const size = this.infectedCellsQueue.length;
            this.secondCount++

            // we are not even using index anywhere
            for(let index=0; index < size; index++){
                const cell = this.infectedCellsQueue.shift()!
                this.infectAdjCells(cell)
            }   
        }
        

        if(this.unInfectedCells.length > 0) return -1
        return this.secondCount


    }

    infectAdjCells(cell: TCell) {
        // bfs
        const adjCells:TAdjCells = {
            top: { col: cell.col+1, row: cell.row},
            right: {col: cell.col, row: cell.row+1},
            bottom: {col: cell.col-1, row: cell.row},
            left: {col: cell.col, row: cell.row-1}
        }

        for (const [_, value] of Object.entries(adjCells)) {
            if(this.isWithInBound(value)){
                if(this.isCellUninfected(value)){
                    this.infectedCellsQueue.push(value)
                    this.unInfectedCells = this.unInfectedCells.filter((c) => !(c.row === value.row && c.col === value.col))
                }
            }
        }



    }

    isCellInfected({row, col}: TCell) {
        return this.matrix[row][col] === 2
    }

    isCellUninfected({row, col}: TCell) {
        return this.matrix[row][col] === 1
    }

    isWithInBound({row, col}: TCell) {
        return !(row < 0 || row >= this.matrix.length || col < 0 || col >= this.matrix[0].length)
    }

}

// steps:

// first find infected cell

// find adjacent cells and infect

// find adj of adj cells and infect those as well

// level order traversal and count the levels as seconds 

// BFS of adj cells
