// Space complexity: O(1)
// time complexity: O(n)

export function isPalindrome(input: string): boolean {

    if(!input)
        return true
    else{
        let p1 = 0;
        let p2 = input.length -1

        while(p1 < p2){
            if(input[p1].toLocaleLowerCase() !== input[p2].toLocaleLowerCase())
                return false
            p1++
            p2--
        }

        return true
        
    }

}