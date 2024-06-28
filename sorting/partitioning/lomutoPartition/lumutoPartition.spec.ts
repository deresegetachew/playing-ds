import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { lomutoPartition } from "./lomutoPartition.ts";

Deno.test('Lumuto Partition: array is correctly partitioned and returns correct pivot indeox', () => {
    const input = [3,8,5,1,9,2]
    const expected = [1,2,5,3,9,8]

    const pi = lomutoPartition(input,0,input.length-1)
    assertEquals(input, expected)
    assertEquals(pi,1)
})

Deno.test('Lumuto Partition: given an [3,3,3,3,3,3] with all elements similar pivot index should be 5',() => {
    const input = [3,3,3,3,3,3]
    
    const pi = lomutoPartition(input,0,input.length-1)
    assertEquals(5,pi)
})