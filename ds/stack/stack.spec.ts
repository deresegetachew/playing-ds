import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { Stack } from "./stack.ts";

Deno.test("Stack: when pushing an element to a stack, the first element in the stack must be the last element pushed ", () => {
   
    const input = new Stack<number>()
    input.push(1)

    assertEquals(input.size, 1)
    assertEquals(input.peek(), 1)

})


Deno.test("Stack:when Poping an element in a stack the last element inserted must be the one that is poped", () => {
    const input  = new Stack<number>()
    input.push(1).push(2).push(3)

    assertEquals(input.peek(), 3)
    assertEquals(input.pop(), 3)
    assertEquals(input.peek(), 2)
})


Deno.test('Stack: poping an empty stack returns null', () => {
    const input  =  new Stack<number>()

    assertEquals(input.pop(), null)
})