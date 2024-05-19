export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class SingleLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  public insertNodeAtHead(node: Node<T>) {
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;

      this.head.next = this.tail;
      this.tail.next = null;
    }

    this.size++
    return this;
  }

  public insertNodeAtTail(node: Node<T>) {
    if(this.tail){
      this.tail.next = node
    }
    else
    {
      this.head = node
      this.tail = node
    }

  }

  public popFirstNode() {
    if(!this.head) return null;
    const firstNode = {...this.head} as Node<T>;
    this.head = this.head.next;
    this.size--;
    return firstNode;
  }

  public popLastNode() {
    if (!this.head) {
      return null;
    }

    let previous = this.head;
    let current = this.head?.next;

    while (current?.next) {
      previous = current;
      current = current.next;
    }

    this.tail = { ...previous, next: null } as Node<T>;
    this.size--;

    return current;
  }
}
