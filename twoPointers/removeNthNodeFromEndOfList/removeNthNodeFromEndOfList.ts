export class Node<T> {
    public data: T;
    public next: Node<T> | null;

    constructor(data:T, next = null) {
        this.data = data
        this.next = next;
    }
}

export class LinkedList<T> {
    public head: Node<T> | null;

    constructor(){
        this.head = null;
    }

    public insertNodeAtHead(node: Node<T>) {
        if(this.head != null){
            node.next = this.head
            this.head = node
        }
        this.head = node
    } 

    public createLinkedList (list: T[]){
        list.reverse().forEach((element) => {
            const newNode = new Node(element);
            this.insertNodeAtHead(newNode)
        })
    }
    
    public display(){
        let result = "", temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next as Node<T>;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
    }
}

export function removeNthLastNode<T>(head: Node<T> | null, n: number) {
    let leftPointer = head;
    let rightPointer = head
    let count = n

    if(!head || !head.next) return head;

    while(count > 0){
        rightPointer = rightPointer?.next ? rightPointer.next : rightPointer
        count--
    }

    
    while(rightPointer?.next != null && rightPointer != leftPointer && leftPointer){
        leftPointer = leftPointer.next
        rightPointer = rightPointer.next
    }

    if(head == leftPointer   && rightPointer?.next == null)
        head = head.next
    else
        leftPointer!.next = leftPointer?.next?.next ?? null
        
    return head;
}