/**
 * Write a function crack that takes in the maximum length a site allows for a user's password and 
 * tries to find the password into an account by using recursive backtracking to attempt 
 * all possible passwords up to that length (inclusive). 
 * 
 * Assume you have access to the function bool login(string password) that returns true if a password is correct. 
 * You can also assume that the passwords are entirely alphabetic and casesensitive. 
 * You should return the correct password you find, or the empty string if you cannot find the password. 
 * You should return the empty string if the maximum length passed is 0 or throw an integer exception if the length is negative.

 */

export function crackPassword(length: number): string{
    if(length < 0)
        throw new Error("Password length can not be less than zero")

    return crackHelper("",length)

}

 function crackHelper(str: string, maxLength: number): string {

    // base case
    if(_internals.login(str)) return str
    if(str.length === maxLength) return ""

    // recursive case
    const alphabetArray = Array.from({length: 26}, (_,i) => String.fromCharCode(97 + i))

    for (const char of alphabetArray) {
         const found =  _internals.crackHelper(`${str}${char}`, maxLength)
         if(found) return found
         const found2 = _internals.crackHelper(`${str}${char.toUpperCase()}`, maxLength)
         if(found2) return found2
        }
    return ""
    }


export function login(password: string): boolean {
    console.log(`Login called with password ${password}`)
    return false
}


export const _internals = {login, crackPassword, crackHelper}