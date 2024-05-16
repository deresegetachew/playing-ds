import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import {bubbleSort} from './bubbleSort.ts'

Deno.test('Bubble Sort: given [] it returns the array empty array', () => {
    const input: number[] = []
    const expected: number[] = [];

    const actual = bubbleSort(input)

    assertEquals(expected,actual)

})

Deno.test('Bubble Sort: given an array with single element [1] it returns [1]', () => {
    const input: number[] = [1]
    const expected: number[] = [1];

    const actual = bubbleSort(input)

    assertEquals(expected, actual)
})

Deno.test('Bubble Sort: given [1,1] it returns [1,1]', () => {
    const input: number[] = [1,1]
    const expected: number[] = [1,1];

    const actual = bubbleSort(input)

    assertEquals(expected, actual)

})

Deno.test('Bubble Sort: given [2,1] it returns the array [1,2]', () => {
    const input: number[] = [2,1]
    const expected: number[] = [1,2];

    const actual = bubbleSort(input)

    assertEquals(expected, actual)
})

Deno.test('Bubble Sort: given [2,1,5] it returns the array [1,2,5]', () => {
    const input: number[] = [2,1,5]
    const expected: number[] = [1,2,5];

    const actual = bubbleSort(input)

    assertEquals(expected, actual)
})

Deno.test('Bubble Sort: given [5,1,5] it returns the array [1,5,5]', () => {
    const input: number[] = [5,1,5]
    const expected: number[] = [1,5,5];

    const actual = bubbleSort(input)

    assertEquals(expected, actual)
})


Deno.test.only('Bubble Sort: given [1,6,3,4,2,8,5,7] it returns the array [1,2,3,4,5,6,7,8]', () => {
    const input: number[] = [1,6,3,4,2,8,5,7]
    const expected: number[] = [1,2,3,4,5,6,7,8];

    const actual = bubbleSort(input)

    console.log(input)
    console.log(expected,`\n`, actual)

    assertEquals(expected, actual)
})