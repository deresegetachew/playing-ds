import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { isPalindrome } from "./palindrome.ts";

Deno.test('Palindrome: given an empty string it returns true',() => {
    const input = ''
    const expected = true

    const actual = isPalindrome(input)
    assertEquals(actual,expected)
})

Deno.test('Palindrome: given a string with a single character it returns true', () => {
    const input = 'A'
    const expected = true

    const actual = isPalindrome(input)
    assertEquals(actual,expected)
})

Deno.test('Palindrome:  given ABCBA it should return true', () => {
    const input = 'ABCBA'
    const expected = true

    const actual = isPalindrome(input)
    assertEquals(actual,expected)
})

Deno.test('Palindrome: given ABCCA it should return false', () => {
    const input = 'ABCCA'
    const expected = false

    const actual = isPalindrome(input)
    assertEquals(actual,expected)
})

Deno.test('Palindrome: given Kayak it should return true', () => {
    const input = 'kayak'
    const expected = true

    const actual = isPalindrome(input)
    assertEquals(actual,expected)
})