export function bubbleSort (arr: number[]) : number[] {
    for(let i = 0; i < arr.length - i; i++ ){
        if(arr[i] > arr[i+1]){
            const temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
        }
    }
    return arr

}