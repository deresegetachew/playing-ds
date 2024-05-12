export function LinearSearch(arr: number[], val: number) {
    for(let i = 0; i <  arr.length; i++){
        if(arr[i] === val)
            return true
    }

    return false
}