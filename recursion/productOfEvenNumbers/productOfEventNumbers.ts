export function productOfEventNumbers(input: number[]): number{
    if(input.length)
        return multiplyEvenNumbers(input, input.length -1)
    else
        return 0
}

function multiplyEvenNumbers(input: number[], count: number): number{
    if(count === 0)
        return 1
    else
    {
        if(input[count] % 2 === 0)
            return input[count] * multiplyEvenNumbers(input, count-1)
        else
            return multiplyEvenNumbers(input, count-1)
    }
}
