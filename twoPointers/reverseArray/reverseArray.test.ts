import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import {reverseArray} from './reverseArray.ts'

Deno.test("reverse Array: given an empty array should return empty array", () => {
    const arr: number[] = [];
    const expected: number[] = [];
    const actual = reverseArray(arr);
    assertEquals(actual, expected);
});

Deno.test("reverse Array: given an array with a single element it returns the array", ()=>{
    const arr: number[] = [9];
    const expected: number[] = [9];

    const actual = reverseArray(arr);
    assertEquals(actual, expected)
})

Deno.test('reverse Array: give an array of [1,2] it returns [2,1]',() => {
    const arr: number[] = [1,2]
    const expected: number[] = [2,1]

    const actual = reverseArray(arr)
    assertEquals(actual,expected)
})

Deno.test('reverse Array: given [1,2,3,4,5,6] it returns [6,5,4,3,2,1]', () => {
    const arr: number[] = [1,2,3,4,5,6]
    const expected: number[] = [6,5,4,3,2,1]

    const actual = reverseArray(arr)
    assertEquals(actual, expected)
})