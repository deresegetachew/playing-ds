import { assertEquals } from 'https://deno.land/std@0.220.0/assert/assert_equals.ts';
import {Queue} from './queue.ts'

Deno.test("Queue: adding an element to a queue puts it at the top of the queue and increases the queue size", () => {
    const input = 3

    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)

    queue.enqueue(input)

    assertEquals(queue.peek(), input)
    assertEquals(queue.size, 3)


})

Deno.test("Queue: poping out from the queue removes the item added first and reduces the queue size", () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    
    const value = queue.deque()

    assertEquals(value, 1)
    assertEquals(queue.peek(),2)
    assertEquals(queue.size,1)
})

Deno.test("Queue: dequeuing an empty queue returns null",() => {
    const queue = new Queue()

    const value = queue.deque()

    assertEquals(value, null)
    assertEquals(queue.size, 0)

})