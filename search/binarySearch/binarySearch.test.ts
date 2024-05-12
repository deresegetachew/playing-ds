import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import {binarySearchList} from './binarySearch.ts'

Deno.test('binarySearch: given sorted arrays [1,2,3,4,5,6] the element 2 exists in the array', () => {
    const input  = [1,2,3,4,5,6]
    const result  = binarySearchList(input,1)

    assertEquals(result,true)
})

Deno.test('binarySearch: given sorted arrays [1,2,3,4,5,6] the element 6 exists in the array', () => {
    const input  = [1,2,3,4,5,6]
    const result  = binarySearchList(input,6)

    assertEquals(result,true)
})

Deno.test('binarySearch: given sorted arrays [1,2,3,4,5,6] the element 2 exists in the array', () => {
    const input  = [1,2,3,4,5,6]
    const result  = binarySearchList(input,2)

    assertEquals(result,true)
})

Deno.test('binarySearch: given sorted arrays [1,2,3,4,5,6] the element -1 does not exist in the array', () => {
    const input  = [1,2,3,4,5,6]
    const result  = binarySearchList(input, -1)

    assertEquals(result,false)
})