
/**
 * 
 * Algorithm:

    Choose the first element as the pivot.
    Initialize two pointers: i at the beginning and j at the end of the array.
    Move i right until an element greater than the pivot is found.
    Move j left until an element less than the pivot is found.
  
    If i is greater than or equal to j, return j.
    otherwise , swap element at i with element at j

    the goal of this algorithm is to swap until i > j
*/

import { EalgorithmName, Partition } from "../type.ts";

export class HoarePartition implements Partition {
  public name: EalgorithmName = EalgorithmName.Hoare
  partitionArray(arr: number[], low: number, high: number): number {
      const pivot = arr[low]

    let i = low - 1
    let j = high + 1
    

    while(true){
        
         // Increment i while arr[i] is less than the pivot
       do{
        i++
       }
       while (arr[i] < pivot)

         // Decrement j while arr[j] is greater than the pivot
        do{
            j--
        }
        while (arr[j] > pivot)
        
        if(i < j)
           [arr[i], arr[j]] = [arr[j], arr[i]]
        else
            return j    
       

    }
  }
}