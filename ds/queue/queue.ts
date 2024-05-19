import { Node, SingleLinkedList } from '../singleLinkedList/singleLinkedList.ts';

export class Queue<T> {
    private container: SingleLinkedList<T>;
    private _size: number = 0;

    
    public get size() : number {
        this._size  = this.container.size
        return this._size
    }


    constructor(){
        this.container = new SingleLinkedList<T>()
    }

    enqueue(item: T): void {
        this.container.insertNodeAtHead(new Node(item))
    }

    deque(): T | null {
        return this.container.popLastNode()?.value ?? null
    }

    peek(): T | null {
        return this.container.head?.value || null
    }

}