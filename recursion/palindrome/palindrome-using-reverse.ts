// Space complexity: O(1)
// time complexity: O(n)

export function isPalindrome(input: string): boolean {
   
  
    if(input === reverse(input,0, input.length-1) || input.length <= 1)
        return true

    return false

}

function reverse(str: string, i: number, j: number): string  {
    // base case
    if(i >= j)
        return str

    //recursive case , choose, explore, un-choose
    const arr: string[] = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]]


    return reverse(arr.join(''), i+1, j-1)
}

