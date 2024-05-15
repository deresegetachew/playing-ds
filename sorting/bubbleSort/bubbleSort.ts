export function bubbleSort (arr: number[]) : number[] {
    for(let i = 0; i < arr.length; i++ ){
        for(let k = 0; k < arr.length - i; k++){
            if(arr[k] > arr[k+1]){
                const temp = arr[k+1]
                arr[k+1] = arr[k]
                arr[k] = temp
            }
            console.log(`inner arr k:${k} k+1:${k+1}`, arr)
        }
    }
    console.log("outer arr", arr)

    return arr
}

//[2,1]