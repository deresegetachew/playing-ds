import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { _internals } from "./canMakeSum.ts";

Deno.test('Backtracking: CanMakeSum: given an empty array of values can make sum will return false', ()=>{
    const input: number[] = []
    const target = 5
    const expected = false

    const actual = _internals.canMakeSum(input, target)
    assertEquals(actual,expected)
})


Deno.test('Backtracking: CanMakeSum: given an [1,1,2,3,5] array of values and a target sum of 9 can make sum will return true', ()=>{
    const input: number[] = [1,1,2,3,5]
    const target = 9
    const expected = true

    const actual = _internals.canMakeSum(input, target)
    assertEquals(actual,expected)
})

Deno.test('Backtracking: CanMakeSum: given an [1,4,5,6] array of values and a target sum of 8 can make sum will return false', ()=>{
    const input: number[] = [1,4,5,6]
    const target = 8
    const expected = false

    const actual = _internals.canMakeSum(input, target)
    assertEquals(actual,expected)
})