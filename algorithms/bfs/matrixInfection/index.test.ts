import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { MatrixInfection } from "./index.ts";

// Deno.test('BFS: matrixInfection, given an empty matrix it should return -1', () => {
//     // Arrange
//     const input: number[][] = []
//     const expected = -1

//     // Act
//     const matrixInfection  = new MatrixInfection(input)
//     const actual = matrixInfection.timeToInfectUninfectedCells()

//     // Assert
//     assertEquals(actual, expected) 
// })


Deno.test('BFS: matrixInfection, given the following matrix [[1, 1, 1, 0], [0, 0, 2, 1], [0, 1, 1, 0]] it should return 3 seconds', () => {
    // Arrange
    const input: number[][] = [[1, 1, 1, 0], [0, 0, 2, 1], [0, 1, 1, 0]]
    const expected = 3

    // Act
    const matrixInfection  = new MatrixInfection(input)
    const actual = matrixInfection.timeToInfectUninfectedCells()

    // Assert
    assertEquals(actual, expected) 
})

