

import {Node, SingleLinkedList} from '../singleLinkedList/singleLinkedList.ts'

export class Stack<T> {
    public container: SingleLinkedList<T>;
    public size: number

    constructor(){
        this.container = new SingleLinkedList<T>()
        this.size = 0
    }

    public push (item: T): Stack<T> {
        this.size++
        this.container.insertNodeAtHead(new Node(item))
        return this
    }

    public pop(): T | null {
        this.size--
        return this.container.popFirstNode()?.value ?? null
    }

    public peek(): T | null {
        return this.container.head?.value ?? null
    }
}