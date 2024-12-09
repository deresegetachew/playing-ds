import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { _internals } from "./shrinkableWord.ts";

Deno.test('Shrinkable word: given an empty string it returns false', async () => {
    const input = ""
    const expected = false

    const actual = await _internals.isShrinkable(input)
    assertEquals(actual,expected)
})

Deno.test('Shrinkable word: given a single letter A it returns true', async () => {
    const input = "A"
    const expected = true

    const actual = await _internals.isShrinkable(input)
    assertEquals(actual,expected)
})


Deno.test('Shrinkable word: given a single letter X it returns false', async () => {
    const input = "X"
    const expected = false

    const actual = await _internals.isShrinkable(input)
    assertEquals(actual,expected)
})

Deno.test('Shrinkable word: given a word Apple it returns false', async () => {
    const input = "Apple"
    const expected = false

    const actual = await _internals.isShrinkable(input)
    assertEquals(actual,expected)
})


Deno.test.only('Shrinkable word: given a word Cusp it returns true', async () => {
    const input = "cart"
    const expected = true

    const actual = await _internals.isShrinkable(input)
    assertEquals(actual,expected)
})