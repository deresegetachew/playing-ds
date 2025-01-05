import { assertEquals } from 'https://deno.land/std@0.220.0/assert/assert_equals.ts';
import {IslandCounter} from './index.ts'

Deno.test('Graphs: Count Islands: given an empty graph it counts 0  islands', () => {
    // Arrange
    const input = [[]]
    const expected = 0 

    // Act
    const islandCounter  = new IslandCounter(input)
    const actual = islandCounter.countIslands()

    // Assert
    assertEquals(actual, expected)
})


Deno.test('Graphs: Count Islands: given a map with 7 land and 2 islands it counts 2  islands', () => {
    // Arrange
    const input = [[1,1,0,0], [1,1,0,0], [0,0,1,1], [0,0,0,1]];
    const expected = 2; 

    // Act
    const islandCounter  = new IslandCounter(input)
    const actual = islandCounter.countIslands()

    // Assert
    assertEquals(actual, expected)
})


Deno.test('Graphs: Count Islands: given a map with 8 land and 3 islands it counts 3 islands', () => {
    // Arrange
    const input = [[1,1,0,0], [1,1,0,0], [0,0,1,1], [1,1,0,0]];
    const expected = 3; 

    // Act
    const islandCounter  = new IslandCounter(input)
    const actual = islandCounter.countIslands()

    // Assert
    assertEquals(actual, expected)
})