export function twoCrystalBalls(throwTestResult: boolean[]): [number, number] {

    const jumpSize = Math.floor(Math.sqrt(throwTestResult.length))
    const floorCount = throwTestResult.length
    let iterationCount = 0
    
    let index = jumpSize
    
    for ( ;index < floorCount; index+=jumpSize) {
        iterationCount++;
        if(throwTestResult[index]){
            break;
        }  
    }

    const ballOneBreakPoint = index

    for (let k = ballOneBreakPoint - jumpSize; k < ballOneBreakPoint ; k++) {
        if(throwTestResult[k])
            return [k, iterationCount]
    }


    return [-1, iterationCount]
}