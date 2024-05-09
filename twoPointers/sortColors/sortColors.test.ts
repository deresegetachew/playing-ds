import { assertEquals } from 'https://deno.land/std@0.220.0/assert/assert_equals.ts';
import {sortColors} from './sortColors.ts'

Deno.test('SortColors: given an empty arry its returns empty array', () => {
    const arr: number[] = []
    const expected: number[] = []

    const actual = sortColors(arr)
    assertEquals(actual,expected)
})


Deno.test('SortColors: given an [1] its returns empty array [1]', () => {
    const arr: number[] = [1]
    const expected: number[] = [1]

    const actual = sortColors(arr)
    assertEquals(actual,expected)
})


Deno.test('SortColors: given [1,0,2,1,2,2] it returns [0,1,1,2,2,2,]', () => {
    const arr: number[] = [1,0,2,1,2,2]
    const expected: number[] = [0,1,1,2,2,2]

    const actual = sortColors(arr)
    assertEquals(actual, expected)
})

Deno.test('SortColors: given [0,1,0] it returns [0,0,1]',() => {
    const arr:number[]  = [0,1,0]
    const expected: number[] = [0,0,1]

    const actual = sortColors(arr);
    assertEquals(actual,expected)
})


Deno.test('SortColors: given [2,2] it returns [2,2]',() => {
    const arr:number[]  = [2,2]
    const expected: number[] = [2,2]

    const actual = sortColors(arr);
    assertEquals(actual,expected)
})

Deno.test('SortColors: given [1,1,0,2] it returns [1,1,0,2]',() => {
    const arr:number[]  = [1,1,0,2]
    const expected: number[] = [0,1,1,2]

    const actual = sortColors(arr);
    assertEquals(actual,expected)
})


Deno.test('SortColors: given [2,1,1,0,0] it returns [0,0,1,1,2]',() => {
    const arr:number[]  = [2,1,1,0,0]
    const expected: number[] = [0,0,1,1,2]
    const actual = sortColors(arr);
    assertEquals(actual,expected)
})


Deno.test('SortColors: given [2,1,0] it returns [0,1,2]',() => {
    const arr:number[]  = [2,1,0]
    const expected: number[] = [0,1,2]

    const actual = sortColors(arr);
    assertEquals(actual,expected)
})


Deno.test('SortColors: given [0,1,2] it returns [0,1,2]',() => {
    const arr:number[]  = [0,1,2]
    const expected: number[] = [0,1,2]

    const actual = sortColors(arr);
    assertEquals(actual,expected)
})

