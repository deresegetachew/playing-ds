// Space complexity: O(1)
// time complexity: O(n)


export function isPalindrome(input: string): boolean {
   
    return checkIfPalindrome(input,0, input.length-1)


}

function checkIfPalindrome(str: string, i: number, j: number): boolean  {
    // base case
    if(i >= j)
        return true
    if(str[i] !== str[j])
        return false

    //recursive case , choose, explore, un-choose

    return checkIfPalindrome(str, i+1, j-1)
}