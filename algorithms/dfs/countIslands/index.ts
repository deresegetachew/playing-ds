
export class IslandCounter{

    islandCount: number = 0;
    
    private rowLength: number = 0
    private colLength: number = 0
    private visitedLand = new Set<string>()

    constructor(private readonly map: number[][]){}


    public countIslands(): number {

        if(this.map.length === 0 || this.map.every(row => row.length === 0))
            return 0

        this.colLength = this.map[0].length
        this.rowLength = this.map.length
        this.visitedLand = new Set<string>()

        for(let i = 0; i < this.rowLength; i++){
            for(let j = 0; j < this.colLength; j++){
                const cell = this.map[i][j]

                if(cell === 1 && !this.visitedLand.has(`${i}_${j}`)){
                    this.visitedLand.add(`${i}_${j}`)

                   const countAdjLands = this.checkAdjCellAreIsLands(i,j, this.visitedLand)
                   if(countAdjLands > 0){
                    this.islandCount++
                   }
                }
            }
        }

        return this.islandCount;
    }


    private checkAdjCellAreIsLands(i: number, j: number, visitedLand: Set<string>){
         // its a land
        // go through adjacent cells and mark them as visited
        const adjDir = {
            up: {x:i, y:-1+j},
            down: {x:i, y: 1+j},
            left: {x:-1+i, y:j},
            right: {x:1+i, y: j}
        }
        let countOfAdjLands = 0

        for (const [_, value] of Object.entries(adjDir)) {
            if(this.isCellWithInBound(value.x, value.y)){

                if(this.map[value.x][value.y] === 1 && !visitedLand.has(`${value.x}_${value.y}`)){
                    countOfAdjLands++
                    this.visitedLand.add(`${value.x}_${value.y}`)
                    this.checkAdjCellAreIsLands(value.x, value.y, visitedLand)
                }
            }
        }

        return countOfAdjLands
    }

    private isCellWithInBound(rowIndex: number, colIndex: number): boolean {
        if(colIndex < 0 || colIndex >= this.map[0].length || rowIndex < 0 || rowIndex >= this.map.length) return false
        return true
    }

}