export function multiply(a: number, b: number): number {
    return sum(a,b)
}

function sum(a: number, count: number): number{
    // base case count > 0
    if(count === 0)
        return 0
    else if(count > 0)
        return a + sum(a, count-1)
    else
        return sum(a, count+1) - a

}