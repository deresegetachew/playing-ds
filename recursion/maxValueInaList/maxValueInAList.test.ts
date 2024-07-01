import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { maxValueInAList } from "./maxValueInAList.ts";


Deno.test('Recursive: Max Value in a List, given [], should return null as the max value', () => {
    const input: number[]  = []
    const expected = null

    const actual = maxValueInAList(input)
    assertEquals(expected,actual)
})

Deno.test('Recursive: Max Value in a List, given [4], should return 4 as the max value', () => {
    const input  = [4]
    const expected = 4

    const actual = maxValueInAList(input)
    assertEquals(expected,actual)
})

Deno.test('Recursive: Max Value in a List, given [4,1], should return 4 as the max value', () => {
    const input  = [4,1]
    const expected = 4

    const actual = maxValueInAList(input)
    assertEquals(expected,actual)
})

Deno.test('Recursive: Max Value in a List, given [4,1,3,2,0,1,8], should return 8 as the max value', () => {
    const input  = [4,1,3,2,0,1,8]
    const expected = 8

    const actual = maxValueInAList(input)
    assertEquals(expected,actual)
})