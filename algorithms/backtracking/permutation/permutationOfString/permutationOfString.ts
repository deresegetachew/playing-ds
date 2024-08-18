function permutation(str: string): string[]{

    const result: Set<string>= new Set(_internals.permutationHelper('',str))
    return Array.from(result);
}


function permutationHelper(selected: string, options: string): string[] {
    const result: string[] = []
    if(options.length === 0){
        return selected ? [selected]: []
    }
    
    for (const [index,value] of options.split('').entries()) {
        result.push(..._internals.permutationHelper(`${selected}${value}`, `${options.substring(0, index)}${options.substring(index+1)}`))
    }
    return result

}

export const _internals = {permutation, permutationHelper}


