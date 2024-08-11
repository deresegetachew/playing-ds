import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.220.0/assert/assert_throws.ts";
import {_internals} from "./crackpassword.ts";
import {
    assertSpyCall,
    assertSpyCalls,
    returnsNext,
    stub,
    
  } from "jsr:@std/testing@0.225.3/mock";

Deno.test('Backtracking: CrackPassword: given zero as the length of the password should return empty string', ()=>{
    const input = 0
    const expected = ""

    const actual = _internals.crackPassword(input);

    assertEquals(actual,expected)
})


Deno.test('Backtracking: CrackPassword: given -ve number as the length of the password should throw an error', ()=>{
    const input = -1
    const expected = ""


    assertThrows(() => {
        _internals.crackPassword(input);
    },Error, "Password length can not be less than zero")
})

Deno.test('Backtracking: CrackPassword: given a site allows a max of 3 chars for password and the password is letter a,  as the password, crack password returns the password', () => {
    const input = 3;
    const expected = "a";
   
    const fakeLoginStub = stub(_internals,"login", (password: string) => {
        return password === 'a'
    })


    try{
        const actual =  _internals.crackPassword(input);
    
        assertSpyCall(fakeLoginStub,0,{args:[''] })
        assertEquals(actual, expected);
    }   
    finally{
        fakeLoginStub.restore()
    }
})

Deno.test('Backtracking: CrackPassword: given a site allows a max of 3 chars for password and the password is letter zz,  as the password, crack password returns the password', () => {
    const input = 3;
    const expected = "zz";
   
    const fakeLoginStub = stub(_internals,"login", (password: string) => {
        return password === 'zz'
    })


    try{
        console.time("CrackPassword Execution Time")

        const actual =  _internals.crackPassword(input);
    
        console.timeEnd("CrackPassword Execution Time")

        assertSpyCall(fakeLoginStub,0,{args:[''] })
        assertEquals(actual, expected);
    }   
    finally{
        fakeLoginStub.restore()
    }
})


