// pivot
//  [3,8,5,1,9,2]
import {EalgorithmName, Partition} from '../partitioning/type.ts'

/**
 * quick sort is two things
 * 1st partitioning  and then recurssively calling the sort function on the partitioned array the array

 *
 * quick sorting is iteratively running partition algorithm
 * until the whole array is sorted
 */


export class QuickSort {

    constructor(private partitioningStrategy: Partition){
    }

     
    public sort (arr: number[], low:number=0, high: number= arr.length-1): void{

        if(low < high){

            const pivotIndex = this.partitioningStrategy.partitionArray(arr, low, high)

            if(this.partitioningStrategy.name === EalgorithmName.Lomuto)
                this.sort(arr, low, pivotIndex - 1)
            else if(this.partitioningStrategy.name === EalgorithmName.Hoare)
                this.sort(arr,low, pivotIndex)

            this.sort(arr, pivotIndex+1, high )
        }
    }



}



