// Space complexity: O(n)
// time complexity: O(n)

// export function reverseArray(input : number[]): number[]{

//     if(input.length  <= 1)
//         return input;
//     else{
//         let p1 = 0
//         let p2 = input.length -1
//         const result = []
    
//         while(p1 < p2) {
//             result.push(input[p2])
//             p2--;

//         }
//         result.push(input[p1])
//         return result
//     }

// }


// Space complexity: O(1)
// time complexity: O(n)

export function reverseArray(input : number[]): number[]{

    if(input.length  <= 1)
        return input;
    else{
        let p1 = 0
        let p2 = input.length -1
      
    
        while(p1 < p2) {
            const temp = input[p1]
            input[p1]  = input[p2]
            input[p2] = temp
            
            p1++;
            p2--;

        }
        return input
    }

}

