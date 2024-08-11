function canMakeSum(values: number[], target:number): boolean {
    if(!values.length)
        return false
    else 
    return checkSum(values, target)
}

// because we are not using loops and we don't have indexes
// we modify the array in place 

function checkSum(choices: number[], target: number): boolean {
    if(target === 0)
        return true
    else if(choices.length === 0 || target < 0) 
        return false;

    const chosen_val =  choices[0]

    choices = choices.slice(0+1) // removing the chosen element
    
    if(checkSum(choices,target) || checkSum(choices,target - chosen_val)){
        choices.unshift(chosen_val)
        return true
    }
    else {
        choices.unshift(chosen_val)
        return false
    }
}


export const _internals = {
    canMakeSum
}