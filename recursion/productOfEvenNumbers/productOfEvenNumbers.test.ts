import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { productOfEventNumbers } from "./productOfEventNumbers.ts";

Deno.test('Recursive:Product of even numbers in a list: given [1,2,3,4,5,6,7] it should return  48', () => {
    const input = [1,2,3,4,5,6,7]
    const expected = 48

    const actual = productOfEventNumbers(input)
    assertEquals(expected,actual);
})

Deno.test('Recursive:Product of even numbers in a list: given [] it should return  0', () => {
    const input: number[] = []
    const expected = 0

    const actual = productOfEventNumbers(input)
    assertEquals(expected,actual);
})

Deno.test('Recursive:Product of even numbers in a list: given [1] it should return  1', () => {
    const input: number[] = [1]
    const expected = 1

    const actual = productOfEventNumbers(input)
    assertEquals(expected,actual);
})