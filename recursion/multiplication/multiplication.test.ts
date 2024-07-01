import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { multiply } from "./multipliction.ts";

Deno.test('Recursive: Multiplication: The multiplication of a by n  is the same as the summation of the number a n times ', () => {
    const a = 5
    const b = 10
    const expected = 50

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})

Deno.test('Recursive: Multiplication: The multiplication of 5 by 1  is 5 ', () => {
    const a = 5
    const b = 1
    const expected = 5

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})

Deno.test('Recursive: Multiplication: The multiplication of 5 by 0  is 0 ', () => {
    const a = 5
    const b = 0
    const expected = 0

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})

Deno.test('Recursive: Multiplication: The multiplication of 0 by 5  is 0 ', () => {
    const a = 0
    const b = 5
    const expected = 0

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})


Deno.test('Recursive: Multiplication: The multiplication of -1 by -1  is 1', () => {
    const a = -1
    const b = -1
    const expected = 1

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})


Deno.test('Recursive: Multiplication: The multiplication of -1 by 1  is -1', () => {
    const a = -1
    const b = 1
    const expected = -1

    const actual = multiply(a,b)
    assertEquals(actual,expected)
})