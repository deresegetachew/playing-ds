export function maxValueInAList(value: number[]): number | null{
    if(value.length)
    return maxValue(value,0,value.length-1)

    return null
}

function maxValue(input: number[], i: number, j: number): number{
    
    if(i === j)
        return input[i]
    else{
        const mid = Math.floor(i + ((j - i)/2))
        return Math.max(
            maxValue(input,i, mid),
            maxValue(input,mid+1, j)
        )
    }

}