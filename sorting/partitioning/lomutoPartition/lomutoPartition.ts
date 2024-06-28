/**

The Lomuto partition algorithm rearranges an array around a chosen pivot element.
The goal is to place elements less than the pivot to its left and elements 
greater than the pivot to its right.


Lomuto's algorithm typically chooses the last element of the sub-array 
(the part of the array being partitioned) as the pivot by default.

We use two pointers:
  * `i`: Initially positioned before the first element (i = 0). 

  * `j`: Starts from the first element (j = 0) and iterates through the array.

During the partitioning process:
1. Iterate through the array using the `j` pointer.
2. If the current element `arr[j]` is less than or equal to the pivot (`arr[high]`),
   swap `arr[i]` and `arr[j]`. This places the element less than or equal 
   to the pivot to the left side (beyond the current `i` position).

   - Increment `i` to point to the new boundary between the "less than" and 
     "unknown" regions.
3. If the current element is greater than the pivot, we simply leave it in place 
   and continue iterating with `j`.
4. After the loop completes, swap the pivot element (`arr[high]`) with `arr[i]`. 
   This places the pivot in its final sorted position.
5. The function returns the new index (`i`) of the pivot element, which now 
   separates the left (less than) and right (greater than) sub-arrays.

**Key Points:**
* Lomuto's partition is an in-place partitioning algorithm, meaning it rearranges the original array.
* It utilizes one-way scanning with the `j` pointer.
* The `i` pointer tracks the separation point between elements less than or equal 
  to the pivot and the unprocessed part of the array.
    
 */

  import {EalgorithmName, Partition} from '../type.ts'

  export class LomutoPartition implements Partition {
    public name: EalgorithmName = EalgorithmName.Lomuto
    partitionArray(arr: number[], low: number, high: number): number {
     

    const pivot = arr[high]
    let pi =low

    for(let j = low; j < high; j++) {
        if(arr[j] <= pivot){
            [arr[pi], arr[j]] = [arr[j], arr[pi]]
            pi++;
        }
    }

    // swap pivot with arr[i]
    [arr[pi],arr[high]] = [arr[high], arr[pi]]

    // return the position of the pivot
    return pi;
    }

  }


