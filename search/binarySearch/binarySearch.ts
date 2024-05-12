export function binarySearchList(sortedArr: number[], val: number): boolean {
    let loIndex = 0
    let highIndex = sortedArr.length

    while(loIndex < highIndex){
    
        const middleIndex = Math.floor(loIndex + ((highIndex - loIndex) / 2))
        const middleValue = sortedArr[middleIndex]

        if(val === middleValue)
            return true
        else
        {
            if(val > middleValue){
                loIndex = middleIndex+1
            }
            else
             highIndex = middleIndex
        }
    }
    
    return false;
} 

// [lo, hi)