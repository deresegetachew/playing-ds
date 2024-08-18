import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { _internals } from "./permutationOfString.ts";
import { assertArrayIncludes } from "https://deno.land/std@0.220.0/assert/assert_array_includes.ts";

Deno.test('Permutations of a string: given an empty string it returns empty string', () => {
    const input = ""
    const expected = []

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected.length)
})


Deno.test('Permutations of a string: given a string with "a" it returns an array with the letter itself', () => {
    const input = "a"
    const expected = ["a"]

    const actual = _internals.permutation(input)
    console.log(actual)
    assertEquals(actual.length, expected.length)
})


Deno.test('Permutations of a string: given a string with "ab" it returns an array with the letter ["ab","ba"] itself', () => {
    const input = "ab"
    const expected = ["ab","ba"]

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected.length)
})


Deno.test('Permutations of a string: given a string with "abc" it returns an array with length of 3!/(2!X1!) factorial itself', () => {
    const input = "abc"
    const expected = factorial(3)

    const actual = _internals.permutation(input)
    console.log(actual)
    assertEquals(actual.length, expected)
    assertArrayIncludes(actual,["abc","cab","bac"])
})


Deno.test(`Permutations of a string: given a string with "derese" it returns an array of unique permutations with length of ${factorial(6) / (factorial(3))} factorial itself`, () => {
    const input = "derese"
    const expected = factorial(6) / (factorial(3))

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected)
})

Deno.test(`Permutations of a string: given a string with "abenzer" it returns an array of unique permutations with length of ${factorial(7) / (factorial(2))} factorial itself`, () => {
    const input = "abenzer"
    const expected = factorial(7) / (factorial(2))

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected)
})

Deno.test(`Permutations of a string: given a string with "betsega" it returns an array of unique permutations with length of ${factorial(7) / (factorial(2))} factorial itself`, () => {
    const input = "betsega"
    const expected = factorial(7) / (factorial(2))

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected)
})

Deno.test(`Permutations of a string: given a string with "amnen" it returns an array of unique permutations with length of ${factorial(5) / (factorial(2))} factorial itself`, () => {
    const input = "amnen"
    const expected = factorial(5) / (factorial(2))

    const actual = _internals.permutation(input)
    assertEquals(actual.length, expected)
})


function factorial(n: number): number {
    if(n === 0 || n === 1)
        return 1
    return n * factorial(n-1)
}
