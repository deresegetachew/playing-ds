import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";
import { removeNthLastNode } from "./removeNthNodeFromEndOfList.ts";
import { Node } from "./removeNthNodeFromEndOfList.ts";
import { LinkedList } from "./removeNthNodeFromEndOfList.ts";

Deno.test('removeNthNodeFromEndOfList: given a linked list with one element it returns the node it self', async () => {
    const LL = new LinkedList<number>()
    LL.createLinkedList([0])

    const expected = '0'
    removeNthLastNode<number>(LL.head,1)
    const actual = LL.display()

    assertEquals(actual,expected)
})


Deno.test('removeNthNodeFromEndOfList: given LL [23,28,10,5,67,39,70,28] removing the the 2nd node from the LL will return 23,28,10,5,67,39,28', ()=>{
    const LL = new LinkedList()
    LL.createLinkedList([23,28,10,5,67,39,70,28])
    removeNthLastNode(LL.head, 2)

    const expected = '23, 28, 10, 5, 67, 39, 28'

    const actual = LL.display()

    assertEquals(actual,expected)


})

Deno.test('removeNthNodeFromEndOfList: given LL [22,28] removing the 3rd node from the LL will return 23, 28', () => {
    const LL = new LinkedList()
    LL.createLinkedList([22,28])
    
    removeNthLastNode(LL.head, 3)

    const expected = '22, 28'
    const actual = LL.display()

    assertEquals(actual,expected)
})


Deno.test('removeNthNodeFromEndOfList: given LL [34,53,6,95,38,28,17,63,16,76] removing the 3rd node from LL will return 34,53,6,95,38,28,17,16,76', ()=>{
    const LL = new LinkedList()
    LL.createLinkedList([34,53,6,95,38,28,17,63,16,76])

    removeNthLastNode(LL.head, 3)

    const expected = '34, 53, 6, 95, 38, 28, 17, 16, 76'
    const actual = LL.display()

    assertEquals(actual,expected)
})


Deno.test('removeNthNodeFromEndOfList: given LL [1,2,3,4,5,6,7,8,9] removing the 1st node from the last LL will return 1, 2, 3, 4, 5, 6, 7, 8', ()=>{
    const LL = new LinkedList()
    LL.createLinkedList([1,2,3,4,5,6,7,8,9])

    removeNthLastNode(LL.head, 1)

    const expected = '1, 2, 3, 4, 5, 6, 7, 8'
    const actual = LL.display()

    assertEquals(actual,expected)
})


Deno.test('removeNthNodeFromEndOfList: given LL [69,8,49,106,116,112] removing the 6th node from the last LL will return 8, 49, 106, 116, 112', () => {
    const LL = new LinkedList()
    LL.createLinkedList([69,8,49,106,116,112])

    removeNthLastNode(LL.head, 6)

    const expected = '8, 49, 106, 116, 112'
    const actual = LL.display()

    assertEquals(actual, expected)
})