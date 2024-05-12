import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { twoCrystalBalls } from "./twoCrystallBalls.ts";

Deno.test('TwoCrystalBalls: Given two crystal balls and a 100 floor building if the crystal ball breaks from the 65 floor we should figure out the answer in only square root of 65 steps', async () => {
    const input = new Array(100).fill(false,0,64).fill(true,65);

    const expectedFloorItBreaks = 65
    const expectedIterationItTook  = 7

    const data = twoCrystalBalls(input)

    assertEquals(data,[expectedFloorItBreaks,expectedIterationItTook])

})

Deno.test('TwoCrystalBalls: Given two crystal balls and a 10 floor building if the crystal ball doesnt break from  all floors we should figure out the answer in only square root of 10 step', async () => {
    const input = new Array(10).fill(false);

    const expectedFloorItBreaks = -1
    const expectedIterationItTook  = Math.floor(Math.sqrt(10))

    const data = twoCrystalBalls(input)

    assertEquals(data,[expectedFloorItBreaks,expectedIterationItTook])

})


// 65 floor
// sqrt 100   = 10
// 1. 10
// 2. 10
// 3. 10
// 4. 10
// 5. 10
// 6. 10
// 7. 10