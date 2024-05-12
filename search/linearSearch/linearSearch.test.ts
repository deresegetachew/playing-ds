import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { LinearSearch } from "./linearSearch.ts";

Deno.test('Linear Search:',()=> {
   

    const input  = [1, 32, 41, 64, 78, 80, 90, 99, 420, 4337, 59420];

    assertEquals(LinearSearch(input, 32),true)
    assertEquals(LinearSearch(input, 1336),false)
    assertEquals(LinearSearch(input, 59420),true)
    assertEquals(LinearSearch(input, 69421),false)
    assertEquals(LinearSearch(input, 1), true)
    assertEquals(LinearSearch(input, 0),false)
})