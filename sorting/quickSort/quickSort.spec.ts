import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { QuickSort } from "./quickSort.ts";
import { HoarePartitionFactory } from "../partitioning/Partition.factory.ts";
import { LomutoParitionFactory } from "../partitioning/Partition.factory.ts";


Deno.test('QuickSort using HoarePartition: given an empty array quick sort function sorts it correct using HoarePartition', () => {
    const input: number[] = []
    // const input = [4,3,2,1]
    const expected: number[] = []

    const partitioning = new HoarePartitionFactory().createPartition()
    const quick_sort = new QuickSort(partitioning)

     quick_sort.sort(input)


    assertEquals(expected, input)
})

Deno.test('QuickSort using HoarePartition: given an unsorted array quick sort function sorts it correct using HoarePartition', () => {
    const input = [5,6,120,1,3,7,49]
    const expected = [1,3,5,6,7,49,120]

    const partitioning = new HoarePartitionFactory().createPartition()
    const quick_sort = new QuickSort(partitioning)

     quick_sort.sort(input)



    assertEquals(expected, input)
})

Deno.test('QuickSort using LomutoPartition: given an empty array quick sort function sorts it correct using LomutoPartition', () => {
    const input: number[] = []
    // const input = [4,3,2,1]
    const expected: number[] = []

    const partitioning = new LomutoParitionFactory().createPartition()
    const quick_sort = new QuickSort(partitioning)

     quick_sort.sort(input)


    assertEquals(expected, input)
})



Deno.test('QuickSort: given an unsorted array quick sort function sorts it correct using LomutoPartition', () => {
    const input = [5,6,120,1,3,7,49]
    // const input = [4,3,2,1]
    const expected = [1,3,5,6,7,49,120]

    const partitioning = new LomutoParitionFactory().createPartition()
    const quick_sort = new QuickSort(partitioning)

     quick_sort.sort(input)


    assertEquals(expected, input)
})


